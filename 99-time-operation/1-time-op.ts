const timeStr = '2021-08-23T02:42:17Z'

// 将字符串时间转换为 Date 时间对象
const dt = new Date(timeStr)

// 输出 Date 时间对象
console.log("dt:::", dt)

// 调用 Date 时间对象方法
// console.log(dt.getFullYear(), dt.getMonth(), dt.getDate(), dt.getHours())


// 获取当前时间
const now = new Date()
console.log("now:::", now)


// 时间比较
if (dt > now) {
    console.log("dt > now = ", true)
}
console.log("dt > now = ", dt > now)



// 时间加减法
// https://www.jianshu.com/p/066e8404485
now.setFullYear(now.getFullYear() + 1)
console.log("1 year laster, now:::", now);
