
const
    getArg = require('./lib/getArg'),
    destFolder = getArg('--build') ? '../web/wp-content/themes/katara-wp' : '../web/wp-content/themes/katara-wp',
    env = getArg('--build') ? 'production' : 'development';

module.exports = {
    'root': {
        'src': './src/',
        'dest': destFolder,
        'env': env
    },

    'tasks': {
        'browserSync': {
            'proxy': 'http://katara-wp.local',
            'host': 'katara-wp.local',
            'open': 'external'
        },
        'static': {},
        'jsonData': {},
        'fonts': {},
        'css': {},
        'themeTwig': {},
        'themeLayout': {},
        'themePhp': {},
        'themeAcf': {},
        'images': {},
        'svgsprite': {},
        'production': {},
        'eslint': {},
        'stylelint': {},
        'scripts': {
            'babel': {
                'presets': [['es2015', { 'modules': false }]],
                'plugins': []
            },
        }
    }
};
