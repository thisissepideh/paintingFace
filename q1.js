const centerFace = {
  x: 400,
  y: 250,
};

const leftEye = {
  x: 310,
  y: 220,
};

const rightEye = {
  x: 490,
  y: 220,
};

const startNose = {
  x: 400,
  y: 220,
};

const endNose = {
  x: 400,
  y: 280,
};

const startMouth = {
  x: 340,
  y: 350,
};

const endMouth = {
  x: 460,
  y: 350,
};

drawCircle(centerFace, 200);
drawCircle(leftEye, 5);
drawCircle(rightEye, 5);
drawLine(startNose, endNose);
drawLine(startMouth, endMouth);
