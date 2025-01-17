// Generics are amazing!

// The next function returns the next element of 
// arr. Since we don't know what type it is use 
// a generic.

// function next(arr) {
//   return arr.pop()
// }

function next<T>(arr: T[]): T {
  return arr.pop() as T;
}


// Test next()
const arr1 = [1,2,3,4,5]
const arr2 = ['a', 'b', 'c']
console.log(next(arr1))
console.log(next(arr2))

// fill() fills an array with any number of a 
// repeated value. Since we don't know what type
// the value is use a generic.

// function fill(value, count) {
//   const arr = new Array(count)
//   arr.fill(value)
//   return arr
// }

function fill<T>(value: T, count: number): T[] {
  const arr = new Array<T>(count);
  arr.fill(value);
  return arr;
}


// Test fill()
console.log(fill('a', 3))
console.log(fill(9, 4))
console.log(fill({}, 11))

// Shuffle randomizes an array. Since can` contain
// any type use a generic to return an array of 
// the generic type
// function shuffle(arr) {
//   const arrCopy = [...arr]
//   arrCopy.sort(() => 0.5 - Math.random())
//   return arrCopy
// }

function shuffle<T>(arr: T[]): T[] {
  const arrCopy = [...arr]
  arrCopy.sort(() => 0.5 - Math.random())
  return arrCopy
}


// Test shuffle()
const arr3 = ['a','b','c','d']
console.log(shuffle(arr3))

// This functions takes an array and returns a function.
// The function returns the next item in the array. 
// function iterate(arr) {
//   let i = 0
//   return () => {
//     i += 1
//     if (i === arr.length) {
//       i = 0
//     } 
//     return arr[i]
//   }
// }

function iterate<T>(arr: T[]): () => T {
  let i = 0;
  return () => {
    const result = arr[i];
    i = (i + 1) % arr.length;
    return result;
  };
}

// Test iterate()
const nextFruit = iterate(['🍓', '🍎', '🍐', '🍊'])
const nextNumber = iterate(shuffle([1,2,3,4,5]))

console.log(nextFruit())
console.log(nextFruit())
console.log(nextFruit())
console.log(nextFruit())

console.log(nextNumber())
console.log(nextNumber())
console.log(nextNumber())
console.log(nextNumber())
console.log(nextNumber())
