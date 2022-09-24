
// interface Shape {
//   kind: 'circle' | 'square'
//   radius?: number
//   sideLength?: number
// }

// function getArea(shape: Shape) {
//   if (shape.kind === "circle") {
//     // Object is possibly 'undefined'.ts(2532)
//     return shape.radius ** 2 ** Math.PI
//   }
// }


interface Circle {
  kind: 'circle'
  radius: number
}

interface Square {
  kind: 'square'
  sideLength: number
}


type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      // shape: Circle
      return Math.PI * shape.radius ** 2;
    case "square":
      // share: Square
      return shape.sideLength ** 2;
  }
}


