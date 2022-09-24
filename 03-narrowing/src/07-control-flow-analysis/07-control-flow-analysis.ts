
function example() {

  let x: string | number | boolean
  x = Math.random() < 0.5

  // x: boolean
  console.log(x);  // boolean 没有返回条件

  if (Math.random() < 0.5) {
    x = 'hello';
    // x: string
    console.log(x);
  } else {
    x = 100;
    // x:number
    console.log(x);
  }

  return x
}

// y: number | string
let y = example()
console.log('@', typeof y);
