Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
    Shape.prototype.paint.call(ctx,this);
    ctx.beginPath();
    ctx.rect(this.xStart, this.yStart, this.getEndX(), this.getEndY());
    ctx.stroke();
  };
  
  Line.prototype.paint = function(ctx) {
    //TODO Manager color
    Shape.prototype.paint.call(ctx,this);
    ctx.beginPath();
    ctx.moveTo(this.xStart, this.yStart);
    ctx.lineTo(this.getEndY(), this.getEndY());
    ctx.stroke();
  };

  Shape.prototype.paint = function(ctx){
      ctx.lineWidth = this.thickness;
      ctx.strokeStyle = this.color;
  }
  
  Drawing.prototype.paint = function(ctx ) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
      // now fill the canvas
      eltDuTableau.paint(ctx);
    });
  };
  