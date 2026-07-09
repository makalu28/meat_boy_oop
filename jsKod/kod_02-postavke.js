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

// gameover
let gameoverEvent = new Event("gameover");
const btnGame = document.getElementById("btnGame");
btnGame.addEventListener("gameover", smrt)
// levelup
let levelUpEvent = new Event("levelUp");
btnGame.addEventListener("levelUp", noviLevel);

let winEvent = new Event("win");
btnGame.addEventListener("win", pobjeda);
// što će se pokrenuti kad se klikne button Setup:
let btnSetupGame = document.getElementById("btnSetupGame");
btnSetupGame.addEventListener("click", setup);
let odabrana;

function smrt() {
  console.log("izgubio si");
  btnStop_click();
  setup();
}

function pobjeda(){
  console.log("pobjeda");
  btnStop_click();
  btnSetupGame.click();
}

function noviLevel(){
  btnStop_click();
  GAME.setActiveWorldMap("level2");
  setupLevel2();
  btnStart_click();
}


function setup() {

  Postavke.izbrisi();
  GAME.clearSprites();

  Postavke.odabrana = GAME.activeWorldMap.name;
  GameSettings.output(Postavke.odabrana);

  switch (Postavke.odabrana) {
    case "igra":
      setupLevel1();
      break;

    case "level2":
      setupLevel2();
      break;

    default:
      throw "Ne postoji setup za " + GAME.activeWorldMap.name;
      break;
  }

  render_main();
}

/* LEVELS */
function setupLevel1() {
  GAME.clearSprites();

  GAME.activeWorldMap.setCollisions("platforme");

  Postavke.boy=new Boy(0*32, 8*32, GAME.getSpriteLayer("boy"));
  GAME.addSprite(Postavke.boy);

  Postavke.neprijatelj1=new Neprijatelj(GAME.getSpriteLayer("neprijatelj"), 7, 18);
  GAME.addSprite(Postavke.neprijatelj1);
  Postavke.neprijatelji.push(Postavke.neprijatelj1);

  Postavke.neprijatelj2=new Neprijatelj(GAME.getSpriteLayer("neprijatelj"), 22,  18);
  GAME.addSprite(Postavke.neprijatelj2);
  Postavke.neprijatelji.push(Postavke.neprijatelj2);

  Postavke.neprijatelj3=new Neprijatelj(GAME.getSpriteLayer("neprijatelj"), 26, 6);
  GAME.addSprite(Postavke.neprijatelj3);
  Postavke.neprijatelji.push(Postavke.neprijatelj3);

  Postavke.kotac=new Kotac(GAME.getSpriteLayer("kotac"),2,10);
  GAME.addSprite(Postavke.kotac);
  Postavke.kotac.visible=true;

  Postavke.kljuc=new Kljuc(GAME.getSpriteLayer("kljuc"),15,8);
  GAME.addSprite(Postavke.kljuc);

  Postavke.trampolin= new Trampolin(GAME.getSpriteLayer("trampolin"), 18, 18);
  GAME.addSprite(Postavke.trampolin);
  Postavke.trampolin.visible=true;

  Postavke.projektil=new Projektil(GAME.getSpriteLayer("projektil"));
  GAME.addSprite(Postavke.projektil);

  Postavke.kraj=new Kraj(GAME.getSpriteLayer("cilj"), 29, 6);
  GAME.addSprite(Postavke.kraj);
  Postavke.kraj.visible=true;

}

function setupLevel2() {
  GAME.clearSprites();
  //alert("New level");
  btnStop_click();
  //Postavke.pokrenut=false;
  GAME.setActiveWorldMap("level2");
  GAME.activeWorldMap.setCollisions("platforme");


  Postavke.boy = new Boy(16 * 32, 1 * 32, GAME.getSpriteLayer("boy"));
  Postavke.boy.start(16, 1);
  GAME.addSprite(Postavke.boy);

  Postavke.protivnik=new Protivnik(12*32, 15*32, GAME.getSpriteLayer("protivnik"));
  GAME.addSprite(Postavke.protivnik);

  Postavke.kljuc=new Kljuc(GAME.getSpriteLayer("kljuc"), 27, 5);
  GAME.addSprite(Postavke.kljuc);

  Postavke.trampolin= new Trampolin(GAME.getSpriteLayer("trampolin"), 15, 16);
  GAME.addSprite(Postavke.trampolin);

  Postavke.projektil=new Projektil(GAME.getSpriteLayer("projektil"));
  GAME.addSprite(Postavke.projektil);
  
  Postavke.neprijatelj1=new Neprijatelj(GAME.getSpriteLayer("neprijatelj"), 1, 16);
  GAME.addSprite(Postavke.neprijatelj1);
  Postavke.neprijatelji.push(Postavke.neprijatelj1);

  Postavke.neprijatelj2=new Neprijatelj(GAME.getSpriteLayer("neprijatelj"), 28, 5);
  GAME.addSprite(Postavke.neprijatelj2);
  Postavke.neprijatelji.push(Postavke.neprijatelj2);

  Postavke.kraj=new Kraj(GAME.getSpriteLayer("cilj"), 28, 16);
  GAME.addSprite(Postavke.kraj);

  Postavke.kotac=new Kotac(GAME.getSpriteLayer("kotac"),11);
  GAME.addSprite(Postavke.kotac);








}

