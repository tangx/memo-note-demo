# 类型守卫


```ts
console.log(strs, "typeof ==", typeof strs);
```

可以看到， 通过 `typeof` 关键字， 可以获得对象的 **真实类型**。

> 注意， `null` 的类型是 `object`

并且可以通过 **全等运算符 `===`** 进行类型判断

```ts
  if (typeof strs === 'object') {
    console.log("strs 是 object 类型");
  }
```



## demo

```ts
function printAll(strs: string | string[] | null) {
  console.log(strs, "typeof ==", typeof strs);

  if (typeof strs === 'object') {
    console.log("strs 是 object 类型");
  } else if (typeof strs === 'string') {
    console.log("strs 是 string 类型");
  }

}

printAll("abc")
printAll(["abc", "def"])
printAll(null)

// abc typeof == string
// strs 是 string 类型
// [ 'abc', 'def' ] typeof == object
// strs 是 object 类型
// null typeof == object
// strs 是 object 类型
```
