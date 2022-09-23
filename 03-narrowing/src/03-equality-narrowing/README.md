# `等值判断` 类型收缩

等值判断符号

```ts
=== // 全等
!== // 全不等
==  // 等于
!=  // 不等于
```

## 等于与全等的区别

简而言之，在比较两件事情时

1. 双等号将执行类型转换， **对值进行比较**
2. 三等号将进行相同的比较，**而不进行类型转换** ( **如果类型不同，只是总会返回 false** );

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness


## 等值判断

### 全等判断的应用

```ts
function example(x: string | number, y: string | boolean) {
  // Property 'toUpperCase' does not exist on type 'string | number'.
  //   Property 'toUpperCase' does not exist on type 'number'.ts(2339)
  x.toUpperCase()

  // Property 'toLowerCase' does not exist on type 'string | boolean'.
  //   Property 'toLowerCase' does not exist on type 'false'.ts(2339)
  y.toLowerCase()
}
```

在上面这段代码中， 由于 x, y 是多种类型， 且所调用的字符串方法在 **number 或 boolean** 上没有， 因此编译器提示错误。

```ts
function example2(x: string | number, y: string | boolean) {
  if (x === y) {

    // x: string
    x.toUpperCase()
    // y: string
    y.toLowerCase()
  }
}
```

在通过对 `x===y` 的全等判断后， 编译器推断复合条件时， x, y 都为 string 类型。


## 等于判断的应用

```ts
function multipleValue(value: number | null | undefined, factor: number) {
  if (value != null) {
    console.log(`${value} * ${factor} =`, value * factor);
    return
  }
  console.log(`value = ${value}`);
}

multipleValue(6, 5)
multipleValue(null, 5)
multipleValue(undefined, 5)

// 6 * 5 = 30
// value = null
// value = undefined
```

由于 value 支持多种 **空值 `null, undefined`**。 
因此使用 **等于** 代码逻辑看起来会简单一点， 因为在比较过程中会 **隐式** 进行类型转换。

```ts
if (value != null) {

}
```

如果使用全等，则需要对两个可能的空值进行判断。 
代码如下

```ts
if (value !== null && value !== undefined) {

}
```