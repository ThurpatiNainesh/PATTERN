let numbers=[1,2,3,4,5,6,1,2,3,4,5,6]
let map= new Map()
for(let nums of numbers){
    if(map.has(nums)){
        map.set(nums,map.get(nums)+1)
    }else{
        map.set(nums,1)
    }
}
console.log(map)


// let freq1=new Map()
// for(let i=0;i<numbers.length;i++){
//     if(freq1.get(numbers[i])==undefined){freq1.set(numbers[i],1)}
//     else{freq1.set(numbers[i],freq1.get(numbers[i])+1)}
// }
// console.log(freq1)


let map2= new Map()
for(let nums of numbers){
    map2.set(nums,(map2.get(nums)+1)||1)
}
console.log(map2)

// let strNum1="mamamia"
//     let countNum1 = {};
    
//     for(let i = 0; i < strNum1.length; i++){
//       countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
//     }
//     console.log(countNum1)


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx=======================================>>>>>>>>>>>>>>>>>>>>>>>>>>

const contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1

const Map4 = new Map();
Map4.set(0, 'zero');
Map4.set(1, 'one');

for (const [key, value] of Map4) {
  console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one
for(const pair of Map4){
    console.log(`${pair[0]} perfect ${pair[1]}`)
}

for (const key of Map4.keys()) {
  console.log(key);
}
// 0
// 1

for (const value of Map4.values()) {
  console.log(value);
}
// zero
// one

for (const [key, value] of Map4.entries()) {
  console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one
Map4.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});

