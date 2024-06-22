document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('drawingCanvas');
    const context = canvas.getContext('2d');
    const brushColorInput = document.getElementById('brushColor');
    const brushSizeSelect = document.getElementById('brushSize');
    const clearCanvasButton = document.getElementById('clearCanvas');
    
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    // Set initial brush color and size
    let brushColor = brushColorInput.value;
    let brushSize = brushSizeSelect.value;

    // Event listeners
    brushColorInput.addEventListener('input', function() {
        brushColor = brushColorInput.value;
    });

    brushSizeSelect.addEventListener('change', function() {
        brushSize = brushSizeSelect.value;
    });

    clearCanvasButton.addEventListener('click', function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    });

    // Drawing functionality
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', endDrawing);
    canvas.addEventListener('mouseout', endDrawing);

    function startDrawing(e) {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }

    function draw(e) {
        if (!isDrawing) return;

        context.strokeStyle = brushColor;
        context.lineJoin = 'round';
        context.lineCap = 'round';
        context.lineWidth = brushSize;

        context.beginPath();
        context.moveTo(lastX, lastY);
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();

        [lastX, lastY] = [e.offsetX, e.offsetY];
    }

    function endDrawing() {
        isDrawing = false;
    }
});
