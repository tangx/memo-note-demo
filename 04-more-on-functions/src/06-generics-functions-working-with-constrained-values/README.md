# 泛型函数-使用限制条件的常见错误

在使用具有限制条件的泛型函数时， 一个常见的错误

```ts
function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number,
): Type {
  if (obj.length >= minimum) {
    return obj
  }

  // '{ length: any; }' is assignable to the constraint of type 'Type', but 'Type' could be instantiated with a different subtype of constraint '{ length: number; }'.ts(2322)

  return { length: number }

}
```

上述代码中， 我们期待一个 `Type` 类型的返回值。 
但是在 `if` 条件不成立的时候， 返回了 `{ length: number }`。
事实上， 这并不是一个 `Type` 类型。


```ts
function minimumLength2<Type extends { length: number }>(
  obj: Type,
  minimum: number,
): Type | undefined {
  if (obj.length >= minimum) {
    return obj
  }

  return undefined
}

const min_a = minimumLength2([1, 2, 3], 6)
console.log(min_a?.slice(0))
```

可以通过返回 **联合类型** 来规避这种错误。


