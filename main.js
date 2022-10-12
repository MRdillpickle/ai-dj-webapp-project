sound1 = "";
sound2 = "";
lwx = 0;
lwy = 0;
rwx = 0;
rwy = 0;
function preload() {
    sound1 = loadSound("music.mp3");
    sound2 = loadSound("music2.mp3");
}
function setup() {
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotposes);
}
function draw() {
    image(video,0,0,600,500);
}
function modelLoaded() {console.error("Moddel Loaded");}
function gotposes(results) {
    if (results.length > 0) {
        lwx = results[0].pose.leftWrist.x;
        lwy = results[0].pose.leftWrist.y;
        rwx = results[0].pose.rightWrist.x;
        rwy = results[0].pose.rightWrist.y;
        console.log(results);
        console.log("LEFT X:",lwx,"Y:",lwy);
        console.log("RIGHT X:",rwx,"Y:",rwy);
    }
}