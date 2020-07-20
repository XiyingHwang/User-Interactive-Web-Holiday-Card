//Author: Xiying Huang
//This code is made possible by the p5.js turotials and examples on its homepage
//, https://p5js.org/, all rights for partial code from p5/examples are reserved by p5.js


let snowflakes = []; // array to hold snowflake objects
let rectWidth; // divide the whole screen into subdivisions
let offsetX = 0;
let offsetY = 0;
let easing = 0.05;
let bg;
let keyTyped = [];
let heightAssigned = [];
let pointer = 0;
let song;
let textureAssigned = [];
let boxX;
let boxY;
let stringBeginX;
let stringBeginY;
let stringEndX;
let stringEndY;
let rotate = [];
let overBox = false;
let boxSize;
let locked = false;
let xDirectionAssgined = [];
let yDirectionAssgined = [];

//rotation attributes
let xOffset;//how far away from the center the click was horizontally
let rotation =  [];

function preload() {
  song = loadSound('we.mp3'); 
  bell = loadSound('bell.mp3');
  spin = loadSound('spin.mp3');
  bg = loadImage('merry christmas.webp');// background image
  a = loadImage('a.jpg');
  b = loadImage('b.jpg');
  c = loadImage('c.jpg');
  d = loadImage('d.jpg');
  e = loadImage('e.jpg');
  f = loadImage('f.jpg');
  g = loadImage('g.jpg');
  h = loadImage('h.jpg');
  i = loadImage('i.jpg');
  j = loadImage('j.jpg');
  k = loadImage('k.jpg');
  l = loadImage('l.jpg');
  m = loadImage('m.jpg');
  n = loadImage('n.jpg');
  o = loadImage('o.jpg');
  p = loadImage('p.jpg');
  q = loadImage('q.jpg');
  r = loadImage('r.jpg');
  s = loadImage('s.jpg');
  t = loadImage('t.jpg');
  u = loadImage('u.jpg');
  v = loadImage('v.jpg');
  w = loadImage('w.jpg');
  x = loadImage('x.jpg');
  y = loadImage('y.jpg');
  z = loadImage('z.jpg');
  space = loadImage('space.jpg')
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);  
  noStroke();
  textSize(30);
  song.loop(); //background sound
} // don't forget to turn on the bgm

function draw() {
  boxSize = windowWidth / 30;
  background('white');
  // make this is the background of the scene and add everything else on top of it
  // also making it jittering with the mouse
  let dx = mouseX - windowWidth / 2 - offsetX;
  let dy = mouseY - windowHeight / 2 - offsetY;
  offsetX = (dx * easing) ;
  offsetY = (dy * easing) ;
        // ambientLight(60, 60, 60);//lighting stuff

  push();
  normalMaterial();
  translate(offsetX, offsetY, 0) 
  texture(bg);
  plane(windowWidth, windowHeight);// background switch
  pop();

  //snow
  let t = frameCount / 600;
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake());
  }
  for (let flake of snowflakes) {
    flake.update(t); 
    flake.display(); 
  }


  //draw boxes
  for(let i = 0; i < keyTyped.length; i++) {
      boxX = (i % 14) * (((windowWidth)* 0.8) /(14)) - (windowWidth / 2) + (windowWidth / 10 );
      boxY = heightAssigned[i];
      // boxXPosition[pointer % 14] = boxX; // record the x position of each box
      // boxYPosition[pointer % 14] = boxY; // record the y position of each box
      stringBeginX = boxX;
      stringBeginY = -windowHeight / 2; // top of the window
      stringEndX = boxX;
      stringEndY = boxY;


        push();
        stroke('black');
        line(stringBeginX, stringBeginY, 0, stringEndX + random(-1, 1), stringEndY, 0);
        translate(boxX + random(-1, 1), boxY, 0);
        if(rotate[i] == true) {
          rotateY(frameCount);
        } else {
        }
        texture(textureAssigned[i]);
        box(boxSize);
        pop();
       
      
      // if(rotate) {
      //   push();
      //   stroke('black');
      //   line(stringBeginX, stringBeginY, boxSize, stringEndX + random(-1, 1), stringEndY, boxSize);
      //   translate(boxX + random(-1, 1), boxY, boxSize);
      //   rotateY(2 * PI);// how fast it spins should based on a funcition of the xOffset;
      //   rotateX(2 * PI);
      //   texture(textureAssigned[i]);
      //   box(boxSize);
      //   pop();
      // }
  }

} // by Xiying Huang


function mousePressed() {
  print("Mouse Pressed");
  print(mouseX);
  print(mouseY);
  for(let i = 0; i < keyTyped.length; i++) {
    boxX = (i % 14) * (((windowWidth)* 0.8) /(14)) - (windowWidth / 2) + (windowWidth / 10 );
    boxY = heightAssigned[i];
    print(".");
    print(boxX);
    print(boxY);
    print(".");
    print(mouseX + windowWidth / 2);
    print(mouseY + windowHeight / 2);
    let distanceToBox = dist(mouseX - windowWidth / 2, mouseY - windowHeight / 2, boxX, boxY);
    print("Distance vs Boxsize cutoff");
    print(distanceToBox);
    print(boxSize/2);
    if (distanceToBox <= boxSize / 2) {
      spin.play();
      rotate[i % 14] = true;
    } 
  }
}

