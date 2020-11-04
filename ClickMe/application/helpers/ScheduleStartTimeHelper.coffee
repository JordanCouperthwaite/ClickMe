class RojobaCo.ScheduleStartTime
    STORAGE_KEY = 'ScheduleStartTime'

    @getStartTime: (date) ->
        startTimes = []
        startTimesStorageString = localStorage.getItem STORAGE_KEY
        if startTimesStorageString isnt null
            startTimes = JSON.parse(startTimesStorageString)
        
        for startTime in startTimes
            if startTime.Date is date
                return startTime.Time

        newStartTime = {
            Date: date
            Time: '07:45'
        }
        
        startTimes.push newStartTime
        localStorage.setItem STORAGE_KEY, JSON.stringify(startTimes)

        return newStartTime.Time

    @updateStartTime: (date, time) ->
        startTimes = []
        startTimesStorageString = localStorage.getItem STORAGE_KEY
        if startTimesStorageString isnt null
            startTimes = JSON.parse(startTimesStorageString)
        
        for startTime in startTimes
            if startTime.Date is date
                startTime.Time = time
                localStorage.setItem STORAGE_KEY, JSON.stringify(startTimes)

        return
