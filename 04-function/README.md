# 函数

> https://www.typescriptlang.org/docs/handbook/2/functions.html

## 函数定义

函数定义 `function func(参数:类型):(返回类型) { ... }`

1. `(参数:类型)` 可以省略: `function func(): (void)`

2. `(返回类型)` 可以省略: `function func()`
    + 省略后， `:` 可以一起省略

```ts
function func1() {
    console.log("function::: func1")
}

// 调用: call func
func1()

```

3. 参数类型 `func2(name: string, age?: number, gender: boolean = true)`
    + `name: string` : 必选参数
    + `age?: number` : 可选参数，冒号 `:` 前增加 `?`
    + `gender: boolean = true` : 带默认值参数， 类型定义后使用 ` = default_value` 赋值。

```ts
// name: 必选参数
// age: 可选参数
// gender: 默认参数
function func2(summary: string, name: string, age?: number, gender: boolean = true): void {
    console.log("function::: func2 ==> ", summary)
    console.log("    name=> ", name)
    console.log("    age=> ", age)
    console.log("    gender=> ", gender)

    if (age) {
        console.log("    只有 age 传值才能看到这行, age=> ", age)
    }

    console.log("    三元表达式 (age ? age : 10) 判断 age 是否没有传值, 并设置默认值=> ", age ? age : 10)
}

// 传参
func2("所有参数: zhuge, 20, false", "zhuge", 20, false)
func2("只有必须参数: zhangsan", "zhangsan")
// 可选参数可以通过 undefined
func2("跳过可选参数: guanyu, undefined, false", "guanyu", undefined, false)

```

4. 可变长参数 `func3(sum: number, ...nums: number[]): void`
    + 形参名称格式为 `...nums`, 形参类型为 `数组类型`
    + 可变长参数的 **传值个数** 为 **0 个或 多个**: `func3(0)`, `func3(0,1,2,3,4)`
    + 可变长参数 **必须** 放在参数列表位置最后面

```ts
// 可变长参数
// 形参名称前面使用 `...`, 类型使用 array
function func3(sum: number, ...nums: number[]): void {
    for (let num of nums) {
        sum += num
    }
    console.log("function::: func3 ===> sum", sum)
}

func3(0)
func3(0, 1, 2, 3, 4)
```

5. 调用: `func(...)`, 函数名后 + 括号 表示调用

