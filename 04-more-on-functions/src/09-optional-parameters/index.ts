// n: number
function requiredParams(n: number) {
  console.log("requiredParams =>", n);
}

requiredParams(10)

// n: number | undefined
function optionalParams(n?: number) {
  console.log("optionalParams =>", n);
}
optionalParams()
optionalParams(10)
optionalParams(undefined)

// n: number
function defaultValueParams(n: number = 10) {
  console.log("defaultValueParams =>", n);
}
defaultValueParams(3)
defaultValueParams()
