noseX = 0;
noseY= 0;

function preload(){
mustache_nose_image = loadImage('https://i.postimg.cc/X7GPxzfr/png-clipart-moustache-moustache-removebg-preview.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, ModelLoaded)
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache_nose_image, noseX-15, noseY-18, 35, 35);
}

function take_snapshot(){
    save("mypic.png");
}

function ModelLoaded() {
    console.log("Initialised")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X: " + noseX)
        console.log("Nose Y: " + noseY)
    }
}