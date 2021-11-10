Webcam.attach('camera#');
camera = document.getElementById('camera');
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality: 90
});

function takesnapshot()
{
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML <img id ="selfie_image" src="'+data_uri+'"/>
    });
}

classifier = m15.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);
function modelLoaded(){
    console.log('Model Lodes!');
}

function check(){
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, result){
if (error) {  
} else {
document.getElementById("result_object_name").innerHTML = results[0].label;
document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
}
}