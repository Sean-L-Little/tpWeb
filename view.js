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

  Drawing.prototype.removeShapeFromList = function(index){
    document.getElementById("bb"+index).remove();
    console.log("removeShapeFromList index: "+index);
  }

  Drawing.prototype.updateShapeList = function(){

    document.getElementById("shapeList").innerHTML="";

    console.log("forms length: "+this.getForms().length);
    
    for(i=0;i<this.getForms().length;i++){
      
      eltDuTableau = this.getForms()[i];

      shapeColor = eltDuTableau.color.toString();

      if(typeof eltDuTableau.height != "undefined"){ //Je sais que c'est un peu sale de faire comme ça, en effet.
        document.getElementById("shapeList").insertAdjacentHTML('beforeend','<span id="bb'+i+'"><button type="button"  class="btn btn-default"  style="background-color: '+shapeColor+'"><span class="glyphicon glyphicon-remove-sign"></span></button> <li><b>Rectangle</b></li></span>');
      }else {
        document.getElementById("shapeList").insertAdjacentHTML('beforeend','<span id="bb'+i+'"><button type="button" class="btn btn-default"  style="background-color: '+shapeColor+'"><span class="glyphicon glyphicon-remove-sign"></span></button> <li><b>Line</b></li></span>');
      }
    
    }
    
  };