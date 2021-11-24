/*Prova (3)- Apresentação final do Jogo
Minha explicação no Youtube: https://youtu.be/ngb7GMAmvLY
*/
var tela=0;
var largura=180;
var altura=45;
var img=[];
var img1=[];
var img2=[];
var img3=[];
var img4=[];
var img5=[];
var img6=[];
var img7=[];
var img8=[];
var img9=[];
var img10=[];
var contador=0;
var personagem=false;
var telaint=0;


//Variaveis para Gravidade
var fy=0,gravity =0.7, pulo = -19, piso =240

//Referente ao jogador
var x=70 , y =240
var x2=90, y2=240

//carteira
var carteira =0;

//moedas
var x5 =50,y5 = 90;
var x1 = 180 ,y1=110;
var x12=420,y12=110;
var x13 = 680 ,y13=110;
var x25=310,y25 =90;
var x50=550, y50 =90;


function preload() {
  img = loadImage('menu.jpg');
  img2= loadImage('niveis2.jpg');
  img3= loadImage('medio.jpg');
  img4= loadImage('facil.jpg');
  img6= loadImage('tata1.png');
  img7= loadImage('fundo.png');
  img8= loadImage('ila2.png');
  img9= loadImage('m5.1.png');
  img10= loadImage('1.png');
  img11= loadImage('1-1.png');
  img12= loadImage('m1.1.png');
  img13= loadImage('m50.1.png');
  img14= loadImage('m25.1.png');
  img15= loadImage('botaomenu.png');
  img16= loadImage('baufechado.png');
  img18= loadImage('bauouro.png');
  img19= loadImage('c5.1.png');
  img20= loadImage('avatar2.png'); 
  img21= loadImage('avatar1invertido.png');
  img22= loadImage('avatar2invertido.png');
  img23= loadImage('telafinal.png');
  img24= loadImage('avatar1pulo.png');
  img25= loadImage('avatar2pulo.png');
  img26= loadImage('raffa.png');
  myFont= loadFont('Augusta.ttf');
  som= loadSound('Projeto lop/coin.wav');
  som1= loadSound('Projeto lop/piratasom.mp3');
  img[0]= loadImage('m5.1.png');
  img[1]= loadImage('m5.2.png');
  img[2]= loadImage('m5.3.png');
  img[3]= loadImage('m5.4.png');
  img[4]= loadImage('m5.5.png');
  img[5]= loadImage('m5.6.png');
  img1[0]=loadImage('m10.1.png');
  img1[1]=loadImage('m10.2.png');
  img1[2]=loadImage('m10.3.png');
  img1[3]=loadImage('m10.4.png');
  img1[4]=loadImage('m10.5.png');
  img1[5]=loadImage('m10.6.png');
  img2[0]=loadImage('m25.1.png');
  img2[1]=loadImage('m25.2.png');
  img2[2]=loadImage('m25.3.png');
  img2[3]=loadImage('m25.4.png');
  img2[4]=loadImage('m25.5.png');
  img2[5]=loadImage('m25.6.png');
  img3[0]=loadImage('m50.1.png');
  img3[1]=loadImage('m50.2.png');
  img3[2]=loadImage('m50.3.png');
  img3[3]=loadImage('m50.4.png');
  img3[4]=loadImage('m50.5.png');
  img3[5]=loadImage('m50.6.png');
  img4[0]=loadImage('m1.1.png');
  img4[1]=loadImage('m1.2.png');
  img4[2]=loadImage('m1.3.png');
  img4[3]=loadImage('m1.4.png');
  img4[4]=loadImage('m1.5.png');
  img4[5]=loadImage('m1.6.png');
  img5[0]=loadImage('c2.1.png');
  img5[1]=loadImage('c2.2.png');
  img5[2]=loadImage('c2.3.png');
  img5[3]=loadImage('c2.4.png');
  img6[0]=loadImage('c5.1.png');
  img6[1]=loadImage('c5.2.png');
  img6[2]=loadImage('c5.3.png');
  img6[3]=loadImage('c5.4.png');
  img7[0]=loadImage('c10.1.png');
  img7[1]=loadImage('c10.2.png');
  img7[2]=loadImage('c10.3.png');
  img7[3]=loadImage('c10.4.png');
  img8[0]=loadImage('c20.1.png');
  img8[1]=loadImage('c20.2.png');
  img8[2]=loadImage('c20.3.png');
  img8[3]=loadImage('c20.4.png');
  img9[0]=loadImage('c50.1.png');
  img9[1]=loadImage('c50.2.png');
  img9[2]=loadImage('c50.3.png');
  img9[3]=loadImage('c50.4.png');
  img10[0]=loadImage('c100.1.png');
  img10[1]=loadImage('c100.2.png');
  img10[2]=loadImage('c100.3.png');
  img10[3]=loadImage('c100.4.png');
}

let contaFrames=0;
function setup() {
  createCanvas(800, 400);
  som.setVolume(0.5);
}

