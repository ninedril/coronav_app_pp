var gulp = require('gulp'); // gulpの読み込み
var browserSync = require('browser-sync'); // browser-syncの読み込み

gulp.task('browser-sync', function(done){
    browserSync.init({
        server : {
            baseDir : './', // 対象となるディレクトリ
            index : 'index.html', // リロードするHTMLファイル
        },
    });
    done();
});

gulp.task('reload', function(done){
    browserSync.reload();
    done();
});

// ファイル監視
gulp.task('watch', gulp.series(['browser-sync'], function(done){
    gulp.watch('./*.+(html|js)', gulp.series(['reload']));
    done();
}));

gulp.task('default', gulp.series(['browser-sync', 'watch']));