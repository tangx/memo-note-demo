# 泛型函数-限制条件

在某些时候， 单独通过 **泛型** 并不能解决所有问题。
可能在逻辑代码中，要求传入的类型 **必须** 具有某种特质。

这个时候，我们可以考虑使用 `extends` 加入 **限制** 

```ts
function longest<Type extends { length: number }>(a: Type, b: Type): Type {
  if (a.length > b.length) {
    return a
  }

  return b
}
```

如上述代码， 不仅使用泛型的时候， 还额外添加了现实条件， 所有 Type 必须包含 `{length: number}` 属性。

```ts
// la: number[]
const la = longest([1, 2], [2, 3, 4])

// lb: number[] | string[]
const lb = longest([1, 2], ['a', 'b', 'c'])

// lc: "zhang" | "zhao"
const lc = longest('zhang', 'zhao')

// ld: string
const ld = longest<string>('zhang', 'zhao')
```

在调用的时候， typescript 默认帮我们推断出了 Type 的类型。
1. la 为 `number[]`， 因为传入了2个数字数组。
2. lb 为 `number[] | string[]` 的联合类型， 因为传入了数字数组与字符串数组。
3. **需要特别注意的是**， lc 为 `"zhang" | "zhao"` 的字符串字面量类型的 **联合类型** ， 而非 **string**。
4. ld 为 `string`。 为了避免类似 **3** 中的推断情况，可以手动指定所传入的类型。


## 错误代码

```ts
// This overload signature is not compatible with its implementation signature.ts(2394)
// index.ts(2, 10): The implementation signature is declared here.
// 'longest', which lacks return-type annotation, implicitly has an 'any' return type.ts(7010)

function longest<Type implements { length: number }> (a: Type, b: Type): Type {
  if (a.length > b.length) {
    return a
  }
  return b
}
```

在类型扩展的时候， 只能使用 `extends` 而不能使用 `implements`。
