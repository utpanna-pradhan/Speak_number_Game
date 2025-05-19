const msgEle = document.getElementById("msg");
//get dom msg container

const randomNum = getRandomNumber();
console.log("number :" ,randomNum);

window.SpeechRecognitionResult = window.SpeechRecognitionResult || window.webkitSpeechRecognition;


let recognition = new window.SpeechRecognitionResult();
recognition.start();

function onSpeak(e){
    const msg = e.results[0][0].transript;
    console.log(msg);

}
function getRandomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}

recognition.addEventListner('result',onSpeak);