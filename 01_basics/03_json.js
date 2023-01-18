let user={
    name:'krishna',
    age:22,
    city:'Bidar',
    company:'Uber Core',
    position:'Associate Software Engineer',
    phone_no:"9980852239"
}
console.log(user)
let json_user=JSON.stringify(user)
console.log(json_user)
let convert_user=JSON.parse(json_user)
console.log(convert_user)
