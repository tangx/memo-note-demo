
function longest<Type extends { length: number }>(a: Type, b: Type): Type {
  if (a.length > b.length) {
    return a
  }

  return b
}

// la: number[]
const la = longest([1, 2], [2, 3, 4])
// lb: number[] | string[]
const lb = longest([1, 2], ['a', 'b', 'c'])
// lc: "zhang" | "zhao"
const lc = longest('zhang', 'zhao')

// ld: string
const ld = longest<string>('zhang', 'zhao')


/* 
// This overload signature is not compatible with its implementation signature.ts(2394)
// index.ts(2, 10): The implementation signature is declared here.
// 'longest', which lacks return-type annotation, implicitly has an 'any' return type.ts(7010)

function longest<Type implements { length: number }> (a: Type, b: Type): Type {
  if (a.length > b.length) {
    return a
  }
  return b
}
*/