const fs = require('fs')
const path = require('path')
const viewsPath = path.join(process.cwd(), './src/views')

var argv = require('minimist')(process.argv.slice(2))
console.log(argv, 'argv', viewsPath)

const dirs = fs.readdirSync(viewsPath)
const pages = {}

dirs.forEach(dir => {
  pages[dir] = {
    entry: path.join(viewsPath, dir, 'main.js'),
    template: path.join(viewsPath, dir, 'index.html'),
    filename: `${dir}/index.html`
  }
})
console.log(pages, 'pages')
module.exports = pages
