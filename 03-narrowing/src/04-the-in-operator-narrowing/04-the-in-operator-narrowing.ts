
type Fish = {
  swim: () => void
  name: string
}

type Bird = {
  fly: () => void
}

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    // console.log(typeof animal.swim);

    console.log(`this animal's name is ${animal.name}`);
    console.log("this animal can swim");
    return
  }

  console.log("this animal can fly");
  return animal.fly()
}

const fish: Fish = {
  swim: () => { },
  name: "fish",
}

const bird: Bird = {
  fly: () => { },
}

console.log("==== a fish");
move(fish)

console.log("++++ a bird");
move(bird)

// ==== a fish
// this animal's name is fish
// this animal can swim
// ++++ a bird
// this animal can fly