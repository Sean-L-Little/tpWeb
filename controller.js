
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	this.onInteractionStart = function(dnd){
		if(this.currEditingMode===editingMode.line){
			
		}
	}.bind(this)

	this.onInteractionUpdate = function(dnd){
		this.currentShape=Line(dnd.xStart,dnd.yStart,dnd.xEnd,dnd.xEnd,this.currLineWidth,this.currColour);
	}.bind(this)


	this.onInteractionEnd = function(dnd){
		this.currentShape=Line(dnd.xStart,dnd.yStart,dnd.xEnd,dnd.xEnd,this.currLineWidth,this.currColour);
	}
};


