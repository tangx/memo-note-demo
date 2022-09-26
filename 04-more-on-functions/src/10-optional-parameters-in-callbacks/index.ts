
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i) // call 传入了所有参数的时候， 是没问题的
  }
}


function myForEach2(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]) // 由于 index 的是可选的， 所以此时 callback 的传参也是合法的。
  }
}


myForEach2([0, 1, 2], (n) => {
  console.log(n);
})




myForEach2([0, 1, 2], (n, i) => {
  /*
    (parameter) i: number | undefined
    Object is possibly 'undefined'.ts(2532)
  */
  console.log(n, "toFixed =>", i?.toFixed(2));
})


const arr = [0, 1, 2]
function myToFixed(n: number, i: number) {
  console.log(n, "toFixed =>", i.toFixed(2));
}
myForEach2(arr, myToFixed)