# 可选参数


## 必选参数

一个普通的带有参数的函数如下。

```ts
// n: number
function requiredParams(n: number) {
  console.log(n);
}
```

这个时候参数比如传递， 因此又叫 **必选参数**。


## 可选参数

如果参数根据实际情况， 可以传递又可以省略呢？

```ts
// n: number | undefined
function optionalParams(n?: number) {
  console.log("optionalParams =>", n);
}
optionalParams()
optionalParams(10)
optionalParams(undefined)
```

在参数定义的时候， 使用 `?:` 就可以是参数为 **可选参数**。
在上述代码中， 
1. n 的类型时候 `number | undefined`。 
2. 当用户没有传递实参的时候， typescript 实际会默认传递 `undefined`


## 默认值参数

同样的， 可以在函数定义的时候， 为参数设置 **默认值**。

```ts
function defaultValueParams1(n: number = 10) {
  console.log("defaultValueParams =>", n);
}

// n: number
function defaultValueParams2(n = 10) {
  console.log("defaultValueParams =>", n);
}
defaultValueParams1(3)
defaultValueParams2()
```

上述代码中， n 的类型是中为 `number`。 
1. 因为即使用户不传递任何值， 也会使用默认值 10。
2. defaultValueParams1 强制约定了 n 的类型是 number。 因此默认值不能是其他类型。
2. defaultValueParams2 设置了默认值 10， typescript 通过类型推断， n 的类型是 number。
