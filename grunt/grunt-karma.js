module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-karma');

  grunt.config.set('karma', {
    dev: {
      options: {
        configFile: 'karma.conf.js',
        client: {
          mocha: {
            reporter: 'html',
          },
        },
      },
    },

    ci: {
      configFile: 'karma.conf.js',
      singleRun: true,
    },
  });
};
