function getViewportWidth() {
  return window.innerWidth || document.documentElement.clientWidth;
}

let message = getViewportWidth();

console.log(`Die Viewport-Breite beträgt: ${message} Pixel.`);

// Praktikum 8

// Aufgabe 1 und 3

function Raum (nummer, bezeichnung, gebäude,kapazität, ausstattungsmerkmale) {
  this.nummer = nummer;
  this.bezeichnung = bezeichnung;
  this.gebäude = gebäude;
  this.kapazität= kapazität;
  this.ausstattungsmerkmale=ausstattungsmerkmale;
  this.buchung = new Array();
  this.addBuchung = function(value){
    this.buchung.push(value);
    this.buchung.sort(function(a,b){
        return b.startzeit - a.startzeit;
    });

  }
}
// Aufgabe 2

function Buchung(bezeichnung,startzeit,endzeit,gebuchtVon,beschreibung) {
  this.bezeichnung = bezeichnung;
  this.startzeit=startzeit
  this.endzeit = endzeit;
  this.gebuchtVon= gebuchtVon;
  this.beschreibung=beschreibung;
}

// Aufgabe 4

let raum1 = new Raum(11, "Kolloquim", "C.08", 23, ["birma", "taffel"]);
let raum2 = new Raum(3, "Vorlesung", "D.08", 500, ["birma", "taffel","computer"]);

console.table(raum1);
console.table(raum2);

const startzeit = new Date('Januar 17, 2021 08:24:00');
const endzeit= new Date('januar 17, 2021 10:24:00');
const startzeit1 = new Date('Januar 17, 2021 09:24:00');
const startzeit2 = new Date('Januar 18, 2021 10:24:00');
const endzeit2= new Date('januar 18, 2021 12:24:00');
let buchung1 = new Buchung("vorlesung",startzeit,endzeit,"Chimi","La vie");
let buchung2 = new Buchung("vorlesung",startzeit1,endzeit,"Michael","La vie");
let buchung3 = new Buchung("vorlesung",startzeit2,endzeit2,"Mike","boisson");
 
 raum1.addBuchung(buchung1);
 raum1.addBuchung(buchung2);
 raum1.addBuchung(buchung3);
 
 for (Element of raum1.buchung){
        console.log(Element);
 }

 // Praktikum 9

 //Aufgabe 1  

 /*<!-- leere Liste für die Informationen zum Raum -->*/
let liste = document.createElement("li");
liste.append(document.createTextNode("Nummer: "+ raum1.nummer));
document.getElementById("infosRaum").appendChild(liste);

let liste1 = document.createElement("li");
liste1.append(document.createTextNode("Bezeichnung: "+ raum1.bezeichnung));
document.getElementById("infosRaum").appendChild(liste1);

let liste2 = document.createElement("li");
liste2.append(document.createTextNode(" Gebäude: "+ raum1. gebäude));
document.getElementById("infosRaum").appendChild(liste2);

let liste3 = document.createElement("li");
liste3.append(document.createTextNode("Kapazität: "+ raum1.kapazität));
document.getElementById("infosRaum").appendChild(liste3);


let liste4 = document.createElement("li");
liste4.append(document.createTextNode("Ausstattungsmerkmale: "+ raum1.ausstattungsmerkmale));
document.getElementById("infosRaum").appendChild(liste4);

/*<!-- leerer tbody für die Buchungen zum Raum -->*/

function nwTr(nwtr){
  var newtd1 = document.createElement("td");
  var newtd2 = document.createElement("td");
  var newtd3 = document.createElement("td");
  var newtd4 = document.createElement("td");
  var newA  = document.createElement("a");
  newA.href= "DetailsBooking.html";
  newA.textContent= Element.beschreibung;
  newtd1.textContent=Element.startzeit.toDateString();
  newtd2.append(document.createTextNode(Element.startzeit.getHours()+":"+Element.startzeit.getMinutes()));
  newtd3.append(document.createTextNode(Element.endzeit.getHours()+":"+Element.endzeit.getMinutes()));
  //newtd4.append(document.createTextNode(Element.beschreibung));
  newtd4.append(newA);
  nwtr.append(newtd1);
  nwtr.append(newtd2);
  nwtr.append(newtd3);
  nwtr.append(newtd4);
  return nwtr;
}

for (Element of raum1.buchung){
  var newTr = document.createElement("tr");
      newTr = nwTr(newTr);
  document.getElementById("tableau").appendChild(newTr);
   }