document.addEventListener("DOMContentLoaded", function () {
  const imageCanvas = document.getElementById("imageCanvas");
  const scratchCanvas = document.getElementById("scratchCanvas");
  initializeCanvas(imageCanvas, scratchCanvas);
});

function initializeCanvas(imageCanvas, scratchCanvas) {
  const imageCtx = imageCanvas.getContext("2d");
  const scratchCtx = scratchCanvas.getContext("2d");

  let isDrawing = false;

  function startDrawing(event) {
    console.log("startDrawing", event.type);
    event.preventDefault();
    isDrawing = true;
    scratchCtx.globalCompositeOperation = "destination-out";
    scratchCtx.beginPath();

    let x, y;
    if (event.type === "touchstart") {
      x = event.touches[0].clientX - scratchCanvas.getBoundingClientRect().left;
      y = event.touches[0].clientY - scratchCanvas.getBoundingClientRect().top;
    } else {
      x = event.offsetX;
      y = event.offsetY;
    }
    scratchCtx.moveTo(x, y);
  }

  function stopDrawing(event) {
    console.log("stopDrawing", event.type); // Add this line
    event.preventDefault(); // Prevent default behavior for both mouse and touch events
    isDrawing = false;
  }

  function draw(event) {
    console.log("draw", event.type);
    if (!isDrawing) return;

    let x, y;
    if (event.type === "touchmove" || event.type === "touchstart") {
      x = event.touches[0].clientX - scratchCanvas.getBoundingClientRect().left;
      y = event.touches[0].clientY - scratchCanvas.getBoundingClientRect().top;
    } else {
      x = event.offsetX;
      y = event.offsetY;
    }

    scratchCtx.lineWidth = 60;
    scratchCtx.lineCap = "round";

    scratchCtx.lineTo(x, y);
    scratchCtx.stroke();
  }

  const image = new Image();
  image.src = "images/texto_promo.png";

  image.onload = function () {
    const imageWidth = imageCanvas.width * 0.8; // 80% of canvas width
    const imageHeight = (imageWidth / image.width) * image.height; // Keep aspect ratio
    const posX = (imageCanvas.width - imageWidth) / 2; // Center horizontally
    const posY = (imageCanvas.height - imageHeight) / 2; // Center vertically

    imageCtx.drawImage(image, posX, posY, imageWidth, imageHeight);

    scratchCtx.fillStyle = "#3f3e3e";
    scratchCtx.fillRect(0, 0, scratchCanvas.width, scratchCanvas.height);

    // scratchCtx.font = "24px Arial";
    // scratchCtx.fillStyle = "#ffffff";
    // scratchCtx.textAlign = "center";
    // scratchCtx.textBaseline = "middle";
    // scratchCtx.fillText("", scratchCanvas.width / 2, scratchCanvas.height / 2);
  };

  scratchCanvas.addEventListener("mousedown", startDrawing);
  scratchCanvas.addEventListener("mouseup", stopDrawing);
  scratchCanvas.addEventListener("mousemove", draw);
  scratchCanvas.addEventListener("touchstart", startDrawing, {
    passive: false,
  });
  scratchCanvas.addEventListener("touchend", stopDrawing, {
    passive: false,
  });
  scratchCanvas.addEventListener("touchmove", draw, { passive: false });
}
