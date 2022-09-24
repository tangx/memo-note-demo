# 控制流分析

```ts

function example() {

  let x: string | number | boolean
  x = Math.random() < 0.5

  // x: boolean
  console.log(x);  // boolean 没有返回条件

  if (Math.random() < 0.5) {
    x = 'hello';
    // x: string
    console.log(x);
  } else {
    x = 100;
    // x:number
    console.log(x);
  }

  return x
}

// y: number | string
let y = example()
console.log('@', typeof y);
```

可以看到， 虽然 x 在被定义的时候具有三个类型 `string | number | boolean`。
但是在后面的 `if` 条件判断中， 只有返回了 `hello` 和 `100` 两个值， 即 `string | number` 两种类型。

