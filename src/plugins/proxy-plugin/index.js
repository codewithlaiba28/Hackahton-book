const path = require('path');

module.exports = function (context, options) {
    return {
        name: 'docusaurus-plugin-proxy',
        configureWebpack(config, isServer) {
            if (isServer) return {};
            return {
                mergeStrategy: {
                    'devServer': 'replace',
                },
                devServer: {
                    proxy: [
                        {
                            context: ['/api/chat'],
                            target: 'https://hackathon-rag.vercel.app',
                            pathRewrite: { '^/api/chat': '/query' },
                            changeOrigin: true,
                            secure: false,
                            logLevel: 'debug',
                        },
                    ],
                },
            };
        },
    };
};
