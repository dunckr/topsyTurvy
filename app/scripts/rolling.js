chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
  if (document.readyState === "complete") {
    clearInterval(readyStateCheckInterval);

    // ----------------------------------------------------------
    // This part of the script triggers when page is done loading
    console.log("Hello. This message was sent from scripts/inject.js");
    // ----------------------------------------------------------

    // determine a random time
    var actualCode = ['/* Code here. Example: */alert(0);',
                  "console.log('test inside here');",
                  ' // Beware! This array have to be joined',
                  ' // using a newline. Otherwise, missing semicolons',
                  ' //  or single-line comments (//) will mess up your',
                  ' //  code ----->'].join('\n');

    var script = document.createElement('script');
    script.textContent = actualCode;
    (document.head||document.documentElement).appendChild(script);
    script.parentNode.removeChild(script);

  }
  }, 10);
});