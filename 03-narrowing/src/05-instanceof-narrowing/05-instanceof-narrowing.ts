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

  // 'string' only refers to a type, but is being used as a value here.ts(2693)
  // if (x instanceof string) {
  // }
}

value(new Date())
value("Hello ts")

// object
// Fri, 23 Sep 2022 16:19:36 GMT
// 
// HELLO TS


class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

function isPerson() {
  const p = new Person("zhangsan")
  if (p instanceof Person) {
    console.log(`${p.name} is an instance of Person`);
  }
}
isPerson()
// zhangsan is an instance of Person