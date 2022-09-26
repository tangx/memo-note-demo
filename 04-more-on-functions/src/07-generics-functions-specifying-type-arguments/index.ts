function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2)
}

// // cca: number[]
// const cca = combine([1, 2, 3], ["zhangsan"])
// // ccb: string[]
// const ccb = combine(["zhangsan"], [1, 2, 3])

const ccc = combine<number | string>(["zhangsan"], [1, 2, 3])

console.log(ccc);
