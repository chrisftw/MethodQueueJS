var MethodQueue = function MethodQueue(cb, maxCon, scopeObj) {
  var qedFunct = cb, queue = [], curConcurrent = 0;
  var scope = scopeObj || document, maxConcurrent = maxCon || 5;
  this.enqueue = function () {
    queue.push(arguments);
    this.start();
  };
  this.start = function start() {
    if(queue.length > 0 && curConcurrent < maxConcurrent ) {
      curConcurrent++;
      var args = queue.shift();
      qedFunct.apply(scope, args);
      setTimeout(start, 1);
    }
  };
  this.end = function () {
    curConcurrent--;
    this.start();
  };
  this.queueLength = function() { return queue.length; };
  this.currentlyProcessingCount = function() { return curConcurrent; };
};
