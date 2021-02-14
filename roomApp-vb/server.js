const http= require("http");
const fs= require('fs');

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

   const Raume = [ raum1,
                   raum2,
                 ];


var server = http.createServer(function(request,response){
    const url= request.url;
    const method= request.method;
    if(url==="/"){
        fs.readFile(  "public/dashboard.html",function(err,data){
            
            response.writeHeader(200,{"Content-Type": "text/html"});
            response.end(data);
        });
    } 
    else if (url.startsWith("/ListRooms")) {
        
            response.writeHead(200,{"Content-Type": "text/html; charset= utf-8"});
            response.end(createRaumList());
         
  

    }
    else if(method==="GET"){
        console.log("Mein Verzeichnis: " + __dirname + "/public"+ url);
        fs.readFile(__dirname + "/public"+ url,(err,data)=>{
            if(err){
                fs.readFile(__dirname + '/public/seite404.html',function(err,data){
                    response.writeHead(404);
                    response.end(data);
                });
            } 
            else {
                response.writeHead(200);
                response.end(data);
            }
        });
    } console.log(url, method);
});
server.listen(3000, function() {
    console.log("Ich lausche auf http://localhost:3000");
    });

    function createRaumList() {
        return `<!DOCTYPE html>
        <html lang="de">
            <head>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Raumliste</title>
              <link rel="stylesheet" href="css/style.css" />
              <link rel="stylesheet" href="css/flexbox.css" />
            </head>
            <body>
              <div class="container">
              <header>
                <h1 style="text-align: center">
                  <a href="dashboard.html"><img src="img/logo0.jpg" alt="Logo nicht gefunden!" /></a><span id="title"> Raum-Manager</span>
                </h1>
              </header>
        
              <nav style="text-align: center">
                <br />
                <ul class="Navi-Elemente">
                  <li><a href="ListRooms.html">Raumliste</a></li>
        
                  <li><a href="DetailsRoom.html">Raumdetails</a></li>
        
                  <li><a href="DetailsBooking.html">Buchungsdetails</a></li>
        
                  <li><a href="CreateSeminar.html">Seminar anlegen</a></li>
                </ul>
              </nav>
              <div class="content">
              <main>
                <article title="Suchformular">
                  <h2>Räumen suchen:</h2>
                  <form
                    action=" https://labs.inf.fh-dortmund.de/roomReservationService/testRoomSearch.php"
                    method="GET"
                  >
                    <fieldset>
                      <legend>SuchRaum:</legend>
                      <br />
                      <label>
                        Raum eingeben:
                        <input
                          required
                          name="roomno"
                          size="20"
                          maxlength="6"
                          pattern="[A-Z-\.-E1-3-\.]+[0-9]{2}"
                        />
                      </label>
                    </fieldset>
                    <br />
                    <button type="submit"><em>Senden</em></button>
                  </form>
                </article>
                
                <article title="Raumliste">
                  <h2>Liste von Räumen:</h2>
                  <ul>
                  ${createRaumListItems()}
                  </ul>
                </article>
              </main>
              <aside class="right-sidebar">
                <h3>Aktuelle Meldungen</h3>
                <ul>
                  <li>19.04.2020: Ab heute beginnen die Onlineseminare!</li>
                  <li>
                    30.03.2020: Wegen der Corona-Lage entfällt der Seminarbetrieb!
                  </li>
                </ul>
              </aside>
              </div>
              <footer id="company">
                <p style="text-align: center">&copy; by NiCHi</p>
              </footer>
            </div>
            </body>
        </html>
        `;
    }

    function createRaumListItems() {
        let result = "";
        for (let raum of Raume ) {
            result += `<li> <strong>Raumnummer</strong> :  ${raum.nummer} 
                      <ul>
                            <li>bezeichnung: ${raum.bezeichnung}  </li>
                            <li>gebäude: ${raum.gebäude}  </li>
                            <li>kapazität : ${raum.kapazität}  </li>
                            <li>ausstattungsmerkmale: ${raum.ausstattungsmerkmale}  </li>
                      </ul>
                      </li>`;
        }
        return result;
    }
