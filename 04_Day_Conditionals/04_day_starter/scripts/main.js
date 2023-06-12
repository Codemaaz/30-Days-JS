// this is your main.js script
// alert('Open the browser console whenever you work on JavaScript')

// Exercises 1
// 1
    // let ageInput = prompt('Enter your age:')
    // if (ageInput > 18){
    //     console.log('You are old enough to drive')
    // }
    // else{
    //     let remaningYear = 18 - ageInput
    //     console.log(`wait for ${remaningYear} Years`)
    // }

// 2
    // let myAge = Number(prompt('Enter My Age :'));
    // let yourAge = Number(prompt('Enter your Age :'))
    // if (myAge > yourAge){
    //     console.log('MyAge is grater than yours')
    // }
    // else if(yourAge > myAge){
    //     console.log('Your age is grater than mine')
    // }
    // else if (myAge == yourAge){
    //     console.log('Both are same age')
    // }
    // else{
    //     console.log('Invalid Input plese enter number')
    // }

// 3
    // let a = 5
    // let b = 6
    // a>b
    // ? console.log('a is grater than b')
    // : console.log('b is grater than a')

// 4
    // let enterNumber = Number(prompt('Enter a number to check even or odd'))
    // if(enterNumber % 2 == 0){
    //     console.log('number is even')
    // } 
    // else if(enterNumber % 2 == 1){
    //     console.log('number is odd')
    // }
    // else{
    //     console.log('invalid number')
    // }

// Exercsis 2
// 1
    // let Grades = Number(prompt('Enter your grade'))

    // if (Grades < 40){
    //     console.log('You got F Focus on sturdy')
    // }
    // else if(Grades < 59){
    //     console.log("You got D study hard")
    // }
    // else if(Grades < 69){
    //     console.log('You got C keep trying')
    // }
    // else if(Grades < 85){
    //     console.log('You got B good job')
    // }
    // else if (Grades <= 100){
    //     console.log('You got A Exelent work')
    // }
    // else{
    //     console.log('Enter valid grade')
    // }

// 2
    // let monthInput = prompt('Enter a month')
    // let month = monthInput.toLowerCase()

    // switch(month){
    //     case 'september' :
    //         console.log('Its Autumn season')
    //         break
    //     case 'october' :
    //         console.log('Its Autumn season')
    //         break
    //     case 'november' :
    //         console.log('Its Autumn season')
    //         break
    //     case 'december' :
    //         console.log('Its Winter season')
    //         break
    //     case 'january' :
    //         console.log('Its Winter season')
    //         break
    //     case 'february' :
    //         console.log('Its Winter season')
    //         break
    //     case 'march' :
    //         console.log('Its Spring season')
    //         break
    //     case 'april' :
    //         console.log('Its Spring season')
    //         break
    //     case 'may' :
    //         console.log('Its Spring season')
    //         break
    //     case 'june' :
    //         console.log('Its Summer season')
    //         break
    //     case 'july' :
    //         console.log('Its Summer season')
    //         break
    //     case 'august' :
    //         console.log('Its Summer season')
    //         break
    //     default :
    //     console.log('Enter valid Month')
    // }

// 3
    // let dayUserInput = prompt('What day is today ?')
    // let day = dayUserInput.toLowerCase()
    // switch(day){
    //     case 'monday' :
    //         console.log('Go to work Monday is not weekend')
    //         break
    //     case 'tuesday' :
    //         console.log('Go to work Tuesday is not weekend')
    //         break
    //     case 'wednesday' :
    //         console.log('Go to work Wednesday is not weekend')
    //         break
    //     case 'thursday' :
    //         console.log('Go to work Thursday is not weekend')
    //         break
    //     case 'friday' :
    //         console.log('Go to work Friday is not weekend')
    //         break
    //     case 'saturday' :
    //         console.log('Saturday is weekend')
    //         break
    //     case 'sunday' :
    //         console.log('Sunday is weekend')
    //         break
    //     default :
    //     console.log('Enter valid Day')
    // }

// Exercises 3
// 1
    const getDays = (year, month) => {
        return new Date(year, month, 0).getDate();
    };
    let monthInput = prompt('Enter a month in number')
    let yearInput = prompt('Enter year in number')
    const daysInMonth = getDays(yearInput, monthInput);
    console.log(daysInMonth)