function example(x: string | number, y: string | boolean) {
  // Property 'toUpperCase' does not exist on type 'string | number'.
  //   Property 'toUpperCase' does not exist on type 'number'.ts(2339)
  x.toUpperCase()

  // Property 'toLowerCase' does not exist on type 'string | boolean'.
  //   Property 'toLowerCase' does not exist on type 'false'.ts(2339)
  y.toLowerCase()
}

function example2(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase()
    y.toLowerCase()
  }
}


function multipleValue(value: number | null | undefined, factor: number) {
  if (value != null) {
    console.log(`${value} * ${factor} =`, value * factor);
    return
  }
  console.log(`value = ${value}`);
}

multipleValue(6, 5)
multipleValue(null, 5)
multipleValue(undefined, 5)