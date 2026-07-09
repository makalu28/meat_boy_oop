//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion

/// <reference path="kod_01-likovi.js"/>
/// <reference path="kod_02-postavke.js"/>

/**
 * Promjena stanja likova - interakcije
 */
function update_main() {

  if (GAME.activeWorldMap.name == "igra")
    level1();

  if (GAME.activeWorldMap.name=="level2") {
    level2();
  }

  GAME.update();

};

function level1() {
  if (SENSING.right.active) {
    Postavke.boy.moveRight();
  }
  if (SENSING.left.active) {
    Postavke.boy.moveLeft();
  }
  if (SENSING.down.active) {
    Postavke.boy.moveDown();
  }

  //kad skoci na trampolinu moze skocit vise neg inace i to je PREOPTEREĆENJE
  if (SENSING.up.active) {
    let pod = "";
    if (Postavke.boy.touching(Postavke.trampolin)){
      pod = "trampolin";
    }
    Postavke.boy.jump(pod);
  }

  //kad pritisne D puca
  if (SENSING.keyD.active) {
    if (!Postavke.boy.puca) {
      Postavke.boy.puca=true;
      Postavke.boy.pucaj();
    }
    else {
      Postavke.boy.puca=false;
    }

    for (let i = 0; i < Postavke.projektili.length; i++) {
    const p = Postavke.projektili[i];

    if (!p.visible) continue;

    if (Postavke.neprijatelj1.visible && p.touching(Postavke.neprijatelj1)) {
        p.stop();
        Postavke.neprijatelj1.visible = false;
        break;
    }

    if (Postavke.neprijatelj2.visible && p.touching(Postavke.neprijatelj2)) {
        p.stop();
        Postavke.neprijatelj2.visible = false;
        break;
    }

    if (Postavke.neprijatelj3.visible && p.touching(Postavke.neprijatelj3)) {
        p.stop();
        Postavke.neprijatelj3.visible = false;
        break;
    }
  }
}
 
//ako dodirne kotac resetira se (vrati na pocetak i gubi zivot)
  if (Postavke.boy.touching(Postavke.kotac)) { 
    Postavke.boy.resetiraj();
  }

 for (let i = 0; i < Postavke.neprijatelji.length; i++) {
  const k = Postavke.neprijatelji[i];
    if (Postavke.boy.touching(k)) {
      Postavke.boy.resetiraj();
    }
  }

   
  Postavke.neprijatelj1.pucanje();
  Postavke.neprijatelj1.updatePosition();
  Postavke.neprijatelj2.pucanje();
  Postavke.neprijatelj2.updatePosition();
  Postavke.neprijatelj3.pucanje();
  Postavke.neprijatelj3.updatePosition();
  
  Postavke.boy.pokupiKljuc(Postavke.kljuc);
    
  Postavke.kotac.updatePosition();
  Postavke.kljuc.updatePosition();
  Postavke.projektil.updatePosition();
    

//Kad dodirne cilj i pritom ubije sve neprijatelje i pokupi ključ prelazi se u novi level
if (Postavke.boy.touching(Postavke.kraj) && Postavke.neprijatelj1.visible==false && Postavke.neprijatelj2.visible ==false && Postavke.neprijatelj3.visible ==false && Postavke.kljuc.visible==false) {
    btnGame.dispatchEvent(levelUpEvent);
}

}

function level2() {
  if (SENSING.right.active) {
    Postavke.boy.moveRight();
  }

  if (SENSING.left.active) {
    Postavke.boy.moveLeft();
  }

  if (SENSING.up.active) {
    let pod = "";
    if (Postavke.boy.touching(Postavke.trampolin)){
      pod = "trampolin";
    }
    
    Postavke.boy.jump(pod);
    
  }

  if (SENSING.keyD.active) {
    if (!Postavke.boy.puca) {
      Postavke.boy.puca=true;
      Postavke.boy.pucaj();
    }
    else {
      Postavke.boy.puca=false;
    }

    for (let i = 0; i < Postavke.projektili.length; i++) {
    const p = Postavke.projektili[i];

    if (!p.visible) continue;

    if (Postavke.neprijatelj1.visible && p.touching(Postavke.neprijatelj1)) {
        p.stop();
        Postavke.neprijatelj1.visible = false;
        break;
    }

    if (Postavke.neprijatelj2.visible && p.touching(Postavke.neprijatelj2)) {
        p.stop();
        Postavke.neprijatelj2.visible = false;
        break;
    }

    if (Postavke.protivnik.visible && p.touching(Postavke.protivnik)) {
        p.stop();
        Postavke.protivnik.ubijprotivnika();
        break;
    }
  }
}

if ( Postavke.boy.touching(Postavke.kotac)) 
{ 
  Postavke.boy.resetiraj();
}

//ako dodirne nekog od neprijatelja, gubi zivot
for (let i = 0; i < Postavke.neprijatelji.length; i++) {
  const k = Postavke.neprijatelji[i];
  if (Postavke.boy.touching(k)) {
    Postavke.boy.resetiraj();
  }
}

//ako je boy u blizini, protivnik ga napada
if (Postavke.protivnik.blizina(Postavke.boy)) {
  Postavke.protivnik.napadni(Postavke.boy);
}

if (Postavke.boy.touching(Postavke.protivnik)) {
  Postavke.boy.resetiraj();
}


//Mora ubit protivnika i neprijatelje i pokupit kljuc

if (Postavke.boy.touching(Postavke.kraj) && Postavke.protivnik.visible==false && Postavke.kljuc.visible==false && Postavke.neprijatelj1.visible==false && Postavke.neprijatelj2.visible==false) {
  alert("ZAVRŠENO! BRAVO!!!")
  btnGame.dispatchEvent(winEvent);
  
}
Postavke.boy.pokupiKljuc(Postavke.kljuc);
Postavke.kotac.updatePosition();
Postavke.neprijatelj1.updatePosition();
Postavke.neprijatelj2.updatePosition();
Postavke.kljuc.updatePosition();
Postavke.projektil.updatePosition();

    
}


