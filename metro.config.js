const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname, {
    isCSSEnabled: true,
});

config.resolver.assetExts.push('wasm');
config.transformer.getTransformOptions = async () => ({
    transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
    },
});

module.exports = config;
