//https://youtu.be/q9RQigoz_2M
let cursorImg;
let juego;
let fondoInicio;
let fondoFinal;

function preload() {
  cursorImg = loadImage("data/cursor.png");
  fondoInicio = loadImage("data/fondoInicio.png"); // fondo instrucciones
  fondoFinal = loadImage("data/fondoFinal.png");   // fondo créditos
  Sonido.preload();
}


function setup() {
  createCanvas(640, 480);
  noCursor();
  juego = new Juego();
}

function draw() {
  background(0);
  juego.mostrar();

  // Cursor personalizado
  imageMode(CENTER);
  image(cursorImg, mouseX, mouseY, 70, 70);
}

function mousePressed() {
  juego.click(mouseX, mouseY);
}
