'use strict';
(function ($) {
  $(document).ready(function(){
    var minTimeRange = 1000*60;
    var maxTimeRange = 1000*60*10;

    setInterval(function() {
      injectCSS();
    }, randomise(minTimeRange,maxTimeRange));
  });

  function injectCSS() {
    var path = chrome.extension.getURL('styles/main.css');
    inject(path);
  }

  function inject(path) {
    $('head').append($('<link>')
      .attr('rel','stylesheet')
      .attr('type','text/css')
      .attr('href', path));
  }

  function randomise(max,min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
})(jQuery);
