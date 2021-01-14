export class Point{
    constructor(private x?: number, private y?: number){
    }

    draw(){
        //... Code for drawing points go here
        console.log('X: ' + this.x + ', Y: ' + this.y);    
    }
}