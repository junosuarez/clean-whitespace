// character codes based on
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#endnote_equivalent_s

var space = /[ \u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u3000]/g
var invisible = /[\u200b\u2028\u2029]/g
var tab = /\t/g
var line = /[\n\v\f\r]/g

function cleanWhitespace (str, opt) {
  opt = opt || {}

  // build a regex to match the specified number of spaces as tab chars
  var _tab = opt.tabSpace ? new RegExp('\t|[ ]{'+opt.tabSpace+'}','g') : tab

  return str.replace(_tab, opt.tab || '\t')
            .replace(space, opt.space || ' ')
            .replace(invisible, opt.invisible || '')
            .replace(line, opt.line || '\n')

}

module.exports = cleanWhitespace