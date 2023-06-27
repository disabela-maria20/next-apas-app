/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  output: 'export',
  sassOptions: {
    includePaths: [path.join(__dirname, 'src','styles')],
    prependData: `
      @import 'abstracts/_index.scss';
    `
  },
  env: {
    RECAPTCHA_PUBLIC: process.env.RECAPTCHA_PUBLIC, 
    RECAPTCHA_PRIVATE: process.env.RECAPTCHA_PRIVATE
  },
  images: {
    unoptimized: true,
  },
  
}

module.exports = nextConfig
