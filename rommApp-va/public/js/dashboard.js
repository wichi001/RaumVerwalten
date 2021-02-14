// Praktikum 9
let plus = document.querySelector("#btn");

plus.addEventListener("click", function(){
  
    stop = false;

    do {
        let name =  prompt("Bitte geben Sie ein Titel ein!");
        
        let url = prompt("Bitte geben Sie ein Hyperlink ein!"); 

        var newDiv = document.createElement("div");
        var newA  = document.createElement("a");

        if(name.length !== 0 && url.length !== 0){
         newA.href= url;
         newA.textContent= name;
         newDiv.append(newA);
         document.getElementById("btn").before(newDiv);
         stop = true;
        }else{
            alert("Titel oder URL muss nicht leer sein");
        }
        
    } while (stop === false);
});