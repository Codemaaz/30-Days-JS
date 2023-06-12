// Exercises: Level 1
// 1
    // const dog = {}

// 2
    // console.log(dog)
    
// 3
    // dog.name = 'puppy'
    // dog.legs = 4
    // dog.color = 'white'
    // dog.age = '2 years'
    // dog.bark = 'woof woof'
    // dog.woof = function(){
    //     return this.bark
    // }

// 4
    // console.log(dog.name, dog.legs, dog.color, dog.age,dog.bark)

// 5
    // dog.breed = 'husky'
    // dog.getDogInfo = []

// Exercises 2
// const users = {
//     Alex: {
//       email: 'alex@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Asab: {
//       email: 'asab@asab.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: 'daniel@daniel.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: 'daniel@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: 'john@john.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     },
//     Thomas: {
//       email: 'thomas@thomas.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     Paul: {
//       email: 'paul@paul.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     }
//   }
// 1

    // const Alex = Object.entries(users.Alex.skills)
    // console.log(Alex)
    // const Asab = Object.entries(users.Asab.skills)
    // console.log(Asab)
    // const Brook = Object.entries(users.Brook.skills)
    // console.log(Brook)
    // const Daniel = Object.entries(users.Daniel.skills)
    // console.log(Daniel)
    // const John = Object.entries(users.John.skills)
    // console.log(John)
    // const Thomas = Object.entries(users.Thomas.skills)
    // console.log(Thomas)
    // const Paul = Object.entries(users.Paul.skills)
    // console.log(Paul)

// 2
    // const Alex = Object.entries(users.Alex)
    // const Asab = Object.entries(users.Asab)
    // const Brook = Object.values(users.Brook)
    // const Daniel = Object.entries(users.Daniel)
    // const John = Object.entries(users.John)
    // const Thomas = Object.entries(users.Thomas)
    // const Paul = Object.entries(users.Paul)
   
    // let arr = [Alex[3], Asab[3], Brook[3], Daniel[3], John[3], Thomas[3], Paul[3]]
    // for(let i = arr[0]; i <= arr[7]; i++){
    
    //     if (  arr[i] == true){
    //         console.log(' is logged in')
    //     }
    //     else{
    //         console.log(' is not logged in')
    //     }

    // }

//5 & 6
    // const keys = Object.keys(users)
    // console.log(keys)

    // const values = Object.values(users)
    // console.log(values)

    // const entite = Object.entries(users)
    // console.log(entite)

// 7
  // const countrie = {
  //   name : ['india', 'japan'],
  //   capital : ['Dehli', 'Tokeyo'],
  //   population : ['1.4B', '120M'],
  //   languages : ['Hindi', 'Japnes']
  // }
  // console.log(countrie)


// Exercises 3
// 1
const users = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]