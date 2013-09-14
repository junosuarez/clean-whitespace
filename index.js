// character codes based on
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#endnote_equivalent_s
// http://msdn.microsoft.com/en-us/library/aa989424(v=vs.80).aspx
// http://www.cs.tut.fi/~jkorpela/chars/spaces.html
// and by manually poring over a unicode table

var space = new RegExp('[' + [
    ' ',
    '\u3000',
    '\u2800',
    '\u205f',
    '\u202f',
    '\u2000-\u200a',
    '\u18aa-\u18af',
    '\u1878-\u187f',
    '\u181a-\u181f',
    '\u180f',
    '\u0fd9-\u0fff',
    '\u0fcd',
    '\u0fbd',
    '\u0f98',
    '\u0f8c-\u0f8f',
    '\u0f6d-\u0f70',
    '\u0f48',
    '\u065f',
    '\u0620',
    '\u00f7',
    '\u00a0',
    '\u0020'
  ].join('') + ']', 'g')
var invisible = new RegExp('[' + [
    '\u206a-\u206f',
    '\u2060-\u2064',
    '\u2028-\u202e',
    '\u200b-\u200f',
    '\u180b-\u180e',
    '\u00ad',
    '\u0080-\u009f',
    '\u000e-\u001f',
    '\u0000-\u0008',
    '\r'
  ].join('') + ']', 'g')
var tab = /\t/g
var line = /[\n\v\f]/g

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