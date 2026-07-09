class Postavke {

  constructor() {
    if (this instanceof Postavke) {
      throw new Error("Statička klasa nema instance!");
    }
  }

 /** @type {Boy} */
 static boy=null;

/** @type {Protivnik} */
 static protivnik=null;


/** @type {Kotac} */
static kotac = null;


/** @type {Kljuc} */
static kljuc = null;

/** @type {Neprijatelj} */
static neprijatelj1 = null;
static neprijatelj2=null;
static neprijatelj3=null;

/** @type {Trampolin} */
static trampolin = null;

/** @type {Projektil} */
static projektil;


//metoda koja brise globalne objekte kako ne bi doslo do bug-ova
static izbrisi(){
  Postavke.boy= null;
  Postavke.neprijatelj = null;
  Postavke.neprijatelj1 = null;
  Postavke.neprijatelj2 = null;
  Postavke.neprijatelj3 = null;
  Postavke.neprijatelji = [];
  Postavke.kljuc = null;
  Postavke.kotac = null;
  Postavke.projektil = null;
  Postavke.kraj = null;
  Postavke.trampolin=null;
}



/** @type {Kraj} */
static kraj;

static neprijatelji=[];
static projektili=[];
static podloga=[];
static odabrana;


static random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


//static dno = 16*32;

static ukloniProjektil(p){
    for (let i = Postavke.projektili.length - 1; i >= 0; i--) {
      if (Postavke.projektili[i] === p) {
        Postavke.projektili.splice(i, 1); // brisanje i-tog elementa       
        console.log("uk");
        break; 
      }
    }
  }
}
