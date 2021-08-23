// differences-between-type-aliases-and-interfaces
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
// object
// 注意这里有 `=`
type Student = {
    Name: string
    Age?: number // ? 表示可以省略
}

type Teacher = {
    Name: string
    Salary: number
}

// interface
// An interface declaration is another way to name an object type: ???
// 与 golang 中的 interface 类似， interface 是 object 的抽象集合
// 注意没有 = 号
interface Person {
    Name: string
    Age?: number // ? 表示可以省略
}

// usage
let stu01: Student = {
    Name: "zhangsan",
    Age: 18
}
let stu02: Student = {
    Name: "wangwu"
}

console.log("object::: stu01 =>", stu01)
console.log("object::: stu02 =>", stu02)
console.log("object::: stu02.Age =>", stu02.Age) // undefined

let teacher01: Teacher = {
    Name: "zhuge",
    Salary: 100
}
console.log("object::: teacher01 =>", teacher01)

// let p1: Person = stu01
// let p2: Person = teacher01

// console.log("interface::: p1(stu01) =>", p1)
// console.log("interface::: p2(teacher01) =>", p2)
