# hapi-request
Decorator for [Hapi](https://github.com/spumko/hapi) request object.

The idea is that handlers can be used as prerequsite methods as interchangeable, reusable pieces of code.

* * *

Install

```
npm install hapi-request
```

Usage

```javascript

var hapiRequest = require('hapi-requst');

// Set up our handler/prerequsite

var someHandler = hapiRequest(function (request) {
    
    var someObj = {};
    
    // Do some crazy go nuts stuff here ...
    
    // When we reply with this function, hapi-request detects
    // if this is a Hapi prerequsite or a Hapi handler
    
    request.reply(someObj);
});

//

server.route({
    method: 'GET',
    path: '/some-route',
    handler: someHandler // <~~ Can be used as Hapi handler
});

// 

server.route({
    method: 'GET',
    path: '/some-OTHER-route',
    pre: {
        foo: someHandler // <~~ Can be used as a Hapi prerequsite
    }
    handler: function (request) {
        var foo = request.pre.foo;
        request.reply(foo);
    }
});

```
