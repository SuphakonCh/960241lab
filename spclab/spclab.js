const students = [
  "682110159",
  "682110162",
  "682110163",
  "682110165",
  "682110167",
  "682110169",
  "682110171",
  "682110172",
  "682110174",
  "682110176",
  "682110177",
  "682110178",
  "682110180",
  "682110184",
  "682110185",
  "682110187",
  "682110196",
  "682110198",
  "682110199"
]

function randomStudent(array) {
    let newArray = [...array]; 
    for (let i = 0; i < newArray.length; i = i + 1) {
        let randomIndex = Math.floor(Math.random() * newArray.length);
        let temp = newArray[i]; 
        newArray[i] = newArray[randomIndex];
        newArray[randomIndex] = temp; 
    }
    return newArray; 
}

let shuffledStudents = randomStudent(students);
let groupSize = 4;
let numGroups = Math.floor (shuffledStudents.length / groupSize);
let reminder = shuffledStudents.length % groupSize;

console.log("กำหนด:", groupSize ,"คนต่อกลุ่ม");
console.log("แบ่งได้:", numGroups,"กลุ่ม");
console.log("เหลือ:", reminder,"คน");

let groups = [];
for (let i = 0; i < numGroups; i = i + 1) {
    groups.push([]); 
}

let currentBox = 0; 
for (let i = 0; i < shuffledStudents.length; i = i + 1) {
    
    groups[currentBox].push(shuffledStudents[i]);
    
    currentBox = currentBox + 1;
    
    if (currentBox === numGroups) {
        currentBox = 0;
    }
}

for (let i = 0; i < groups.length; i = i + 1) {
    console.log("กลุ่มที่", i + 1, "มี", groups[i].length, "คน ได้แก่:");
    console.log(groups[i]);
}