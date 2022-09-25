# 泛型函数

假如我们想要函数 **传入参数** 与 **返回值** 在类型上具有一定相关性。 或者同一个函数可以处理多种不确定的参数型类。

```ts
function firstElement(arr: any[]): any {
  return arr[0]
}

// aa: any
const aa = firstElement([0, 1, 2])
```

使用 `any` 的话， 实际上接受到的返回值会丢失类型。 例如上述代码传入的 `number` 的到的 aa 却是 `any`。

在这个时候，我们就可以使用 **泛型**

```ts
function firstElementGenerics<MyType>(arr: MyType[]): MyType {
  return arr[0]
}

// a: number
const a = firstElementGenerics([1, 2, 34])
// b: string
const b = firstElementGenerics(['a', 'bc', 'de'])
// c: never
const c = firstElementGenerics([])
```

在上述代码中， 定义了一个支持 **泛型** 的函数。 
1. 泛型类型的字面量可以 **任意** 指定， 就类似形参的名字。
2. 在调用函数的时候，这里传入多种类型的数组，这里 typescript 帮我们自动 **推断** 了类型。

```ts
// d: string
const d = firstElementGenerics<string>(['a', 'b', 'c'])
```

如果需要在传参的时候类型更精确，更可控。 可以指定 **传入参数类型**， 例如这里的可以使用 `<string>` 限定接收字符串类型。



## 类型推导

```ts
function map<Input, Output>(
  arr: Input[],
  func: (input: Input) => Output,
): Output[] {
  return arr.map(func)
}

```

在上述代码中， 定了一个两个泛型占位符 **Input 和 Output**。
需求是将 arr 类型从 Input 转为为 Ouput。

```ts
// ma: number[]
const ma = map(
  [0, 1, 2, 3],
  (n) => n ** 2,
)
console.log(ma);

// mb=number
const mb = map(
  ['1', '2', '3'],
  (n) => parseInt(n)
)

console.log(mb);
```

在上述代码中， 
1. ma 传入参数是数字数组，并返回乘方后的数字数组。
2. mb 传入参数是字符串数组， 通过 `parseInt` 函数转换为数字数组。

```ts
const mc = map<string, number>(
  ['1', '2', '3'],
  (n) => parseInt(n)
)
console.log(mb);
```

当然为了更具类型的可控性， 可以在调用 map 是执行 Input 和 Ouput 的类型。 注意位置对齐。
