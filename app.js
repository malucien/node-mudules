const rect = require('./rectangle');

function solveRect(l, b) {
  console.log(`Solving for rectangle with dimensions: ${l}, ${b}`);

  if (l <= 0 || b <= 0) {
    console.log(`Rectangle dimensions must be greater than zero. Received: ${l}, ${b}`);
  }
  else {
    console.log(`Area of rectangle: ${rect.area(l, b)}`);
    console.log(`Perimeter of rectangle: ${rect.perimeter(l, b)}`);

  }
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);
