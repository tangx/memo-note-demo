# 赋值定义缩小类型

```ts
// let x: number
let x = Math.random() < 0.5 ? 10 : 'hello world'
```

ts 编译器推断， x 的值可能是 `10` 或者 `hello world`。 因此值类型应该为 `string | number`。

```ts
x = 1
x = 'goodbye!'
```

由于使用 `let` 赋值， 因此可以为 x 重新赋值 **数字类型 `1`** 或 **字符串类型 `goodbye!`**。

```ts
x = true // TS2322: Type 'boolean' is not assignable to type 'string | number'.
```

但是为 x 赋值 **布尔类型 `true`** 的时候， 编译器提示报错。
