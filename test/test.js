var chai = require('chai')
chai.should()

describe('clean-whitespace', function () {
  var cleanWhitespace = require('../')

  it('cleans space chars', function () {
    cleanWhitespace('hey\u00a0you\u2003guys!')
      .should.equal('hey you guys!')
  })

  it('cleans invisible chars', function () {
  cleanWhitespace('salve \u2029mundo\u2029!')
    .should.equal('salve mundo!')
})

  it('cleans tabs', function () {
    // default behavior actually just leaves \t,
    // but can be used with options to convert to spaces
    cleanWhitespace('\t\t\t')
      .should.equal('\t\t\t')
  })

  it('cleans vertical spacing', function () {
    cleanWhitespace(' a \n b \v c \f d \r e')
      .should.equal(' a \n b \n c \n d \n e')
  })

  describe('options', function () {

    it('.space', function () {
      cleanWhitespace('hey\u00a0you\u2003guys!', {space: '_'})
        .should.equal('hey_you_guys!')
    })

    it('.invisible', function () {
      cleanWhitespace('salve \u2029mundo\u2029!', {invisible: '+'})
        .should.equal('salve +mundo+!')
    })

    it('.tab', function () {
      cleanWhitespace('\t\t\t', {tab: '  '})
        .should.equal('      ')
    })
    it('.tabSpace matches repeated spaces as tab chars', function () {
      cleanWhitespace('    hey', {tabSpace: 2})
        .should.equal('\t\they')

      cleanWhitespace('    hey', {tabSpace: 4})
        .should.equal('\they')
    })

    it('.line', function () {
      cleanWhitespace(' a \n b \v c \f d \r e', {line: '\n\r'})
        .should.equal(' a \n\r b \n\r c \n\r d \n\r e')
    })
  })
})