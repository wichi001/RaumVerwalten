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


function Buchung(bezeichnung,startzeit,endzeit,gebuchtVon,beschreibung) {
    this.bezeichnung = bezeichnung;
    this.startzeit=startzeit
    this.endzeit = endzeit;
    this.gebuchtVon= gebuchtVon;
    this.beschreibung=beschreibung;
  }
  

  
  let raum1 = new Raum("A.E.01", "Kolloquim", "C.08", 23, ["birma", "taffel"]);
  let raum2 = new Raum("A.E.02", "Vorlesung", "D.08", 500, ["birma", "taffel","computer"]);
  
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

   const Raumen = [ raum1,
                   raum2,
                 ];

  


    module.exports= {
      Raumen : Raumen
    };