window.onload = () => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const height = 400;
  const width = 400;
  const gap = 40;
  canvas.width = width;
  canvas.height = height;
  const a = 5,
    b = 1;
  let x, y;
  const ans = 6;

  const drawGrid = () => {
    const cols = width / gap - 1;
    //const rows = height / gap - 1;
    for (let c = 1; c <= cols; c++) {
      context.beginPath();
      context.moveTo(gap * c, 0);
      context.lineTo(gap * c, 400);
      context.stroke();

      context.beginPath();
      context.moveTo(0, gap * c);
      context.lineTo(400, gap * c);
      context.stroke();
    }
  };
  const genCoordinates = () => {
    return Math.floor(Math.random() * 9) * gap;
  };
  const placeSprites = (sprite) => {
    if (sprite == "@") {
      x = genCoordinates() + 15;
      y = genCoordinates() - 15;
      console.log(x, y);
      context.beginPath();
      context.font = "18px Arial";
      context.fillStyle = "white";
      context.fillText(sprite, x, y);
    } else {
      context.beginPath();
      context.font = "18px Arial";
      context.fillStyle = "white";
      context.fillText(sprite, genCoordinates() + 15, genCoordinates() - 15);
    }
  };

  document.onkeydown = (e) => {
    switch (e.key) {
      case "ArrowLeft": //left
        {
          context.clearRect(
            ((x - 15) / gap) * gap,
            ((y - 25) / gap) * gap,
            gap,
            gap
          );
          x -= gap;
          context.beginPath();
          context.font = "18px Arial";
          context.fillStyle = "white";
          context.fillText("@", x, y);
        }
        break;
      case "ArrowUp": //up
        {
          context.clearRect(x - 15, y - 25, gap, gap);
          y -= gap;
          context.beginPath();
          context.font = "18px Arial";
          context.fillStyle = "white";
          context.fillText("@", x, y);
        }
        break;
      case "ArrowRight": //right
        {
          context.clearRect(x - 15, y - 25, gap, gap);
          x += gap;
          context.beginPath();
          context.font = "18px Arial";
          context.fillStyle = "white";
          context.fillText("@", x, y);
        }
        break;
      case "ArrowDown": //down
        {
          context.clearRect(x - 15, y - 25, gap, gap);
          y += gap;
          context.beginPath();
          context.font = "18px Arial";
          context.fillStyle = "white";
          context.fillText("@", x, y);
        }
        break;
    }
  };

  drawGrid();
  placeSprites(7);
  placeSprites(3);
  placeSprites(ans);
  placeSprites(2);
  placeSprites("@");
};
