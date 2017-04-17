module.exports = {
    plugins: ['react'],
    config: {
        export: [
            ['babel-polyfill', './scripts/index.js'],
            './styles/index.css'
        ],
        modifyWebpackConfig: function(baseConfig) {
            // edit ykit's Webpack configs
            return baseConfig;
        }
    },
    hooks: {},
    commands: []
};
