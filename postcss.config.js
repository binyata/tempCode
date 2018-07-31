const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        autoprefixer({
            browsers: ['> 1%', 'Last 2 versions', 'not IE < 11'],
        }),
    ],
};
