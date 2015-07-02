var fs           = require('fs')
var jspm         = require('jspm')
var autoprefixer = require('autoprefixer-core');
var postcss      = require('postcss');

if (process.env.NODE_ENV === 'production')
{
  console.log('Executing deploy script')
  jspm.install(true, {})
    .then(function(){
      console.log("Dl downloading")
      return jspm.dlLoader()
    })
    .then(function() {
      console.log("Bundle creation")
      return jspm.bundleSFX('app/main', 'build.js', {sourceMaps: false, inject: false, minify: true, mangle: true})
    })
    .then(function() {
      var css = fs.readFileSync('./build.css', {encoding: 'utf8' })
      return postcss([ autoprefixer ]).process(css)
    })
    .then(function(result) {
      fs.writeFileSync('./build.css', result.css)
      console.log('Deploy finished')
      process.exit(0)

    })
}
