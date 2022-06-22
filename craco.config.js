const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@ant-prefix': 'st' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};