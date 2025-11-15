//https://youtu.be/jy1cgMLKOeY
//userflow:https://www.figma.com/board/UDJ1Gp4pKerNEQZy7RWXKJ/Sin-t%C3%ADtulo?node-id=0-1&t=yaJWBSVP9dbUNOpi-1
let mb = [];

let texto = ['Era un día tranquilo de trabajo como siempre, de repente aparecio Randall con una trampa inesperada. \n Encerró a Mike y Sully en un pasillo interminable de puertas '];
let texto1 = ['Haz clic en las opciones para elegir qué harán los personajes. Cada decisión cambia el final.'];
let texto2 = ['LISTO PARA JUGAR? ...'];
let texto4 = [ 'Haz Completado el juego']
  let texto5= [ 'La Puerta que elegiste te trajo a un cuarto sin salida \n GAME OVER ']
  let texto6= [ 'Fuiste expulsado al himalaya!, sigue para intentar volver']
  let texto7= [ ' FIN DEL JUEGO.']
  let texto8= [ '¡te deseo suerte, ojalá encuentres la salida! ']
   let texto9= [ 'ENTRAR ']
  let texto10= [ '¡tenés 2 caminos!  debes elegir cual de estas puertas crees que te dejará volver a la fabrica ']
  let texto11= [ ' ¡Lo lograste! encontraste la puerta que te trajo nuevamente a la fabrica']
  let texto12= [ 'SIGUIENTE']
  let texto13= [ 'No hay ninguna puerta… Lo intentamos todo, Mike. Sin una salida, nunca vamos a volver a casa…']
  let texto14= [ 'Probemos donde nos lleva esta puerta']
let texto15=['estamos en la habitación de puertas descartadas, esta es la única que puede funcionar' ]
let texto16=['¡mike mirá lo que hiciste, explotó el salón principal de puertas!' ]
let texto17=['se destruyeron todas las puertas de la fabrica, debemos buscar una nueva manera de vivir sin puertas' ]
let texto18=['Veamos que hay detras de esta puerta, entremos juntos' ]
let texto19=[ 'Van a tener que seguir su camino y encontrar la salida mike!' ]
let texto20=['Creado por Araceli Figueredo y Juana Orcajo.\n Inspirado en Monster Inc: historia de Jeff Pidgeon']

  let miFuente;
