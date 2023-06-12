// this is your main.js script
// Exercises
// 1
let firstName = 'maaz'
let lastName = 'shaikh'
let country = 'india'
let city = 'Dhule'
let age = 24
let isMarried = false
const now = new Date()
const year = now.getFullYear()
console.log(firstName," ",lastName," ",country," ",city," ", age, " ", isMarried," ",year ,'\n', typeof firstName,typeof lastName,typeof country,typeof city,typeof age, typeof isMarried,typeof year)

// 2

let a = '10'
let b =  10
console.log(typeof a == b)

// 3

console.log(parseInt('9.8') == 10)

// 4

console.log(4>3,5>4,6>5,"  ",4<3,5<4,6<5)

// 5

console.log(4>3, 4>=3, 4<3,4<=3, 4==4, 4===4, 4!=4, 4!==4, 4!='4', 4=='4', 4==='4')

// 6

console.log(4 > 3 && 10 < 12, 4 > 3 && 10 > 12, 4 > 3 || 10 < 12, 4 > 3 || 10 > 12, !(4 > 3), !(4 < 3), !(false), !(4 > 3 && 10 < 12), !(4 > 3 && 10 > 12), !(4 === '4'))

// 7

let today = now.getFullYear()
console.log(today)
today = now.getMonth()
console.log(today)
today = now.getDate()
console.log(today)
today = now.getDay()
console.log(today)
today = now.getHours()
console.log(today)
today = now.getMinutes()
console.log(today)

// Exercises 2
// 15

const now15 = new Date()
const YYYY = now15.getFullYear()
const MM = now15.getMonth()
const DD = now15.getDate()
const HH = now15.getHours()
const mm = now15.getMinutes()
console.log(' YYYY-MM-DD HH:mm\n',YYYY, MM, DD, HH, mm)

