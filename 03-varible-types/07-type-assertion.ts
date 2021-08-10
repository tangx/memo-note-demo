// 类型断言

// 模糊转精确, 字面类型一致
// any -> number
let a: any = 100
let a1 = a as number
console.log("type assertion::: a1 =>", a1)

// 模糊转精确， 字面类型不一致
// any -> number
let s: any = "zhangsan"
let s1 = s as number
console.log("type assertion::: s1 =>", s1)

// 精确转模糊
// number -> any
// s1 是 number
let s2 = s1 as any

// 精确转精确
let num: number = 100
let str1 = num as string // 错误