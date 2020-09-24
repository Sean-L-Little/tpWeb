
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing(){
    this.shapes = [];
    this.addForm = function(form){
        this.shapes.push(form);
    }.bind(this)
    this.getForms = function(){
        return this.shapes;
    }.bind(this)
    this.removeForm = function(index){
        console.log("shapeLengthBefore" + this.shapes.length);
        this.shapes.splice(index, 1);
        console.log("shapeLengthAfter" + this.shapes.length);
    }
    
};

function Shape(thickness,color){

    this.thickness=thickness;

    console.log("Thickness Shape: " + thickness);

    this.color=color;
    console.log("color Shape: " + color);
};

function Line(xStart,yStart,xEnd,yEnd,thickness,color){
    Shape.call(this,thickness,color);

    this.xStart=xStart;
    this.yStart=yStart;

    this.xEnd=xEnd;
    this.yEnd=yEnd;

}Line.prototype = new Shape();

function Rectangle(xStart,yStart,width,height,thickness,color){
    Shape.call(this,thickness,color);

    this.xStart=xStart;
    this.yStart=yStart;

    this.width=width;
    this.height=height;

}Rectangle.prototype = new Shape();
