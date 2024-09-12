module.exports = {
    presets: [ "@babel/preset-react","@babel/preset-flow",  "@babel/preset-typescript",'module:metro-react-native-babel-preset'
],  
    plugins: [
        [
            '@babel/plugin-transform-runtime',
            {
                absoluteRuntime: false,
                corejs: false,
                helpers: true,
                regenerator: true,
                version: '7.0.0-beta.0',
            },
        ],
        'react-native-reanimated/plugin',
        "@babel/plugin-syntax-flow",
        '@babel/plugin-transform-react-jsx',
    ['@babel/plugin-transform-class-properties', { loose: true }],
    ['@babel/plugin-transform-private-methods', { loose: true }],
    ['@babel/plugin-transform-private-property-in-object', { loose: true }],
        
    ],
  };
