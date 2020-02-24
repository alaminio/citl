const cl = function() {
  if (typeof window === "undefined") {
    return console.log;
  }
  return window.console.log;
};
module.exports = cl();
