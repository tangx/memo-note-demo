// 1. Push Type Parameters Down

// good
function firstElement1<Type>(arr: Type[]) {
  return arr[0]
}

// bad
function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0]
}

// a: number (good)
const fea = firstElement1([1, 2, 3]);
// b: any (bad)
const feb = firstElement2([1, 2, 3]);


// 2. Use Fewer Type Parameters

// good
function filter1<Type>(arr: Type[], func: (arg: Type) => Type): Type[] {
  return arr.filter(func)
}

// bad
function filter2<Type, Func extends (arg: Type) => Type>(arr: Type[], func: Func) {
  return arr.filter(func)
}


// 3 Type Parameters Should Appear Twice (类型函数应支持多种参数类型)
// bad
function greeter1<Str extends string>(name: Str) {
  console.log("hello", name);
}

// good
function greeter2(name: string) {
  console.log("hello", name);
}