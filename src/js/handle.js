$(document).ready(function(){

  window.bodyclasses = "undefinedBrowser";

  // check if bowser is included
  if (typeof bowser == 'undefined') {
    console.log("you need to include bowser https://github.com/ded/bowser");
  } else {

    if (bowser.version != undefined) {
      if (bowser.safari === true) {
        window.bodyclasses = "safari";
      } else if (bowser.msie === true) {
        window.bodyclasses = "msie";
      } else if (bowser.firefox === true) {
        window.bodyclasses = "firefox";
      } else if (bowser.chrome === true) {
        window.bodyclasses = "chrome";
      } else if (bowser.opera === true) {
        window.bodyclasses = "opera";
      } else if (bowser.iphone) {
        window.bodyclasses = "iphone";
      } else if (bowser.android) {
        window.bodyclasses = "android";
      } else if (bowser.ipad) {
        window.bodyclasses = "ipad";
      }
      window.bodyclasses += " " + window.bodyclasses + bowser.version.split(".")[0];

      // mobile
      if(bowser.mobile != undefined && bowser.mobile === true) {
        window.bodyclasses = window.bodyclasses + " mobile";
      }

      // tablet
      if(bowser.tablet != undefined && bowser.tablet === true) {
        window.bodyclasses = window.bodyclasses + " tablet";
      }

      // desktop
      if(bowser.tablet == undefined && bowser.mobile == undefined) {
        window.bodyclasses = window.bodyclasses + " desktop";
      }
    }

    $("body").addClass(window.bodyclasses);
  }
});
