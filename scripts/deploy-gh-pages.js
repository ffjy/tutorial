'use strict'

var ghpages = require('gh-pages')
var __main = function() {
  ghpages.publish('./gh-pages', console.error.bind(console))
}
__main()