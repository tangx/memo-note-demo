# 函数重载

```ts
// 重载签名
function makeDate(timestamp: number): Date
function makeDate(m: number, d: number, y: number): Date

// 实现签名
function makeDate(mOrTs: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTs, d)
  }
  return new Date(mOrTs)
}

const mda = makeDate(123456788)
const mdb = makeDate(12, 24, 2019)
// const mdbc = makeDate(12, 24) // 错误的， 因为两个重载签名中需要的参数是 1个或者3个。
```

实现**函数重载**

1. **重载签名** 是没有代码块的， 即没有 **大括号 `{ ... }`**。 代码逻辑统一在 **实现签名** 中处理。
2. 需要有 **2个或更多** 的 **重载签名**。 如果只有一个重载签名， 就没必要重载。
3. **实现签名** 的**参数和返回值**必须要满足所有 **重载签名** 的**参数和返回值**
    1. 即前者是后者的 **并集**
    2. **实现签名** 在书写时， **参数和返回值** 该联合的联合， 该可选的可选。


通过**函数重载**

1. 可以为 **同一个函数名** 指定多组不同的 **签名和返回值**。
2. 静态检查更准确， 用户是无法看到 **实现签名** 的 **参数和返回值** 的。
    1. 因此 vscode 的提词器能 **明确地** 返回 **所有的** 重载签名和返回值。


## 函数重载与联合类型

```ts
// 函数重载
function switcher(x: string): boolean
function switcher(x: boolean): string
function switcher(x: string | boolean): boolean | string {
  if (typeof x === "string") {
    return true
  }
  return "hello"
}

/// sa: boolean
const sa = switcher("hello")

// 联合类型
function switcher2(x: string | boolean): boolean | string {
  if (typeof x === "string") {
    return true
  }
  return "hello"
}

// sa2: string | boolean
const sa2 = switcher2("hello")
```

虽然联合也能实现函数重载的功能，并且看起来更简单。 
1. 但 **函数重载** 更能体现 **`参数`与`返回值`** 之间对应关系。

## 个人认为的好处

1. 相同类型功能的函数使用同一个函数名， 合并同类项， 节约了认知成本。 比如说 Date 的多种签名实现相同的创建时间对象的目的。
2. 使用函数重载， 更能清晰表现出 **参数** 与 **返回值** 的关系。
3. 使用函数重载， IDE 提词器更精确。

虽然官方更推荐[使用 **联合类型** 更胜 **函数重载**](https://www.typescriptlang.org/docs/handbook/2/functions.html#writing-good-overloads) , 但 **函数重载** 的独立性依然是 **联合类型** 无法替代的。

