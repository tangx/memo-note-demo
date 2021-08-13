# 流程控制 

## for 循环

```ts
for (const item in/of Iterators ){
    // statement
}

for (let i = 0; i < 20; i++) {
    // statement
}
```

迭代器包括: `Array`, `Map`, `Set`, `String`, `Int32Array`, `Uint32Array` 等

### `for loop Array`


+ `for idx in Array` 返回 **索引值**: `0,1,2,3`
+ `for val of Array` 返回 **value**: `zhangsan, lisi, wangwu`



```ts
// typescript
const StringDatas: string[] = ['zhangsan', 'lisi', 'wangwu']

// for in
for (const idx in StringDatas) {
    console.log(`for-in ::: string=> idx=> ${idx}`)
    // idx=> 0
}

// for of
for (const val of StringDatas) {
    console.log(`for-of::: string=> val=> ${val}`)
    // val=> zhangsan
}

```

### `for loop Map`


+ `for in` : 不能用
+ `for [key,val] of Map` 同时返回 **key, value**
+ `for item of Map` 返回键值一体的一个对象。



```ts
// typescript
// loop map
let NameSiteMapping = new Map();
NameSiteMapping.set("Google", 1);
NameSiteMapping.set("Runoob", 2);
NameSiteMapping.set("Taobao", 3);

for (const [key, val] of NameSiteMapping) {
    console.log(`for-of::: [key,val] key=>${key}, value=>${val}`)
    // key=> Google , value=> 1
}
```


### `break` and `continue`

```ts
// typescript

for (let i = 0; i < 20; i++) {
    if (i % 3 === 0) {
        continue;
    }

    if (i === 14) {
        break;
    }
    
    console.log(i)
}
```


### 迭代器与生成器

> https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html

