module.exports = function(generator) {

  var hb = generator.handlebars;
  var getColor = require('../getcolor');

  hb.registerHelper('theme-test-helper', function(frame) {
    return getColor();
  });

}
