MethodQueue JS is a simple library to help limit concurrent Async calls to a method.

What is MethodQueue JS for?
=======
MethodQueue JS was written to fulfill a need, as most software is.  THe problem I used it for was, GoogleAnalyics API only allowed 8 calls to the API at once, but we had a dashboard that required more.  Rather than try to plan how long each request MGHT take, and/or over estimate them; I made MethodQueue.

How to Use MethodQueue JS
=======



Require the js file:
```html
<script src="js/method-queue.js"></script>
```
In your script:

Create a new MethodQueue with a method, and a max concurrency.
```js
var mq1 = new MethodQueue( function(obj) { 
  var total = mq1.queueLength();
  setTimeout(
    function() {      // this is an Async call that takes time
      console.log("queue length when called (counting self): " + total + " object: " + obj);
      mq1.end();      // Must call this method as a call back in your async method when it is done.
    }, 1000)  // sample async calls are taking 1 second to complete
  }, 3);
  // The three here is the max concurrency.
```
Takes later inputs of methods also:
```js
setTimeout(function(){mq1.enqueue("Hello World" )}, 5000);
```
To Do:

* master queue count to set max on all instances of the MethodQueue.
* make the example more pretty
* make the README pretty
