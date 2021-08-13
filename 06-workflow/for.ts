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

for (const [key, val] of StringDatas) {
    console.log(`for-of::: key=>${key}, value=>${val}`)
}


// loop map
let NameSiteMapping = new Map();

NameSiteMapping.set("Google", 1);
NameSiteMapping.set("Runoob", 2);
NameSiteMapping.set("Taobao", 3);

for (const [key, val] of NameSiteMapping) {
    console.log(`for-of::: [key,val] key=>${key}, value=>${val}`)
}


for (const val of NameSiteMapping) {
    console.log(`for-of::: val value=>${val}`)
}


// for range

for (let i = 0; i < 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    if (i === 14) {
        break;
    }
    console.log(i)
}
