/*definições básicas do canvas*/
const canvas = document.getElementById('canvasUai');
const ctx = canvas.getContext('2d');
canvas.height= window.innerHeight;
canvas.width = window.innerWidth;

let particleArray;

//Obter posição do mouse:
let mouse = {
  x: null,
  y: null,
  radius: ((canvas.height/100)*(canvas.width/100)) // modifica o tamanho da área ao redor do mouse com base no tamanho da tela
}
window.addEventListener('mousemove',
  function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
  });

// Cria particulas

class Particle {
  constructor(x, y, directionX, directionY, size, color){
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }
  //desenha as particulas no canvas
  draw(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI*2, false);
    ctx.fillStyle = '#014f86';
    ctx.fill();
  }
  //Confere posição das particulas e mouse, desenha as particulas e as move
  update(){
    //Confere se a particula ainda está no canvas
    if(this.x > canvas.width || this.x < 0){
      this.directionX= -this.directionX
    }
    if (this.y > canvas.height || this.y < 0) {
      this.directionY = -this.directionY
    }
    //Checa colisão
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx*dx + dy*dy);
    if (distance < mouse.radius + this.size) {
       //Se a distancia entre a area ao redor do mouse+o tamanho da particula
      // for menor que a distancia entre o mouse e a particula, temos uma colisão
      if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {

        this.x +=5;
        this.directionX = -(this.directionX);

      }
      if (mouse.x>this.x && this.x > this.size * 10){
          this.x -=5;
          this.directionX = -(this.directionX);
      }
      if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
          this.y +=5;
          this.directionY = -(this.directionY);
      }
      if (mouse.y>this.y && this.y > this.size * 10){
          this.y -=5;
          this.directionY = -(this.directionY);
      }
        }
        //move particula
      this.x += this.directionX;
      this.y += this.directionY;
      //desenha particula
      this.draw();
        //^identificou a posição do mouse e a direção das particulas
  }
}
   //AGORA SIM CRIA AS PARTICULAS MESMO
function init(){
  particleArray = [];
  let numberOfParticles = (canvas.height * canvas.width)/9000;
  for(let i = 0; i< numberOfParticles*1.5; i++){
    let size = (Math.random()*5)+1;
    let x = (Math.random()*((innerWidth - size * 2) - (size * 2)) + size * 2);
    let y = (Math.random()*((innerHeight - size * 2) - (size * 2)) + size * 2);
    let directionX = (Math.random()*1);
    let directionY =(Math.random()*1);
    let color = '#014f86';

    particleArray.push(new Particle(x, y, directionX, directionY, size, color));
  }
}
//Calcula a distancia entre as particulas para desenhar uma linha entre elas
 function connect() {
   let opacityValue = 1;
   for (let a = 0; a < particleArray.length; a++){
     for(let b = a; b < particleArray.length; b++){
       let distance = (( particleArray[a].x - particleArray[b].x) * (particleArray[a].x - particleArray[b].x))
       + ((particleArray[a].y - particleArray[b].y) * (particleArray[a].y - particleArray[b].y));
       if (distance < (canvas.width/7)*(canvas.height/7))  {
         opacityValue= 1 - (distance/20000);
         ctx.strokeStyle = 'rgba(1,79,134,' + opacityValue + ')';
         ctx.lineWidth = 0.5;
         ctx.beginPath();
         ctx.moveTo(particleArray[a].x,particleArray[a].y);
         ctx.lineTo(particleArray[b].x,particleArray[b].y);
         ctx.stroke();
       }
     }
   }
 }
//ANIMA O LOOP
function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,innerWidth,innerHeight);

  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
  }
  connect();
}
//Resolvendo bug de redimensionamento

  window.addEventListener('resize',
    function(){
      canvas.height= window.innerHeight;
      canvas.width = window.innerWidth;
      radius: ((canvas.height/100)*(canvas.width/100));
      init();
    }
  );

  //mouse fora da tela



init();
animate();
