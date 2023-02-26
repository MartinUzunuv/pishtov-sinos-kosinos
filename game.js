//nachalna tochka
x = window.innerWidth / 2;
y = window.innerHeight / 2;

sizeInc = 50;

function draw() {
  arrStart = [];
  arrEnd = [];
  if (isKeyPressed[87]) {
    sizeInc -= 0.1;
    //console.log(sizeInc);
  }
  if (isKeyPressed[83]) {
    sizeInc += 0.1;
    //console.log(sizeInc);
  }
  for (let a = 0; a < Math.PI * 7; a += Math.PI / 50) {
    //a e ugula v radiani(Math.PI = 50% krug)

    //r
    r = a * 15;
    //risuvame tochka na 50 pixela ot nachalnata tochka v posoka a

    x2 = x + Math.cos(a) * r;
    y2 = y + Math.sin(a) * r;

    tempStart = [];
    for (let a2 = 0; a2 < Math.PI * 8; a2 += Math.PI / 100) {
      r2 = (a2 * r) / 100;
      size = r2 / sizeInc;
      if (size > 1) {
        //context.fillRect(x2 + Math.cos(a2) * r2, y2 + Math.sin(a2) * r2, size, size);
        tempStart.push({
          x: x2 + Math.cos(a2) * r2,
          y: y2 + Math.sin(a2) * r2,
        });
      }
    }
    if (tempStart.length > 0) {
      arrStart.push(tempStart[0]);
    }
    if (tempStart.length > 0) {
      arrEnd.push(tempStart[tempStart.length - 1]);
    }
  }
  // for(let n = 0; n < arrStart.length-1; n){
  //   //drawLine(arrStart[n].x,arrStart[n].y,arrStart[n+1].x,arrStart[n+1].y)
  //   console.log(arrStart[n])
  // }
  //console.log(arrStart)
  for (let nn = 0; nn < arrStart.length - 1; nn++) {
    context.lineWidth = 1;
    drawLine(
      arrStart[nn].x,
      arrStart[nn].y,
      arrStart[nn + 1].x,
      arrStart[nn + 1].y
    );
    drawLine(arrEnd[nn].x, arrEnd[nn].y, arrEnd[nn + 1].x, arrEnd[nn + 1].y);
    drawLine(arrStart[nn].x, arrStart[nn].y, arrEnd[nn].x, arrEnd[nn].y);
  }
  if (arrStart.length > 0) {
    drawLine(
      arrStart[arrStart.length - 1].x,
      arrStart[arrStart.length - 1].y,
      arrEnd[arrStart.length - 1].x,
      arrEnd[arrStart.length - 1].y
    );
  }
}

function update() {}
