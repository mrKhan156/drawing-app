 const canvas = document.querySelector('#canvas');
 const clear = document.querySelector('#clear');
 const color = document.querySelector('#color');
 const increaseBtn = document.querySelector('#increase');
 const decreaseBtn = document.querySelector('#decrease');
 const sizeEl = document.querySelector('#size');


 const ctx = canvas.getContext('2d');
 
 let isPressed = false;
 let size = 10;
 let x ;
 let y ;
 canvas.addEventListener('mousedown',(e)=>{
    isPressed = true 
    x = e.offsetX;
    y = e.offsetY;

    
 })
 canvas.addEventListener('mousemove',(e)=>{
  if( isPressed  ){
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2,y2)
    drawLine(x,y , x2,y2)
    x = x2;
    y = y2;

  }
});
 
  function updateSizeOnScreen(){
   sizeEl.innerText = size
  } 

  increaseBtn.addEventListener("click", (e)=>{
   size +=1;
   if(size > 20){
      size = 20;
   }
   updateSizeOnScreen();
  });

  decreaseBtn.addEventListener("click", (e)=>{

   size -= 1
   if(size < 5){
      size = 5;
   }
   updateSizeOnScreen();
  });
 


 canvas.addEventListener('mouseup',(e)=>{
    isPressed = false ;
    x = undefined;
    y = undefined;

    
 })

clear.addEventListener('click', (e)=>{
   console.log("clicked");
   if(e.target.id === 'clear'){
      ctx.clearRect(0, 0, canvas.width, canvas.height );
   }
})



color.addEventListener('change',(e)=>{
   if(e.target.id === 'color'){
      ctx.strokeStyle = e.target.value;
      ctx.fillStyle = e.target.value;
   }
})




 function drawCircle(x,y){
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill()
 }
 function drawLine(x1,y1,x2,y2){
    ctx.beginPath()
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2)
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2 ;
    ctx.stroke()

 }
