
export { };



interface Circle {
  kind: 'circle'
  radius: number
}

interface Square {
  kind: 'square'
  sideLength: number
}

interface Triangle {
  kind: 'triangle'
}

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      // shape: Circle
      return Math.PI * shape.radius ** 2;
    case "square":
      // share: Square
      return shape.sideLength ** 2;
    default: // 穷尽性检查
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}


