
    const canvas = document.getElementById('canvas');

    const clearButton = document.getElementById('clear-button');
    const colorButton = document.getElementById('color-button');
    let color = 'black';
    let isMouseDown = false;
    let startX;
    let startY;
    let endX;
    let endY;

    const context = canvas.getContext('2d');

    function drawLine(startX, startY, endX, endY) {
      context.beginPath();
      context.strokeStyle = color;
      context.lineWidth = 3;
      context.moveTo(startX, startY);
      context.lineTo(endX, endY);
      context.stroke();
    }

    function changeColor() {
      color = prompt('Enter a new color:');
    }

    canvas.addEventListener('mousedown', event => {
      isMouseDown = true;
      startX = event.offsetX;
      startY = event.offsetY;
    });

    canvas.addEventListener('mousemove', event => {
      if (!isMouseDown) {
        return;
      }
      endX = event.offsetX;
      endY = event.offsetY;
      drawLine(startX, startY, endX, endY);
      startX = endX;
      startY = endY;
    });

    canvas.addEventListener('mouseup', event => {
      isMouseDown = false;
    });

    clearButton.addEventListener('click', event => {
      context.clearRect(0, 0, canvas.width, canvas.height);
    });

    colorButton.addEventListener('click', changeColor);
