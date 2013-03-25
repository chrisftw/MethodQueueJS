(function() {
  var queue = [], paused = false, results, testRunner;
  this.test = function(name, fn) {
    queue.push(function() {
      results = document.getElementById('results');
      results = assert(true, name).appendChild(document.createElement('ul'));
      fn();
    });
  };
  this.pause = function() {
    paused = true;
  };
  this.resume = function() {
    paused = false;
    setTimeout(runTest, 1);
  };
  function runTest() {
    if (!paused && queue.length > 0) {
      queue.shift()();
      if (!paused) {
        resume();
      }
    }
  };
  this.assert = function assert(value, desc) {
    var li = document.createElement('li');
    li.className = value ? 'pass' : 'fail';
    li.appendChild(document.createTextNode(desc));
    results.appendChild(li);
    if (!value) {
      li.parentNode.parentNode.className = 'fail';
    }
    return li;
  };
  resume(); // kick start
})();
window.onload = resume;
