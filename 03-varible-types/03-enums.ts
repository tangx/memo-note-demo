
// complex types

// 03. 枚举 Enums.
// 官网: 了解即可， 不一定非要掌握
// https://www.typescriptlang.org/docs/handbook/enums.html
// 自动添加
// 1. 默认从0开始: Male
// 2. 可以在任意位置设置新值 : Female
// 3. 下一个为申明值的字段 +1 : Unknown
// 4. 枚举值类型可以不一致, 但不要这样做。 : Undefined
enum Gender {
    Male, // 0
    Female = 10, // 10
    Unknown, // 11
    Undefined = "undefined", // undefined
}
enum Colors {
    Red = "red",
    Green = "green",
}

// usage
console.log("enums::: Gender=>", Gender)

let myGender: Gender = Gender.Male
if (myGender === Gender.Male) {
    console.log("enums::: hey man", myGender)
}
// // 虽然值类型不一样，但是可以比较， 因为他们都是 Enums 的元素。
// if (myGender === Gender.Undefined) {
//     console.log("enums::: gender check true")
// } else {
//     console.log("enums::: gender check failed")
// }
