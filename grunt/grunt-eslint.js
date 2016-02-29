module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-eslint');

  grunt.config.set('eslint', {
    lib: {
      options: {
        configFile: 'src/.eslintrc',
      },
      src: 'lib/*.js{,x}',
    },
    test: {
      options: {
        configFile: 'test/.eslintrc',
      },
      src: 'test/*.js{,x}',
    },
    config: {
      options: {
        configFile: '.eslintrc',
      },
      src: ['grunt', 'gruntfile.js'],
    },
  });
};
