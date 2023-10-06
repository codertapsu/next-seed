const join = require('path').join;
const merge = require('deepmerge');

/** @doc https://nextjs.org/docs/pages/api-reference/next-config-js */
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  sassOptions: {
    includePaths: [join(__dirname, 'src', 'scss')],
  },
  distDir: 'build',
  env: {
    MY_KEY: 'Some value',
  },
};

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    /* development only config options here */
    return merge(defaultConfig, nextConfig);
  }

  /* config options for all phases except development here */
  return merge(defaultConfig, nextConfig);
};
