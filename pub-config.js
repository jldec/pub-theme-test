// pub-theme-test pub-config.js
module.exports = {

  // prevent pub-pkg folders from misbehaving when opened using pub
  'pub-pkg': 'pub-theme-test',

  sources: [{
    path: './src',
    fragmentDelim: true,
    writable: true
  }],

  staticPaths: [{
    path: './static/css/theme-test.css',
    route: '/css',
    inject: true
  }],

  generatorPlugins: './plugins/generator-plugin.js',

  serverPlugins: './plugins/server-plugin.js',

  browserScripts: [{
    path: './browser-script.js',
    route: '/js',
    inject: true
  }]

};
