const marvel_heros = ["krishna", "Ram", "Hanuman", "Balaram"]
const dc_heros = ["Laxman", "Bhim", "Arjun"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[4][2]);
// console.log(marvel_heros[3]);


const newMarvel = marvel_heros.concat(dc_heros)
// console.log(newMarvel);

const all_heros = [...marvel_heros,...dc_heros]// multipal array joind in one array
// console.log(all_heros);

const another_arr = [1,3,4,5,[7,5,4,[34,67,[8,6,10,4,[34,78]]]]]

const real_another_array1 = another_arr.flat(Infinity)
const real_another_array2 = another_arr.flat(3)


// console.log(real_another_array1);
// console.log(real_another_array2);


// console.log(Array.isArray("Krishna"));
// console.log(Array.from("Krishna"));
// console.log(Array.from({name: "Krishna"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 400

// console.log(Array.of(score1,score2,score3));
