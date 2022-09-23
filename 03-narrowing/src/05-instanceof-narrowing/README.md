# `instanceof` 类型收缩

`instanceof` 用于判断 **对象** 是否为某个 **类** 的实例。

```ts
function value(x: Date | string) {

  // 使用 instanceof 判断 x 是否为某个 类 的实例
  if (x instanceof Date) {
    console.log(typeof x);
    console.log(x.toUTCString());
    return
  }

  // 使用 typeof 判断 x 是否为某个对象
  if (typeof x === 'string') {
    console.log(x.toUpperCase());
  }
}

value(new Date())
value("Hello ts")

// object
// Fri, 23 Sep 2022 16:19:36 GMT
// 
// HELLO TS
```

对于基础类型，例如 string， 是不能使用 instanceof 进行判断的。 
因此如下代码不合法

```ts
  // 'string' only refers to a type, but is being used as a value here.ts(2693)
  if (x instanceof string) {
  }
```

## 自定义类

instanceof 同样适用于自定义类

```ts
function isPerson() {
  const p = new Person("zhangsan")
  if (p instanceof Person) {
    console.log(`${p.name} is an instance of Person`);
  }
}
isPerson()
// zhangsan is an instance of Person
```