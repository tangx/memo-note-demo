type Dog = {
  bark: () => void
}


function isFish(pet: Fish | Bird | Dog): pet is Fish {
  return (pet as Fish).swim !== undefined
}


// 随机返回一种动物
function getSmallPet(): Fish | Bird | Dog {
  let shark = { name: "shark", swim: () => { } }
  let sparrow = { fly: () => { } }
  let dog = { bark: () => { } }
  return Math.random() < 0.5 ? shark : Math.random() < 0.5 ? sparrow : dog
}

let pet = getSmallPet()

if (isFish(pet)) {
  console.log(typeof pet);
  pet.swim();
} else {
  // pet.fly();
  console.log("pet can be Dog or Bird");
}
