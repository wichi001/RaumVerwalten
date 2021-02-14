const express = require("express");
const roome = require("../models/rooms");
const roomes = roome.Raumen;
const app = express.Router();

app.get("/", function(request, response){
    
    response.render("dashboard");
    
    
    });

app.get("/CreateSeminar", function(request, response){
    
    response.render("CreateSeminar");
  
});
 

app.get("/DetailsBooking", function(request, response){
        
        response.render("DetailsBooking");
      
        
    });
        
app.get("/DetailsRoom", function(request, response){
            
            response.render("DetailsRoom");
            
            
        });
            
app.get("/ListRooms", function(request, response){
                
                response.render("ListRooms",{roomes: roomes});
               
                
            });
 app.use( function(request, response){
                    response.render("seite404")});
                    
module.exports= app;