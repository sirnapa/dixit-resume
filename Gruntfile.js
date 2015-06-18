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
                        'bower_components/font-awesome/css/font-awesome.css',
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
                        flatten: true,
                        filter: 'isFile',
                        cwd: 'bower_components/',
                        dest: 'fonts/',
                        src: [
                            'font-awesome/fonts/**'
                        ]
                    },{
                        expand: true,
                        flatten: true,
                        filter: 'isFile',
                        cwd: 'bower_components/',
                        dest: 'font/',
                        src: [
                            'materialize/dist/font/**'
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
                        'bower_components/materialize/dist/js/materialize.js'
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
              files: ['dev/scss/**/*.scss'],
              tasks: ['sass','cssmin']
            }, 
            uglify: {
              files: 'dev/js/**/*.js',
              tasks: ['uglify']
            }
          }
    });  
    // Default task.  
    grunt.registerTask('default', ['clean','uglify', 'sass', 'cssmin', 'copy']);
};