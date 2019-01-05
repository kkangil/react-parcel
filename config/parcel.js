const Bundler = require('parcel-bundler')
const path = require('path')

const option = {
  outDir: path.join(__dirname, '..', 'build'),
  publicUrl: '/',
  detailReport: true,
  cache: false,
  minify: true,
  sourceMaps: false,
  http: true
}

const bundler = new Bundler(path.resolve(__dirname, '..', 'src', 'index.html'), option)

module.exports = bundler