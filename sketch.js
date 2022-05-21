console.log('triangle homework');

  
function setup() {
  createCanvas(1000, 1000);
  background(255);
 

  }


function draw(){



  let x1 = 200;
  let y1 = 75;
  let x2 = 200;
  let y2 = 200;
  let x3 = 300;
  let y3 = 75;

  
  fill(13,98,93);
  //1
  triangle(x1, y1, x2, y2, x3, y3);
  //2 backwards
  triangle(x1, y1 + 125, x2, y2 + 125, 100, y3 + 125);   
 // 3
  triangle(x1, y1 + 250, x2, y2 + 250, x3, y3 + 250);
  // 4 backwards  
  triangle(x1, y1 + 375, x2, y2 + 375, 100, y3 + 375);
  //5
  triangle(x1, y1 + 500, x2, y2 + 500, x3, y3 + 500);
//6 backwards  
  triangle(x1, y1 + 625, x2, y2 + 625, 100, y3 + 625);

  //7 bottom beige row

  fill(209,199,137);
  
  triangle(x1, y1 + 750, x2, y2 + 750, x3, y3 + 750);
  triangle(x1 + 100, y1 + 750, x2 + 100, y2 + 750, x3 + 100, y3 + 750);
  triangle(x1 + 200, y1 + 750, x2 + 200, y2 + 750, x3 + 200, y3 + 750);

 //second beige row
  triangle(x1 + 100, y1 + 125, x2 + 100, y2 + 125, x3 + 100, y3 + 125); triangle(x1 + 200, y1 + 125, x2 + 200, y2 + 125, x3 + 200, y3 + 125);  
  //third beige row
  triangle(x1 + 100, y1 + 250, x2 +100, y2 + 250, x3 + 100, y3 + 250);
  triangle(x1 + 200, y1 + 250, x2 +200, y2 + 250, x3 + 200, y3 + 250);

  //fourth beige row
  triangle(x1 + 100, y1 + 375, x2 + 100, y2 + 375, x3 + 100, y3 + 375);
  triangle(x1 + 200, y1 + 375, x2 + 200, y2 + 375, x3 + 200, y3 + 375);

   //5 beige row
   triangle(x1 + 100, y1 + 500, x2 + 100, y2 + 500, x3 + 100, y3 + 500);
   triangle(x1 + 200, y1 + 500, x2 + 200, y2 + 500, x3 + 200, y3 + 500);

   //6 beige row
   triangle(x1 + 100, y1 + 625, x2 + 100, y2 + 625, x3 + 100, y3 + 625);
   triangle(x1 + 200, y1 + 625, x2 + 200, y2 + 625, x3 + 200, y3 + 625);
   }

  function mousePressed(){
    save('image.png');
  }
  

//https://artsandculture.google.com/asset/concreto/XQGNUoKY-Ec7HA
//inspired by Alfredo Volpi - Concreto