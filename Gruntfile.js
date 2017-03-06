module.exports = function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        uglify:{
            options:{
                banner:'/*zyquan*/'
            },
            build:{
                src:'Scripts/product/test.js',
                dest:'dist/js/<%=pkg.name%>.min.js'
            }
        },
        cssmin:{
            options:{
                banner:'/*测试数据*/'
            },
            build:{
                src:'Content/product/*.css',
                dest:'dist/js/<%=pkg.name%>.min.css'
            }
        },
        jshint: {                   // js规范
            options: {
                jshintrc: 'js/.jshintrc'
            },
            src:'project/js/*.js'
        },
        csslint: {  // css 代码检查
            options: {
                csslintrc: 'less/.csslintrc'
            },
           src:'project/*/*.css'
        },
        postcss:{
            options:{
                processors:[
                    require('autoprefixer')
                ]
            },
            dist:{
                src:'project/*/*.css'
            }
        },
        less: {
            compileCore: {
                options: {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: '<%= pkg.name %>.css.map',
                    sourceMapFilename: 'dist/css/<%= pkg.name %>.css.map'
                },
                src: 'less/project.less',
                dest: 'project/css/project.css'
            }
        },
        browserSync:{
            dev:{
                bsFiles:{
                    src:[
                        'project/*/*.css',
                        'public/*/*.html'
                    ]
                },
                options:{
                    watchTask:true,
                    server:'./'
                }
            }
        },
        watch:{
            autoprefixer:{

                files:['project/css/*.css'],
                tasks:['postcss']
            },
            less:{
              files:['less/project.less'],
                tasks:['less']
            },
            configFiles: {
                files: [ 'Gruntfile.js', 'config/*.js' ],
                options: {
                    reload: true
                }
            }

        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');


    grunt.registerTask('default',['browserSync','watch']);
    grunt.registerTask('minfile',['uglify','cssmin']);
    grunt.registerTask('test',['csslint','jshint']);

}
