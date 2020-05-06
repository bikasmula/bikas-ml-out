const BACKGROUND_COLOR = '#000000';
var currentX =0;
var currentY =0;
var previousX =0;
var previousY =0;
const LINE_COLOR ='#FFFFFF'
const LINE_WIDTH=10;
var isDrawing = false;
var canvas;
var context;
function prepareCanvas(){
    canvas = document.getElementById('AnswerCanvus');
    context = canvas.getContext('2d');
    context.fillStyle=BACKGROUND_COLOR;
    context.fillRect(0,0,canvas.clientWidth, canvas.clientHeight);
    context.strokeStyle=LINE_COLOR;
    context.lineWidth = LINE_WIDTH;
    context.lineJoin = 'round';

    document.addEventListener('mousedown',function (event){
        currentX = event.clientX - canvas.offsetLeft;
        currentY = event.clientY - canvas.offsetTop;
        isDrawing = true;
    }); 

    document.addEventListener('mouseup',function (event){
        isDrawing = false;
    }); 

    document.addEventListener('mouseleave',function (event){
        isDrawing = false;
    }); 

    document.addEventListener('mousemove',function (event){
        if(isDrawing){
            previousX = currentX;
            currentX = event.clientX - canvas.offsetLeft;
            previousY = currentY;        
            currentY = event.clientY - canvas.offsetTop;
            draw();
        }
    }); 

    // touch events
    canvas.addEventListener('touchstart',function (event){
        currentX = event.touches[0].clientX - canvas.offsetLeft;
        currentY = event.touches[0].clientY - canvas.offsetTop;
        isDrawing = true;
    }); 

    canvas.addEventListener('touchend',function (event){
        isDrawing = false;
    }); 
    canvas.addEventListener('touchcancel',function (event){
        isDrawing = false;
    }); 

    canvas.addEventListener('touchmove',function (event){
        if(isDrawing){
            previousX = currentX;
            currentX = event.touches[0].clientX - canvas.offsetLeft;
            previousY = currentY;        
            currentY = event.touches[0].clientY - canvas.offsetTop;
            draw();
        }
    }); 

}

function draw() {
    context.beginPath();
    context.moveTo(previousX, previousY);
    context.lineTo(currentX, currentY);
    context.closePath();
    context.stroke();
}

function clearCanvas(){
    currentX =0;
    currentY =0;
    previousX =0;
    previousY =0;
    context.fillRect(0,0,canvas.clientWidth, canvas.clientHeight);
    
}
