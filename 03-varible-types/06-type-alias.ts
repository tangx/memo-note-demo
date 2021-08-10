// 类型别名
// 使用 type 关键字声明
// 使用 = 连接具体类型
// 就是取去别名， 仅仅是取别名。
type MyString = string
type MyUnion = string | number
type MyInerface = {
    Salary: number
}
type MyObject = {
    Name: MyString
    Salary: MyInerface
}

let myName: MyString = "zhangsan"
console.log("type alias::: myName =>", myName)

type MyAnotherString = string
let myAnotherName = "zhuge"
myName = myAnotherName
console.log("type alias::: myName(<- myAnotherName) =>", myName)