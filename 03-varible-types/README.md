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

```ts
let names: Array<string> = ["zhangsan", "lisi", "wangwu"]
let ages: number[] = [18, 29, 30]
```

#### 元组: Tuple

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

#### 对象: Object Types

#### 任意: any

#### 联合类型: Union Types

### type alias

### type assertions



## 03. 变量定义: `const` and `let`

## 04. 接口: `interface`

