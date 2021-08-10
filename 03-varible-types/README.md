# varible type

> https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

## 01. types

### primitives types / simple types

```ts
string // 字符串
number // 数字
boolean  // 布尔
```

```ts
let user: string = "zhangsan"
let age: number = 18
let gender: boolean = true

console.log("simple types::: ", gender)
```

### complex types

```ts
array
tuple
object
any
Union Types
```

#### 数组: Array

1. Array: 类型固定， 长度不固定
2. 虽然 `users[3]` 超出边界但是不会提示错误, 其结果为 undeined

```ts
// declare
let users: Array<string> = ["zhangsan", "lisi", "wangwu"]
let ages: number[] = [18, 29, 30]
// usage
console.log("array::: ", users[3])
```

#### 元组: Tuple

1. Tuple: 类型固定， 长度固定。 且必须 **一一对应**
2. `userInfo[3]` 超出边界时， 编译器将提示错误。

```ts
let userInfo: [string, number, boolean] = ["zhangsan", 10, true]
// usage
console.log("tuple::: ", userInfo[2])
```

#### 枚举: enum

> 官网: 了解即可 https://www.typescriptlang.org/docs/handbook/enums.html

1. 默认从0开始: Male
2. 可以在任意位置设置新值 : Female
3. 下一个为申明值的字段 +1 : Unknown
4. 枚举值类型可以不一致, 但不要这样做。 : Undefined

```ts
enum Gender {
    Male, // 0 
    Female = 10, //10
    Unknown, // 11
    Undefined = "undefined", // undefined
}
enum Colors {
    Red = "red",
    Green = "green",
}

// usage
let myGender: Gender = Gender.Male
if (myGender === Gender.Male) {
    console.log("hey man")
}
// 虽然值类型不一样，但是可以比较， 因为他们都是 Enums 的元素。
if (myGender === Gender.Undefined) {
    console.log("myGender::: check true")
} else {
    console.log("myGender::: check failed")
}
```

#### 对象对象: Object Types

#### 接口类型: `interface`



#### 联合类型: Union Types



#### never

#### void

#### 任意类型: any

1. 就是 **任意类型** 的意思
2. 虽然好用，但是尽量不要用。 除非明确知道需要自己在做什么
3. 编译器将跳过对 `any` 类型的检查
    + `tsconfig.json` 中打开 `noImplicitAny` 后， `any` 将会提示错误。

```ts
let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed 
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
```

### type alias

### type assertions



## 03. 变量定义: `const` and `let`

