module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-babel');

  grunt.config.set('babel', {
    dist: {
      cwd: 'lib',
      src: '*',
      dest: 'dist',
      expand: true,
    },
  });
};
