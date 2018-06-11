let plugins = []
if (require('semver').satisfies(process.version.slice(1), '6 - 8.2')) {
    plugins.push([
        '@babel/plugin-proposal-object-rest-spread', {
            useBuiltIns: true
        }
    ]);
} else {
    plugins.push('@babel/plugin-syntax-object-rest-spread')
}

module.exports = {
    presets: [
        [
            '@babel/env', {
                targets: {
                    node: 'current'
                }
            }
        ]
    ],
    plugins
};