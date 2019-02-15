let font;
let backG;
let moving;
let helloFade;
let howFade;
let feelFade;
let backFade;
let xrCorner;
let xlCorner;
let yuCorner;
let ylCorner;
let funcHowRun=false;
let funcHelloRun=false;
let funcHighRun=false;
let circle=0;


function setup(){
	createCanvas(windowWidth,windowHeight);
	background(0);
	backG=0;
	helloFade=255;
	howFade=255;
	feelFade=255;
	backFade=255;
	xlCorner=width*0.1;
	xrCorner=width*0.8;
	yuCorner=height*0.1;
	ylCorner=height*0.8;

	frameRate(30);
	font=loadFont('assets/data-latin.ttf');
}

function mouseMoved(){
	moving=true;
}

function draw(){
	backgroundLoad();

	howFeeling();

  s=random(400);
  if (s<100){
    s = s +100;
  }else{
    s=random(400);
  }
  highlights(random(width),random(height),s,10);

}

// function mouseClicked(){
// 	if (mouseX>=xrCorner-150&&mouseY>=ylCorner-150){
		
// 	}
// }

// function sad(){

// }

function highlights(x,y,size,rings){
  if (funcHighRun==false){

    if (backG>=1500){

      let steps = size/rings;
      let grayvalues = 40/rings;
      r=random(255);
      g=random(255);
      b=random(255);

      for (i = 0; i < 8; i++) {
        stroke(255);
        fill(r, 0, 0, i*grayvalues);
        ellipse(x, y, size - i*steps, size - i*steps);
      }
    }
  }
}

function howFeeling(){
	if (funcHowRun==false){

    if (moving==true){
      backG=backG+3;
    }

		if (backG>=1000){
			howFade=howFade-7;
			fill(howFade);
			comm("How are you feeling?",width*0.5,height*0.5,50);
		}

  	if (backG>=1200){
  		feelFade=feelFade-8;
  		fill(feelFade);
  		comm(":-(",xlCorner,yuCorner,30);
  		comm(":-)",xrCorner,yuCorner,30);
  		comm(":-/",xlCorner,ylCorner,30);
  		comm("I'm just here",xrCorner-8,ylCorner-10,30);
  		comm("for some visuals.",xrCorner-33,ylCorner+12,30);
  	}
	  if (backG>=1500){
      funcHowRun=true;
    }
  }
}

function backgroundLoad(){
	if (funcHelloRun==false){

		if (moving==true){
		  backG=backG+3;
	  }

		background(backG);

		if (backG>=300){
	    helloFade=helloFade-5;
		  fill(helloFade);
		  comm("Hello, Alexander.",width*0.5,height*0.5,50);
	  }

		if (backG>=620){
		  helloFade=helloFade+10;
	  }
	  if (backG>=1000){
      funcHelloRun=true;
    }
  }
}

function comm(speech,x,y,size){
	textFont(font);
	textSize(size);
	textAlign(CENTER,CENTER);
	text(speech,x,y);
}