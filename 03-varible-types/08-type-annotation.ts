// 类型注解
// 使用 `var: type` 对变量进行注解

// 变量声明
let yourName: string = "zhangsan"
const yourAge: number = 100


// 函数
function getAge(name: string): (number) {
    console.log("type annotation -> funcion::: name =>", name)
    return 26
}

let hisAge, hisName = getAge(yourName)
console.log("type annotation -> call funcion ::: hisAge =>", hisAge)
