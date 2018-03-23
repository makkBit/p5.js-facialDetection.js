console.log('// in sketch.js');

var face;

function setup(){
    capture = initVideoCapture(0,0,400,300);
    createCanvas(400, 300);
    facialDetection = initFacialDetection(false, 1);
}

function draw(){
    fd = runFacialDetection(capture, facialDetection);
    clr = color(175,100,220,100);
    fill(clr);

    // detectedFaceRect(face);

    // detectedFaceEllipse(face);

    // detectedLeftEyeEllipse(face);

    // detectedRightEyeEllipse(face);

    detectedMouthEllipse(face);
}
