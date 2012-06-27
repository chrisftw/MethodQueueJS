;var MethodQueue = {
  maxConcurrent: 5,
  curConcurrent: 0,
  timer: 100,
  queue: [],
  enqueue: function (values) {
    MethodQueue.queue.push(values);
  },
  canRun: function () {
    return (MethodQueue.curConcurrent < MethodQueue.maxConcurrent);
  },
  start: function () {
    if(MethodQueue.queue.length > 0 && MethodQueue.canRun() ) {
      MethodQueue.curConcurrent ++;
      item = MethodQueue.queue.shift()
      MethodQueue.functionToRun(item);
      MethodQueue.start();
    } else {
      setTimeout(MethodQueue.start, MethodQueue.timer);
    }
  },
  functionToRun: function (obj) { alert("Be sure to set MethodQueue.functionToRun to your custom method before starting MethodQueue."); },
  end: function () { MethodQueue.curConcurrent--; }
};
