// class User{
//     constructor(name){
//         this.name=name
//     }
//      sayHi() {
//         console.log(this.name)
//     }
// }

let User=class{
    constructor(name){
                this.name=name
            }
             sayHi() {
                console.log(this.name)
            }
}
let cUser=new User('krishna')
cUser.sayHi()