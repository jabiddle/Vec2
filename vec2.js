/**
 * A fast, simple, 2D vector class for Javascript.
 * 
 * @class Vec2
 * @constructor
 * @param {Number} [x=0]
 * @param {Number} [y=0]
 */
class Vec2 {
    constructor(x, y) {
        this.x = x ? x : 0;
        this.y = y ? y : 0;
    }

    /**
     * Returns a deep copy of this vector.
     * 
     * @method copy
     * @return {Vec2} Deep copy of this Vec2.
     */
    copy() {
        return new Vec2(this.x, this.y);
    }

    /**
     * Compares the given Vec2 to this vector.
     * 
     * @method equals
     * @param {Vec2} vec2 
     * @return {Boolean} True if they are equal. False otherwise.
     */
    equals(vec2) {
        if (this.x === vec2.x && this.y === vec2.y)
            return true;
        
        return false;
    }

    /**
     * Shifts this vector along the x and y axis by the amounts given.
     * 
     * @method shift
     * @param {Number} x 
     * @param {Number} y 
     * @return {Vec2} this
     */
    shift(x, y) {
        this.x += x;
        this.y += y;
        return this;
    }

    /**
     * Scales the x and y values of this vector by the given multiplier.
     * 
     * @method scale
     * @param {Number} multiplier 
     * @return {Vec2} this
     */
    scale(multiplier) {
        this.x *= multiplier;
        this.y *= multiplier;
        return this;
    }

    /**
     * Downscales the x and y values of this vector by dividing by the divisor
     * 
     * @method downscale
     * @param {Number} divisor 
     * @return {Vec2} this
     */
    downscale(divisor) {
        this.x /= divisor;
        this.y /= divisor;
        return this;
    }

    /**
     * Calculates the magnitude of this vector.
     * 
     * @method magnitude
     * @return {Number} Magnitude of this vector
     */
    magnitude() {
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }

    /**
     * Normalises the vector by reducing the magnitude to 1.
     * 
     * @method normalise
     * @return {Vec2} this
     */
    normalise() {
        return this.downscale(this.magnitude());
    }

    /**
     * Adds the x and y values of the given Vec2 to the x and y values respectively of this vector.
     * 
     * @method add
     * @param {Vec2} vec2 
     * @return {Vec2} this
     */
    add(vec2) {
        this.x += vec2.x;
        this.y += vec2.y;
        return this;
    }

    /**
     * Subtracts the x and y values of the given Vec2 from the x and y values respectively of this vector.
     * 
     * @method subtract
     * @param {Vec2} vec2 
     * @return {Vec2} this
     */
    subtract(vec2) {
        this.x -= vec2.x;
        this.y -= vec2.y;
        return this;
    }

    /**
     * Divides the fields of this vector by the respectives fields of the given Vec2.
     * 
     * @method divide
     * @param {Vec2} vec2 
     * @return {Vec2} this
     */
    divide(vec2) {
        this.x /= vec2.x;
        this.y /= vec2.y;
        return this;
    }

    /**
     * Multiplies the fields of the given Vec2 with the respective fields of this vector.
     * 
     * @method multiply
     * @param {Vec2} vec2 
     * @return {Vec2} this
     */
    multiply(vec2) {
        this.x *= vec2.x;
        this.y *= vec2.y;
        return this;
    }

    /**
     * Performs a dot product of this vector with the given Vec2.
     * 
     * @method dot
     * @param {Vec2} vec2 
     * @return {Number} Dot product result
     */
    dot(vec2) {
        return this.x*vec2.x + this.y*vec2.y;
    }

    /**
     * Performs a cross product of this vector with the given Vec2
     * 
     * @method cross
     * @param {Vec2} vec2
     * @return {Number} Cross product result
     */
    cross(vec2) {
        return this.x*vec2.y - this.y*vec2.x;
    }

    /**
     * Calculates the angle of this vector counterclockwise from the positive x axis.
     * 
     * @method angle
     * @return {Number} Angle counterclockwise from the positive x axis [-PI,PI]
     */
    angle() {
        return Math.atan2(this.y, this.x);
    }

    /**
     * Rotates the vector by the given angle in radians.
     * 
     * @method rotate
     * @param {Number} radians
     * @return {Vec2} this
     */
    rotate(radians) {
        let x = this.x;
        let y = this.y;

        this.x = Math.cos(radians*x) - Math.sin(radians*y);
        this.y = Math.sin(radians*x) + Math.cos(radians*y);

        return this;
    }

}

// AMD
if (typeof define !== 'undefined' && define.amd) define(function() {return Vec2;});
// CommonJS
else if (typeof exports !== 'undefined') exports.Vec2 = Vec2;
// NodeJS
else if (typeof module !== 'undefined') module.exports = Vec2;
// Global
else if (typeof window !== 'undefined') window.Vec2 = Vec2;
