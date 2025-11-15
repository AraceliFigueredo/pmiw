class Juego {
  constructor() {
    this.puertas = [];
    this.colores = [
      color(255, 0, 0),    // rojo
      color(0, 0, 255),    // azul
      color(0, 255, 0),    // verde
      color(255, 255, 0),  // amarillo
      color(150, 0, 255)   // violeta
    ];

    this.juegoActivo = true;
    this.mensaje = "";
    this.contador = new Contador(10, 10);
    this.sonido = new Sonido();
    this.pantalla = new Pantalla(); // pantalla de inicio y créditos
  }

  mostrar() {
    if (this.pantalla.estado === "inicio") {
      this.pantalla.mostrar();
      return;
    }

    if (this.juegoActivo) {
      // cada 30 frames creamos una puerta
      if (frameCount % 30 === 0) {
        // más probabilidad de violetas
        let col;
        if (random(1) < 0.4) { // 40% de probabilidad violeta
          col = color(150, 0, 255);
        } else {
          col = random(this.colores.slice(0, 4)); 
        }

        let vel;
        if (red(col) === 150 && green(col) === 0 && blue(col) === 255) {
          vel = random(4, 7);  // más rápido para puertas violetas
        } else {
          vel = random(2, 5);  // más lento para las otras
        }

        // crear puerta
        let nueva = new Puerta(random(50, width - 70), -100, 60, 100, vel, col);
        this.puertas.push(nueva);
      }

      // dibujar y mover puertas
      for (let p of this.puertas) {
        p.mover();
        p.mostrar();
      }

      // eliminar puertas que se van
      this.puertas = this.puertas.filter(p => p.y <= height + 50);

      // mostrar contador
      this.contador.mostrar();
    } else {
      this.pantalla.estado = "final";
      this.pantalla.mensajeFinal = this.mensaje;
      this.pantalla.mostrar();
    }
  }

  click(px, py) {
    // si estamos en instrucciones, empieza el juego
    if (this.pantalla.estado === "inicio") {
      this.pantalla.estado = "juego";
      return;
    }

    // si estamos en la pantalla final, reinicia
    if (!this.juegoActivo && this.pantalla.estado === "final") {
      this.reiniciar();
      this.pantalla.estado = "inicio";
      return;
    }

    // interacción con las puertas
    for (let i = this.puertas.length - 1; i >= 0; i--) {
      let p = this.puertas[i];
      if (p.chocar(px, py)) {
        if (p.esVioleta()) {
          this.contador.sumar(1);
          this.sonido.correcto();
          this.puertas.splice(i, 1);

          // si llega a 10 puntos gana
          if (this.contador.puntos >= 10) {
            this.juegoActivo = false;
            this.mensaje = "¡Ganaste!";
          }
        } else {
          this.juegoActivo = false;
          this.mensaje = "¡Perdiste!";
          this.sonido.incorrecto();
        }

        return;
      }
    }
  }

  reiniciar() {
    this.puertas = [];
    this.contador.reiniciar();
    this.juegoActivo = true;
    this.mensaje = "";
  }
}
