// arr1
const marvel_heros = ["thor", "Ironman", "spiderman"]
// arr2
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // dc in marvel

// console.log(marvel_heros); // doesn't change orignal value

// console.log(marvel_heros[3][1]); 

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// open nested array
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


// some property
// console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))  // []
console.log(Array.from({name: "hitesh"})) // interesting we didn't pass string. bcz we pass and object


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));