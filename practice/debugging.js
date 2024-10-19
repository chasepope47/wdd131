const PI = 3.14;

function circleArea(radius) {
  return radius * radius * PI;
}

let area = circleArea(3);
console.log("Area of circle with radius 3: ", area);

area = circleArea(4);
console.log("Area of circle with radius 4: ", area);
