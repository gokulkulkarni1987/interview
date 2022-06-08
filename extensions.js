Array.prototype.myMap = ((fn) => {
  const newArray = [];
  console.log('inside myMap', this);
  for(let i = 0; i < this.length; i++) {
    console.log('inside loop: ', i);
    newArray.push(fn(this[i], this));
  }
  return newArray;
});

const yearOfBirth = [1990, 1997, 2002, 2020, 1958, 1857];
const ages = yearOfBirth.myMap((item, array) => {
  console.log(item , array);
  return new Date().getFullYear() - item;
});
console.log(ages);