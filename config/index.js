const fs = require('fs')
const path = require('path')
const viewsPath = path.join(process.cwd(), './src/views')
const reg = new RegExp(viewsPath + `/([^/]+)/main.js`)

var argv = require('minimist')(process.argv.slice(2))
console.log(argv, 'argv', viewsPath)
const pages = {
  // index: {
  //   entry: 'src/views/index/main.js',
  //   template: 'src/views/index/index.html',
  //   filename: 'index.html',
  //   chunks: ['chunk-vendors', 'chunk-common', 'index']
  // }
}

const dirs = fs.readdirSync(viewsPath)
console.log(dirs, 'dirs')
console.log('reg', reg)
dirs.forEach(dir => {
  if (fs.existsSync(path.join(process.cwd(), `./src/views/${dir}/main.js`))) {
    pages[dir] = {
      entry: `src/views/${dir}/main.js`,
      template: `src/views/${dir}/index.html`,
      filename: dir + '.html',
      chunks: ['chunk-vendors-' + dir, 'chunk-common-' + dir, dir]
    }
  }
})
module.exports = pages
