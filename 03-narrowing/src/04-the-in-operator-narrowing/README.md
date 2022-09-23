# `in 操作符` 缩小范围

使用 **in 操作符** 时， 简单来说， 就是判断某个 **字面量** 是否在对象中。 
因此字面量需要使用 **引号** 括起来， 看起来就像是一个字符串。

例如 `swim` 是否在 `animal` 中， 或者说 animal 是否有 swim 属性。

```ts
type Fish = {
  swim: () => void
  name: string
}

type Bird = {
  fly: () => void
}

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    console.log(`this animal's name is ${animal.name}`);
    console.log("this animal can swim");
    return
  }

  console.log("this animal can fly");
  return animal.fly()
}

// ==== a fish
// this animal's name is fish
// this animal can swim
// ++++ a bird
// this animal can fly
```

在上面例子中， 
1. `swim` 是 function 类型。
2. 而 `name` 是 string 类型。
