//Create a function "createUser(name, age)" that returns an object shaped like:
// function createUser(name, age) {
//      const names = [ 'Awuni',' Kwaku', 'Awuah', 'Esi'] 
//      const age = ['56', '67', '89','46']
//     const users = name.map(name, age)
// return{
//    id: 
// }
         
//     }
//     console.log(user) ;
    

//Create a function "createUser(name, age)" that returns an object shaped like:
function createUser(name, age) {
    return {
        name: name,
        age: age
    };
}
console.log(createUser("John", 25));