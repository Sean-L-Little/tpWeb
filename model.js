
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing(){
    this.shapes = Array;
};

function Shape(thickness,color){

    this.thickness=thickness;

    this.color=color;

};

function Line(xStart,yStart,xEnd,yEnd,thickness,color){
    Shape.call(thickness,color);

    this.xStart=xStart;
    this.yStart=yStart;

    this.xEnd=xEnd;
    this.yEnd=yEnd;

    this.getEndX = function(){
        return xEnd;
    }.bind(this)

    this.getEndY = function(){
        return yEnd;
    }.bind(this)
};

function Rectangle(xStart,yStart,width,height,thickness,color){
    Shape.call(thickness,color);

    this.xStart=xStart;
    this.yStart=yStart;

    this.width=width;
    this.height=height;

    this.getEndX = function(){
        return xStart+width;
    }.bind(this)

    this.getEndY = function(){
        return yStart+height;
    }.bind(this)

};
