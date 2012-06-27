;var MethodQueue = {
  maxConcurrent: 5,
  curConcurrent: 0,
  timer: 100,
  queue: [],
  enqueue: function () {
    MethodQueue.queue.push(arguments);
  },
  canRun: function () {
    return (MethodQueue.curConcurrent < MethodQueue.maxConcurrent);
  },
  start: function () {
    if(MethodQueue.queue.length > 0 && MethodQueue.canRun() ) {
      MethodQueue.curConcurrent ++;
      items = MethodQueue.queue.shift();
      if (items.length == 0) {
        MethodQueue.functionToRun();
      } else if (items.length == 1) {
        MethodQueue.functionToRun(items[0]);
      } else if (items.length == 2) {
        MethodQueue.functionToRun(items[0], items[1]);
      } else if (items.length == 3) {
        MethodQueue.functionToRun(items[0], items[1], items[2]);
      } else if (items.length == 4) {
        MethodQueue.functionToRun(items[0], items[1], items[2], items[3]);
      }
      //MethodQueue.functionToRun(items);
      MethodQueue.start();
    } else {
      setTimeout(MethodQueue.start, MethodQueue.timer);
    }
  },
  functionToRun: function (obj) { alert("Be sure to set MethodQueue.functionToRun to your custom method before starting MethodQueue."); },
  end: function () { MethodQueue.curConcurrent--; }
};
