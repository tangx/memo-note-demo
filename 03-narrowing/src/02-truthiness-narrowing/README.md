# `真值判断` 实现类型收缩

## 强制类型转换

在条件语句中， 对象会被强制进行 **类型转换**。

```ts
function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `现在有 ${numUsersOnline} 在线。`
  }

  return "现在没人在线。"
}
```

### false 的值

以下值作为条件判断时， 值为 `false`。 其他值为 `true`。

```ts
0
0n  // (bigint 的 零值)

""  // (空字符串)

false

NaN

null
undefined
```


## 其他类型转换

```ts
if (Boolean("hello")) {
  console.log(`Boolean("hello") = true`);

}

if (!!"world") {
  console.log('!!"world" = true')
}

if (!!!"") {
  console.log(`最前面的 ! 是 非运算符`);
}

// Boolean("hello") // type: boolean, value: true
// !!"world" // type: true, value: true
```

关于 `!!"world"` 的补充说明：
1. 第一个 `!"world"` 将字符串 world 转换成 **文字形式的布尔类型对象**。
2. 第二个 `!!"world"` 将文字布尔类型对象转换成 **真正的布尔对象**， 由于这里时非空字符串，因此值为 true。


```ts
if (!!!"") {
  console.log(`最前面的 ! 是 非运算符`);
}
```

关于这里的三个 `!`。 
1. 后两个与前面 `!!"world"` 中描述一致， 是类型转换。
2. 最前面的 `!` 是 **非** 运算符。 因为 `!!""` 为假， 所以再 **取非运算** 就是真。


## 类型收缩

```ts
function printAll(strs: string[] | null) {
  if (typeof strs === "object") {
    // strs: strings[] | null
    for (const s of strs) {  // Object(strs) is possibly 'null'.ts(2531)
      console.log(s);
    }
  }
}
```

之前我们说过， `null` 的类型也是 `object`。 因此在使用 `typeof` 进行了类型收缩后， strs 的类型依旧是 `string[] | null`。
因此在 for 循环时， 编译器提示我们 null 不能被遍历。

```ts
// 强制类型转换
function printAll2(strs: string[] | null) {
  if (strs && typeof strs === "object") {
    // strs: string[]
    for (const s of strs) {
      console.log(s);
    }
  }
}


// 叹号类型转换
function printAll3(tips: string, strs: string[] | null) {
  if (!!strs && typeof strs === "object") {
    // strs: string[]
    for (const s of strs) {
      console.log(`${tips} =>`, s);
    }
  }
}
```

使用 **强制类型转换** 或 **叹号类型转换**，与 typeof 进行复合类型收缩后， 可以有效的将 strs 的类型进行收到为 `string[]`。

```ts
// Boolean
function printAll4(tips: string, strs: string[] | null) {
  if (Boolean(strs) && typeof strs === "object") {
    // strs: string[] | null
    for (const s of strs) { // Object is possibly 'null'.ts(2531)
      console.log(`${tips} =>`, s);
    }
  }
}
```

使用 `Boolean(strs)` 进行真值判断， 虽然代码逻辑不会出错， 但编译器并不能收缩 strs 的类型范围。

