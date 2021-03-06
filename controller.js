
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	document.getElementById("butRect").onclick = function(){ this.currEditingMode = editingMode.rect;}.bind(this)
	document.getElementById("butLine").onclick = function(){ this.currEditingMode = editingMode.line;}.bind(this)
	document.getElementById("spinnerWidth").onchange = function(){ this.currLineWidth = document.getElementById("spinnerWidth").value;}.bind(this)
	document.getElementById("colour").onchange = function() {this.currColour = document.getElementById("colour").value;}.bind(this)


	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	this.onInteractionStart = function(dnd){
		if(this.currEditingMode===editingMode.line){
			this.currentShape= new Line(dnd.xStart,dnd.yStart,dnd.xStart,dnd.yStart,this.currLineWidth,this.currColour);

		}else if(this.currEditingMode===editingMode.rect){
			this.currentShape= new Rectangle(dnd.xStart,dnd.yStart,0,0,this.currLineWidth,this.currColour);
		}
	}.bind(this)

	this.onInteractionUpdate = function(dnd){
		drawing.paint(ctx);

		if(this.currEditingMode===editingMode.line){

			this.currentShape.xEnd=dnd.xEnd;
			this.currentShape.yEnd=dnd.yEnd;
			this.currentShape.paint(ctx);

		}else if(this.currEditingMode===editingMode.rect){

			this.currentShape.width=dnd.xEnd-dnd.xStart;
			this.currentShape.height=dnd.yEnd-dnd.yStart;

			console.log("Width: "+this.currentShape.width);
			console.log("Height: "+ this.currentShape.height);
			this.currentShape.paint(ctx);

		}	
	}.bind(this)


	this.onInteractionEnd = function(dnd){

			
			drawing.addForm(this.currentShape);

			drawing.updateShapeList();

			buttons = document.getElementsByTagName('button');
			
			for (var i = 0; i < buttons.length; i++) {
				(function(index) {
					buttons[index].addEventListener("click", function() {

						drawing.paint(ctx);
						drawing.removeShapeFromList(index);
						drawing.removeForm(index);
						drawing.paint(ctx);
						console.log("remove index: "+index);
					})
				})(i);
				
			}
			drawing.paint(ctx);


			
	}.bind(this)


};


