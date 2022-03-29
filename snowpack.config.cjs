// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    'src/app': { url: '/dist' },
    test: { url: '/test'}
  },
  plugins: [
    ['@snowpack/plugin-typescript', {'args': '--project ./snowpack.tsconfig.json'}]
  ],
  exclude: [
    '**/src/server/**/*',
    '/test/**/*',
    '**/*.test.ts'
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    port: 8081
  },
  buildOptions: {
    /* ... */
  },
};
