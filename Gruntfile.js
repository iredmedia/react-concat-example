module.exports = function(grunt) {
    grunt.initConfig({
        // bower: {
        //     target: {
        //         rjsConfig: 'config.js'
        //     }
        // },
        concat: {
            dist: {
                src: [
                    'out/scripts/AddComment.js',
                    'out/scripts/Application.js',
                    'out/scripts/Comment.js',
                    'out/scripts/CommentList.js',
                    'out/scripts/PeerList.js',
                    'out/scripts/main.js'
                ],
                dest: 'out/scripts/entry.js'
            }
        },
        react: {
            files: {
                expand: true,
                cwd: 'src/documents/scripts/',
                src: ['**/*.jsx'],
                dest: 'out/scripts',
                ext: '.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-react');
    // grunt.loadNpmTasks('grunt-bower-requirejs');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask("default", ["react", "concat"]);
};
