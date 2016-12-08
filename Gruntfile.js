module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed Chill Out Hostel Inc. */\n',
        // Task configuration
        useminPrepare: {
            html: 'index-build.html',
            options: {
                dest: '.'
            }
        },
        usemin: {
            html: 'index.html'
        },
        copy: {
            main: {
                expand: true,
                filter: 'isFile',
                src: 'index-build.html',
                dest: '.',
                rename: function() {
                    return 'index.html';
                }   
            }
        },
        //cssmin: {
        //    build: {
        //        src: 'content/*.css',
        //        dest: 'dist/chillouthostel.css'
        //    }
        //},
        //concat: {
        //    options: {
        //        banner: '<%= banner %>',
        //        stripBanners: true
        //    },
        //    dist: {
        //        src: ['js/main.js'],
        //        dest: 'dist/chillouthostel.js'
        //    }
        //},
        //uglify: {
        //    options: {
        //        banner: '<%= banner %>'
        //    },
        //    dist: {
        //        src: '<%= concat.dist.dest %>',
        //        dest: 'dist/chillouthostel.min.js'
        //    }
        //},
        jshint: {
            options: {
                node: true,
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                eqnull: true,
                browser: true,
                globals: { jQuery: true },
                boss: true
            },
            gruntfile: {
                src: 'gruntfile.js'
            },
            lib_test: {
                src: ['lib/**/*.js', 'test/**/*.js']
            }
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            }
        }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task
    grunt.registerTask('default', [
        'jshint',
        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'copy',
        'usemin'
    ]);
};

