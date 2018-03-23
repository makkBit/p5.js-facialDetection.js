// messy buggy code, just for sample for now.

p5.prototype.initVideoCapture = function(x,y,w,h){
    capture = createCapture(VIDEO);
    capture.size(w, h);
    capture.position(x,y);
    return capture;
}


p5.prototype.initFacialDetection = function (fastMode, faces){

    if (!window["FaceDetector"]){
        alert(`
        please paste the following into chrome address bar, and hit enable:
        chrome://flags/#enable-experimental-web-platform-features
        `);
        return;
    }

    faceDetector = new window["FaceDetector"]({
        fastMode: fastMode,
        maxDetectedFaces: faces
    });
   
    return faceDetector;
}


p5.prototype.runFacialDetection = function(capture, facialdetection){
    canvas = document.querySelector('canvas');
    image(capture, 0, 0, 400, 300);
    facialdetection.detect(canvas)
        .then( data => {
            face = data;
        });
}


p5.prototype.detectedFaceRect = function(face){
    if( face && face.length > 0){
        f = face[0].boundingBox;
        rect(f.x - 375, f.y - 245, f.width - 140, f.height - 140);
    }
}


p5.prototype.detectedFaceEllipse = function(face){
    if (face && face.length > 0) {
        f = face[0].boundingBox;
        ellipse(f.x - 310, f.y - 180, f.width - 140, f.height - 140);
    }
}


p5.prototype.detectedLeftEyeEllipse = function(face){
    if (face && face.length > 0) {
        f = face[0].landmarks[0].location;
        ellipse(f.x-420, f.y-290, 25, 25);
    }
}


p5.prototype.detectedRightEyeEllipse = function (face) {
    if (face && face.length > 0) {
        f = face[0].landmarks[1].location;
        ellipse(f.x - 500, f.y - 290, 25, 25);
    }
}


p5.prototype.detectedMouthEllipse = function (face) {
    // console.log(face);
    if (face && face.length > 0) {
        f = face[0].landmarks[2].location;
        ellipse(f.x - 460, f.y - 360, 40, 40);
    }
}