let pantalla = 0;
let song;
let sonidoActivo = false;
 
 function preload () {
    mb.push(loadImage ('assets/1.png' ));
    mb.push(loadImage ('assets/2.png' ));
    mb.push(loadImage ('assets/3.png' ));
    mb.push(loadImage ('assets/4.png' ));
    mb.push(loadImage ('assets/5.png' ));
    mb.push(loadImage ('assets/6.png' ));
    mb.push(loadImage ('assets/7.png' ));
    mb.push(loadImage ('assets/8.png' ));
    mb.push(loadImage ('assets/9.png' ));
    mb.push(loadImage ('assets/10.png' ));
    mb.push(loadImage ('assets/11.png' ));
    mb.push(loadImage ('assets/12.png' ));
    mb.push(loadImage ('assets/13.png' ));
    mb.push(loadImage ('assets/14.png' ));
    mb.push(loadImage ('assets/15.png' ));
    mb.push(loadImage ('assets/16.png' ));
    mb.push(loadImage ('assets/17.png' ));
    miFuente = loadFont('assets/AlfaSlabOne-Regular.ttf');
    song = loadSound('assets/monsterinc.mp3');
   }
   function setup() {
  createCanvas( 640, 480 );
  textFont(miFuente);
  imageMode( CENTER );
}
function draw() {
  background( 112, 128, 73 );
  
   if (pantalla === 0) {
    image( mb[0], 320,240 );
    image (mb [0], 320, 240);
    fill('#6ED173');
    textSize( 20 );
    textAlign(LEFT, TOP);
    text(texto, 143, 156, 520, 200);
    fill('#6ED173');
    noStroke();
    dibujarBoton(465, 410, 155, 50, 'Continuar');
    dibujarBoton(20, 410, 155, 50, 'Créditos');
  }
   else if (pantalla === 1) {
    image (mb [1], 320, 240);
    fill('#C69332');
    textSize( 25);
    textAlign(LEFT, TOP);
    text(texto1, 173, 180, 430, 200);
    text(texto2, 85, 120, 540, 300);
    dibujarBoton(475, 420, 160, 55, 'Comenzar la aventura');
  }
  else if ( pantalla === 2) {
    image (mb [2], 320, 240);
    textAlign(LEFT, TOP);
    textSize( 30 );
    dibujarBoton(485, 138, 127, 43, 'puerta de Flores');
    dibujarBoton(485, 260, 127, 43, 'puerta Amarilla');
    dibujarBoton(485, 380, 127, 43, 'puerta Marron');
  }
  else if ( pantalla === 3) {
    image (mb [3], 320, 240);
   textAlign(LEFT, TOP);
    textSize( 30 );
    dialogoDeTexto(texto8, 0, 120, 80, 230, 120);
    dibujarBoton(485, 380, 127, 43, 'Entrar');
     }
     else if ( pantalla === 4) {
    image (mb [4], 320, 240);
    textAlign(LEFT, TOP);
    textSize( 30 );
    dialogoDeTexto(texto10, 0, 198, 166, 250, 120);
    dibujarBoton(30, 129, 155, 50, 'Entrar');//izquierdo puerta violeta
    dibujarBoton(460, 129, 155, 50, 'Entrar');//derecha puerta amarilla
   }
   else if ( pantalla === 5) {
    image (mb [5], 320, 240);
    textAlign(LEFT, TOP);
    textSize( 30 );
    text(texto4, 100, 40, 540, 300);
    dialogoDeTexto(texto11, 0, 190, 194, 250, 120);
    dibujarBoton(464, 430, 155, 35, 'Reiniciar');
 }
 else if ( pantalla === 6) {
    image (mb [6], 320, 240);
    textAlign(LEFT, TOP);
    textSize( 30 );
    text(texto5, 96, 40, 540, 200);
    dibujarBoton(464, 408, 155, 35, 'Reiniciar');
     } 
     else if ( pantalla === 7) {
    image (mb [7], 320, 240);
    textAlign(LEFT, TOP);
    textSize( 30 );
    dialogoDeTexto(texto18, 0, 325, 145, 297, 100);
    dibujarBoton(174, 420, 155, 40, 'Entrar');
     }
     else if ( pantalla === 8) {
    image (mb [8], 320, 240);
    textAlign(LEFT, TOP);
    textSize( 30 );
    dibujarBoton(240, 265, 150, 30, 'Entrar');
      } 
     else if ( pantalla === 9) {
    image (mb [9], 320, 240);
    textAlign(LEFT, TOP);
    textSize( 30 );
    text(texto6, 96, 40, 540, 200);
    dibujarBoton(475, 420, 155, 50, 'Siguiente');
     }
     else if ( pantalla === 10) {
    image (mb [10], 320, 240);
    textAlign(LEFT, TOP);
    textSize( 30 );
    dialogoDeTexto(texto13, 0, 167, 12, 460, 120);
    dibujarBoton(475, 420, 155, 50, 'Siguiente');
   } 
   else if ( pantalla === 11) {
    image (mb [11], 320,240);
    textAlign(LEFT, TOP);
    textSize( 30 );
    dialogoDeTexto(texto19, 0, 230, 140, 250, 120);
    dibujarBoton(475, 420, 155, 50, 'Siguiente');
     }
     else if ( pantalla === 12) {
    image (mb [12], 320, 240);
    textAlign(LEFT, TOP);
    textSize( 30 );
    dialogoDeTexto(texto14, 0, 90, 70, 250, 120);
    dibujarBoton(316, 420, 155, 50, 'Entrar');
     } 
     else if ( pantalla === 13) {
    image (mb [13], 320, 240);
    textAlign(LEFT, TOP);
    textSize( 30 );
    dialogoDeTexto(texto15, 0, 240, 150, 380, 120);
    dibujarBoton(180, 420, 155, 30, 'Entrar');
   }  
   else if ( pantalla === 14) {
    image (mb [14], 320, 240);
    textAlign(LEFT, TOP);
    textSize( 30 );
    dialogoDeTexto(texto16, 0, 240, 150, 380, 120);
    dibujarBoton(475, 420, 155, 50, 'Siguiente');
    } 
    else if ( pantalla === 15) {
    image (mb [15], 320, 240);
    textAlign(LEFT, TOP);
    textSize( 30 );
    text(texto7, 170, 50, 540, 300);
    dialogoDeTexto(texto17, 0, 100, 130, 480, 120);
    dibujarBoton(464, 430, 155, 35, 'Reiniciar');
  }
  else if ( pantalla === 16) {
    image (mb [16], 320, 240);
    textAlign(LEFT, TOP);
    textSize( 30 );
    text(texto20, 170, 30, 500, 400);
    dibujarBoton(244, 430, 155, 35, 'Reiniciar');
}
}
  function dibujarBoton(x, y, ancho, alto, texto) {
  fill('#6EC9D1');
  stroke('#050503');
  rect(x, y, ancho, alto);
  textSize( 13 );
  fill('#6ED173');
  textAlign(CENTER, CENTER);
  text(texto, x + ancho / 2, y + alto / 2);
}

