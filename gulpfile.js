const {parallel, watch, src, dest} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const copyScss = (done) => {
    src('src/scss/**/*.scss')
        .pipe(dest('build/styles/scss'))

    done()
}

const copyJs = (done) => {
    src('src/script/*.js')
        .pipe(dest('build/js'))
    done()
}

const parallelOne = (done) => {
    console.log('Parallel 1');
    done();
}
const parallelTwo = (done) => {
    console.log('Parallel 2');
    done();
}
const parallelThree = (done) => {
    console.log('Parallel 3');
    done();
}

const watchScss = (done) => {
    console.log('Some scss was changed');

    done();
}

const watchScripts = (done) => {
    console.log('Some scripts were changed');

    done();
}

const watchers = () => {
    watch('src/script', {events: 'change'}, watchScripts);
    watch('src/scss/**/*.scss', {events: 'change'}, watchScss);
}

exports.copyScssFiles = copyScss;
exports.copyScripts = copyJs;
exports.parallelFunctions = parallel(parallelOne, parallelTwo, parallelThree);
exports.parallelFuncs = parallel(parallelOne, parallelTwo);
exports.watchers = watchers;

