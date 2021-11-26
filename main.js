song = "";

function preload()
{
    song = loadSound("music.mp3");
}

scoreRightWrist = 0;
scoreLeftWrist= 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist - " , scoreRightWrist + "scoreLeftWrist - " + scoreLeftWrist);

        rightWrist = results[0].pose.rightWrist.x;
        rightWrist = results[0].pose.rightWrist.y;
        console.log("RightWrist - " , RightWrist + "rightWristY -" + rightWristY);

        leftWrist = results[0].pose.leftWrist.x;
        leftWrist = results[0].pose.leftWrist.y;
        console.log("lefttWrist - " , leftWrist + "leftWristY -" + leftWristY);
    }
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() 
{
    song.play();
}