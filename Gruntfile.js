module.exports = function (grunt){
    grunt.initConfig({
        connect: {
            server:{
                options:{
                    port: 8000,
                    hostname: '*',
                    keepalive: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', 'connect:server');
}