

function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number,
): Type {
  if (obj.length >= minimum) {
    return obj
  }

  // '{ length: any; }' is assignable to the constraint of type 'Type', but 'Type' could be instantiated with a different subtype of constraint '{ length: number; }'.ts(2322)

  return { length: number }

}

function minimumLength2<Type extends { length: number }>(
  obj: Type,
  minimum: number,
): Type | undefined {
  if (obj.length >= minimum) {
    return obj
  }

  return undefined
}

const min_a = minimumLength2([1, 2, 3], 6)
console.log(min_a?.slice(0))
