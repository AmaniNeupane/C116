noseX=0;
noseY=0;
function preload() {
    dog_filter = loadImage('https://i.postimg.cc/vBHH2f0b/dog-filter.png');

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(dog_filter, noseX, noseY, 110, 110);

}

function takeSnapshot() {
    save('myFilterImage.png');
}

function gotPoses(results) {
    if (results.length > 0)
        {
            console.log(results);
            noseX = results[0].pose.nose.x - 55;
            noseY = results[0].pose.nose.y - 84;
            console.log("nose x =" + noseX);
            console.log("nose y =" + noseY);
        }
}