default-arguments
=================


[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)](https://travis-ci.org/arnellebalane/default-arguments)


give default arguments to function calls


### installation

```
$ npm install default-arguments
```


### usage

```javascript
function add(a, b) {
    return a + b;
}

var add10 = defaultArguments(add, { b: 10 });
var add20 = defaultArguments(add, { b: 20 });

add10(10); // => 20
add20(10); // => 30
```