function mouseReleased() {
  spin.stop();
  for(let i = 0; i < keyTyped.length; i++) {
      rotate[i % 14] = false;
  }
}

// function mousePressed() {
//   let calibratedMouseX = mouseX - (windowWidth / 2);
//   let calibratedMouseY = mouseY - (windowHeight / 2);
//   if (mouseIsPressed) {
//     // if (calibratedMouseX >= 0) {
//     if (calibratedMouseX >= boxX - boxSize 
//       && calibratedMouseX <= boxX + boxSize
//       && calibratedMouseY >= boxY - boxSize
//       && calibratedMouseY <= boxY + boxSize) {
//       print(calibratedMouseX)
//       print(calibratedMouseY)
//       spin.play();
//       rotate = true;
//     } else {
//       rotate = false;
//     }
//   } else {
//     rotate = false;
//   }
// } // by Xiying Huang


function keyPressed() { // keep the string updated in keyPressed but draw the actual thing in draw()
  if (key >= 'a' && key <= 'z' || key === ' ' ) {
    bell.play();
    if (key.charCodeAt(0) - 'a'.charCodeAt(0) == 0) {
      textureAssigned [pointer % 14] = a;
    } else if (key.charCodeAt(0) - 'a'.charCodeAt(0) == 1){
      textureAssigned [pointer % 14] = b;
    } else if (key.charCodeAt(0) - 'a'.charCodeAt(0) == 2){
      textureAssigned [pointer % 14] = c;
    } else if (key.charCodeAt(0) - 'a'.charCodeAt(0) == 3){
      textureAssigned [pointer % 14] = d;
    } else if (key.charCodeAt(0) - 'a'.charCodeAt(0) == 4){
      textureAssigned [pointer % 14] = e;
    } else if (key.charCodeAt(0) - 'a'.charCodeAt(0) == 5){
      textureAssigned [pointer % 14] = f;
    } else if (key.charCodeAt(0) - 'a'.charCodeAt(0) == 6){
      textureAssigned [pointer % 14] = g;
    } else if (key.charCodeAt(0) - 'a'.charCodeAt(0) == 7){
      textureAssigned [pointer % 14] = h;
    } else if (key.charCodeAt(0) - 'a'.charCodeAt(0) == 8){
      textureAssigned [pointer % 14] = i;
    } else if (key.charCodeAt(0) - 'a'.charCodeAt(0) == 9){
      textureAssigned [pointer % 14] = j;
    } else if (key.charCodeAt(0) - 'a'.charCodeAt(0) == 10){
      textureAssigned [pointer % 14] = k;
    } else if (key.charCodeAt(0) - 'a'.charCodeAt(0) == 11){
      textureAssigned [pointer % 14] = l;
    } else if (key.charCodeAt(0) - 'a'.charCodeAt(0) == 12){
      textureAssigned [pointer % 14] = m;
    } else if (key.charCodeAt(0) - 'a'.charCodeAt(0) == 13){
      textureAssigned [pointer % 14] = n;
    } else if (key.charCodeAt(0) - 'a'.charCodeAt(0) == 14){
      textureAssigned [pointer % 14] = o;
    } else if (key.charCodeAt(0) - 'a'.charCodeAt(0) == 15){
      textureAssigned [pointer % 14] = p;
    } else if (key.charCodeAt(0) - 'a'.charCodeAt(0) == 16){
      textureAssigned [pointer % 14] = q;
    } else if (key.charCodeAt(0) - 'a'.charCodeAt(0) == 17){
      textureAssigned [pointer % 14] = r;
    } else if (key.charCodeAt(0) - 'a'.charCodeAt(0) == 18){
      textureAssigned [pointer % 14] = s;
    } else if (key.charCodeAt(0) - 'a'.charCodeAt(0) == 19){
      textureAssigned [pointer % 14] = t;
    } else if (key.charCodeAt(0) - 'a'.charCodeAt(0) == 20){
      textureAssigned [pointer % 14] = u;
    } else if (key.charCodeAt(0) - 'a'.charCodeAt(0) == 21){
      textureAssigned [pointer % 14] = v;
    } else if (key.charCodeAt(0) - 'a'.charCodeAt(0) == 22){
      textureAssigned [pointer % 14] = w;
    } else if (key.charCodeAt(0) - 'a'.charCodeAt(0) == 23){
      textureAssigned [pointer % 14] = x;
    } else if (key.charCodeAt(0) - 'a'.charCodeAt(0) == 24){
      textureAssigned [pointer % 14] = y;
    } else if (key.charCodeAt(0) - 'a'.charCodeAt(0) == 25){
      textureAssigned [pointer % 14] = z;
    } else if (key.charCodeAt(0) - 'a'.charCodeAt(0) == -65){
      textureAssigned [pointer % 14] = space;
    } 
    // xDirectionAssgined[pointer % 14] = PI * random();
    yDirectionAssgined[pointer % 14] = PI * random(-2,2);
    keyTyped[pointer % 14] = key; //concetenated keys
    heightAssigned[pointer % 14] = random(-windowHeight / 4, windowHeight / 4);
    pointer++; // next key position
    print(pointer); // see if the key typed in are correctedly recorded
    print(keyTyped);
  } else {
    keyTyped.length = 0;
    pointer = 0; // starting again as reset
  }
} // updates the keyTyped, random Height, and etc
//made entirely by Xiying Huang



