var jspm = require('jspm')

if (process.env.NODE_ENV === 'production')
{
  console.log('Executing deploy script')
  jspm.install(true, {})
    .then(function(){
      return jspm.dlLoader()
    })
    .then(function() {
      return jspm.bundleSFX('app/main', 'build.js', {sourceMaps: false, inject: false, minify: true})
    })
    .then(function(){
      console.log('Deploy finished')
      process.exit(0)
  })
}
