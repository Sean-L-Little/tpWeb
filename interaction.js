
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'

	this.pressure = false;
	this.xStart = 0;
	this.yStart = 0;
	this.xEnd = 0;
	this.yEnd = 0;

	// Developper les 3 fonctions gérant les événements
	
	this.click = function(evt){

		this.pressure = true;

    	this.xStart = getMousePosition(canvas,evt).x;
		this.yStart = getMousePosition(canvas,evt).y;
		
		interactor.onInteractionStart(this);

		console.log("Click X pos: "+this.xStart);
		console.log("Click Y pos: "+this.yStart);
		
	}.bind(this)
	
	this.drag = function(evt){

		if(this.pressure){
			
    		this.xEnd = getMousePosition(canvas,evt).x;
			this.yEnd = getMousePosition(canvas,evt).y;

			interactor.onInteractionUpdate(this);

			console.log("Drag X pos: "+this.xEnd);
			console.log("Drag Y pos: "+this.yEnd);

		}
		
		
	}.bind(this)
	
	this.drop = function(evt){
		if(this.pressure){

			this.pressure=false;
    		this.xEnd = getMousePosition(canvas,evt).x;
			this.yEnd = getMousePosition(canvas,evt).y;
			
			interactor.onInteractionEnd(this);

		console.log("Drop X pos: "+this.xEnd);
		console.log("Drop Y pos: "+this.yEnd);

		}

	}.bind(this)

	// Associer les fonctions précédentes aux évènements du canvas.

	canvas.addEventListener('mousedown', this.click, false)
	canvas.addEventListener('mousemove', this.drag, false)
	canvas.addEventListener('mouseup', this.drop, false)
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};


