function FaceFactory(centerx, centery, radius) {
  return {
    center: { x: centerx, y: centery },
    radius: radius,
    draw() {
      drawCircle(this.center, this.radius);
    },
  };
}

function eyeFactory(centerx, centery, radius) {
  return {
    center: { x: centerx, y: centery },
    radius: radius,
    draw() {
      drawCircle(this.center, this.radius);
    },
  };
}

function noseFactory(startx, starty, endx, endy) {
  return {
    start: { x: startx, y: starty },
    end: { x: endx, y: endy },
    draw() {
      drawLine(this.start, this.end);
    },
  };
}

function mouthFactory(startx, starty, endx, endy) {
  return {
    start: { x: startx, y: starty },
    end: { x: endx, y: endy },
    draw() {
      drawLine(this.start, this.end);
    },
  };
}

FaceFactory(400, 250, 200).draw();

eyeFactory(310, 220, 5).draw();

eyeFactory(490, 220, 5).draw();

noseFactory(400, 220, 400, 280).draw();

mouthFactory(340, 350, 460, 350).draw();
