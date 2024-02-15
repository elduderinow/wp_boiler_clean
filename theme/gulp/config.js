
const
    getArg = require('./lib/getArg'),
    destFolder = getArg('--build') ? '../web/wp-content/themes/starterkit' : '../web/wp-content/themes/starterkit',
    env = getArg('--build') ? 'production' : 'development';

module.exports = {
    'root': {
        'src': './src/',
        'dest': destFolder,
        'env': env
    },

    'tasks': {
        'browserSync': {
            'proxy': 'http://starterkit.local',
            'host': 'starterkit.local',
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
