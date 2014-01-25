module.exports = function(grunt) {
    var tmp = 'tmp/scripts/';

    grunt.initConfig({
        clean: [
            "tmp",
            "out/scripts/*.jsx",
        ],
        concat: {
            dist: {
                src: [
                    'tmp/scripts/*.js',
                ],
                dest: 'out/scripts/entry.js'
            }
        },
        react: {
            files: {
                expand: true,
                cwd: 'src/files/scripts/',
                src: ['*.jsx'],
                dest: 'tmp/scripts/',
                ext: '.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask("default", ["react", "concat", "clean"]);
};
