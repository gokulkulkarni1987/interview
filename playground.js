let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

//sayHi();

function There() {
  let count = 0;

  setTimeout(function() {
    let innerCount = 0;
    count += 2;
    console.log(count);

    setTimeout(function() {
      count += 5;
      innerCount += 1;
      console.log(count + " " + innerCount);
    }, 500)
  }, 1000);
}

// There();

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// (function test() {
//   console.log(
//     [] - [],
//     [] + [],
//     {} - {},
//     {} + {}
//   )
// })();

// var foo = "foo";

// var fun = () => {
//   console.log(this.foo);
// }

// var fun2 = fun.bind({foo: "boo"});
// fun2();

var foo = "foo";

// (function (innerFoo) {
//   console.log(innerFoo)
// })(foo);

// (function () {
//   let foo = "bar";
//   console.log(foo);
// })();

// let f1 = function() {
//   console.log(this.foo);
// };

// f1();
// f1.bind(this);
// f1();

// let f2 = () => {
//   console.log(this.foo);
// }
// f2();
// f2.apply(this);

// const test = {
//   name: 'gokul'
// }
// Object.freeze(test);
// test.name = "Shrunga";
// test.valu = 'Kulkarni';
// console.log('test', test);
