module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-curl');

  grunt.config.set('curl', {
    'example/vendor/soundjs.min.js':
      'https://github.com/CreateJS/SoundJS/releases/download/0.6.2/soundjs-0.6.2.min.js',
  });
};