function dialogoDeTexto(textoArray, indice, x, y, ancho, alto) {
  fill('#6EA6D1');
  rect(x, y, ancho, alto, 10, 15, 10, 0);
  textSize(22);
  fill('#A23CBF');
  textAlign(LEFT, TOP);
  text(textoArray[indice], x + 10, y + 10, ancho - 20, alto - 20);
}
 function mousePressed() {
  if (pantalla === 0) {
    if (mouseX > 465 && mouseX < 620 && mouseY > 410 && mouseY < 460) {
  pantalla = 1;
  song.play();
  sonidoActivo = !sonidoActivo;
}
 if (mouseX > 20 && mouseX < 175 && mouseY > 410 && mouseY < 460)  {
      pantalla = 16;
}
  }
  else if (pantalla === 1) {
    if (mouseX > 510 && mouseX < 635 && mouseY > 420 && mouseY < 470) {
      pantalla = 2;
    }
  }
  else if (pantalla === 2) {
    //Puerta de flores
    if (mouseX > 485 && mouseX < 612 && mouseY > 138 && mouseY < 181) {   
  pantalla = 7;     
}
//Puerta marron
    else if (mouseX > 485 && mouseX < 612 && mouseY > 380 && mouseY < 423) {
  pantalla = 3;  
}
 //Puerta amarilla
    else if (mouseX > 485 && mouseX < 612 && mouseY > 260 && mouseY < 303) {  
  pantalla = 13;
}
  }
   else if (pantalla === 3) {
  if (mouseX > 485 && mouseX < 612 && mouseY > 380 && mouseY < 423) {
    pantalla = 4;
  }
}
  else if (pantalla === 4) {
  // puerta violeta
  if (mouseX > 30 && mouseX < 185 && mouseY > 129 && mouseY < 179) {
    pantalla = 5;  
  }
  // puerta amarilla
else if (mouseX > 460 && mouseX < 615 && mouseY > 129 && mouseY < 179) {  
  pantalla = 6;
 }
}
else if (pantalla === 5) {
  if (mouseX > 464 && mouseX < 619 && mouseY > 430 && mouseY < 465) {
 
      pantalla = 0;
    }
  }
 else if (pantalla === 6) {
  if (mouseX > 464 && mouseX < 619 && mouseY > 408 && mouseY < 443) {
    pantalla = 0;
  }
}
  else if (pantalla === 7) {
    if (mouseX > 174 && mouseX < 329 && mouseY > 420 && mouseY < 460) {
      pantalla = 8;
    }
  }
  else if (pantalla === 8) {
    if (mouseX > 240 && mouseX < 390 && mouseY > 265 && mouseY < 295) {
      pantalla = 9;
    }
  }
  else if (pantalla === 9) {
    if (mouseX > 475 && mouseX < 630 && mouseY > 420 && mouseY < 470) {
      pantalla = 10;
    }
  }
  else if (pantalla === 10) {
    if (mouseX > 475 && mouseX < 630 && mouseY > 420 && mouseY < 470) {
      pantalla = 11;
    }
  }
  else if (pantalla === 11) {
    if (mouseX > 475 && mouseX < 630 && mouseY > 420 && mouseY < 470) {
      pantalla = 12;
    }
  }
  else if (pantalla === 12) {
    if (mouseX > 316 && mouseX < 471 && mouseY > 420 && mouseY < 470) {
      pantalla = 13;
    }
  }
  else if (pantalla === 13) {
    if (mouseX > 180 && mouseX < 335 && mouseY > 420 && mouseY < 450)  {
      pantalla = 14;
    }
  }
  else if (pantalla === 14) {
    if (mouseX > 475 && mouseX < 630 && mouseY > 420 && mouseY < 470) {
      pantalla = 15;
    }
  }
  else if (pantalla === 15) {
    if (mouseX > 464 && mouseX < 619 && mouseY > 430 && mouseY < 465) {
      pantalla = 0; 
      miEleccion = null;
      song.stop();
      sonidoActivo = false;
    }
  }
   else if (pantalla === 16) {
   if (mouseX > 244 && mouseX < 399 && mouseY > 430 && mouseY < 465) {
      pantalla = 0;
}
}
 }
  
  
  
  
  
  
  
  
