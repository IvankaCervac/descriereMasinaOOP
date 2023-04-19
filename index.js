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

//clase and metode
class Masina {
    #model;
    #culoare;
    #anFabricare;
    #viteza;
    constructor(model, culoare, anFabricare, viteza) {
      this.#model = model;
      this.#culoare = culoare;
      this.#anFabricare = anFabricare;
      this.#viteza = viteza;
    }
    
    getModel(){
      return `Numele Masinei ${this._model}.`
    };
    setModel(model) {
      this.#model = model;
    };
    getCuloare(){
      return `Are culoare ${this._culoare}.`
    };
    setCuloare(culoare) {
      this.#culoare = culoare;
    };

    accelereazaViteza() {
      this.viteza += 10;
    }
  
    franeazaViteza() {
      this.viteza -= 10;
    }
  
    descriere() {
      let descriere = `Masina e de modelul:${this.model} si are culoarea ${this.culoare}, fabricata in ${this.anFabricare} merge cu ${this.viteza} km/h`;
      return descriere;
    }
  }
  
  class VehiculElectric extends Masina {
    constructor(model, culoare, anFabricare, viteza, baterie) {
      super(model, culoare, anFabricare, viteza);
      this.baterie = baterie;
    }
  
    accelereazaViteza() {
      this.viteza += 10;
      this.baterie -= 5;
    }
  
    incarcare() {
      this.baterie += 10;
    }
  
    descriere() {
      let descriere = `Masina e de modelul:${this.model} si are culoarea ${this.culoare}, fabricata in ${this.anFabricare} merge cu ${this.viteza} km/h și are bateria ${this.baterie}`;
      return descriere;
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
//  let viteza = viteza.value;
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
    console.log(masina2.getModel("Tesla"));
    console.log(masina2.getCuloare("alba"));
    