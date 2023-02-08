var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8c46a5ce-92b3-4fba-9dce-4fa489b5b551"],"propsByKey":{"8c46a5ce-92b3-4fba-9dce-4fa489b5b551":{"name":"abstract_08_1","sourceUrl":"assets/api/v1/animation-library/gamelab/.g_fM0jG5YHeQCetPtAd_H9pyzUfaVjK/category_backgrounds/abstract_08.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":".g_fM0jG5YHeQCetPtAd_H9pyzUfaVjK","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.g_fM0jG5YHeQCetPtAd_H9pyzUfaVjK/category_backgrounds/abstract_08.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


//Criar a primeira linha de caixas
var caixa1=createSprite(25,75,50,50);
caixa1.shapeColor="orange";
var caixa2=createSprite(75,75,50,50);
caixa2.shapeColor="green";
var caixa3=createSprite(125,75,50,50);
caixa3.shapeColor="orange";
var caixa4=createSprite(175,75,50,50);
caixa4.shapeColor="green";
var caixa5=createSprite(225,75,50,50);
caixa5.shapeColor="orange";
var caixa6=createSprite(275,75,50,50);
caixa6.shapeColor="green";
var caixa7=createSprite(325,75,50,50);
caixa7.shapeColor="orange";
var caixa8=createSprite(375,75,50,50);
caixa8.shapeColor="green";


//Criar a segunda linha de caixas
var caixa9=createSprite(25,125,50,50);
caixa9.shapeColor="green";
var caixa10=createSprite(75,125,50,50);
caixa10.shapeColor="orange";
var caixa11=createSprite(125,125,50,50);
caixa11.shapeColor="green";
var caixa12=createSprite(175,125,50,50);
caixa12.shapeColor="orange";
var caixa13=createSprite(225,125,50,50);
caixa13.shapeColor="green";
var caixa14=createSprite(275,125,50,50);
caixa14.shapeColor="orange";
var caixa15=createSprite(325,125,50,50);
caixa15.shapeColor="green";
var caixa16=createSprite(375,125,50,50);
caixa16.shapeColor="orange";

//Criar a bola
var bola=createSprite(200,200,20,20);
bola.shapeColor="red";

//Criar a raquete
var raquete=createSprite(200,385,50,10);
raquete.shapeColor="red";

//Criar a variavel dos pontos
var pontos=0;

//Criar a variavel de inicio de jogo
var estadodejogo="start";

/*Criar a function draw
Nela temos os codigos que queremos que acontecam mais de uma vez*/
function draw() {
  
//Criando fundo branco
  background("white");

/*Criar o if de inicio de jogo
Nele tem tudo que deve acontecer durante esse estado*/
if (estadodejogo=="start"){
  textSize(20);
  stroke("green");
  text("Bem-vindo!Pressione Enter para iniciar",30,230);

}

//Exibindo a pontuaçao
  textSize(25);
  stroke("red");
  text("Pontuação:"+pontos,240,25);
 
   /*Criar o if que dara movimento a bola
   e a existencia do estado de jogar*/
  if (keyDown("enter")){
    bola.velocityX=4;
    bola.velocityY=3;
    estadodejogo="play";
  }
  /*Criar o if do estado de jogar
  Nele tem tudo que deve acontecer durante esse estado*/
 if(estadodejogo=="play"){
  raquete.x=World.mouseX;}
 
  //Criar as paredes
  createEdgeSprites();
  
  //Fazer a bola quicar nas paredes e na raquete
  bola.bounceOff(topEdge);
  bola.bounceOff(leftEdge);
  bola.bounceOff(rightEdge);
  bola.bounceOff(raquete);
  
  /*Criar o if que dara existencia
  ao estado de fim de jogo*/
  if(bola.isTouching(bottomEdge) || pontos==16){
  estadodejogo="end";
  }
  /*Criar o if de fim de jogo
Nele tem tudo que deve acontecer durante esse estado*/
  if(estadodejogo=="end"){
  textSize(25);
  text("FIM DE JOGO",120,220);
  raquete.setVelocity(0,0);
  }
 
  //Fazer as caixas serem destruidas quando a bola as toca 
  if (bola.bounceOff(caixa1)){
  caixa1.destroy();
    pontos=pontos+1;
  }
  if (bola.bounceOff(caixa2)){
  caixa2.destroy();
    pontos=pontos+1;
  }
  if (bola.bounceOff(caixa3)){
  caixa3.destroy();
    pontos=pontos+1;
  }
  if (bola.bounceOff(caixa4)){
  caixa4.destroy();
    pontos=pontos+1;
  }
  if (bola.bounceOff(caixa5)){
  caixa5.destroy();
    pontos=pontos+1;
  }
  if (bola.bounceOff(caixa6)){
  caixa6.destroy();
    pontos=pontos+1;
  }
  if (bola.bounceOff(caixa7)){
  caixa7.destroy();
    pontos=pontos+1;
  }
  if (bola.bounceOff(caixa8)){
  caixa8.destroy();
    pontos=pontos+1;
  }
  if (bola.bounceOff(caixa9)){
  caixa9.destroy();
    pontos=pontos+1;
  }
  if (bola.bounceOff(caixa10)){
  caixa10.destroy();
    pontos=pontos+1;
  }
  if (bola.bounceOff(caixa11)){
  caixa11.destroy();
    pontos=pontos+1;
  }
   if (bola.bounceOff(caixa12)){
  caixa12.destroy();
    pontos=pontos+1;
  }
  if (bola.bounceOff(caixa13)){
  caixa13.destroy();
    pontos=pontos+1;
  }
  if (bola.bounceOff(caixa14)){
  caixa14.destroy();
    pontos=pontos+1;
  }
  if (bola.bounceOff(caixa15)){
  caixa15.destroy();
    pontos=pontos+1;
  }
  if (bola.bounceOff(caixa16)){
  caixa16.destroy();
    pontos=pontos+1;
  }
//Criando o codigo para desenhar sprites
  drawSprites();
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
