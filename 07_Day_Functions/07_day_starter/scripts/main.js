// Exercises 1
// 1
    // function fullName (){
    //     console.log('Maaz Zakri Shaikh')
    // }
    // fullName()

// 2
    // function fullName (){
    //     let firstName = 'Maaz'
    //     let lastName = 'Shaikh'
    //     let space = ' '
    //     return firstName + space + lastName
    // }
    // console.log(fullName())

// 3
    // function addNumbers(a,b){
    //     let sum = a + b
    //     return sum
    // }
    // console.log(addNumbers(5,6))

// 15
    // function findMax(a,b,c){
    //     return console.log(Math.max(a,b,c))
    // }
    // findMax(0,10,5)
    // findMax(0,-10,-2)

// Exercises 2
// 3
    // let a = [1,2,3]
    // function printArray(a){
    //     console.log(a)
    // }
    // printArray(a)

// 4
    // function showDateTime (){
    //     let d = new Date() 
    //     d.getDate()
    //     return d
    // }
    // console.log(showDateTime())

// 5
    // function swapValues(x,y){
    //     let swap
    //     swap = x
    //     x = y
    //     y = swap
    //     console.log(x,y)
    //     return x,y
    // }
    // swapValues(3,4)
    // swapValues(4,5)

// 6
    // let arr = [1,2,3,4,5]
    // function reverseArray(){
    //     arr.reverse()
    //     console.log(arr)
    // }
    // reverseArray( )

// 7
    // let arr = ['maaz', 'shaikh', 'zakir','test1','test2']
    // function capitalizeArray(){
    //     for(let i=0; i<=arr.length-1;i++){
    //          temp = arr[i]
    //          console.log(temp)
    //     }
    // }
    // capitalizeArray()

// 8
    // let arr=[]
    // function addItem(){
    // let n = Number(prompt('Enter how many value you want to enter in array'))
    // for(let i=0; i<=n-1; i++){
    //     arr.push(prompt('enter value for array'))
    // }
    // console.log(arr)
    // }
    // addItem()

// 9
//     let arr=[1,2,3,4,5]
//     function removeItem(){
//         arr.pop()
//         console.log(arr)
//     }
//     removeItem()

// 10 & 14
    // let = n = Number(prompt('Enter Number'))
    // sum = 0
    // function sumOfNumbers(){
    //     for(i=0; i<=n; i++)
    //     {
    //         sum = sum+i
    //     }
    //     return sum
    // }
    // console.log(sumOfNumbers(sum))

// 11 & 12
    // let = n = Number(prompt('Enter Number'))
    // sum = 0
    // function sumOfNumbers(){
    //     for(let i=1; i<=n;i++){
    //         if(i % 2 == 0){ //for odd number change 0 to 1
    //             sum = sum+i
    //         }
    //     }
    //     console.log(sum)
    // }
    // sumOfNumbers()

// 13
    // let n = 100
    // let arrEven = [], arrOdd = []
    // function evensAndOdds (){
    //     for(let i=0; i<=n; i++){
    //         if(i%2 == 0){
    //             arrEven.push(i)
    //         }
    //         else{
    //             arrOdd.push(i)
    //         }
    //     }
    // console.log(`The number of Odds are ${arrOdd.length}`)
    // console.log(`The number of Evens are ${arrEven.length}`)        
    // }
    // evensAndOdds()

// 15 - 18

    // let randomIP1 = Math.floor(Math.random() * 256)
    // let randomIP2 = Math.floor(Math.random() * 256)
    // let randomIP3 = Math.floor(Math.random() * 256)
    // let randomIP4 = Math.floor(Math.random() * 256)
    // console.log(`IP Address ${randomIP1}.${randomIP2}.${randomIP3}.${randomIP4}`)

// Exercises 3 
// 1
    // let arr = [1,2,3,4,5]
    // function shuffleArray(){
    //     arr.sort(() => (Math.random()> 0.5)? 1 : -1)
    // console.log(arr)
    // }
    // shuffleArray()

// 9
    // let n = Number(prompt('Enter number to find factorial'))
    // let fact = 1
    // function factorial(){
    //     for(let i=1; i<=n; i++){
    //         fact = fact*i
    //     }
    //     console.log(fact)
    // }
    // factorial()

// 15
let n = 4
function isPrime(){
    if (n/n == 1){
        console.log('number is prime')
    }
    else{
        console.log('number is not prime')
    }
}
isPrime()
