/*global require, console*/
var gulp = require("gulp"),
    webserver = require("gulp-webserver"),
    jsHint = require("gulp-jshint"),
    jsLint = require("gulp-jslint"),
    gjsLint = require("gulp-gjslint"),
    KarmaServer = require("karma").Server;

// Servidor web de desarrollo
gulp.task("dev-server", function () {
    "use strict";

    gulp.src("./www")
        .pipe(webserver({
            open: true,
            livereload: true
        }));
});

// Busca errores de JavaScript de acuerdo con JsLint
gulp.task("jsLint", function () {
    "use strict";

    return gulp.src(["./www/src/**/*.js"])
        .pipe(jsLint())
        .on("error", function (error) {
            console.error(String(error));
        });
});

// Busca errores de JavaScript de acuerdo con JsHint
gulp.task("jsHint", function () {
    "use strict";

    return gulp.src(["./www/src/**/*.js"])
        .pipe(jsHint(".jshintrc"))
        .pipe(jsHint.reporter("default"));
});

// Busca errores de JavaScript de acuerdo con Google JsLinter
gulp.task("jsGoogleLint", function () {
    "use strict";

    return gulp.src(["./www /src/**/*.js"])
        .pipe(gjsLint())
        .pipe(gjsLint.reporter("console"), {
            fail: true
        });
});

// Pruebas unitarias con Karma
gulp.task("karmaTest", function (done) {
    "use strict";

    var karmaServer = new KarmaServer({
        configFile: __dirname + "/karma.config.js",
        singleRun: true
    }, done);

    karmaServer.start();
});

gulp.task("default", ["dev-server"]);