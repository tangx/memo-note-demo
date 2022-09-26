# 泛型函数-指定参数类型

typescript 的对于泛型参数的推断， 并不是一直都是所期望的。

```ts
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2)
}

// cca: number[]
const cca = combine([1, 2, 3], ["zhangsan"])
// ccb: string[]
const ccb = combine(["zhangsan"], [1, 2, 3])

```

如上述代码， cca 和 ccb 的推断类型分别是 `number` 和 `string`。 
即 typescript 选择使用了 **第一次** 匹配的类型。

假如某些时候， 确实需要值泛型支持多种类型， 则可以手动指定。 如下

```ts
const ccc = combine<number | string>(["zhangsan"], [1, 2, 3])
```

通过指定 `<number | string>` ， 使函数支持了 Type 为两种类型的联合类型。
