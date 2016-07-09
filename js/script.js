window.onload = initiate;

//put all js in this function!!!

function initiate(){
//Home
	//hoverVanTransform
	var hoverVan = document.getElementById('about');
	hoverVan.addEventListener('mouseover', handleHover);
	hoverVan.addEventListener('mouseleave', releaseHover);

	var hoverTwo = document.getElementById('speech');
	hoverTwo.addEventListener('mouseover', handleHover);
	hoverTwo.addEventListener('mouseleave', releaseHover);

	var hoverThree = document.getElementById('comp');
	hoverThree.addEventListener('mouseover', handleHover);
	hoverThree.addEventListener('mouseleave', releaseHover);

	var hoverFour = document.getElementById('home');
	hoverFour.addEventListener('mouseover', handleHover);
	hoverFour.addEventListener('mouseleave', releaseHover);

	function handleHover(evt){
		var parent = evt.target.parentElement;
		parent.className = 'hoverStyle';
	}

	function releaseHover(evt){
		var parent = evt.target.parentElement;
		parent.className = 'button-1';
	}

//About

//Speech

//Composition


}


function recordVideo() {
	var player = videojs("myVideo",
	{
	    controls: true,
	    width: 450,
	    height: 300,
	    plugins: {
	        record: {
	            audio: true,
	            video: true,
	            maxLength: 216000,
	            debug: true
	        }
	    }
	});
	player.on('deviceReady', function(){
		console.log("Ready to go!")
	});
	player.on('deviceError', function() {
	    console.log('Device error:', player.deviceErrorCode);
	});

	player.on('error', function(error) {
	    console.log('Error:', error);
	});

	player.on('startRecord', function() {
	    console.log('Started recording!');
	});

	player.on('finishRecord', function() {
	    console.log(player.recordedData);
	});
	
}

function audioCheck() {
	/*var recognizer = new Worker("js/recognizer.js");
	var id = 0;
	recognizer.postMessage({command: 'initialize', callbackId: id});*/
	var recognizer = new Module.Recognizer();
	var words = new Module.VectorWords();
	words.push_back(["HELLO", "HH AH L OW"]);
	words.push_back(["WORLD", "W ER L D"]);
	if (recognizer.addWords(words) != Module.ReturnType.SUCCESS) {
		alert("Error while adding words");
	}
	//words.delete();
	var pronunciation = recognizer.lookupWord("HELLO");
	var pronunciation1 = recognizer.lookupWord("WORLD");

	console.log(pronunciation);
	console.log(pronunciation1);
	words.delete();

	var ids = new Module.Integers();
	if (recognizer.addKeyword(ids, "HELLO WORLD") != Module.ReturnType.SUCCESS) {
	     alert("Error while adding key phrase"); // Meaning that the key phrase has issues
	}
	var id = ids.get(0); // This is the id assigned to the search
	ids.delete();

	var array = []; // array that contains an audio buffer
	var buffer = new Module.AudioBuffer();
	for (var i = 0 ; i < array.length ; i++) {
		buffer.push_back(array[i]); // Feed the array with audio data
	}
	var output = recognizer.start(); // Starts recognition on current language model
	output = recognizer.process(buffer); // Processes the buffer
	var hyp = recognizer.getHyp(); // Gets the current recognized string (hypothesis)
	/* ... */
	for (var i = 0 ; i < array.length ; i++) {
		buffer.set(i, array[i]); // Feed buffer with new data
	}
	output = recognizer.process(buffer);
	hyp = recognizer.getHyp();
	/* ... */
	output = recognizer.stop();
	// Gets the final recognized string:
	var final_hyp = recognizer.getHyp();
	console.log(final_hyp);
	buffer.delete();



	recognizer.delete();





}
