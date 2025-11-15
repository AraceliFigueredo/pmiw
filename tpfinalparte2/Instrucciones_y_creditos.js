class Pantalla {
  constructor() {
    this.estado = "inicio"; 
    this.mensajeFinal = "";
  }

  mostrar() {
    // Fondo distinto según el estado
    if (this.estado === "inicio") {
      image(fondoInicio, 450, 310, 400, 310);
    } 
    else if (this.estado === "final") {
      image(fondoFinal, 210, 380, 400, 310);
    }

    // Texto sobre el fondo
    fill(255);
    textAlign(CENTER, CENTER);
    textFont('Arial'); 

    if (this.estado === "inicio") {
      textSize(40);
      text("Atrapa 10 puertas violetas", width / 2, height / 2 - 60);
      textSize(30);
      text("Haz clic para comenzar", width / 2, height / 2 + 10);
      textSize(22);
      text("Usa el cursor para atrapar. Evita las otras puertas.", width / 2, height / 2 + 50);
    }

    if (this.estado === "final") {
      textSize(40);
      text(this.mensajeFinal, width / 2, height / 2 - 40);
      textSize(22);
      text("Haz clic para reiniciar", width / 2, height / 2 + 30);
      textSize(10);
      text("Juego creado por Juana Orcajo y Araceli Figueredo", 510, 450);
    }
  }
}
