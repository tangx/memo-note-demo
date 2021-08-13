# 流程控制 

## `if`

语法结构如下

```ts

if (!condition && cond1 || cond2) {
    // statement
} else {
    // statement
}
```

**操作符**

+ `!` 取反 `!true = false`
+ `&&` 与 `true && false = false`
+ `||` 或 `false || true = true`

**条件值**

+ 数字`0`, 空字符串 `''`, 为 **`false`**
+ 空数组 `[]`, 为 **`true`**


### double `==` and triple `===`

在 `JavaScript` 中， 
+ `==` 只比较**字面量**， 即 **`11 == '11'` 结果为 `true`**
+ `===` 不仅比较字面量， 还会比较类型 即 **`11 === '11'` 结果为 `false`**`

在 `TypeScript` ， `11 === '11'` 会提示错误， 但是依旧可以编译成 js 文件。 
为了防止犯错， 直接使用 `===` 就好了。

> 引用: https://stackoverflow.com/a/57126110


```ts
// typescript
const num11: number = 11
const Num11: number = 11
const str11: string = '11'

if (num11 == Num11) {
    console.log("if::: 值比较::: num11 == Num11 => true (值相同, 类型也相同)")
}

// 提示错误
if (num11 == str11) { 
    console.log("if::: 值比较::: num11 == str11 => true (值相同, 类型不同)")
}
// 提示错误
if (num11 === str11) {
    console.log("if::: 值比较::: num11 === str11")
} else {
    console.log("if::: 值比较::: num11 === str11 => false (类型不同)")
}
```

