
type GreeterFunc = (name: string) => void
type MyFunc = (name: string | number) => name is number

interface Person {
  say: (name: string) => void
  speak: GreeterFunc
}

function greeter2(fn: GreeterFunc, name: string) {
  fn(name)
}

function greeter(fn: (name: string) => void, name: string) {
  fn(name)
}

function hello(name: string): void {
  console.log(`Hello ${name}`);
}

function speech(name: string): void {
  console.log(`Speech ${name}`);
}

greeter(hello, "zhangsan")
greeter(speech, "wangwu")