function snowflake() {
  this.posX = 0;
  this.posY = (-windowHeight / 2);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);
  this.radius = sqrt(random(pow(width / 2 , 2)));
  this.update = function(time) {
    let w = 0.6;
    let angle = w * time + this.initialangle;
    this.posX = this.radius * sin(angle) * 2;
    this.posY += pow(this.size, 0.5)/2;
    if (this.posY > windowHeight / 2) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };
  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
} // this snowflake function is partially taken from p5/exmaples








  //divide the screen based on the length of keyTyped
  //if the length is 2 we just need to divide the screen into 2 parts and etc


  // I ended up hard code the thing in the case of lenght 1 and two it works, but hard code is not the way for 14 letters!
  // if (keyTyped.length == 0) {
  //   push();
  //   translate(offsetX, offsetY, 0) 
  //   texture(bg);
  //   plane(windowWidth, windowHeight);// background switch
  //   pop();
  //   let t = frameCount / 600;
  //   for (let i = 0; i < random(5); i++) {
  //     snowflakes.push(new snowflake());
  //   }
  //   for (let flake of snowflakes) {
  //     flake.update(t); 
  //     flake.display(); 
  //   }
  // } else if (keyTyped.length == 1) {// length = 1
  //   push();
  //   translate(offsetX, offsetY, 0) 
  //   texture(bg);
  //   plane(windowWidth, windowHeight);// background switch
  //   pop();
  //   let t = frameCount / 600;
  //   for (let i = 0; i < random(5); i++) {
  //     snowflakes.push(new snowflake());
  //   }
  //   for (let flake of snowflakes) {
  //     flake.update(t); 
  //     flake.display(); 
  //   }
  //   //get the first letter and draw the texture
  //   if (character[0] == 0) { // first letter is a
  //     push();
  //     texture(a);
  //     translate(0,0,0);
  //     box(50);
  //     pop();
  //   } else if (character[0] == 1) { //b
  //     push();
  //     texture(b);
  //     translate(0,0,0);
  //     box(50);
  //     pop();
  //   }

  // } else if (keyTyped.length == 2) {
  //   push();
  //   translate(offsetX, offsetY, 0) 
  //   texture(bg);
  //   plane(windowWidth, windowHeight);// background switch
  //   pop();
  //   let t = frameCount / 600;
  //   for (let i = 0; i < random(5); i++) {
  //     snowflakes.push(new snowflake());
  //   }
  //   for (let flake of snowflakes) {
  //     flake.update(t); 
  //     flake.display(); 
  //   }

  //   // first letter 
  //   if (character[0] == 0) { // first letter is a
  //     push();
  //     texture(a);
  //     translate(-25,0,0);
  //     box(45);
  //     pop();
  //   } else if (character[0] == 1) { //b
  //     push();
  //     texture(b);
  //     translate(-25,0,0);
  //     box(45);
  //     pop();
  //   }

  //   //second letter
  //   if (character[1] == 0) { // first letter is a
  //     push();
  //     texture(a);
  //     translate(25,0,25);
  //     box(45);
  //     pop();
  //   } else if (character[1] == 1) { //b
  //     push();
  //     texture(b);
  //     translate(25,0,0);
  //     box(45);
  //     pop();
  //   }

  // }




        // push();
      // stroke('black');
      // line(stringBeginX, stringBeginY, boxSize, stringEndX + random(-1, 1), stringEndY, boxSize);
      // translate(boxX + random(-1, 1), boxY, boxSize);
      // if (rotate) {
      //   push();
      //   stroke('black');
      //   line(stringBeginX, stringBeginY, boxSize, stringEndX + random(-1, 1), stringEndY, boxSize);
      //   translate(boxX + random(-1, 1), boxY, boxSize);
      //   // rotateX(frameCount * 0.01);
      //   rotateY(frameCount * 0.5);
      //   texture(textureAssigned[i]);
      //   box(boxSize);
      //   pop();
      // } else {
      //   push();
      //   stroke('black');
      //   line(stringBeginX, stringBeginY, boxSize, stringEndX + random(-1, 1), stringEndY, boxSize);
      //   translate(boxX + random(-1, 1), boxY, boxSize);
      //   rotateY(yDirectionAssgined[i]);// how fast it spins should based on a funcition of the xOffset;
      //   // rotateX(xDirectionAssgined[i]);
      //   texture(textureAssigned[i]);
      //   box(boxSize);
      //   pop();
      // }
