
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
