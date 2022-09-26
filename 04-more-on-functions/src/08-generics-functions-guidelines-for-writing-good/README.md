# 泛型函数-实践指导

## Push Type Parameters Down （下沉类型参数）

```ts
// good
function firstElement1<Type>(arr: Type[]) {
  return arr[0]
}

// bad
function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0]
}

// a: number (good)
const fea = firstElement1([1, 2, 3]);
// b: any (bad)
const feb = firstElement2([1, 2, 3]);
```

firstElement1 和 firstElement2 有一些细微的差别。

1. 前者中的 Type 是一个 **基础类型**， 后者中的 Type 是一个 **基础类型的数组**
2. 前者返回值是 Type 类型， 后者返回值是 any 类型。

所有传参和返回值的类型是必须的， 尽量不要使用 any 。

## Use Fewer Type Parameters (减少类型参数的使用)


```ts
// good
function filter1<Type>(arr: Type[], func: (arg: Type) => Type): Type[] {
  return arr.filter(func)
}

// bad
function filter2<Type, Func extends (arg: Type) => Type>(arr: Type[], func: Func) {
  return arr.filter(func)
}
```

filter2 并不是一个好的实践：

1. `Func` 并不能关联多种函数定义。
2. 他人在调用 filter2 的时候， **不得不** 对额外的的 Func 进行类型限定， 难于使用。


## Type Parameters Should Appear Twice (类型函数应支持多种参数类型)

泛型是为了支持多种参数类型而生的。 
如果限制条件过于严苛， 失去了 **接受多种类型的特性** 反而变得没有意义。

```ts
// bad
function greeter1<Str extends string>(name: Str) {
  console.log("hello", name);
}

// good
function greeter2(name: string) {
  console.log("hello", name);
}
```

如上述代码中的 greeter1 中， `<Str extends string>` 就值支持 string 一种类型， 反而是为了泛型而泛型。
不如 greeter2 来的简洁。

