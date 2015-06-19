module.exports = function (grunt) {  
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);  
    // Project configuration.  
    grunt.initConfig({  
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: {
                files: [{
                    src: [
                        'css',
                        'font',
                        'fonts',
                        'js',
                        'tmp'
                    ]
                }]
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'tmp/equipo.css': 'src/scss/equipo.scss'
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1,
                keepSpecialComments: 0
            },
            target: {
                files: {
                    'css/equipo.css': [
                        'bower_components/materialize/dist/css/materialize.css',
                        'tmp/equipo.css'
                    ]
                }
            }
        },
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        flatten: false,
                        filter: 'isFile',
                        cwd: 'bower_components/materialize/dist/font/',
                        dest: 'font/',
                        src: [
                            '**'
                        ]
                    }
                ]
            }
        },
        uglify: {
            options: {
                sourceMap: false
              },
              build: {
                files: [{
                    'js/librerias.js': [
                        'bower_components/jquery/dist/jquery.js',
                        'bower_components/materialize/dist/js/materialize.js',
                        'bower_components/color-thief/dist/color-thief.min.js'
                    ],
                    'js/equipo.js': [
                        'src/js/cv.js',
                        'src/js/responsive.js',
                        'src/js/util.js',
                        'src/js/ready.js'
                    ]
                }]
              }
        },
        watch: {
            sass: {
              files: ['src/scss/**/*.scss'],
              tasks: ['sass','cssmin']
            }, 
            uglify: {
              files: 'src/js/**/*.js',
              tasks: ['uglify']
            }
          }
    });  
    // Default task.  
    grunt.registerTask('default', ['clean','uglify', 'sass', 'cssmin', 'copy']);
};