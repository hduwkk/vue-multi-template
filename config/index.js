const fs = require('fs')
const path = require('path')
const glob = require('glob')
const viewsPath = path.join(process.cwd(), './src/views')
const reg = new RegExp(viewsPath + '/([^/]+)/main.js')

var argv = require('minimist')(process.argv.slice(2))
console.log(argv, 'argv', viewsPath)
const pages = {
  index: {
    entry: 'src/views/index/main.js',
    template: 'src/views/index/index.html',
    filename: 'index.html',
    chunks: ['chunk-vendors', 'chunk-common', 'index']
  }
}

glob.sync(path.join(viewsPath, '**/main.js')).forEach(dir => {
  const result = dir.match(reg)
  let chunk
  result && (chunk = result[1])
  if (chunk && chunk !== 'index') {
    pages[chunk] = {
      entry: `src/views/${chunk}/main.js`,
      template: `src/views/${chunk}/index.html`,
      filename: chunk + '.html'
    }
  }
})
module.exports = pages
