class Animal{
    constructor(name){
        this.name=name;
        this.speed=0
    }

    run(speed){ 
        this.speed=speed
        console.log(`${this.name} runs with the ${this.speed} speed`)
    }
    stop()
    {
        this.speed=0
        console.log(`${this.name} stops`)
    }
}

class Rabit extends Animal{
    hide(){
    console.log(`${this.name} hides` )
    }
}
let small_rabit=new Rabit('harry')
small_rabit.run(10)
small_rabit.stop()
small_rabit.hide()
