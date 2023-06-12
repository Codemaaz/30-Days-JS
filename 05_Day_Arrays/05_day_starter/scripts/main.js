// Exercise

// 1
    let emptyArray = []

// 2
    const sixElementArray = [1,2,3,4,5,6,7]

// 3
    console.log(sixElementArray.length)

// 4
    let firstItem = sixElementArray[0]
    let middleItem = sixElementArray[3]
    let lastItem = sixElementArray[6]
    console.log( firstItem, middleItem, lastItem)

// 5
    const mixedDataType = [1,'test',[1,2,3],true,3.14,null]

// 6
    const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle', 'Amazon']

// 7 & 8
    console.log(itCompanies)

// 9
    console.log(itCompanies[0],itCompanies[3],itCompanies[6])

// 10
console.log(itCompanies[0],itCompanies[1],itCompanies[2],itCompanies[3],itCompanies[4],itCompanies[5],itCompanies[6])

// 11
    let upperCase0 = itCompanies[0]
    let upperCase1 = itCompanies[1]
    let upperCase2 = itCompanies[2]
    let upperCase3 = itCompanies[3]
    let upperCase4 = itCompanies[4]
    let upperCase5 = itCompanies[5]
    let upperCase6 = itCompanies[6]
    console.log(upperCase0.toUpperCase(),upperCase1.toUpperCase(),upperCase2.toUpperCase(),upperCase3.toUpperCase(),upperCase4.toUpperCase(),upperCase5.toUpperCase(),upperCase6.toUpperCase())

// 12
    console.log(itCompanies.join(),'are big IT companies')

// 13
    let iqoo = itCompanies.indexOf('IBM')
    if (iqoo === -1){
        console.log('company is not found in array list')
    }
    else{
        console.log(iqoo)
    }

// 14
    let companies =[]
    for (let i = 0; i < itCompanies.length ; i++){
        if(itCompanies[i] == 'Oracle'){
            companies.push(itCompanies[i]);
        }
    }
    console.log(companies)
// 15
    console.log(itCompanies.sort())

// 16
    console.log(itCompanies.reverse())

// 17
    console.log(itCompanies.splice(3))

// 18
    console.log(itCompanies.splice(-4))

// 20
    console.log(itCompanies.shift())
// 23
console.log(itCompanies.splice())

// Exercises 2
// 3
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    shoppingCart.unshift('Meat')
    shoppingCart.pop()
    shoppingCart.push('Sugar')
    let tea = 'Green Tea'
    shoppingCart[3] = tea 
    console.log(shoppingCart)

// 6
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux','']
    const backEnd = ['Node','Express', 'MongoDB']
    let fullStack = frontEnd + backEnd
    console.log(fullStack)

// Exercise 3
// 1
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    ages.sort()
    console.log('minimum and maximum',ages[0],ages[9])
    console.log('middle age & Average age',ages[5])
    
// 2    
    const countries1 = [
        'Albania',
        'Bolivia',
        'Canada',
        'Denmark',
        'Ethiopia',
        'Finland',
        'Germany',
        'Hungary',
        'Ireland',
        'Japan',
        'Kenya'
      ]
      console.log(countries1.splice(9))