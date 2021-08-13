// for

// const NumberDatas: number[] = [4, 5, 6]
const StringDatas: string[] = ['zhangsan', 'lisi', 'wangwu']

// for in
for (const idx in StringDatas) {
    console.log(`for-in ::: string=> idx=${idx}`)
    // 0, 1, 2
}

// for of
for (const val of StringDatas) {
    console.log(`for-of::: string=> val=${val}`)
    // zhangsan, lisi, wangwu
}

