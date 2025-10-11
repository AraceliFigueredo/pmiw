let imagenes = [];
let textos = [];
let escenaActual = 0;
let botones = [];
let botonMensaje;
let miFuente2 = [];
let musicaFondo;
let audioIniciado = false;

//https://www.youtube.com/watch?v=mIKBrUlR-QM

function preload() {
  miFuente2 = loadFont('assets/botones.ttf');
  for (let i = 1; i <= 19; i++) {
    imagenes.push(loadImage(`assets/${i}.png`));
  }
  musicaFondo = loadSound('assets/musica.mp3.mp3');
}

function setup() {
  createCanvas(640, 480);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  textFont(miFuente2);
 
 
  textos[1] = {
    contenido: "¿Listo para la aventura?",
    x: 70,
    y: 150,
    tamano: 40,
    color: [0],
    alineX: CENTER,
    alineY: CENTER,
  };

  textos[2] = {
    contenido:"Era un día tranquilo en la fábrica de Monstruos S.A. Mike y Sully estaban trabajando como de costumbre, cuando de repente apareció Randall. Con una trampa inesperada, los encerró en un pasillo interminable. Ahora deberán encontrar la manera de escapar y regresar a la fábrica.",
    x: 60,
    y: 160,
    tamano: 16,
    color: [0],
    alineX: LEFT,
    alineY: TOP,
  };

  textos[3] = {
    contenido: "Haz click en las opciones para elegir qué harán los personajes, cada decisión cambia el final.",
    x: 60,
    y: 20,
    tamano: 18,
    color: [0],
    alineX: CENTER,
    alineY: CENTER,
  };
  
  textos[18] = {
    contenido:"Creado por Araceli Figueredo y Juana Orcajo.\n Inspirado en Monster Inc: historia de Jeff Pidgeon",
    x: 60,
    y: 55,
    tamano: 16,
    color: [0],
    alineX: CENTER,
    alineY: TOP,
  };

  configurarBotones();
}
function draw() {
  background(220);

  if (escenaActual === 5) {
    dibujarEscena5();
    return;
  }

  // que imagen va en cada escena
  if (imagenes[escenaActual]) {
    image(imagenes[escenaActual], width / 2, height / 2, width, height);
  }

  
  if (textos[escenaActual]) {
    let t = textos[escenaActual];
    fill(t.color);
    textSize(t.tamano);
    textAlign(t.alineX, t.alineY);
    text(t.contenido, t.x, t.y, 520, 200);
  }
if (escenaActual === 13) {
        //definir variables
        let rectX = width - 150;
        let rectY = 100;
        let rectW = 100;
        let rectH = 150;
        
        
        if (mouseX > rectX && mouseX < rectX + rectW && mouseY > rectY && mouseY < rectY + rectH) {
            push(); 
            fill(255, 200); 
            stroke(0);
            strokeWeight(1);
            rect(rectX, rectY, rectW, rectH, 8);

            
            fill(0);
            noStroke();
            textSize(12);
            textAlign(CENTER, CENTER);
            text("¡puerta secreta!", rectX + rectW / 2, rectY + rectH / 2);
            pop();
        }
    }
  // Textos 
  if (escenaActual === 11) {
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    textFont(miFuente2);
    text("FUISTE EXPULSADO AL HIMALAYA, SIGUE PARA INTENTAR VOLVER", width / 2, height / 2 + 210);
  }

  if (escenaActual === 17) {
    fill(255);
    textSize(27);
    textAlign(CENTER, CENTER);
    textFont(miFuente2);
    text("FIN DEL JUEGO", width / 2, height / 2 - 210);
  }

  if (escenaActual === 7) {
    fill(0);
    textSize(24);
    textAlign(CENTER, CENTER);
    textFont(miFuente2);
    text("Has completado el juego", width / 2, height / 2 - 200);
  }

  if (escenaActual === 8) {
    fill(255);
    textSize(16);
    textAlign(CENTER, CENTER);
    textFont(miFuente2);
    text("La puerta que elegiste te trajo a un cuarto sin salida", width / 2, height / 2 - 200);
    textSize(25);
    text("GAME OVER", width / 2, height / 2 - 150);
  }

 
  if ([0, 2, 3, 4, 6, 9, 10, 11, 12, 14, 15, 16].includes(escenaActual)) {
    for (let btn of botones) {
      btn.mostrar();
    }
  }


  if ([5, 7, 8, 17].includes(escenaActual) && botonMensaje) {
    botonMensaje.mostrar();
  }

  
  if (escenaActual === 6) {
    dibujarGlobo(320, 200, 250, 80, 15,"¡Tenés 2 caminos! Debes elegir cuál de estas puertas crees que te dejará volver a la fábrica.");
  }
  if (escenaActual === 7) {
    dibujarGlobo(300, 190, 250, 80, 15, "¡Lo lograste! encontraste la puerta que te trajo nuevamente a la fabrica.");
  }
  if (escenaActual === 9) {
    dibujarGlobo(450, 190, 250, 80, 15,"Veamos que hay detrás de esta puerta, ¡entremos juntos!");
  }
  if (escenaActual === 12) {
    dibujarGlobo(350, 70, 250, 80, 15, "No hay ninguna puerta...lo intentamos todo, Mike. Sin una salida, nunca vamos a volver a casa...");
  }
  if (escenaActual === 13) {
    dibujarGlobo(200, 210, 250, 80, 15, "Deberás encontrar la puerta secreta, que está escondida en la pantalla.");
  }
  if (escenaActual === 14) {
    dibujarGlobo(150, 130, 250, 80, 15, "Probemos donde nos lleva esta puerta." );
  }
  if (escenaActual === 15) {
    dibujarGlobo(300, 240, 250, 80, 15,"Estamos en la habitación de puertas descartadas, esta es la única que puede funcionar." );
  }
  if (escenaActual === 16) {
    dibujarGlobo(220, 240, 250, 80, 15, "¡Mike mirá lo que hiciste, explotó el salón principal de puertas!" );
  }
  if (escenaActual === 17) {
    dibujarGlobo(170, 190, 250, 80, 15, "Se destruyeron todas las puertas de la fabrica, debemos buscar una nueva manera de vivir sin puertas.");
  }
}

