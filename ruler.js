const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

context.strokeStyle = "black";
context.stroke();

function drawRulerXAxis(canvasHeight) {
  for (let i = 0; i < canvasHeight; i++) {
    if (i%10===0){
    context.moveTo(0,i+10);
    context.lineTo(10,i+10);
    context.stroke ();
    }
  }
}

function drawRulerYAxis(canvasWeight) {
  for (let i = 0; i < canvasWeight; i++) {
    if (i%10===0){
    context.moveTo(i+10, 10);
    context.lineTo(i+10, 0);
    context.stroke ();
    }
  }
}

drawRulerXAxis(canvas.height);
drawRulerYAxis(canvas.width);