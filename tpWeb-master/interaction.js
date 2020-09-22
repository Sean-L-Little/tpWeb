
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
	this.xStart = 0;
	this.yStart = 0;
	this.xEnd = 0;
	this.yEnd = 0;

	// Developper les 3 fonctions gérant les événements
	
	this.click = function(evt){
    this.xStart = getMousePosition(canvas,evt).x;
    this.yStart = getMousePosition(canvas,evt).y;
	}
	
	this.drag = function(evt){
    this.xEnd = getMousePosition(canvas,evt).x;
    this.yEnd = getMousePosition(canvas,evt).y;
	}
	
	this.drop = function(evt){
    this.xEnd = getMousePosition(canvas,evt).x;
    this.yEnd = getMousePosition(canvas,evt).y;
	}

	// Associer les fonctions précédentes aux évènements du canvas.
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



