# 函数表达式


```ts
type GreeterFunc = (name: string) => void

interface Person {
  say: (name: string) => void
}

function greeter(fn: (name: string) => void, name: string) {
  fn(name)
}
```

不知道专业词汇怎么描述， 函数在 **声明** 的时候， 遵循规则如下

```ts
(参数列表) => 返回值

()=> void
(name: string) => string
(name: string, age: number) => number

(name: string|number) => name is number
```

1. **参数列表** 使用 **括号 `()`** 包裹， 参数列表可以为空。
    + 参数与类型之间使用 **冒号`:`** 分割
    + 多个参数之间使用 **逗号`,`** 分割
2. `void` 表示无返回值。
3. 使用 `=>` 箭头符号连接 **参与** 和 **返回值**


```ts
function hello(name: string): void {
  console.log(`Hello ${name}`);
}
```

还是不知道专业词汇怎么说， 函数在 **定义** 的时候， 规则如下

```ts
function 名字(参数列表): 返回值{
    逻辑代码
}

function greeter(): void{

}
function greeter(name: string): void{

}
function greeter(name: string, age: 10): void{

}
function greeter(name: string | number): name is string{

}
```

与 **声明** 时不同， 函数在 **定义** 的时候， 
1. 使用 **冒号`:`** 连接 **参数列表** 与 **返回值**。


```ts
type GreeterFunc = (name: string) => void

interface Person {
  say: (name: string) => void
  speak: GreeterFunc
}

function greeter2(fn: GreeterFunc, name: string) {
  fn(name)
}
```

可以创建一个函数类型， 在使用的时候， 更方便。
