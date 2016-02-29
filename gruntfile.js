module.exports = function(grunt) {
  grunt.loadTasks('grunt');

  grunt.registerTask('test-dev', ['eslint', 'karma:dev']);
  grunt.registerTask('test', ['eslint', 'karma:ci']);
  grunt.registerTask('example-dev', ['curl', 'webpack-dev-server']);
  grunt.registerTask('example', ['curl', 'webpack:example']);
};
