let counterFun = (() => {
  let counter = 0;
  return () => {
    counter++;
    console.log('counter: ', counter);
    return counter;
  }
})

const obj = counterFun();
obj();
obj();