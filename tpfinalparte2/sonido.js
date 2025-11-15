class Sonido {
  constructor() {}

  correcto() {
    Sonido.sonidoCorrecto.play();
  }

  incorrecto() {
    Sonido.sonidoIncorrecto.play();
  }

  //se llama en preload()
  static preload() {
    Sonido.sonidoCorrecto = loadSound("data/correcto.mp3");
    Sonido.sonidoIncorrecto = loadSound("data/error.mp3");
  }
}
