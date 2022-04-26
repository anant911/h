status="";

function preload()
{

}

function setup()
{
canvas=createCanvas(480,380);
canvas.center();
video=createCapture(VIDEO);
video.hide();
video.size(480,380);

}

function draw()
{
image(video, 0,0,480,380);
}

function start()
{
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("stats").innerHTML="status: detecting objects";
objname=document.getElementById("input").value;
}

function modelLoaded()
{
    console.log("model loaded");
    status=true;

}

