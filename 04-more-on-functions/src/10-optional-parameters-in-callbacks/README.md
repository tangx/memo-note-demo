# 回调函数中的可选参数

> 先说结论：
>> 1. 在回调函数中， 通常 **不要写** 可选参数。
>> 2. 如果非要写， 那就必须要做好 **不传可选参数** 的分支处理。


结合 **回调函数** 和 **可选参数** ， 可能写出以下代码

```ts
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i) // call 传入了所有参数的时候， 是没问题的
  }
}
```

咋一看， 代码没什么问题。 因为回调函数 `callback` 在被调用的时候， 传入了所有参数。

但是， index 作为可选参数， 以下代码在某种情况， 也是合法的。

```ts
function myForEach2(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]) // 由于 index 的是可选的， 所以此时 callback 的传参也是合法的。
  }
}
```

这个时候， 如果 callback 函数执行的时候， 不使用 index 是没问题的。

```ts
myForEach2([0, 1, 2], (n) => {
  console.log(n);
})
```

但是， 如果 callback 函数执行的时候， 使用 index 麻烦就来了。

```ts
myForEach2([0, 1, 2], (n, index) => {
  /*
    (parameter) i: number | undefined
    Object is possibly 'undefined'.ts(2532)
  */
  console.log(n, "toFixed =>", index.toFixed(2));
})
```

由于 index 在 myForEach2 中并没有传递。 所以 `index.toFixed(2)` 实际上就是 `undefined.toFixed(2)`。 这是不合法的。

直接在 myForEach2 中写匿名函数， typescript 还可能会默认补齐 **问号 `?`**， 表示 index 是可选参数。

```ts
console.log(n, "toFixed =>", index?.toFixed(2));
```

如果在外部已经声明了参数， 更具具有迷惑性。

```ts
const arr = [0, 1, 2]
function myToFixed(n: number, i: number) {
  console.log(n, "toFixed =>", i.toFixed(2));
}
myForEach2(arr, myToFixed)
```

补充， 这种情况下， IDE 也会提示 myToFixed 错误。

