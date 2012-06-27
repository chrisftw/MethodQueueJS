MethodQueue JS is a simple library to help limit concurrent Async calls to a method.

It is a rough draft, but other people might find it useful, so I am releasing it in it's current working state.

How to Use MethodQueue JS

Require the js file:
```html
<script src="js/method-queue.js"></script>
```
In your script:

first add a custom method that you want to limit concurrency of:
```js
MethodQueue.functionToRun = function(obj) { 
  var total = MethodQueue.curConcurrent;
  setTimeout(
    function() { // this is an Async call that takes time
      console.log("queue length when called (counting self): " + total + " object: " + obj);
      MethodQueue.end();  // Must call this method as a call back in your async method when it is done.
    }, 1000)  // sample async calls are taking 1 second to complete
  };
```
You can change the number of concurrent actions allowed with the maxConcurrent option:
```js
MethodQueue.maxConcurrent = 3;
```

Start the queue:
```js
MethodQueue.start()
```

Takes later inputs of methods also:
```js
setTimeout(function(){MethodQueue.enqueue("Hello World" )}, 5000);
```
To Do:

* make take variable number of arguments (just fixed to take 0-4 arguments)
* make it prototype driven so more than one queue can exist (more than one method, and more than one limit on number of items that can run concurrently.)
* master queue count to set max on all instances of the MethodQueue.
* make the example more pretty
* make the README pretty

