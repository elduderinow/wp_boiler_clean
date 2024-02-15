const config = require('../../lib/configLoader');

if (!config.tasks.css) return;

const
    gulp = require('gulp'),
    gulpif = require('gulp-if'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass')(require('sass')),
    sourcemaps = require('gulp-sourcemaps'),
    handleErrors = require('../../lib/handleErrors'),
    customNotifier = require('../../lib/customNotifier'),
    autoprefixer = require('gulp-autoprefixer'),
    path = require('path'),
    postcss = require('gulp-postcss'),
    tailwindcss = require('tailwindcss'),
    cleanCSS = require('gulp-clean-css'),
    paths = {
        src: path.join(config.root.src, config.tasks.css.src, '/**/*.{' + config.tasks.css.extensions + '}'),
        dest: path.join(config.root.dest, config.tasks.css.dest)
    },
    cssTask = () => {
        console.log('scripts', paths.src, paths.dest);
        return gulp.src(paths.src)
            .pipe(gulpif(config.root.env !== 'production', sourcemaps.init()))
            .pipe(sass(config.tasks.css.sass))
            .on('error', handleErrors)
            .pipe(postcss([
                tailwindcss('./tailwind.config.js'),
                require('autoprefixer'),
            ]))
            .pipe(gulpif(config.root.env === 'production', cleanCSS()))
            .pipe(gulpif(config.root.env !== 'production', sourcemaps.write()))
            .pipe(gulp.dest(paths.dest))
            .pipe(customNotifier({ title: 'CSS compiled' }))
            .pipe(browserSync.stream());
    };

gulp.task('css', cssTask);
module.exports = cssTask;
