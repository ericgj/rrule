
var rrule = require('lib/rrule');
var nlp = require('lib/nlp');

module.exports = function(){
  return rrule.apply(null, arguments);
}

module.exports.nlp = nlp;

