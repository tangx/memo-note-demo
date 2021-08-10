// 01. Array: 类型固定， 长度不固定
// tslint: Array type using 'Array<T>' is forbidden. Use 'T[]' instead.
// Array<string> 这种方法不建议使用
let users: Array<string> = ["zhangsan", "lisi", "wangwu"]
let ages: number[] = [18, 29, 30]
// usage
// 虽然 users[3] 超出边界但是不会提示错误, 运行结果为 undeined
console.log("array::: ", users[3])

// 02. Tuple: 类型固定， 长度固定
let userInfo: [string, number, boolean] = ["zhangsan", 10, true]
// usage
console.log("tuple::: ", userInfo[2])

