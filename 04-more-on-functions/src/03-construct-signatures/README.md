# 构造器签名

JavaScript functions can also be invoked with the `new` operator. TypeScript refers to these as constructors because they usually create a new object. You can write a `construct signature` by adding the `new` keyword in front of a `call signature`

**构造器签名**， 就是在 **调用签名** 前使用 `new` 关键字。

```ts

class Ctor {
  name: string
  age: number
  constructor(s: string, age: number) {
    this.name = s
    this.age = age
  }
}

type SomeConstructor = {
  new(s: string, n: number): Ctor
}

function fn(ctor: SomeConstructor): Ctor {
  return new ctor("hello", 18)
}

const f = fn(Ctor)
console.log(f.name);
```

虽然不晓得**构造器签名**有什么用， 但是感觉很厉害。

```ts
interface CallOrConstruct {
  new (s: string): Date;
  (n?: number): number;
}
```

构造器签名和调用签名可以同时使用。