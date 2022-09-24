# never 和 **可穷尽性检查**

## never

在 ts 中， `never` 是一个特殊的类型。


1. `never` **可以** 赋值给任何类型。
2. 任何类型 **不能** 赋值给 `never`。
3. `never` **可以** 赋值给 `never`。

这个特性很有用， 可以用在 **穷尽性** 检查中。

## 穷尽性检查

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
    default:  // 穷尽性检查
      // shape: never
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
```

使用之前的例子， 对 switch 语句进行扩展， 增加 default 分支。
在 default 分支中， 由于之前 shape 已经检查了所有可能的类型， 所以此时 shape 就被 typescript 默认推断为 never 类型。
所以 `shape(never)` 可以赋值给 `_exhastiveCheck(never)`.


```ts
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
      // shape: Triangle
      // Type 'Triangle' is not assignable to type 'never'.ts(2322)
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
```

但是， 当我们对代码进行扩展， 增加 **三角形** 的时候。 
在 default 分支的时候， shape 由于没有被穷举， 还剩下 Triangle 类型， 所以此时 shape 的类型为 Triangle.
而 Triangle 不能赋值给 never， 所以 typescript 就报错提示。


