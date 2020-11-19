window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

recognition.start();

//generate user speak
function onSpeak(e) {
	const msg = e.results[0][0].transcript;
	writeMessage(msg);
	console.log(msg);
}

function writeMessage(msg){
	document.getElementById('msg').innerHTML = msg;
}

//speak result
recognition.addEventListener('result', onSpeak);

//end sr service
recognition.addEventListener('end', ()=> recognition.start());

document.body.addEventListener('click', e=>{
	if (e.target.id == 'play-again') {
		window.location.reload();
	}
});