module.exports = (function() {
  if (typeof window === "undefined") {
    return console.log;
  }
  return window.console.log;
})();