// Escena 5 con globo
function dibujarEscena5() {
  if (imagenes[5]) {
    image(imagenes[5], width / 2, height / 2, width, height);
  }
  dibujarGlobo(320, 210, 250, 80, 15,"¡TE DESEO SUERTE! OJALÁ ENCUENTRES LA SALIDA.");
  if (botonMensaje) botonMensaje.mostrar();
}


// Globo de diálogo
function dibujarGlobo(x, y, w, h, r, txt) {
  push();
  translate(x - w / 2, y - h / 2);
  fill(255);
  stroke(60);
  strokeWeight(0);
  rect(0, 0, w, h, r);
  beginShape();
  vertex(w / 2 - 10, h);
  vertex(w / 2, h + 12);
  vertex(w / 2 + 10, h);
  endShape(CLOSE);
  noStroke();
  fill(0);
  textSize(12);
  textAlign(CENTER, CENTER);
  text(txt, 10, 10, w - 20, h - 20);
  pop();
}

// botones
function configurarBotones() {
  botones = [];
  botonMensaje = null;

  if (escenaActual === 0) {
    botones.push(new Boton("CONTINUAR", 220, 200, 200, 40));
    botones.push(new Boton("JUEGO NUEVO", 220, 260, 200, 40));
    botones.push(new Boton("OPCIONES", 220, 320, 200, 40));
    botones.push(new Boton("CRÉDITOS", 220, 380, 200, 40));
  }
  if (escenaActual === 2) botones.push(new Boton("CONTINUAR", 220, 380, 200, 40));
  if (escenaActual === 3) botones.push(new Boton("COMENZAR JUEGO", 220, 380, 200, 40));
  if (escenaActual === 18) botones.push(new Boton("CRÉDITOS", 220, 380, 200, 40));
  if (escenaActual === 4) {
    botones.push(new Boton("PUERTA DE FLORES", 440, 260, 160, 40));
    botones.push(new Boton("PUERTA AMARILLA", 440, 320, 160, 40));
    botones.push(new Boton("PUERTA MARRÓN", 440, 380, 160, 40));
  }
  if (escenaActual === 5) botonMensaje = new Boton("ENTRAR", 460, 400, 120, 40);
  if (escenaActual === 6) {
    botones.push(new Boton("ENTRAR", 90, 80, 110, 40));
    botones.push(new Boton("ENTRAR", 450, 80, 110, 40));
  }
  if (escenaActual === 7) botonMensaje = new Boton("VOLVER A INICIAR", 450, 400, 150, 40);
  if (escenaActual === 8) botonMensaje = new Boton("VOLVER A INICIAR", 450, 400, 150, 40);
  if (escenaActual === 9) botones.push(new Boton("ENTRAR", 200, 380, 130, 40));
  if (escenaActual === 10) botones.push(new Boton("ENTRAR", 265, 260, 110, 40));
  if (escenaActual === 11) botones.push(new Boton("SIGUIENTE", 500, 45, 110, 40));
  if (escenaActual === 12) botones.push(new Boton("SIGUIENTE", 500, 420, 110, 40));
  if (escenaActual === 14) botones.push(new Boton("ENTRAR", 400, 60, 110, 40));
  if (escenaActual === 15) botones.push(new Boton("ENTRAR", 320, 360, 110, 40));
  if (escenaActual === 16) botones.push(new Boton("SIGUIENTE", 500, 420, 110, 40));
  if (escenaActual === 17) botonMensaje = new Boton("VOLVER A INICIAR", 450, 400, 150, 40);
}

