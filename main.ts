class Point{
   
    constructor(private _x?: number, private _y?: number){
    }

    draw(){
        //... Code for drawing points go here
        console.log('X: ' + this._x + ', Y: ' + this._y);
        
    }

    get x(){
        //... Code for getting distances go here
        return this._x;
    }

    set x(value){
        if(value<0)
            throw new Error('Value cannot be less than 0.')

        this._x = value;
    }
}

let point = new Point(1,2);
let x = point.x;
point.x = 2;
point.draw();
