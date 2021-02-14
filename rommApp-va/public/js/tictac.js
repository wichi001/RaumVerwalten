var count = 1;
while(count <= 100){
   if(count % 3 === 0 && count % 5 === 0){
       console.log("TicTac");
   }else if( count % 3 === 0){
    console.log("Tic");
   }else{
       if(count % 5 === 0){
        console.log("Tac");
       }else{
        console.log(count);
       }
   }

   count = count + 1;
}