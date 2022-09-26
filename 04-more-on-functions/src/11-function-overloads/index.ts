// 重载签名
function makeDate(timestamp: number): Date
function makeDate(m: number, d: number, y: number): Date

// 实现签名
function makeDate(mOrTs: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTs, d)
  }
  return new Date(mOrTs)
}

const mda = makeDate(123456788)
const mdb = makeDate(12, 24, 2019)
// const mdbc = makeDate(12, 24) // 错误的， 因为两个重载签名中需要的参数是 1个或者3个。


// 222
function switcher(x: string): boolean
function switcher(x: boolean): string
function switcher(x: string | boolean): boolean | string {
  if (typeof x === "string") {
    return true
  }
  return "hello"
}

/// sa: boolean
const sa = switcher("hello")

function switcher2(x: string | boolean): boolean | string {
  if (typeof x === "string") {
    return true
  }
  return "hello"
}

// sa2: string | boolean
const sa2 = switcher2("hello")