function draw() {
//tela menu
  if(tela==0){
    image(img,0,-20);
    fill(300);
    textSize(40);
//FONTE DO JOGO AQUI
    textFont(myFont); 
    text("Caça ao Tesouro", 250,100);
    
//Jogar
    fill(300);
    textSize(32);
    noStroke();
    text("Jogar", 340,200);
    
//Instruções
    fill(300);
    textSize(32);
    noStroke();
    text("Instruções",310,270);
    
  //creditos
    fill(300);
    textSize(32);
    noStroke();
    text("Créditos",325,340);
    
//borda jogar
  if(mouseX>=350 && mouseX<=420 && mouseY>=168 && mouseY<=210){
    stroke(200);
    fill('#191970');
    rect(287,168, 180, altura, 15);
    fill(300);
    textSize(32);
    noStroke();
    text("Jogar", 340,200);
    if (mouseIsPressed) {
      som.play();
      tela=1;
    }
  }
//borda instruções
  if(mouseX>=310 && mouseX<=470 && mouseY>=250 && mouseY<=270){
    stroke(200);
    fill('#191970');
    rect(287,238, largura, altura, 15);
//Instruções
    fill(300);
    textSize(32);
    noStroke();
    text("Instruções",310,270);
    if (mouseIsPressed) {
      som.play();
      tela=9;
    }
  }
//borda créditos
  if(mouseX>=325 && mouseX<=456 && mouseY>=305 && mouseY<=345){
    stroke(200);
    fill('#191970');
    rect(287,307, largura, altura, 15);
//creditos
    fill(300);
    textSize(32);
    noStroke();
    text("Créditos",325,340);
    if(mouseIsPressed){
      som.play();
      tela=10;
    }
  }
}
//Tela Avatar
  if (tela == 1){
    image(img,0,-20);
    image(img15,710,0,70,70);
    textFont(myFont); 
    textSize(20);
      
//botao avatar1
    if(mouseX>=190 && mouseX<=330 && mouseY>=200 && mouseY<=380){
      stroke(200);
      fill('#B22222');
    
//titulo
    fill(300);
    textSize(20);
    noStroke();
    text("Avatar 1",225,150);
    if(mouseIsPressed){
      personagem=false;
      som1.play();
      tela=2;
    }
  }
//botao avatar2
  if(mouseX>=470 && mouseX<=620 && mouseY>=200 && mouseY<=380){
    stroke(200);
    fill('#B22222');
    
//titulo
    fill(300);
    textSize(20);
    noStroke();
    text("Avatar 2",500,160);
    if(mouseIsPressed){
      som1.play();
      tela=2;
      personagem=true;
    }
  }
      
//titulo
    fill(300);
    textSize(40);
    text("Escola seu Avatar",270,90);
    image(img10,140,180,420,200);
    image(img11,230,190,420,200);
      
    //botao bau
  if(mouseX>=712 && mouseX<=775 && mouseY>=15 && mouseY<=70){
    stroke(200);
    fill('#B22222');
    image(img15,710,-0,70,70);
//nome
    fill(300);
    textSize(10);
    noStroke();
    text("Menu",735,70);
    if(mouseIsPressed){
      som.play();
      tela=0;
    }
  }
}
  
//Tela Niveis
  if(tela == 2){
    image(img3,-70,-100);
    image(img15,710,0,70,70);
    textFont(myFont); 
//titulo
    fill('#B22222');
    rect(250,67, 270, altura, 15);
    fill(300);
    textSize(40);
    text("Escola um Nível",261,100);
//fácil
    fill(300);
    textSize(32);
    noStroke();
    text("Fácil",351,200);
//médio
    fill(300);
    textSize(32);
    noStroke();
    text("Médio",345,270);
//Difícil
    fill(300);
    textSize(32);
    noStroke();
    text("Difícil",343,340);
      
//botao bau
  if(mouseX>=712 && mouseX<=775 && mouseY>=15 && mouseY<=70){
    stroke(200);
    fill('#B22222');
    image(img15,710,-0,70,70);
//nome
    fill(300);
    textSize(10);
    noStroke();
    text("Menu",735,70);
    if (mouseIsPressed){
      som.play();
      tela=0;
    }
  }
//borda facil
  if(mouseX>=350 && mouseX<=420 && mouseY>=168 && mouseY<=210){
    stroke(200);
    fill('#B22222');
    rect(292,168, 180, altura, 15);
    fill(300);
    textSize(32);
    noStroke();
    text("Fácil", 351,200);
    if(mouseIsPressed) {
      som.play();
      tela=3;
    }
  }
//borda médio
  if(mouseX>=310 && mouseX<=470 && mouseY>=250 && mouseY<=270){
    stroke(200);
    fill('#B22222');
    rect(292,238, largura, altura, 15);
//médio
    fill(300);
    textSize(32);
    noStroke();
    text("Médio",345,270);
    if(mouseIsPressed){
      som.play();
      tela=5;
    }
  }
//borda Dificil
  if(mouseX>=325 && mouseX<=456 && mouseY>=305 && mouseY<=345){
    stroke(200);
    fill('#B22222');
    rect(292,307, largura, altura, 15);
//dificil
    fill(300);
    textSize(32);
    noStroke();
    text("Difícil",343,340);
    if(mouseIsPressed){
      som.play();
      tela=7;
    }
  }
}
  
//tela fase 1
  if(tela == 3){
    telaint=3;
    image(img4,0,-100);
    image(img15,710,0,70,70);
    textFont(myFont);
    
//botao bau
  if(mouseX>=712 && mouseX<=775 && mouseY>=15 && mouseY<=70){
    stroke(200);
    fill('#B22222');
    image(img15,710,-0,70,70);
//nome
    fill(300);
    textSize(10);
    noStroke();
    text("Menu",735,70);
    if(mouseIsPressed){
      som.play();
      tela=0;
  
      x=70;
      y=240;
      x5=50;
      y5=90;
      x1=180; 
      y1=110; 
      x12=420;
      y12=110;
      x13=680;
      y13=110; 
      x25=310;
      y25=90;
      x50=550;
      y50=90;
      carteira=0;
    }
  }
//inicio do jogo
    fill('#191970');
    textSize(20);
    text("Fase 1",320,30);
//animação e contador
    image(img[contador%5],x5, y5, 60,60);
    image(img2[contador%5],x25, y25, 65,65);
    image(img3[contador%5], x50, y50, 65,65);
    image(img4[contador%5], x1, y1, 65,65);
    image(img4[contador%5], x13, y13, 65,65);
    image(img4[contador%5], x12, y12, 65,65);
//movimento das moedas
    contaFrames++; 
  if(contaFrames>5){
    contaFrames=0;  
    contador++;  
    }
  
    stroke(200);
    fill('#F0F8FF');
    rect(-30,20,330, 50, 470);
    fill(300);
    textSize(14.5);
    noStroke();
    let i='Quais moedas o pirata precisa pegar para comprar um barril de suco que custa R$ 3,00?'
    fill('#191970');
    text(i,5,30,290,200);
    textSize(20)
    text("Carteira: R$ "+carteira,400,30)
    
  //movimentação
  if(keyIsDown(LEFT_ARROW)){
    if(personagem==false){
      image(img21,x,y,160,150);
    }else{
      image(img22,x,y,150,140);
    }
    x-=3;
    }
  else if(keyIsDown(RIGHT_ARROW)){
    if(personagem==false){
      image(img10,x,y,330,150);
    }else{
      image(img20,x,y,160,140);
    }
    x+=3;
    }
  else if(keyIsDown(UP_ARROW)){
    if(personagem==false){
      image(img24,x,y,160,150);
    }else{
      image(img25,x,y,140,140);
    }
    if(y==piso){
      fy=fy+pulo;
      }
   }  
    else {
      if(personagem==false){
      image(img10,x,y,330,150);
      }else{
      image(img20,x,y,160,140);
    } 
  }
  //gravidade
    fy=fy +gravity+0.1;
    y=fy+y
    
  if(y>=piso){
    y=piso;
    fy=0;
    }
    
//Colisão das moedas
    //5
  if(dist(x,y,x5,y5) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x5=400;
    y5=400;
    carteira += 0.05;
    som.play();
    }
  //1
  if(dist(x,y,x1,y1) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x1=400;
    y1=400;
    carteira +=1.00;
    som.play();

    }
  //25
  if(dist(x,y,x25,y25) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x25= 400;
    y25= 400
    carteira += 0.25;
    som.play();
    }
  //1.2
  if(dist(x,y,x12,y12) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x12= 400;
    y12= 400;
    carteira += 1.00;
    som.play();
    }
  //50
  if(dist(x,y,x50,y50) < 60){
    x50= 400;
    y50= 400;
    carteira += 0.50;
    som.play();
    }
  //1.3
  if(dist(x,y,x13,y13) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x13= 400;
    y13= 400;
    carteira += 1.00;
    som.play();
    }
    
//FIM DA COLISÃO
  //Verifica Carteira e posição
    //Ele so finaliza o jogo quando o bonequinho atinge os 3 reais e fica no piso (Pra ele n ganhar a fase ainda no ar)
  if(carteira==3 && y==piso){
    //Aqui eu to reinicializando as variaveis para que volte tudo ao seus cantos. O personagem, as moedinhas e a carteira
    x5=50;
    y5=90;
    x1=180;
    y1=110; 
    x12=420;
    y12=110;
    x13=680;
    y13=110;
    x25=310;
    y25=90;
    x50=550;
    y50=90;
    carteira=0;
    x=70;
    y=240;
    tela=12;
    }else if (carteira>3 && y==piso){
    //Aqui eu to reinicializando as variaveis para que volte tudo ao seus cantos. O personagem, as moedinhas e a carteira
    x=70;
    y=240;
    x5=50;
    y5=90;
    x1=180; 
    y1=110; 
    x12=420;
    y12=110;
    x13=680;
    y13=110; 
    x25=310;
    y25=90;
    x50=550;
    y50=90;
    carteira=0;
    tela=11;
  }
  if(x<-50){
    x=-50;
  }
  if(x>670){
    x=670;
 }
}
  //tela fase 2
  if(tela == 4){
    telaint=4;
    image(img4,0,-100);
    image(img15,710,0,70,70);
    textFont(myFont);
    
//botao bau
  if(mouseX>=712 && mouseX<=775 && mouseY>=15 && mouseY<=70){
    stroke(200);
    fill('#B22222');
    image(img15,710,-0,70,70);
//nome
    fill(300);
    textSize(10);
    noStroke();
    text("Menu",735,70);
    if(mouseIsPressed){
      som.play();
      tela=0;
      
      x=70;
      y=240;
      x5=50;
      y5=90;
      x1=180; 
      y1=110; 
      x12=420;
      y12=110;
      x13=680;
      y13=110; 
      x25=310;
      y25=90;
      x50=550;
      y50=90;
      carteira=0;
    }
  }
//inicio do jogo
    fill('#191970');
    textSize(20);
    text("Fase 2",320,30);
//animação e contador
    image(img[contador%5],x5, y5, 60,60);
    image(img2[contador%5],x25, y25, 65,65);
    image(img3[contador%5], x50, y50, 65,65);
    image(img4[contador%5], x1, y1, 65,65);
    image(img4[contador%5], x13, y13, 65,65);
    image(img4[contador%5], x12, y12, 65,65);
//movimento das moedas
    contaFrames++; 
  if(contaFrames>5){
    contaFrames=0;  
    contador++;  
    }
    stroke(200);
    fill('#F0F8FF');
    rect(-30,20,330, 50, 470);
    fill(300);
    textSize(14.5);
    noStroke();
    let i='Quais moedas o pirata precisa pegar para comprar uma medalha nova que custa R$ 2,50?'
    fill('#191970');
    text(i,5,30,290,200);
    textSize(20);
    text("Carteira: R$ "+carteira,400,30);   
  //movimentação
   if(keyIsDown(LEFT_ARROW)){
    if(personagem==false){
      image(img21,x,y,160,150);
    }else{
      image(img22,x,y,150,140);
    }
    x-=3;
    }
  else if(keyIsDown(RIGHT_ARROW)){
    if(personagem==false){
      image(img10,x,y,330,150);
    }else{
      image(img20,x,y,160,140);
    }
    x+=3;
    }
  else if(keyIsDown(UP_ARROW)){
    if(personagem==false){
      image(img24,x,y,160,150);
    }else{
      image(img25,x,y,140,140);
    }
    if(y==piso){
      fy= fy+pulo;
      }
   }  
    else {
      if(personagem==false){
      image(img10,x,y,330,150);
      }else{
      image(img20,x,y,160,140);
    } 
    }
  //gravidade
    fy= fy +gravity+0.1;
    y= fy+y;
    
  if(y>=piso){
    y=piso;
    fy=0;
    }
    
//Colisão das moedas
    //5
  if(dist(x,y,x5,y5) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x5=400;
    y5=400;
    carteira += 0.05;
    som.play();
    }
  //1
  if(dist(x,y,x1,y1) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x1=400;
    y1=400;
    carteira +=1.00;
    som.play();
    }
  //25
  if(dist(x,y,x25,y25) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x25= 400;
    y25= 400;
    carteira += 0.25;
    som.play();
    }
  //1.2
  if(dist(x,y,x12,y12) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x12= 400;
    y12= 400;
    carteira += 1.00;
    som.play();
    }
  //50
  if(dist(x,y,x50,y50) < 60){
    x50= 400;
    y50= 400;
    carteira += 0.50;
    som.play();
    }
  //1.3
  if(dist(x,y,x13,y13) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x13= 400;
    y13= 400;
    carteira += 1.00;
    som.play();
    }
    
//FIM DA COLISÃO
    
    //Verifica Carteira e posição
    //Ele so finaliza o jogo quando o bonequinho atinge os 3 reais e fica no piso (Pra ele n ganhar a fase ainda no ar)
  if(carteira==2.50 && y==piso){
    //Aqui eu to reinicializando as variaveis para que volte tudo ao seus cantos. O personagem, as moedinhas e a carteira
    x5=50;
    y5=90;
    x1=180; 
    y1=110;
    x12=420;
    y12=110;
    x13=680;
    y13=110;
    x25=310;
    y25=90;
    x50=550;
    y50=90;
    carteira=0;
    x=70;
    y=240;
    tela=12;
    }else if (carteira>2.50 && y==piso){
    //Aqui eu to reinicializando as variaveis para que volte tudo ao seus cantos. O personagem, as moedinhas e a carteira
    x=70;
    y=240;
    x5=50;
    y5=90;
    x1=180; 
    y1=110;
    x12=420;
    y12=110;
    x13=680;
    y13=110;
    x25=310;
    y25=90;
    x50=550;
    y50=90;
    carteira = 0;
    tela=11;
  }
  if(x<-50){
    x=-50;
  }
  if(x>670){
    x=670;
 }
}
  
  //tela fase 3
  if(tela == 5){
    telaint=5;
    image(img4,0,-100);
    image(img15,710,0,70,70);
    textFont(myFont);
    
//botao bau
  if(mouseX>=712 && mouseX<=775 && mouseY>=15 && mouseY<=70){
    stroke(200);
    fill('#B22222');
    image(img15,710,-0,70,70);
//nome
    fill(300);
    textSize(10);
    noStroke();
    text("Menu",735,70);
    if(mouseIsPressed){
      som.play();
      tela=0;
      
      x=70;
      y=240;
      x5=50;
      y5=90;
      x1=180; 
      y1=110; 
      x12=420;
      y12=110;
      x13=680;
      y13=110; 
      x25=310;
      y25=90;
      x50=550;
      y50=90;
      carteira=0;
    }
  }
//inicio do jogo
    fill('#191970');
    textSize(20);
    text("Fase 3",320,30);
//animação e contador
    image(img5[contador%4],x5, y5, 60,60);
    image(img6[contador%4],x25, y25, 65,65);
    image(img7[contador%4], x50, y50, 65,65);
    image(img9[contador%4], x1, y1, 65,65);
    image(img8[contador%4], x13, y13, 65,65);
    image(img10[contador%4], x12, y12, 65,65);
//movimento das cédulas
    contaFrames++; 
  if(contaFrames>5){
    contaFrames=0;  
    contador++;  
    }
    stroke(200);
    fill('#F0F8FF');
    rect(-30,20,330, 50, 470);
    fill(300);
    textSize(15);
    noStroke();
    let i='Quais cédulas o pirata precisa para comprar um chapéu novo que custa R$ 37,00?'
    fill('#191970');
    text(i,5,30,290,200);
    textSize(20)
    text("Carteira: R$ "+carteira,400,30)
    
  //movimentação
  if(keyIsDown(LEFT_ARROW)){
    if(personagem==false){
      image(img21,x,y,160,150);
    }else{
      image(img22,x,y,150,140);
    }
    x-=3
    }
  else if(keyIsDown(RIGHT_ARROW)){
    if(personagem==false){
      image(img10,x,y,330,150);
    }else{
      image(img20,x,y,160,140);
    }
    x+=3
    }
  else if(keyIsDown(UP_ARROW)){
    if(personagem==false){
      image(img24,x,y,160,150);
    }else{
      image(img25,x,y,140,140);
    }
    if(y==piso){
      fy = fy+pulo
      }
   }  
    else {
      if(personagem==false){
      image(img10,x,y,330,150);
      }else{
      image(img20,x,y,160,140);
    } 
    }
  //gravidade
    fy= fy +gravity+0.1;
    y= fy+y;
    
  if(y>=piso){
    y=piso;
    fy=0;
    }
    
//Colisão das cédulas
    //2
  if(dist(x,y,x5,y5) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x5=400;
    y5=400;
    carteira += 2.00;
    som.play();
    }
  //50
  if(dist(x,y,x1,y1) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x1=400;
    y1=400;
    carteira +=50;
    som.play();
    }
  //5
  if(dist(x,y,x25,y25) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x25= 400;
    y25= 400;
    carteira +=5;
    som.play();
    }
  //100
  if(dist(x,y,x12,y12) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x12= 400;
    y12= 400;
    carteira += 100;
    som.play();
    }
  //10
  if(dist(x,y,x50,y50) < 60){
    x50= 400;
    y50= 400;
    carteira += 10;
    som.play();
  }
  //20
  if(dist(x,y,x13,y13) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x13= 400;
    y13= 400;
    carteira += 20;
    som.play();
    }
    
//FIM DA COLISÃO
    
    //Verifica Carteira e posição
    //Ele so finaliza o jogo quando o bonequinho atinge os 3 reais e fica no piso (Pra ele n ganhar a fase ainda no ar)
  if(carteira==37.00 && y==piso){
    //Aqui eu to reinicializando as variaveis para que volte tudo ao seus cantos. O personagem, as moedinhas e a carteira
    x5=50;
    y5=90;
    x1=180;
    y1=110;
    x12=420;
    y12=110;
    x13=680;
    y13=110;
    x25=310;
    y25=90;
    x50=550;
    y50=90;
    carteira=0;
    x=70;
    y=240;
    tela=12;
    }else if (carteira>37.00 && y==piso){
    //Aqui eu to reinicializando as variaveis para que volte tudo ao seus cantos. O personagem, as moedinhas e a carteira
    x=70;
    y=240;
    x5=50;
    y5=90;
    x1=180; 
    y1=110;
    x12=420;
    y12=110;
    x13=680;
    y13=110;
    x25=310;
    y25=90;
    x50=550;
    y50=90;
    carteira = 0;
    tela=11;
  }
  if(x<-50){
    x=-50;
  }
  if(x>670){
    x=670;
 }
}
  //tela fase 4
  if(tela == 6){
    telaint=6;
    image(img4,0,-100);
    image(img15,710,0,70,70);
    textFont(myFont);
  //botao bau
  if(mouseX>=712 && mouseX<=775 && mouseY>=15 && mouseY<=70){
    stroke(200);
    fill('#B22222');
    image(img15,710,-0,70,70);
//nome
    fill(300);
    textSize(10);
    noStroke();
    text("Menu",735,70);
    if(mouseIsPressed){
      som.play();
      tela=0;
      
      x=70;
      y=240;
      x5=50;
      y5=90;
      x1=180; 
      y1=110; 
      x12=420;
      y12=110;
      x13=680;
      y13=110; 
      x25=310;
      y25=90;
      x50=550;
      y50=90;
      carteira=0;
    }
  }
//inicio do jogo
    fill('#191970');
    textSize(20);
    text("Fase 4",320,30);
//animação e contador
    image(img5[contador%4],x5, y5, 60,60);
    image(img6[contador%4],x25, y25, 65,65);
    image(img7[contador%4], x50, y50, 65,65);
    image(img9[contador%4], x1, y1, 65,65);
    image(img8[contador%4], x13, y13, 65,65);
    image(img10[contador%4], x12, y12, 65,65);
//movimento das cédulas
    contaFrames++; 
  if(contaFrames>5){
    contaFrames=0;  
    contador++;  
    }
  
    stroke(200);
    fill('#F0F8FF');
    rect(-30,20,330, 50, 470);
    fill(300);
    textSize(15);
    noStroke();
    let i='Quais cédulas o pirata precisa para comprar um baú que custa R$ 175,00?'
    fill('#191970');
    text(i,5,30,290,200);
    textSize(20);
    text("Carteira: R$ "+carteira,400,30);
    
  //movimentação
  if(keyIsDown(LEFT_ARROW)){
    if(personagem==false){
      image(img21,x,y,160,150);
    }else{
      image(img22,x,y,150,140);
    }
    x-=3;
    }
  else if(keyIsDown(RIGHT_ARROW)){
    if(personagem==false){
      image(img10,x,y,330,150);
    }else{
      image(img20,x,y,160,140);
    }
    x+=3;
    }
  else if(keyIsDown(UP_ARROW)){
    if(personagem==false){
      image(img24,x,y,160,150);
    }else{
      image(img25,x,y,140,140);
    }
    if(y==piso){
      fy= fy+pulo;
      }
   }  
    else {
      if(personagem==false){
      image(img10,x,y,330,150);
      }else{
      image(img20,x,y,160,140);
    } 
    }
  //gravidade
    fy= fy +gravity+0.1;
    y= fy+y;
    
  if(y>=piso){
    y=piso;
    fy=0;
    }
    
//Colisão das cédulas
    //2
  if(dist(x,y,x5,y5) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x5=400;
    y5=400;
    carteira += 2.00;
    som.play();
    }
  //50
  if(dist(x,y,x1,y1) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x1=400;
    y1=400;
    carteira +=50;
    som.play();
    }
  //5
  if(dist(x,y,x25,y25) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x25 = 400
    y25= 400
    carteira +=5;
    som.play();
    }
  //100
  if(dist(x,y,x12,y12) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x12= 400;
    y12= 400;
    carteira += 100;
    som.play();
    }
  //10
  if(dist(x,y,x50,y50) < 60){
    x50= 400;
    y50= 400;
    carteira += 10;
    som.play();
  }
  //20
  if(dist(x,y,x13,y13) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x13= 400;
    y13= 400;
    carteira += 20;
    som.play();
    }
    
//FIM DA COLISÃO
    
    //Verifica Carteira e posição
    //Ele so finaliza o jogo quando o bonequinho atinge os 3 reais e fica no piso (Pra ele n ganhar a fase ainda no ar)
  if(carteira==175.00 && y==piso){
    //Aqui eu to reinicializando as variaveis para que volte tudo ao seus cantos. O personagem, as moedinhas e a carteira
    x5=50;
    y5=90;
    x1=180; 
    y1=110;
    x12=420;
    y12=110;
    x13=680;
    y13=110;
    x25=310;
    y25=90;
    x50=550;
    y50=90;
    carteira=0;
    x=70;
    y=240;
    tela=12;
    }else if (carteira>175.00 && y==piso){
    //Aqui eu to reinicializando as variaveis para que volte tudo ao seus cantos. O personagem, as moedinhas e a carteira
    x=70;
    y=240;
    x5=50;
    y5=90;
    x1=180;
    y1=110;
    x12=420;
    y12=110;
    x13=680;
    y13=110; 
    x25=310;
    y25=90;
    x50=550;
    y50=90
    carteira = 0;
    tela=11;
  }
  if(x<-50){
    x=-50;
  }
  if(x>670){
    x=670;
 }
}
  //tela fase 5
  if(tela == 7){
    telaint=7;
    image(img4,0,-100);
    image(img15,710,0,70,70);
    textFont(myFont);
    
//botao bau
  if(mouseX>=712 && mouseX<=775 && mouseY>=15 && mouseY<=70){
    stroke(200);
    fill('#B22222');
    image(img15,710,-0,70,70);
//nome
    fill(300);
    textSize(10);
    noStroke();
    text("Menu",735,70);
    if(mouseIsPressed){
      som.play();
      tela=0;
      
      x=70;
      y=240;
      x5=50;
      y5=90;
      x1=180; 
      y1=110; 
      x12=420;
      y12=110;
      x13=680;
      y13=110; 
      x25=310;
      y25=90;
      x50=550;
      y50=90;
      carteira=0;
    }
  }
//inicio do jogo
    fill('#191970');
    textSize(20);
    text("Fase 5",320,30);
//animação e contador
    image(img3[contador%5],x5, y5, 60,60);
    image(img2[contador%5],x25, y25, 65,65);
    image(img1[contador%5], x50, y50, 65,65);
    image(img9[contador%4], x1, y1, 65,65);
    image(img8[contador%4], x13, y13, 65,65);
    image(img7[contador%4], x12, y12, 65,65);
//movimento das cédulas
    contaFrames++; 
  if(contaFrames>5){
    contaFrames=0;  
    contador++;  
    }
    
    stroke(200);
    fill('#F0F8FF');
    rect(-30,20,330, 50, 470);
    fill(300);
    textSize(15);
    noStroke();
    let i='Quais cédulas e moedas o pirata precisa para comprar uma bota nova que custa R$ 60,75?'
    fill('#191970');
    text(i,5,30,290,200);
    textSize(20)
    text("Carteira: R$ "+carteira,400,30)
    
  //movimentação
  if(keyIsDown(LEFT_ARROW)){
    if(personagem==false){
      image(img21,x,y,160,150);
    }else{
      image(img22,x,y,150,140);
    }
    x-=3
    }
  else if(keyIsDown(RIGHT_ARROW)){
    if(personagem==false){
      image(img10,x,y,330,150);
    }else{
      image(img20,x,y,160,140);
    }
    x+=3;
    }
  else if(keyIsDown(UP_ARROW)){
    if(personagem==false){
      image(img24,x,y,160,150);
    }else{
      image(img25,x,y,140,140);
    }
    if(y==piso){
      fy = fy+pulo;
      }
   }  
    else {
      if(personagem==false){
      image(img10,x,y,330,150);
      }else{
      image(img20,x,y,160,140);
    } 
    }
  //gravidade
    fy= fy +gravity+0.1;
    y= fy+y;
    
  if(y>=piso){
    y=piso;
    fy=0;
    }
    
//Colisão das cédulas
    //0.50
  if(dist(x,y,x5,y5) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x5=400;
    y5=400;
    carteira += 0.50;
    som.play();
    }
  //50
  if(dist(x,y,x1,y1) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x1=400;
    y1=400;
    carteira +=50;
    som.play();
    }
  //0.25
  if(dist(x,y,x25,y25) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x25= 400;
    y25= 400;
    carteira +=0.25;
    som.play();
    }
  //10
  if(dist(x,y,x12,y12) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x12= 400;
    y12= 400;
    carteira += 10;
    som.play();
    }
  //0.10
  if(dist(x,y,x50,y50) < 60){
    x50= 400;
    y50= 400;
    carteira += 0.10;
    som.play();
  }
  //20
  if(dist(x,y,x13,y13) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x13= 400;
    y13= 400;
    carteira += 20;
    som.play();
    }
    
//FIM DA COLISÃO
    
    //Verifica Carteira e posição
    //Ele so finaliza o jogo quando o bonequinho atinge os 3 reais e fica no piso (Pra ele n ganhar a fase ainda no ar)
  if(carteira==60.75 && y==piso){
    //Aqui eu to reinicializando as variaveis para que volte tudo ao seus cantos. O personagem, as moedinhas e a carteira
    x5=50;
    y5=90;
    x1=180;
    y1=110;
    x12=420;
    y12=110;
    x13=680;
    y13=110;
    x25=310;
    y25=90;
    x50=550;
    y50=90;
    carteira=0;
    x=70;
    y=240;
    tela=12;
    }else if (carteira>60.75 && y==piso){
    //Aqui eu to reinicializando as variaveis para que volte tudo ao seus cantos. O personagem, as moedinhas e a carteira
    x=70;
    y=240;
    x5=50;
    y5=90;
    x1=180; 
    y1=110; 
    x12=420;
    y12=110;
    x13= 680;
    y13=110;
    x25=310;
    y25=90;
    x50=550;
    y50=90;
    carteira = 0;
    tela=11;
  }
  if(x<-50){
    x=-50;
  }
  if(x>670){
    x=670;
 }
}

  //tela fase 6
  if(tela == 8){
    telaint=8;
    image(img4,0,-100);
    image(img15,710,0,70,70);
    textFont(myFont);
    
//botao bau
  if(mouseX>=712 && mouseX<=775 && mouseY>=15 && mouseY<=70){
    stroke(200);
    fill('#B22222');
    image(img15,710,-0,70,70);
//nome
    fill(300);
    textSize(10);
    noStroke();
    text("Menu",735,70);
    if(mouseIsPressed){
      som.play();
      tela=0;
      
      x=70;
      y=240;
      x5=50;
      y5=90;
      x1=180; 
      y1=110; 
      x12=420;
      y12=110;
      x13=680;
      y13=110; 
      x25=310;
      y25=90;
      x50=550;
      y50=90;
      carteira=0;
    }
  }
//inicio do jogo
    fill('#191970');
    textSize(20);
    text("Fase 6",320,30);
//animação e contador
    image(img4[contador%5],x5, y5, 60,60);
    image(img[contador%5],x25, y25, 65,65);
    image(img3[contador%5], x50, y50, 65,65);
    image(img9[contador%4], x1, y1, 65,65);
    image(img8[contador%4], x13, y13, 65,65);
    image(img7[contador%4], x12, y12, 65,65);
//movimento das cédulas
    contaFrames++; 
  if(contaFrames>5){
    contaFrames=0;  
    contador++;  
    }
    
    stroke(200);
    fill('#F0F8FF');
    rect(-30,20,330, 50, 470);
    fill(300);
    textSize(15);
    noStroke();
    let i='Quais cédulas e moedas o pirata precisa para comprar uma Âncora nova que custa R$ 71,55?'
    fill('#191970');
    text(i,5,30,290,200);
    textSize(20)
    text("Carteira: R$ "+carteira,400,30)
    
  //movimentação
  if(keyIsDown(LEFT_ARROW)){
    if(personagem==false){
      image(img21,x,y,160,150);
    }else{
      image(img22,x,y,150,140);
    }
    x-=3
    }
  else if(keyIsDown(RIGHT_ARROW)){
    if(personagem==false){
      image(img10,x,y,330,150);
    }else{
      image(img20,x,y,160,140);
    }
    x+=3
    }
  else if(keyIsDown(UP_ARROW)){
    if(personagem==false){
      image(img24,x,y,160,150);
    }else{
      image(img25,x,y,140,140);
    }
    if(y==piso){
      fy = fy+pulo
      }
   }  
    else {
      if(personagem==false){
      image(img10,x,y,330,150);
      }else{
      image(img20,x,y,160,140);
    } 
    }
  //gravidade
    fy= fy +gravity+0.1;
    y= fy+y;
    
  if(y>=piso){
    y=piso;
    fy=0;
    }  
//Colisão das cédulas
    //1
  if(dist(x,y,x5,y5) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x5=400;
    y5=400;
    carteira += 1.00;
    som.play();
    }
  //50
  if(dist(x,y,x1,y1) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x1=400;
    y1=400;
    carteira +=50;
    som.play();
    }
  //0.05
  if(dist(x,y,x25,y25) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x25= 400;
    y25= 400;
    carteira +=0.05;
    som.play();
    }
  //10
  if(dist(x,y,x12,y12) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x12= 400;
    y12= 400;
    carteira += 10;
    som.play();
    }
  //0.50
  if(dist(x,y,x50,y50) < 60){
    x50= 400;
    y50= 400;
    carteira += 0.50;
    som.play();
    }
  //20
  if(dist(x,y,x13,y13) < 60){
    //Vai mandar as moedinhas pra bem longe do que o usuario pode ver
    x13= 400;
    y13= 400;
    carteira += 20;
    som.play();
    }
    
//FIM DA COLISÃO
    
    //Verifica Carteira e posição
    //Ele so finaliza o jogo quando o bonequinho atinge os 3 reais e fica no piso (Pra ele n ganhar a fase ainda no ar)
  if(carteira==71.55 && y==piso){
    //Aqui eu to reinicializando as variaveis para que volte tudo ao seus cantos. O personagem, as moedinhas e a carteira
    x5=50;
    y5=90;
    x1=180;
    y1=110;
    x12=420;
    y12=110;
    x13=680;
    y13=110; 
    x25=310;
    y25=90;
    x50=550;
    y50=90;
    carteira=0;
    x=70;
    y=240;
    tela=12;
    }else if (carteira>71.55 && y==piso){
    //Aqui eu to reinicializando as variaveis para que volte tudo ao seus cantos. O personagem, as moedinhas e a carteira
    x=70;
    y=240;
    x5=50;
    y5=90;
    x1=180; 
    y1=110; 
    x12=420;
    y12=110;
    x13=680;
    y13=110; 
    x25=310;
    y25=90;
    x50=550;
    y50=90;
    carteira = 0;
    tela=11;
    }
  if(x<-50){
    x=-50;
    }
  if(x>670){
    x=670;
   }
  }
  
//Tela Instruções
  if(tela == 9){
    image(img7,0,-20);
    image(img15,710,0,70,70);
    //titulo
    fill(300);
    textSize(40);
    text("Instruções", 310,80);
    textSize(22);
    text("2º Ano do Fundamental", 80, 130);
    let s='(EF02MA20) Estabelecer a equivalência de valores entre moedas e cédulas do sistema monetário brasileiro para resolver situações cotidianas.'
    fill(300);
    text(s,80,155,650,200);
    let y='O caça ao tesouro é um jogo educacional que visa trabalhar de forma lúdica o reconhecimento de cédulas do sistema monetário brasileiro, compor quantias e fazer equivalências entre quantias compostas com cédulas e moedas diferentes. Para jogar a criança deve utilizar os conhecimentos de  localização e lateralidade para poder se movimenta através das setas do teclado'
    fill(300);
    text(y,80,225,660,200);
    
//botão bau(voltar para menu)
  if(mouseX>=712 && mouseX<=775 && mouseY>=15 && mouseY<=70){
    stroke(200);
    fill('#B22222');
    image(img15,710,-0,70,70);
  //nome
    fill(300);
    textSize(10);
    noStroke();
    text("Menu",735,70);
    if(mouseIsPressed){
      som.play();
      tela=0;
    }
  }
}
//Tela créditos
  if(tela == 10){
    image(img7,0,-20);
    image(img6,320,210,150,150);
    image(img8,100,100,150,150);
    image(img15,710,0,70,70);
    image(img26,550,100,150,150);
  //titulo
    fill(300);
    textSize(50);
    text("Créditos", 330,70);
    textSize(23);
    text("Educador: Thainara Cruz", 280, 385);
    text("Programador: Ilayzi Farias",50,275);
    text("Revisor Geral: Raffael Morais",495,275);
    
//botão bau(voltar para menu)
  if(mouseX>=712 && mouseX<=775 && mouseY>=15 && mouseY<=70){
    stroke(200);
    fill('#B22222');
    image(img15,710,-0,70,70);
    //nome
    fill(300);
    textSize(10);
    noStroke();
    text("Menu",735,70);
    if(mouseIsPressed){
      som.play();
      tela=0;
    }
  }
}
//Tela tente novamente
  if(tela == 11){
    image(img7,0,-20);
    image(img15,710,0,70,70);
    image(img16,280,150,300,230);
    fill(300);
    textSize(30);
    textFont(myFont);
    let s='Aperte Enter para jogar mais uma vez e                   recuperar o tesouro perdido!'
    text(s,160,60,650,200);
    
  //botão bau(voltar para menu)
  if(mouseX>=712 && mouseX<=775 && mouseY>=15 && mouseY<=70){
    stroke(200);
    fill('#B22222');
    image(img15,710,-0,70,70);
    //nome
    fill(300);
    textSize(10);
    noStroke();
    text("Menu",735,70);
    if(mouseIsPressed){
      som.play();
      tela=0;
    }
  }
  if(keyIsDown(13)){
    tela=telaint;      
}
}
//Tela Parabéns
  if(tela == 12){
    image(img7,0,-20);
    image(img15,710,0,70,70);
    image(img18,230,140,360,250);
    fill(300);
    textSize(30);
    textFont(myFont);
    let s='Parabéns, você encontrou o tesouro perdido!!'
    fill(300);
    text(s,140,70,650,200);
    text('Aperte Enter para continuar!!',200,130);
    
//botão bau (voltar para menu)
  if(mouseX>=712 && mouseX<=775 && mouseY>=15 && mouseY<=70){
    stroke(200);
    fill('#B22222');
    image(img15,710,-0,70,70);
  //texto
    fill(300); 
    textSize(10);
    noStroke();
    text("Menu",735,70);
    if(mouseIsPressed){
      som.play();
      tela=0;
    }
  }
    if(keyIsDown(13)){
      if(telaint==8){
        tela=13;
      }
      else{
      tela=telaint+1;
    }
}
}
  //tela final
  if(tela == 13){
    image(img23,-50,0,1000,400);
    image(img15,710,0,70,70);
    fill('#191970');
    textSize(30);
    let s= 'Parabéns, você completou todas as fases                   do jogo!!';
    text(s,150,40,500,200);
    textFont(myFont);
    //botão bau(voltar para menu)
  if(mouseX>=712 && mouseX<=775 && mouseY>=15 && mouseY<=70){
    stroke(200);
    fill('#B22222');
    image(img15,710,-0,70,70);
    //nome
    fill(300);
    textSize(10);
    noStroke();
    text("Menu",735,70);
    if(mouseIsPressed){
      som.play();
      tela=0;
      }
    }
  }
}
