// Exercises 1
    const countrie = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
    ];

    const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    ];

    const mernStack = ["MongoDB", "Express", "React", "Node"];

    // 1
    // let i = 0
    // for(let ForI=0; ForI<=10; ForI++){
    //     console.log(ForI)
    // }

    // while(i<10){
    //     i++
    //     console.log(i)
    // }

    // do{
    //     i++
    //     console.log(i)
    // }while(i<10)

// 2
        let i = 10
    // for(let ForI=10; ForI>=0; ForI--){
    //     console.log(ForI)
    // }

    // while(i>=1){
    //     i--
    //     console.log(i)
    // }

    // do{
    //     i--
    //     console.log(i)
    // }while(i>=1)

// 3
    // let n = prompt('enter a number')
    // for (let i=0; n>i; i++){
    //     console.log(i)
    // }

// 4
    // let n = 7
    // let string = ''
    // for (let i=1; i<=n; i++){
    //     for(let j=0; j<i; j++){
    //         string +='#'
    //     }
    //     string +='\n'
    // }
    // console.log(string)

// 5
    // for(let i=0; i<=10; i++){
    //     console.log(i,'x',i,'=',i*i)
    // }

// 6
    // console.log('i i^2 i^3')
    // for(let i=0; i<=10; i++){
    //     console.log(i,i*i,i*i*i)
    // }

// // 7
//     for(let i=0; i<=100; i++){
//         if(i==12){
//             break
//         }
//         console.log(i)
//     }

// 8
    // for(let i=0; i<=100; i++){
    //     if((i%2)==0){
    //         continue
    //     }
    //     console.log(i)
    // }

// 9
    // let count=0
    // for(j=2; j<=100; j++)
    //     {
    //         for(i=1; i<=j; i++){
    //         if(j%i==0)
    //         count++
    //         }
    //         if(count==2)
    //         console.log(j)
    //         count=0
    //     }

// 10
    // for(let i=0; i<=100; i++){
    //     for(let j=1; j<=100; j++){
    //         i += j
    //     }
    //     console.log(i)
    // }

// 11 & 12
    // evenSum = 0
    // for(let i=1; i<=100; i++){
    //     if(i%2 == 0){
    //         evenSum = evenSum + i
    //     }
    // }
    // console.log(evenSum)

// 13 & 14
    // for(let i=1; i<=5; i++){
    //     let Rnumber = Math.floor(Math.random() * 10)
    //     console.log(Rnumber)
    // }

// 15
    // for(let i=1; i<=5; i++){
    //     let Rnumber = Math.random().toString(36).slice(2)
    //     console.log(Rnumber)
    // }
    
// Exercises 2
// 2
    // let Rnumber = (Math.random() * 0xfffff * 1000000).toString(16)
    // Rnumber = '#' + Rnumber.slice(0, 6)
    // console.log(Rnumber)

// 3
    // let randomB = Math.floor(Math.random() * 256)
    // let randomG = Math.floor(Math.random() * 256)
    // let randomR = Math.floor(Math.random() * 256)
    // console.log(`rgb(${randomR},${randomG},${randomB})`)

// 4 & 5
    // let countriesArray = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
    // const newArr = []
    // for(let i = 0; i < countriesArray.length; i++){
    // newArr.push(countriesArray[i].toUpperCase())
    // }
    // console.log(newArr)

// 6
    let newArray =  [
        ['Albania', 'ALB', 7],
        ['Bolivia', 'BOL', 7],
        ['Canada', 'CAN', 6],
        ['Denmark', 'DEN', 7],
        ['Ethiopia', 'ETH', 8],
        ['Finland', 'FIN', 7],
        ['Germany', 'GER', 7],
        ['Hungary', 'HUN', 7],
        ['Ireland', 'IRE', 7],
        ['Iceland', 'ICE', 7],
        ['Japan', 'JAP', 5],
        ['Kenya', 'KEN', 5]
      ]
    const countriesArray = []
    for(let i = 0; i < newArray.length; i++){
        countriesArray.push(newArray[i])
    }
    console.log(countriesArray)

