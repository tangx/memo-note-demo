// 获取当前时间
const now = new Date()
console.log("now:::", now)

// 将字符串时间转换为 Date 时间对象
const timeStr = '2006-01-02T13:04:05Z'
const dt = new Date(timeStr)
console.log("dt:::", dt)  // dt::: 2006-01-02T13:04:05.000Z

// 根据时间属性创建
const dt2 = new Date(Date.UTC(2006, 0, 2, 15, 4, 5));
console.log("event:::", dt2);



// 获取时间属性操作
const year = dt.getFullYear() // 2006
const month = dt.getMonth() // 0
const date = dt.getDate() // 2
console.log(`${year}-${month}-${date}`); // 2006-0-2


// 时间对象转字符串
console.log(now.toString(), now.toDateString(), now.toLocaleDateString());

// toISOString() 方法返回一个 ISO（ISO 8601 Extended Format）格式的字符串： YYYY-MM-DDTHH:mm:ss.sssZ。时区总是UTC（协调世界时），加一个后缀“Z”标识。
console.log("toISOString,,,", dt.toISOString())
console.log("toISOString,,,", dt.toJSON())

// 时间比较
if (dt > now) {
    console.log("dt > now = ", true)
}
console.log("dt > now = ", dt > now)



// 时间前后操作
// https://www.jianshu.com/p/066e8404485
const nowClone = now
now.setFullYear(now.getFullYear() + 1)
console.log("1 year laster, now:::", now, nowClone); // nowClone 也会被修改



// 深度拷贝， 浅拷贝
const now2 = new Date(now.toJSON())

console.log(now2, now)
console.log("now2 == now", now2 == now)  // false 时间对象对比
console.log("now.toJSON() === now2.toJSON()", now.toJSON() === now2.toJSON()) // 字面值对比
console.log("now2 >= now", now2 >= now)  // true 
