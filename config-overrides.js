const { override , fixBabelImports, addWebpackAlias} = require('customize-cra');

const removeManifest = () => config => {
    config.plugins = config.plugins.filter(
        p => p.constructor.name !== "ManifestPlugin"
    );
    return config;
};

module.exports = {
    webpack: override(
        removeManifest(),
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'css',
        }),
        addWebpackAlias({
            "@": './src'
        }),
    ),
    // devServer: overrideDevServer(
    //     ...
    // )
}