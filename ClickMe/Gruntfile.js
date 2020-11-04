module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        handlebars: {
            compile: {
                options: {
                    namespace: 'RojobaCo.Templates',
                    processName: function (filePath) {
                        var pieces = filePath.split('/');
                        return pieces[pieces.length - 1].split('.')[0];
                    }
                },
                files: {
                    'views.js': ['templates/*.hbs', 'application/views/*.hbs']
                }
            }
        },
        coffee: {
            compile: {
                options: { bare: false },
                files: {
                    '<%= pkg.name %>.js': ['<%= pkg.name %>.coffee']
                }
            },
            plugin: {
                options: { bare: false },
                files: {
                    'scripts/rojobaco-plugins-<%= pkg.version %>.js': ['<%= pkg.name %>.coffee']
                }
            }
        },
        concat: {
            compile: {
                src: [
                    'plugin/BasePlugin.coffee',
                    'plugin/tablegrid/*.coffee',
                    'plugin/searchselect/*.coffee',
                    'plugin/timeslider/*.coffee',
                    'plugin/svgplonk/*.coffee',
                    'plugin/calendargrid/*.coffee',
                    'plugin/router/route.coffee',
                    'plugin/dropdown/*.coffee',
                    'plugin/bootstrap-searchselect.coffee',
                    'plugin/bootstrap-tablegrid.coffee',
                    'plugin/bootstrap-calendargrid.coffee',
                    'plugin/bootstrap-timeslider.coffee',
                    'plugin/bootstrap-svgplonk.coffee',
                    'plugin/bootstrap-dropdown.coffee',
                    'application/models/*.coffee',
                    'application/helpers/*.coffee',
                    'application/logic/*.coffee',
                    'application/App.coffee'
                ],
                dest: '<%= pkg.name %>.coffee'
            },
            plugin:{
                src: [
                    'plugin/BasePlugin.coffee',
                    'plugin/tablegrid/*.coffee',
                    'plugin/searchselect/*.coffee',
                    'plugin/timeslider/*.coffee',
                    'plugin/svgplonk/*.coffee',
                    'plugin/calendargrid/*.coffee',
                    'plugin/router/route.coffee',
                    'plugin/dropdown/*.coffee',
                    'plugin/bootstrap-searchselect.coffee',
                    'plugin/bootstrap-tablegrid.coffee',
                    'plugin/bootstrap-timeslider.coffee',
                    'plugin/bootstrap-svgplonk.coffee',
                    'plugin/bootstrap-calendargrid.coffee',
                    'plugin/bootstrap-dropdown.coffee',
                ],
                dest: '<%= pkg.name %>.coffee'
            },
			compilejs: {
                options: {
                    banner: "/*\n" +
                        "<%= pkg.name %> v<%= pkg.version %>\n" +
                        "Copyright (c) <%= (new Date()).getFullYear() %> <%= pkg.author.name %> All rights reserved.\n" +
                        "*/\n\n'use strict';\n\RojobaCo = window.RojobaCo = {};\n$ = jQuery;\n\n"
                },
                src: [
                    'views.js',
                    'templates/b4-handlebars.js',
                    '<%= pkg.name %>.js'
                ],
                dest: 'scripts/<%= pkg.name %>-<%= pkg.version %>.js'
            },
            pluginjs: {
                options: {
                     banner: "/*\n" +
                        "<%= pkg.name %> v<%= pkg.version %>\n" +
                        "Copyright (c) <%= (new Date()).getFullYear() %> <%= pkg.author.name %> All rights reserved.\n" +
                        "*/\n\n'use strict';\n\RojobaCo = window.RojobaCo = {};\n$ = jQuery;\n\n"
                },
                src: [
                    'scripts/rojobaco-plugins-<%= pkg.version %>.js'
                ],
                dest: 'scripts/rojobaco-plugins-<%= pkg.version %>.js'
            },
        },
        jshint: {
            files: ['Gruntfile.js', 'scripts/rojobaco-plugins-<%= pkg.version %>.js'],
            options: {
                globals: {
                    jQuery: true
                },
                expr: true
            }
        },
        uglify: {
            my_target: {
                files: [
                    {
                        src: '<%= pkg.name %>-<%= pkg.version %>.js',
                        dest: '<%= pkg.name %>-<%= pkg.version %>.min.js'
                    }
                ]
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'css/rojobaco-plugins-<%= pkg.version %>.min.css': ['plugin/rojobaco-plugins-<%= pkg.version %>.css']
                }
            }
        },
        clean: {
            compile: ['views.js', '<%= pkg.name %>.coffee', '<%= pkg.name %>.js']
        },
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['css/site.css', 'plugin/rojobaco-plugins-0.1.0.css'],
            },
            js: {
                files: ['scripts/<%= pkg.name %>-<%= pkg.version %>.js'],
            },
            html: {
                files: ['index.html'],
            }
        },        
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: '.',
                    hostname: 'localhost',
                    protocol: 'http',
                    livereload: true,
                    open: true,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('compile', ['handlebars', 'concat:compile', 'coffee:compile', 'concat:compilejs', 'cssmin', 'clean:compile']);
    grunt.registerTask('plugin', ['concat:plugin', 'coffee:plugin', 'concat:pluginjs', 'clean:compile']);
    grunt.registerTask('css', ['cssmin']);
    grunt.registerTask('release', ['jshint', 'uglify', 'cssmin']);
    grunt.registerTask('server', ['connect','watch']);
};
