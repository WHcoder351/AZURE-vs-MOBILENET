Webcam.set({
    width: 310,
    height: 300,
    image_format: 'png',
    png_quality: "100",

    constraints: {
        facingMode: "environment"
    }
});

camera = document.getElementById("camera");
Webcam.attach(camera);
function takeSnap(){
    Webcam.snap(function(data_uri){
        document.getElementById("camera2").innerHTML = '<img src =" '+data_uri+' " id = "Cap" />';
    })
}
console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier('MobileNet', mL);
function mL(){
    console.log("Model Loaded!");
}

function Check(){
    img = document.getElementById("Cap");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("output").innerHTML=results[0].label;
    }
}