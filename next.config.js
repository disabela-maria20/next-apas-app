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
  
}

module.exports = nextConfig
