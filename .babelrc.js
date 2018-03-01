let plugins = []
if (require('semver').satisfies(process.version.slice(1), '6 - 7')) {
    plugins.push([
        'transform-object-rest-spread', {
            useBuiltIns: true
        }
    ]);
}

module.exports = {
    presets: [
        [
            'env', {
                targets: {
                    node: 'current'
                }
            }
        ]
    ],
    plugins
};