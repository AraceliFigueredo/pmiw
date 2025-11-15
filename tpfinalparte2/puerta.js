class Puerta {
  constructor(x, y, ancho, alto, vel, col) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.vel = vel;
    this.color = col;
  }

  mover() {
    this.y += this.vel;
  }

  mostrar() {
    fill(this.color);
    rect(this.x, this.y, this.ancho, this.alto, 6);
    fill(200, 180, 80);
    ellipse(this.x + this.ancho - 15, this.y + this.alto / 2, 10, 10);
  }

  chocar(px, py) {
    return (
      px > this.x &&
      px < this.x + this.ancho &&
      py > this.y &&
      py < this.y + this.alto
    );
  }

  esVioleta() {
    return (
      red(this.color) === 150 &&
      green(this.color) === 0 &&
      blue(this.color) === 255
    );
  }
}
