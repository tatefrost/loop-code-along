
let jonSnowAttack = 45
let jamieLannisterAttack = 35

let jonSnowHealth = 50
let jonSnowdefense = 0

let jamieLannisterhealth = 50
let jamieLannisterdefense = 20

// if (jonSnowAttack < jamieLannisterAttack){
// console.log("Jamie has the stronger attack!")
// } else if(jonSnowAttack > jamieLannisterAttack){
//   console.log("Jon has the stronger attack!")
// } else {
//   console.log("The attacks are equally powerful.")
// }

jonSnowdefense +=25

// if (jonSnowHealth <= 0){
//   console.log('Jon Snow has perished.')
// } else {
//     jonSnowHealth -= (jamieLannisterAttack - jonSnowdefense)
//     console.log(`Jon's health is ${jonSnowHealth}`)
// }

for(let i=0; i < 3; i++){
  if (jonSnowHealth <= 0){
    console.log('Jon Snow has perished.')
  } else {
      jonSnowHealth -= (jamieLannisterAttack - jonSnowdefense)
      console.log(`Jon's health is ${jonSnowHealth}`)
  }
}