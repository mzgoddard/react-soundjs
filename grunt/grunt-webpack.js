module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-webpack');

  grunt.config.set('webpack', {
    example: require('../example/webpack.config.build'),
  });

  grunt.config.set('webpack-dev-server', {
    example: {
      webpack: require('../example/webpack.config'),
      keepalive: true,
    },
  });
};
