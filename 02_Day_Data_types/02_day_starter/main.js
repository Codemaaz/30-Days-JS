// this is your main.js script

// Exercise 1
let challenge = '30 Days of Javascript' 
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(0,2))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(' '))
console.log(challenge.replace('Javascript','python'))

// Exercise 2
console.log('There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')
console.log('Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.')

let a = '10'
let b = 10
let num = +a
console.log(typeof num == b)

// 7
let randomNumber = Math.random()
randomNumber = randomNumber*100
randomNumber=Math.floor(randomNumber)
console.log(randomNumber)
// 8
let randomNumber2 = Math.random()
randomNumber2 = randomNumber2*50+50
randomNumber2=Math.floor(randomNumber2)
console.log(randomNumber2)
// 9
let randomNumber3 = Math.random()
randomNumber3 = randomNumber3*5*50
randomNumber3=Math.floor(randomNumber3)
console.log(randomNumber3)
// 11
console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125")
// 12
let subBecuse = 'You cannot end a sentence with because because because is a conjunction'
console.log(subBecuse.substr(31,46))

// exercise 3
// 1 & 2
let string = 'You cannot end a sentence with because because because is a conjunction'

console.log(string.match('because'))
console.log(string.split('because').length)
// 3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/!|$|;|@|#|&|%/gi,""))


// 4
let salary = 5000
let bonuse = 10000
let cources = 15000

annual = salary + bonuse + cources
console.log(annual*12)