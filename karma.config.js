/*global module*/
module.exports = function (config) {
    'use strict';

    config.set({
        // ruta base que se usará para todos los patrones (como files, exclude, etc.)
        basePath: '',

        // frameworks a usar
        // frameworks disponibles: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['requirejs', 'jasmine'],

        // list of files / patterns to load in the browser
        files: ['app/lib/angular/angular.js',
            'app/lib/angular-mocks/angular-mocks.js',
            'app/js/main.js',
            'app/test/testMain.js'],

        // lista de archivos a excluir
        exclude: [],

        // preprocesar los archivos coincidentes antes de servirlos al navegador
        // preprocesadores disponibles: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},

        // informantes de los resultados de pruebas a usar
        // valores posibles: 'dots', 'progress'
        // informantes disponibles: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

        // puerto del servidor web
        port: 9876,

        // habilitar para tener texto con colores en la salida (informantes y logs)
        colors: true,

        // niveles de log
        // valores posibles: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DISABLE,

        // habilitar para monitorizar los archivos y ejecutar las pruebas cuando cambien
        autoWatch: false,

        // iniciar estos navegadores
        // lanzadores de navegadores disponibles: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        // modo Integración Continua
        // habilitar para que Karma inicie los navegadores, ejecute las pruebas y termine
        singleRun: true
    });
};
