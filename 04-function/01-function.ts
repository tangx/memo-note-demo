// 函数
// https://www.typescriptlang.org/docs/handbook/2/functions.html

function func1() {
    console.log("function::: func1")
}

// 调用: call func
func1()


// name: 必选参数
// age: 可选参数
// gender: 默认参数
function func2(summary: string, name: string, age?: number, gender: boolean = true): void {
    console.log("function::: func2 ==> ", summary)
    console.log("    name=> ", name)
    console.log("    age=> ", age)
    console.log("    gender=> ", gender)

    if (age) {
        console.log("    只有 age 传值才能看到这行, age=> ", age)
    }

    console.log("    三元表达式 (age ? age : 10) 判断 age 是否没有传值, 并设置默认值=> ", age ? age : 10)
}

// 传参
func2("所有参数: zhuge, 20, false", "zhuge", 20, false)
func2("只有必须参数: zhangsan", "zhangsan")
// 可选参数可以通过 undefined
func2("跳过可选参数: guanyu, undefined, false", "guanyu", undefined, false)


// 可变长参数
// 形参名称前面使用 `...`, 类型使用 array
function func3(sum: number, ...nums: number[]): void {
    for (let num of nums) {
        sum += num
    }
    console.log("function::: func3 ===> sum", sum)
}

func3(0)
func3(0, 1, 2, 3, 4)
