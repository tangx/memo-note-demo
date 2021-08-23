// if

const isTrue: boolean = true
const isFalse: boolean = false

const num11: number = 11
const Num11: number = 11
const str11: string = '11'

const zeroNumber: number = 0
const blankString: string = ''
const emptyArray: [] = []


// boolean condition
if (isTrue) {
    console.log("if::: 布尔判断::: isTrue => true")
}
if (!isFalse) {
    console.log("if::: 布尔判断::: !isFalse => true")
}


// compare condition
if (num11 == Num11) {
    console.log("if::: 值比较::: num11 == Num11 => true (值相同, 类型也相同)")
}
// if (num11 == str11) {
//     console.log("if::: 值比较::: num11 == str11 => true (值相同, 类型不同)")
// }
// if (num11 === str11) {
//     console.log("if::: 值比较::: num11 === str11")
// } else {
//     console.log("if::: 值比较::: num11 === str11 => false (类型不同)")
// }

// iterial condition 字面量
if (num11) {
    console.log(`if::: 字面量::: num11= ${num11} => true`)
}
if (str11) {
    console.log(`if::: 字面量::: str11= ${str11} => true`)
}

// 0 为假
if (!0) {
    console.log(`if::: 字面量 空::: 0 => false`)
}
if (zeroNumber) {
    console.log(`if::: 字面量 空::: zeroNumber => true`)
} else {
    console.log(`if::: 字面量 空::: zeroNumber => false`)
}

// 空字符串为 假
if (!'') {
    console.log(`if::: 字面量 空::: '' => false`)
}
if (blankString) {
    console.log(`if::: 字面量 空::: blankString => true`)
} else {
    console.log(`if::: 字面量 空::: blankString => false`)
}


// 空数组为真
if ([]) {
    console.log(`if::: 字面量 空::: [] => true`)
}
if (emptyArray) {
    console.log(`if::: 字面量 空::: emptyArray => true`)
} else {
    console.log(`if::: 字面量 空::: emptyArray => false`)
}

if (!emptyArray.length) {
    console.log(`if::: 字面量 空::: emptyArray.length => false`)
}



// mutilple conditions
if (isTrue && !isFalse) {
    console.log("if::: 组合判断::: isTrue && !isFalse => true")
}

if (isFalse || isTrue) {
    console.log("if::: 组合判断::: isFalse || isTrue => true")
}