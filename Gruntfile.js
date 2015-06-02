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
  htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'dist/index.html': 'index.html'    // 'destination': 'source
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

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
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

  grunt.registerTask('default', ['imagemin']);
  grunt.registerTask('default', ['htmlmin']);
  grunt.registerTask('test', ['jshint', 'qunit']);
  grunt.registerTask('styles:dev', ['sass:dev'])
  grunt.registerTask('styles:dist', ['sass:dist'])
  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

};
