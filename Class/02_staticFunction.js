class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    static displaName="Hare Krishna";
    static calculate(){
        console.log(this.x*this.y)
    }
}
const p1= new Point(10,20)
// const p2= new Point(10,30)
console.log(Point.displaName)
console.log(Point.calculate())
