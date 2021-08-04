console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier('MobileNet', mL);
function mL(){
    console.log("Model Loaded!");
}

function ID(){
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