const cheerio = require('cheerio');
var RESET_TEMPLATE = [
  '<style>',
  'body {',
  '  counter-reset: RESET;',
  '}',
  '</style>'
].join('\n') + '\n';
var bl = false;
var h1 = 0;
var h2 = 0;
var h3 = 0;


module.exports = {
  website: {
    assets: './assets',
    css: [
      'numbered-headings-website.css'
    ]
  },
  ebook: {
    assets: './assets',
    css: [
      'numbered-headings.css'
    ]
  },
  hooks: {
    'page': function(page) {
      var resetString = "none";
      var pageLevel = ''
      if(page.hasOwnProperty("level")) {
        if (page.level === '1') bl = true;
        if (bl) pageLevel = page.level;
        else pageLevel = page.level.replace(/^1\./, '');
        var levels = pageLevel.split(".");
        resetString = "";
        for(var i = 1; i < 4; i++) {
          if(i == levels.length)
            resetString += " h" + i + " " + ((levels[i -1]) -1 || 0);
          else
            resetString += " h" + i + " " + ((levels[i -1]) || 0);
        }
      }
      var counterReset = RESET_TEMPLATE.replace(/RESET/, resetString);
      page.content = counterReset + page.content;
      $ = cheerio.load(page.content);
      $('h1, h2, h3').each(function(i, h){
        var tagName = $(h)[0].tagName || $(h)[0].name;
        if (tagName == 'h1')
        {
          h1 = h1 + 1;
          h2 = 0;
          h3 = 0;
          $(h).prepend('<span class="number-for-pdf">' + h1 + '. </span>');
        }
        else if (tagName == 'h2')
        {
          h2 = h2 + 1;
          h3 = 0;
          $(h).prepend('<span class="number-for-pdf">' + h1 +  '.' + h2 + '. </span>');
        }
        else if (tagName == 'h3')
        {
          h3 = h3 + 1;
          $(h).prepend('<span class="number-for-pdf">' + h1 +  '.' + h2 + '.' + h3 + '. </span>');
        }
      });
      page.content = $.html();
      return page;
    }
  }
};
