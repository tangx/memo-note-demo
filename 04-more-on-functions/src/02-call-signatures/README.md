# 调用签名

在 JavaScript 中，函数除了可调用之外还可以具有属性。

但是，在 typescript 函数类型表达式语法不允许声明属性。 但如果我们想用属性描述可调用的东西，我们可以在对象类型中编写 **调用签名** 

```ts
type DescribableFunction = {
  description: string
  (name: string): boolean
}
```

首先定义一个函数类型（可能） `DescribableFunction`， 其中
1. 包含一个字符串属性 `description`
2. 一个匿名函数 `(name: string): boolean`。 


```ts
// 无效声明
const df12 = {
  description: "df22",
  (name: string): boolean => {
    console.log(`${name}`);
    return Math.random() < 0.5
  }
} as DescribableFunction
```

在初始化对象的时候， 事实上并不能通过上述代码实现。


```ts
function df1(name: string): boolean {
  console.log(`df1: name is ${name}`);
  return Math.random() < 0.5;
}

df1.description = "this is df1"
```

而是使用上述代码， 
1. 先创建一个函数 df1, `function df1(name: string):boolean{}`
2. 在为其添加签名， `df1.description=xxxx`

```ts
function sayName(fn: DescribableFunction) {
  console.log(`${fn.description} returned`, fn("zhangsan"));
}

sayName(df1)
```

通过在 `sayName` 中限定传入参数， 隐式转换实现的。 
事实上， df1 本身并不是 DescribaleFunction 类型。

```ts
const df11 = df1 as DescribableFunction
```

当 df1 具有 description 属性后， 就满足了 DescribableFunction 的定义， 可以通过 as 进行类型断言。

## 对象中的具名函数

```ts

//  第二种

type DescribableFunction2 = {
  description: string
  do: (name: string) => boolean
}

function sayName2(fn: DescribableFunction2) {
  console.log(`${fn.description} returned`, fn.do("zhangsan"));
}

```

事实上，可能 `DescribableFunction2` 与 `DescribableFunction` 的定义已经不同了。 

当 `DescribableFunction2` 包含具名函数时， 

```ts
// 初始化1
function fn(name: string): boolean {
  console.log(`fn: name is ${name}`);
  return Math.random() < 0.5;
}

const df2 = {
  description: "this is DescribableFunction2",
  do: fn,
} as DescribableFunction2


// 初始化 2
const df22 = {
  description: "df22",
  do: (name: string): boolean => {
    console.log(`${name}`);
    return Math.random() < 0.5
  }
} as DescribableFunction2
```

其初始化就简单了。