var jspm = require('jspm')

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
      return jspm.bundleSFX('app/main', 'build.js', {sourceMaps: true, inject: false, minify: true, mangle: false})
    })
    .then(function(){
      console.log('Deploy finished')
      process.exit(0)
  })
}
