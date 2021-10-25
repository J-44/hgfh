leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(650, 650);
    video.position(5, 150);

    canvas = createCanvas(550, 500);
    canvas.position(680, 200);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}
function modelLoaded(){
    console.log("Model Loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;  
        rightWristX = results[0].pose.rightWrist.x;
        difference= floor(leftWristX - rightWristX);
        console.log("leftWristX" + leftWristX + "rightWristX" + rightWristX + "difference" + difference);    
    }
}
function draw(){
    background("#FFD700");
    document.getElementById("size").innerHTML = "Width And Height of a Square will be = " + difference + "px";
    textSize(difference);
    text('JISHNU',10,200);
}