function reiniciarEscenaCero() {
  escenaActual = 0;
  configurarBotones();
  textos[0] = "";
}

// Clicks
function mousePressed() {
   if (!audioIniciado) {
    userStartAudio(); 
    if (!musicaFondo.isPlaying()) {
      musicaFondo.loop(); 
    }
    audioIniciado = true; 
  }
  if (escenaActual === 5 && botonMensaje && botonMensaje.estaEncima()) {
    escenaActual++;
    configurarBotones();
    return;
     }
   
  if (escenaActual === 6) {
    if (botones[0].estaEncima()) {
      escenaActual = 7;
      configurarBotones();
      return;
    }
    if (botones[1].estaEncima()) {
      escenaActual = 8;
      configurarBotones();
      return;
    }
    return;
  }

  if ([7, 8, 17].includes(escenaActual)) {
    if (botonMensaje && botonMensaje.estaEncima()) {
      escenaActual = 0;
      configurarBotones();
      return;
    }
    return;
  }
  
  if (escenaActual === 13) {
    let rectX = width - 150;
    let rectY = 100;
    let rectW = 100;
    let rectH = 150;
    if (mouseX > rectX && mouseX < rectX + rectW && mouseY > rectY && mouseY < rectY + rectH) {
      escenaActual = 6;
      configurarBotones();
      return;
    }
    for (let btn of botones) {
      if (btn.estaEncima() && btn.etiqueta === "SIGUIENTE") {
        escenaActual = 6;
        configurarBotones();
        return;
      }
    }
    return;
  }

  const escenasClick = [9, 10, 11, 12, 14, 15, 16];
  if (escenasClick.includes(escenaActual)) {
    for (let btn of botones) {
      if (btn.estaEncima()) {
        escenaActual++;
        configurarBotones();
        return;
      }
    }
    return;
  }

 if ([0, 2, 3, 4].includes(escenaActual)) {
  for (let btn of botones) {
    if (btn.estaEncima()) {
      if (escenaActual === 0 && btn.etiqueta === "JUEGO NUEVO") escenaActual++;
      if (escenaActual === 0 && btn.etiqueta === "CRÉDITOS") escenaActual = 18;
      if (escenaActual === 2 && btn.etiqueta === "CONTINUAR") escenaActual++;
      if (escenaActual === 3 && btn.etiqueta === "COMENZAR JUEGO") escenaActual++;
      if (escenaActual === 4) {
        if (btn.etiqueta === "PUERTA DE FLORES") escenaActual = 9;
        if (btn.etiqueta === "PUERTA AMARILLA") escenaActual = 14;
        if (btn.etiqueta === "PUERTA MARRÓN") escenaActual = 5;
      }
      configurarBotones();
    }
  }
  return;
} else if (escenaActual !== 5) {
    escenaActual++;
    if (escenaActual >= imagenes.length) reiniciarEscenaCero();
    configurarBotones();
  }
}

// 
class Boton {
  constructor(etiqueta, x, y, w, h) {
    this.etiqueta = etiqueta;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  mostrar() {
    fill(100, 130, 180);
    stroke(50);
    strokeWeight(2);
    rect(this.x, this.y, this.w, this.h, 8);
    fill(255);
    noStroke();
    textSize(16);
    textAlign(CENTER, CENTER);
    text(this.etiqueta, this.x + this.w / 2, this.y + this.h / 2);
  }

  estaEncima() {
    return ( mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h);}
}
