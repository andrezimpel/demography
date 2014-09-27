$(document).ready(function(){
  // (msie9, firefox, safari....)
  var bodyClass;

  if (bowser.safari === true) {
    bodyClass = "safari";
  } else if (bowser.msie === true) {
    bodyClass = "msie";
  } else if (bowser.firefox === true) {
    bodyClass = "firefox";
  } else if (bowser.chrome === true) {
    bodyClass = "chrome";
  } else if (bowser.opera === true) {
    bodyClass = "opera";
  } else if (bowser.iphone) {
    bodyClass = "iphone";
  } else if (bowser.android) {
    bodyClass = "android";
  } else if (bowser.ipad) {
    bodyClass = "ipad";
  }

  if (bowser.mobile && !bowser.ipad) {
    bodyClass = bodyClass + " mobile";
  }
  bodyClass += " " + bodyClass + bowser.version.split(".")[0];
  $("body").addClass(bodyClass);
});
