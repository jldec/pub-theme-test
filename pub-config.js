// pub-theme-test pub-config.js

module.exports = {

  // prevent pub-pkg folders from misbehaving when opened using pub
  'pub-pkg': 'pub-theme-test',

  sources: [
    { path:'./src', fragmentDelim:true, watch:true },
  ],

  staticPaths: { path:'./static', watch:true },

  generatorPlugins: './plugins/generator-plugin.js',

  serverPlugins: './plugins/server-plugin.js',

  browserScripts: [
    { path: './browser-script.js', route: '/js/theme-test.js' }
  ]

};
