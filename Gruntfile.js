module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: '\n',
			},
			dist: {
				src: ['src/.before.js', 'src/municipios.js', 'src/provincias.js', 'src/pselect.js', 'src/.after.js'],
				dest: 'dist/pselect.js',
			},
		},
		uglify: {
			build: {
				src: 'dist/pselect.js',
				dest: 'dist/pselect.min.js'
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', [
		'concat',
		'uglify',
	]);
};
