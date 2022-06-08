var mathlib = {
  pi: 3.142,
  area: function(r) {
    return this.pi * r * r;
  },
  circumference: function(r) {
    return 2 * this.pi * r;
  }
}

console.log(mathlib.area(3));
console.log(mathlib.area.call({pi: 3.14159}, 3));
console.log(mathlib.area(3));
const newArea = mathlib.area.bind({pi: 3.14159});
console.log(newArea(3));