// 联合类型， 使用 `|` 联合一个或多个
// Teacher 之前定义的 object
// Person: 之前定义的 interface
type UnionType = string | number | null | Teacher | Person

let utString: UnionType = "zhangsan"
let utNumber: UnionType = 18
let utNull: UnionType = null
let utTeacher: UnionType = { Name: "zhangsan", Salary: 10 }
let utPerson: UnionType = { Name: "wangwu" } // interface

console.log("union-type::: utString =>", utString)
console.log("union-type::: utNull =>", utNull)
console.log("union-type::: utPerson =>", utPerson)
console.log("union-type::: utTeacher =>", utTeacher)
