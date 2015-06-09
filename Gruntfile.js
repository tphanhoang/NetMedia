module.exports = function(grunt) {
    var mozjpeg = require('imagemin-mozjpeg');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['vendors/**/*.js'],
                dest: 'dist/js/<%= pkg.name %>.js'
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'test.css': ['test.css']
                }
            }
        },
        htmlmin: { // Task
            dist: { // Target
                options: { // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: { // Dictionary of files
                    'dist/index.html': 'index.html' // 'destination': 'source
                }
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'vendors/img',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: 'dist/img'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'vendors/svg',
                    src: '{,*/}*  .svg',
                    dest: 'dist/svg'
                }]
            }
        },
        cdn: {
            options: {
                /** @required - root URL of your CDN (may contains sub-paths as shown below) */
                cdn: 'http://cdn.cloudfront.net/container/',
                /** @optional  - if provided both absolute and relative paths will be converted */
                flatten: false,
                /** @optional  - if provided will be added to the default supporting types */
                supportedTypes: {
                    'phtml': 'html'
                }
            },
            dist: {
                /** @required  - gets sources here, may be same as dest  */
                cwd: './dist/',
                /** @required  - puts results here with respect to relative paths  */
                dest: './dist/',
                /** @required  - files to process */
                src: ['index.html', '*.css', '{,*/}*.html', '{,**/}*.html'],
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: [{
                    "expand": true,
                    "cwd": "vendors/css/",
                    "src": ["*.scss"],
                    "dest": "dist/css",
                    "ext": ".css"
                }]
            },
            dev: {} // À vous de le faire ! vous verrez que certaines options Sass sont plus intéressantes en mode dev que d'autres.
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'vendors/**/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            server: {
                options: {
                    map: true,
                },
                files: [{
                    expand: true,
                    cwd: '.vendors/css/',
                    src: '{,*/}*.css',
                    dest: '.dist/css/'
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.vendors/css/',
                    src: '{,*/}*.css',
                    dest: '.dist/css/'
                }]
            }
        },
        styles: {
            files: '**/*.scss',
            tasks: ['styles:dev']
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },
        connect: {
    options: {
      port: 8000,
      // Change this to '0.0.0.0' to access the server from outside.
      hostname: 'localhost',
      livereload: 8000
    },
    watch: {
options: {
  livereload: true,
    }
  }
}
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass')
    grunt.loadNpmTasks('grunt-contrib-cssmin')
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-cdn');
    grunt.loadNpmTasks('grunt-connect');

    grunt.registerTask('default', ['svgmin', 'imagemin', 'htmlmin', 'concat','sass', 'cssmin', 'connect' ]);
    grunt.registerTask('test', ['jshint', 'qunit']);




};
