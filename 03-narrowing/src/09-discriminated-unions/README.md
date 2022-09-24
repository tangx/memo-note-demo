# 具有可识别性的联合类型

假设要求 **圆** 和 **正方形** 的面积

### 不好的示范

```ts
interface Shape {
  kind: 'circle' | 'square'
  radius?: number
  sideLength?: number
}


function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return shape.radius ** 2 ** Math.PI // Object is possibly 'undefined'.ts(2532)
  }
  // ...省略
}
```

1. 虽然上述代码在处理联合类型中的时候将 `kind` 的值限定在了 `'circle' | 'square'` 中。 可以 `getArea` 中缩小 kind 在进行类型判断的可选项， 避免错误 kind 类型的不必要麻烦。
2. 但是， `radius 和 sideLength` 都是可选项， 在求面积的时候， 依旧可能出现参数未传递的情况。

### 好的示范

```ts
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
```

首先分别对圆和正方形定义了 **各自的接口** 。 再通过使用 **联合类型** 组成新类型 Shape。

1. 和之前一样， 通过 kind 可以有效限定 `getArea` 中的可选值。
2. 额外的， 通过 if 条件判断后， 可以缩小 shape 的类型。 其次， radius 或 sideLength 作为必选值，一定会存在。

