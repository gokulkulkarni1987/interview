/**
 * Scoping difference - start
 */
function run() {
  var foo = "Foo";
  let bar = "Bar";
  console.log(foo, bar);
  {
    var moo = "Mooo";
    let baz = "Bazz";
    console.log(moo, baz);
  }

  console.log(moo);
  console.log(baz);
}

// run();
function loopEx() {
  var funcs = [];
  // let's create 3 functions
  for (var i = 0; i < 3; i++) {
    // and store them in funcs
    funcs[i] = function () {
      // each should log its value.
      console.log("My value: " + i);
    };
  }
  for (var j = 0; j < 3; j++) {
    // and now let's run each one to see
    funcs[j]();
  }
}

// loopEx();

/**
 * Scoping difference - end
 */

/**
 * Hoisting - start
 */

function runVar() {
  console.log(foo);
  var foo = "foo";
  console.log(foo);
}

function runLet() {
  console.log(bar);
  let bar = "bar";
  console.log(bar);
}

// runVar();
// runLet();

/**
 * Hoisting - End
 */

/**
 * This can only be checked in browser
 * global object property - start
 */

//  var foo = 'foo';
//  let bar = 'bar';

//  console.log(window.foo);
//  console.log(window.bar);

/**
 * global object property - end
 */

/**
 * Redeclaration - start
 */

var foo = "foo";
var foo = "bar";

let bar = "bar";
//  let bar = 'bar2'; //Error as already defined

/**
 * Redeclaration - start
 */
