shapeList = []
Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;

    ctx.beginPath();
    ctx.rect(this.xStart, this.yStart, this.width, this.height);
    ctx.stroke();
  };
  
  Line.prototype.paint = function(ctx) {
    //TODO Manager color

    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
    ctx.beginPath();
    ctx.moveTo(this.xStart, this.yStart);
    ctx.lineTo(this.xEnd, this.yEnd);
    ctx.stroke();
  };


  
  Drawing.prototype.paint = function(ctx ) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
      // now fill the canvas
      eltDuTableau.paint(ctx);
    });
  };
  

  Drawing.prototype.updateShapeList = function(){
    let htmlContent="";
    document.getElementById("shapeList").innerHTML="";
    
    this.getForms().forEach(function (eltDuTableau){

      console.log("Constructor Name: " + eltDuTableau.constructor.name);
      if(eltDuTableau.constructor.name === Shape){
        document.getElementById("shapeList").insertAdjacentHTML('beforeend',"<li>Line</li>");
               
      }else if(eltDuTableau.constructor.name === Rectangle){
        document.getElementById("shapeList").insertAdjacentHTML('beforeend',"<li>Rectangle</li>");
        
      }
    });
  };