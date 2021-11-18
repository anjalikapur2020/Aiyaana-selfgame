var hhIMG
var vhIMG
var aliceIMG
var cardboard1,cardboard2,cardboard3,cardboard4,cardboard5,cardboard6,cardboard7,cardboard8,cardboard9,cardboard10,cardboard11,cardboard12,cardboard13,cardboard14,cardboard15,cardboard16,cardboard17,cardboard18,cardboard19,cardboard20,cardboard21,cardboard22,cardboard23
function preload(){
hhIMG=loadImage("hh.png")
vhIMG=loadImage("vh.png")
aliceIMG=loadImage("alice.png")
coinIMG=loadImage("coin.png")
}
 
function setup(){
createCanvas (windowWidth,windowHeight)

 cardboard1 = createSprite((windowWidth/2-windowWidth/4),50,100,20);
cardboard1.addImage(hhIMG)
cardboard1.scale=0.35
/* cardboard2 = createSprite(windowWidth/4,(windowHeight/2+windowHeight/40),20,100);
cardboard2.addImage(vhIMG)
cardboard2.scale=0.35*/
 cardboard3 = createSprite(150,windowHeight/2.5,140,20);
cardboard3.addImage(hhIMG)
cardboard3.scale=0.35
 /*cardboard4 = createSprite(windowWidth/2,windowHeight/6,100,20);
 cardboard4.addImage(hhIMG) 
 cardboard4.scale=0.35*/
 cardboard5 = createSprite(windowWidth/2,windowHeight/2+windowHeight/4,20,100);
 cardboard5.addImage(vhIMG)
cardboard5.scale=0.35
 cardboard6 = createSprite(windowWidth/3,windowHeight/2,20,100);
 cardboard6.addImage(vhIMG)
cardboard6.scale=0.35
 cardboard7 = createSprite(windowWidth/2+windowWidth/15,windowHeight/3,100,20);
 cardboard7.addImage(hhIMG)
 cardboard7.scale=0.35
 /*cardboard8 = createSprite(windowWidth/2.9,windowHeight/2,20,100);
 cardboard8.addImage(vhIMG)
cardboard8.scale=0.15*/
 cardboard9 = createSprite(windowWidth/2+250,windowHeight/16,100,20);
 cardboard9.addImage(hhIMG)
cardboard9.scale=0.35
 cardboard10 = createSprite(windowWidth/2+windowWidth/4,(windowHeight/2+windowHeight/20),20,100);
 cardboard10.addImage(vhIMG)
cardboard10.scale=0.35
 cardboard11 = createSprite(windowWidth/2+windowWidth/6,windowHeight-50,100,20);
 cardboard11.addImage(hhIMG)
 cardboard11.scale=0.35
 /*cardboard12 = createSprite(windowWidth/2,windowHeight/2.9,20,100);
 cardboard12.addImage(vhIMG)
cardboard12.scale=0.15
 cardboard13 = createSprite(windowWidth/3.5,windowWidth -windowWidth/3,20,100);
 cardboard13.addImage(vhIMG)
cardboard13.scale=0.15
 cardboard14 = createSprite(windowWidth-windowWidth/20,windowHeight/2-windowHeight/3,100,20);
 cardboard14.addImage(hhIMG)
cardboard14.scale=0.15
 cardboard15 = createSprite(windowWidth+windowWidth/25,windowHeight/2+windowHeight/10,20,100);
 cardboard15.addImage(vhIMG)
cardboard15.scale=0.15
 cardboard16 = createSprite(windowWidth/2-windowWidth/3,windowHeight-windowHeight/4,100,20);
 cardboard16.addImage(hhIMG)
cardboard16.scale=0.15
 cardboard17 = createSprite(windowWidth-200,windowHeight/2,100,20);
 cardboard17.addImage(hhIMG)
cardboard17.scale=0.15
 cardboard18 = createSprite(windowWidth-300,windowHeight/4,20,100);
 cardboard18.addImage(vhIMG)
cardboard18.scale=0.15
 cardboard19 = createSprite(windowWidth-windowWidth/8,windowHeight/2+windowHeight/4,20,100);
 cardboard19.addImage(vhIMG)
cardboard19.scale=0.15
 cardboard20 = createSprite(windowWidth/2-windowWidth/3,windowHeight-200,20,100);
 cardboard20.addImage(vhIMG)    
cardboard20.scale=0.15
 cardboard22 = createSprite(windowWidth-300,windowHeight-100,140,20);
 cardboard22.addImage(hhIMG)
cardboard22.scale=0.15
 cardboard23 = createSprite(windowWidth/2+90,windowHeight/2+windowHeight/6,20,100);
 cardboard23.addImage(vhIMG)
cardboard23.scale=0.15*/

coin=createSprite(windowWidth-100,windowHeight-100)
coin.addImage(coinIMG)
coin.scale=0.25

 alice = createSprite(100,100);
alice.addImage(aliceIMG)
alice.scale=0.75
}

function draw(){

background("yellowgreen")








    drawSprites()
}




