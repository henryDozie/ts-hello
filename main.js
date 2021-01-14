var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        //... Code for drawing points go here
        console.log('X: ' + this._x + ', Y: ' + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            //... Code for getting distances go here
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('Value cannot be less than 0.');
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var point = new Point(1, 2);
var x = point.x;
point.x = 2;
point.draw();
