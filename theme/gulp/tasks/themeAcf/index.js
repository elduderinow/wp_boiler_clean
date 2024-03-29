const
    config = require('../../lib/configLoader'),
    changed = require('gulp-changed'),
    customNotifier = require('../../lib/customNotifier'),
    gulp = require('gulp'),
    path = require('path'),
    paths = {
        src: [
            path.join(config.root.src, config.tasks.themeAcf.src, '/**/*'),
            path.join(config.root.src, config.tasks.themeAcf.src, '/**/.*'),
        ],
        dest: path.join(config.root.dest, config.tasks.themeAcf.dest)
    },
    themeAcf = () => {
        return gulp.src(paths.src)
            .pipe(changed(paths.dest)) // Ignore unchanged files
            .pipe(gulp.dest(paths.dest))
            .pipe(customNotifier({ title: 'ACF files copied' }));
    };

gulp.task('themeAcf', themeAcf);
module.exports = themeAcf;
