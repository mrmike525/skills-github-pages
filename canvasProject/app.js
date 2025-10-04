
const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');
    const canvasColor = document.getElementById('canvasColor');
canvas.style.backgroundColor = canvasColor.value

    const grid = new Image();
    grid.src = "grid.png";

    let isDrawing = false;
    let x = 0;
    let y = 0;

    

      canvas.addEventListener('mousedown', (e) => {
            x = e.offsetX;
            y = e.offsetY;
            isDrawing = true;
        });

           canvas.addEventListener('mousemove', (e) => {
            if (isDrawing === true) {
                drawLine(context, x, y, e.offsetX, e.offsetY);
                x = e.offsetX;
                y = e.offsetY;
            }
        });

         canvas.addEventListener('mouseup', (e) => {
            if (isDrawing === true) {
                drawLine(context, x, y, e.offsetX, e.offsetY); // Draw final segment
                isDrawing = false;
            }
        });

         function drawLine(context, x1, y1, x2, y2) {
        // context.fillStyle = canvasColor.value;
        // context.fill();
        context.beginPath();
        context.strokeStyle = lineColor.value; // Set desired line color
        context.lineWidth = lineWidth.value;        // Set desired line width
        
        context.lineJoin = 'round'; 
        context.lineCap = 'round'; 

        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
    }

const reset = document.getElementById('reset');
reset.addEventListener('click', (e) => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    gridPattern.checked = false
    
})



canvasColor.addEventListener('input', (e) => {
canvas.style.backgroundColor = canvasColor.value    
});

const lineColor = document.getElementById('lineColor');
const lineWidth = document.getElementById('lineWidth');
const gridPattern = document.getElementById('gridPattern')

gridPattern.addEventListener('click', (e) => {
    if (gridPattern.checked === true) {
        context.drawImage(grid, 0, 0);

    } else {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
});

const saveImage = document.getElementById('saveImage')

saveImage.addEventListener('click', (e) => {
    saveCanvas();
})

function saveCanvas() {
    // Create a temporary canvas the same size
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempContext = tempCanvas.getContext('2d');

    // Fill the temp canvas with the chosen background color
    tempContext.fillStyle = canvasColor.value;
    tempContext.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

    // Draw the original canvas (with strokes) on top of the background
    tempContext.drawImage(canvas, 0, 0);

    // Save from the temp canvas
    const dataURL = tempCanvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.download = 'my-drawing.png';
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}