
function firstElement(arr: any[]): any {
  return arr[0]
}

// aa: any
const aa = firstElement([0, 1, 2])

function firstElementGenerics<MyType>(arr: MyType[]): MyType {
  return arr[0]
}

// a: number
const a = firstElementGenerics([1, 2, 34])
// b: string
const b = firstElementGenerics(['a', 'bc', 'de'])
// c: never
const c = firstElementGenerics([])

// d: string
const d = firstElementGenerics<string>(['a', 'b', 'c'])
