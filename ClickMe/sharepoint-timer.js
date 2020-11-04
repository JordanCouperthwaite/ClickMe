function syncScheduledJobs() {
    setTimeout(syncScheduledJobs, 40000);
    postMessage('Start SyncTimer-' + (Date.now() + 40000));
    var BWA_DB = 'bwa_db';
    var SCHEDULED_JOB_STORE = 'ScheduledJob';
    var API_URI = 'http://localhost:58950/';
    var API_KEY = 'J8jKv6srQQ0R0Q4DH03see44h1lED1Ec';

    var openRequest = indexedDB.open(BWA_DB, 1);

    openRequest.onupgradeneeded = function(e) {
        var db = e.target.result;
        console.log('worker db onupgradeneeded');
        if (!db.objectStoreNames.contains(SCHEDULED_JOB_STORE)) {
            db.createObjectStore(SCHEDULED_JOB_STORE, { keyPath: 'JobNumber' })
        }
    }

    openRequest.onsuccess = function(e) {
        console.log('worker db onsuccess');
        var db = e.target.result;
        var tx = db.transaction(SCHEDULED_JOB_STORE, 'readwrite');
        var store = tx.objectStore(SCHEDULED_JOB_STORE);

        var all = store.getAll()

        all.onsuccess = function(e) {
            var jobs = e.target.result;
            var uri = API_URI + 'api/schedule';

            if (jobs.length > 0)
            {
                var jobsToSynch = [];
                var d = new Date();
                var now = d.getTime(); 
                for (var i=0; i < jobs.length; i++) {
                    var job = jobs[i];
                    if (job.IsDirty) {
                        job.SyncStamp = now;
                        jobsToSynch.push(job);
                    }
                }

                if (jobsToSynch.length > 0) {
                    var request = new XMLHttpRequest();
                    postMessage('In-Progress');
                    request.open('POST', uri, false);
                    request.onerror = function(e) {
                        alert('Error syncing!');
                    };
                    request.setRequestHeader('Content-type', 'application/json');
                    request.setRequestHeader('Authorization', 'Bearer ' + API_KEY);
                    request.onreadystatechange = function() {
                        console.log(request.responseText);
                        responseJson = JSON.parse(request.responseText);
                        if(responseJson.Success)
                        {
                            postMessage('Success');
                        }
                        if (request.readyState === 4 && request.status === 200) {
                            var indx = 0;
                            
                            var updateJob = function(indx) {
                                var job = jobsToSynch[indx];
                                var fetchRequest = store.get(job.JobNumber);
                                fetchRequest.onsuccess = function(e) {
                                    if (e.target.result) {
                                        job.IsDirty = false;
                                        store.put(job);
                                    }
                                }
                                
                                indx++;
                                if (indx < jobsToSynch.length) {
                                    updateJob(indx);
                                }
                            }
                                
                            updateJob(indx);
                            console.log('Jobs synched successfully!');
                        }
                    }
                  
                    request.send(JSON.stringify(jobsToSynch));
                }
                else {
                    console.log('No jobs to sync');
                }
            }
        }
        
        tx.oncomplete = function() {
            db.close();
        }
    }
        
    openRequest.onerror = function (e) {
        console.log('worker db error!');
        console.log(e);
    }
}

setTimeout(syncScheduledJobs, 40000);
postMessage('Start SyncTimer-' + (Date.now() + 40000));
