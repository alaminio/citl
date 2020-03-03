module.exports = (function() {
  return typeof window == "undefined" ? console.log : window.console.log;
})();
