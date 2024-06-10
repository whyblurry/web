if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
  } else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
  }
  function loaded() {
    setInterval(loop, 250);
  }
  var x = 0;
  var titleText = [ "c", "co", "cod", "codi", "codin", "codine","codine.", "codine.l", "codine.lo", "codine.lol", "codine.lol", "codine.lol", "codine.lo", "codine.l", "codine.", "codine", "codin", "codi", "cod", "co", "c" ];
  
  function loop() {
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
  }