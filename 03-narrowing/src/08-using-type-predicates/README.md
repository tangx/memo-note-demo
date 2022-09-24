# 使用类型谓语

```ts
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}
```

使用 **类型谓语** 也可以缩小类型范围。 
使用 **类型谓语** 的格式为 `<paramName> is <Type>`， 其中 `paramName` 必须是是某个 **形参**。 例如上述代码中的 `pet`。

`isFish` 函数中， `return` 本身返回值是一个 **布尔类型**， 但是遇到 `pet is Fish` 类型谓语后，
1. 如果返回值为真， 则 `pet` 为 `Fish`
2. 如果返回值为假， 则 `pet` 为 **其他类型**。 由于 pet 传入类型的限制， 所以 pet 这里是 `Bird`。

```ts
function isFish_3(pet: Fish | Bird | Dog): pet is Fish {
  return (pet as Fish).swim !== undefined
}
```

正如上面所言， 当在 `isFish_3` 中扩展 `pet: Fish | Bird | Dog` 后， 条件为 **假** 时， pet 可能是 Bird 或 Dog。

```ts
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}
```

书接上文， 当使用 `isFish(pet)` 作为 **条件** 进行判断时， 
1. 若为 **真** ， 则 pet 是 Fish， 可以直接在分支语句中调用 `pet.swim()`。
2. 若为 **假** ， 则 typescript 推断 pet 为 Bird（只有2中情况）， 可以在分支语句中调用 `pet.fly()`。 
    + 若使用 `isFish_3(pet)` 作为 **条件**， 则 typesciprt 推断 pet 可能为 Bird 或 Dog， 则不能需要进一步的判断。
