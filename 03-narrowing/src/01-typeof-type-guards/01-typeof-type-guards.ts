function printAll(strs: string | string[] | null) {
  console.log(strs, "typeof ==", typeof strs);

  if (typeof strs === 'object') {
    console.log("strs 是 object 类型");
  } else if (typeof strs === 'string') {
    console.log("strs 是 string 类型");
  }

}


printAll("abc")
printAll(["abc", "def"])
printAll(null)