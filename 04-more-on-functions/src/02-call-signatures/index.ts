
type DescribableFunction = {
  description: string
  (name: string): boolean
}



function df1(name: string): boolean {
  console.log(`df1: name is ${name}`);
  return Math.random() < 0.5;
}
df1.description = "this is df1"
df1.desc2 = "lalal"

function sayName(fn: DescribableFunction) {
  console.log(`${fn.description} returned`, fn("zhangsan"));
}

sayName(df1)

const df11 = df1 as DescribableFunction

// const df12 = {
//   description: "df22", //   Type '{ description: string; }' has no call signatures.ts(2349)
//   (name: string): boolean => {
//     console.log(`${name}`);
//     return Math.random() < 0.5
//   }
// } as DescribableFunction



//  第二种

type DescribableFunction2 = {
  description: string
  do: (name: string) => boolean
}

function sayName2(fn: DescribableFunction2) {
  console.log(`${fn.description} returned`, fn.do("zhangsan"));
}

function fn(name: string): boolean {
  console.log(`fn: name is ${name}`);
  return Math.random() < 0.5;
}

const df2 = {
  description: "this is DescribableFunction2",
  do: fn,
} as DescribableFunction2


sayName2(df2)

const df22 = {
  description: "df22",
  do: (name: string): boolean => {
    console.log(`${name}`);
    return Math.random() < 0.5
  }
} as DescribableFunction2