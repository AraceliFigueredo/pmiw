//https://www.youtube.com/watch?v=t7tnmk7tk88
let Opart;
let cantidad = 20;
let tamaño;
let diametroInical = 17; // tamaño de los circulos
let agrandar = false; // para controlar el agrandar los circulos
let mostrarBoton = false; // para ver el boton Reiniciar

function preload() {
  Opart = loadImage("Opart.png");
}

function setup() {
  createCanvas(800, 400);
  tamaño = width / cantidad;
}

function draw() {
  background(250);
  console.log("X:", mouseX, "Y:", mouseY);
  image(Opart, 0, 0);
  dibujarGrilla(cantidad / 2, cantidad, cantidad);

  // dibujo de los circulos
  for (let x = cantidad / 2; x < cantidad; x++) {
    for (let y = 0; y < cantidad; y++) {
      if ((x + y) % 2 == 0) {
        fill(255);
      } else {
        fill(0);
      }

    
      let diametro = 17;

      if (agrandar) {
        diametro = calcularDiametro(x, y);
      }

      ellipse(x * tamaño + tamaño / 2, y * tamaño + tamaño / 2, diametro, diametro);
    }
  }

  
  if (mostrarBoton) {
    fill(0);
    rect(width - 520, 0, 120, 40);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Reiniciar", width - 460, 20);
  }
}


function calcularDiametro(x, y) {
  let distancia = dist(mouseX, mouseY, x * tamaño + tamaño / 2, y * tamaño + tamaño / 2);
  let diametro = map(distancia, 0, width / 2, 17, 17 * 2);
  return diametro;
}

function mousePressed() {
  if (mouseX >= width - 120 && mouseX <= width - 20 &&
      mouseY >= 20 && mouseY <= 60) {
    // restaurar el estado inicial
    agrandar = false;
    mostrarBoton = false;
  } else {
    agrandar = !agrandar;
    mostrarBoton = true;
  }
}

function dibujarGrilla(desdeX, columnas, filas) {
  for (let x = desdeX; x < columnas; x++) {
    for (let y = 0; y < filas; y++) {
      if ((x + y) % 2 == 0) {
        fill(0);
      } else {
        fill(255);
      }
      rect(x * tamaño, y * tamaño, tamaño, tamaño);
    }
  }
}
