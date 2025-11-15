class Contador {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.puntos = 0;
  }

  mostrar() {
    fill(255);
    textAlign(LEFT, TOP);
    textSize(24);
    text("Puntos: " + this.puntos, this.x, this.y);
  }

  sumar(cantidad) {
    this.puntos += cantidad;
  }

  reiniciar() {
    this.puntos = 0;
  }
}
