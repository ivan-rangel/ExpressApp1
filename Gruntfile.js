/*jslint node: true, indent: 2,nomen:true */
'use strict';
module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-jslint');

  grunt.initConfig({
    jslint: {
      all : {
        src: [
          'Gruntfile.js',
          'app.js',
          'routes/*.js',
          'bin/www'
        ],
        directives : {
          indent : 2,
          node   : true,
          nomen  : true,
          regexp : true
        }
      }
    }
  });

  grunt.registerTask('lint', 'jslint');
};