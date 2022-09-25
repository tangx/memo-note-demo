
function map<Input, Output>(
  arr: Input[],
  func: (input: Input) => Output,
): Output[] {
  return arr.map(func)
}

const ma = map(
  [0, 1, 2, 3],
  (n) => n ** 2,
)
console.log(ma);

const mb = map(
  ['1', '2', '3'],
  (n) => parseInt(n)
)
console.log(mb);


const mc = map<string, number>(
  ['1', '2', '3'],
  (n) => parseInt(n)
)
console.log(mb);
