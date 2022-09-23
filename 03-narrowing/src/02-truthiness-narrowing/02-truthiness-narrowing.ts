function printAll(strs: string[] | null) {
  if (typeof strs === "object") {
    for (const s of strs) {  // Object(strs) is possibly 'null'.ts(2531)
      console.log(s);
    }
  }
}

// 强制类型判断
function printAll2(strs: string[] | null) {
  if (strs && typeof strs === "object") {
    // strs: string[]
    for (const s of strs) {
      console.log(s);
    }
  }
}

// 叹号类型判断
function printAll3(tips: string, strs: string[] | null) {
  if (!!strs && typeof strs === "object") {
    // strs: string[]
    for (const s of strs) {
      console.log(`${tips} =>`, s);
    }
  }
}


// Boolean
function printAll4(tips: string, strs: string[] | null) {
  if (Boolean(strs) && typeof strs === "object") {
    // strs: string[] | null
    for (const s of strs) { // Object is possibly 'null'.ts(2531)
      console.log(`${tips} =>`, s);
    }
  }
}
