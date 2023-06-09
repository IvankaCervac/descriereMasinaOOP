/*
Creați o clasă Mașină ce va conține anumite informații: model, culoare, an fabricație și viteză.
Creați două metode: accelerează (va crește viteza cu 10 km/h) și frânează (va scădea viteza cu 10 km/h).
Creați o metodă ce descrie mașina: Ford Focus roșu, fabricat în 2018, merge cu 120 km/h.
Creați două obiecte mașini și experimentați cu aceste metode.
Creați un UI cu un formular pentru o mașină. Vom avea un buton pentru accelerare, 
unul pentru frânare, iar descrierea mașinii va fi afișată după prima accelerare sau frânare.
*/
//Extensie cu principiul Mostenirea
/*Pentru clasa Mașină creați o clasă copil VehiculElectric ce va avea în plus proprietatea baterie (procentaj).
Creați o metodă accelerează ce crește viteza cu 10 km/h și scade bateria cu 5%.
Creați o metodă ce descrie mașina: Tesla albă, fabricată în 2018, merge cu 120 km/h și are 40% baterie.
Creați o metodă încărcare ce va crește bateria cu 10%.
Creați două obiecte mașini și experimentați cu aceste metode.*/

/*Pentru clasa Mașină creați o clasă copil VehiculElectric ce va avea în plus proprietatea baterie (procentaj).
Creați getter și setter pentru fiecare proprietate. Toate proprietățile vor fi private.
Creați o metodă accelerează ce crește viteza cu 10 km/h și scade bateria cu 5%.
Creați o metodă ce descrie mașina: Tesla albă, fabricată în 2018, merge cu 120 km/h și are 40% baterie.
Creați o metodă încărcare ce va crește bateria cu 10%.
Creați un UI care va conține un form pentru un vehicul. Adăugați un buton radio dacă vehiculul este electric.
Adăugați câte un buton pentru accelerare, frânare și, eventual, încărcare.*/


//proprietatilie care fac parte din clasa parinte trebuie sa fie 
//protected ca sa fie accesivile si pentru clasa copil

//clase and metode
class Masina {
  _model;
  _culoare;
  _anFabricare;
  _viteza;
  
  constructor(model, culoare, anFabricare, viteza) {
    this._model = model;
    this._culoare = culoare;
    this._anFabricare = anFabricare;
    this._viteza = viteza;
  }
    
  getModel(){
    return `Numele Mașinii este ${this._model}.`;
  }
  setModel(model) {
    this._model = model;
  }
  getCuloare(){
    return `Are culoarea ${this._culoare}.`;
  }
  setCuloare(culoare) {
    this._culoare = culoare;
  }
  getAnFabricare(){
    return `Fabricată în ${this._anFabricare}.`;
  }
  setAnFabricare(anFabricare) {
    this._anFabricare = anFabricare;
  }
  getViteza(){
    return `Merge cu ${this._viteza} km/h.`;
  }
  setViteza(viteza) {
    this._viteza = viteza;
  }
  accelereazaViteza() {
    this._viteza += 10;
  }

  franeazaViteza() {
    this._viteza -= 10;
  }

  descriere() {
    let descriere = `Mașina este de modelul ${this._model} și are culoarea ${this._culoare}, fabricată în ${this._anFabricare} și merge cu ${this._viteza} km/h.`;
    return descriere;
  }
}

  
class VehiculElectric extends Masina {
  constructor(model, culoare, anFabricare, viteza, baterie) {
    super(model, culoare, anFabricare, viteza);
    this._baterie = baterie;
    }

    getBaterie(){
      return `Bateria este de ${this._baterie}%.`;
    }
    setBaterie(baterie) {
      this._baterie = baterie;
    }
  
    accelereazaViteza() {
      this._viteza += 10;
      this._baterie -= 5;
    }
  
    incarcare() {
      this._baterie += 10;
    }

    descriere() {
      let descriere = `Mașina este de modelul ${this._model} și are culoarea ${this._culoare}, fabricată în ${this._anFabricare} și merge cu ${this._viteza} km/h, cu o baterie de ${this._baterie}%.`;
      return descriere;
    }

    verificaTipMasina() {
      if (this._anFabricare <= 2005) {
        return this.descriere();
      } else {
        return super.descriere();
      }
    }
  
    check() {
        document.getElementById("alege1").checked = true;
    }
    uncheck() {
        document.getElementById("alege1").checked = false;
    }
}

  
//variabilele
let model = document.querySelector(".model").value;
let culoare = document.querySelector(".culoare").value;
let anFabricare = document.querySelector(".anFabricare").value;
let viteza = document.querySelector(".viteza").value;
let baterie = document.querySelector(".baterie");

// eventListener
document.querySelector(".acceleramViteza").addEventListener('click', function(){
    console.log(masina2.descriere());
    masina2.accelereazaViteza();
    console.log(masina2.descriere());
    document.querySelector(".descriere").textContent = masina2.descriere()
});

document.querySelector(".franeazaViteza").addEventListener('click', function(){
    console.log(masina2.descriere());
    masina2.franeazaViteza();
    console.log(masina2.descriere());
    document.querySelector(".descriere").textContent = masina2.descriere()
});

document.querySelector(".incarcareBaterie").addEventListener('click', function(){
    console.log(masina2.descriere());
    masina2.incarcare();
    console.log(masina2.descriere());
    document.querySelector(".descriere").textContent = masina2.descriere()
});

    const masina2 = new VehiculElectric("Tesla", "alba", 2020, 100, 40 )
    console.log(masina2.getModel());
    console.log(masina2.setCuloare("Verde"));
    console.log(masina2.getCuloare());
    console.log(masina2.setViteza(10));
    console.log(masina2.getViteza());
    