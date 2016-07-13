window.onload = initiate;

//put all js in this function!!!

function initiate() {
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

	var hoverFive = document.getElementById('BTT');
	hoverFive.addEventListener('mouseover', handleHover2);
	hoverFive.addEventListener('mouseleave', releaseHover2);

	var hoverSix = document.getElementById('sponsor');
	hoverSix.addEventListener('mouseover', handleHover2);
	hoverSix.addEventListener('mouseleave', releaseHover2);

	var hoverSeven = document.getElementById('otherLink');
	hoverSeven.addEventListener('mouseover', handleHover2);
	hoverSeven.addEventListener('mouseleave', releaseHover2);

	function handleHover(evt){
		var parent = evt.target.parentElement;
		parent.className = 'hoverStyle';
	}

	function releaseHover(evt){
		var parent = evt.target.parentElement;
		parent.className = 'button-1';
	}

	function handleHover2(evt){
		var parent = evt.target.parentElement;
		parent.className = 'hoverStyle2';
	}

	function releaseHover2(evt){
		var parent = evt.target.parentElement;
		parent.className = 'foot';
	}


//About

//Speech

//Composition
	//randomizer
	function randomizer(){
		var Tips = [
		"Multisyllabic words are useful in making writing more sophisticated.", "Consider using slant rhymes, which often are just as effective as real rhymes.", 
		"Similes differ from metaphors in that they use the words 'like' and 'as'.", 
		"Alliteration is a literary device that pertains to having the same first letter among many words in a sentence (i.e. Peter Piper picked a peck of pickled peppers).",
		"It is important to know how many syllables are in each line when writing a poem/song. Rhythm is one of the most important aspects of a piece."
		  ]
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

	audioCheck();

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
	    // Start listening.
	});

	player.on('finishRecord', function() {
	    var audio = player.recordedData;
	    console.log(audio);
	});


}

function audioCheck() {

	var startButton = document.getElementsByClassName('vjs-device-button vjs-control vjs-icon-device-perm');
	//startButton[0] is the button
	startButton[0].click();

	var sButton = document.getElementById('start');
	var stopButton = document.getElementById('stop');
	sButton.addEventListener('click', function() {
		start();
	});

	stopButton.addEventListener('click', function() {
		end();
	});

	function checkVoice() {
		// Let's define a command.
		var commands = {
			//'hello world': function() { alert('Good Job!'); }
			'Start the recording': start,
			'Stop the recording': end
		};

		// Add our commands to annyang
		annyang.addCommands(commands);
		console.log("Ready for voice recognition");

		annyang.start();
	}

	function start(){
		var words = {
			'Bob ran across the field': correct
		}
		annyang.addCommands(words);
		var button = document.getElementsByClassName('vjs-record-button vjs-control vjs-icon-record-start');
		button[0].click();
		console.log("Starting the recording")
	}

	function end() {
		var button = document.getElementsByClassName('vjs-record-button vjs-control vjs-icon-record-stop');
		button[0].click();
		console.log("STOP!")
		annyang.abort();
	}

	function correct() {
		console.log("correct, you pass");
		end();
	}

	checkVoice();




	// var recognizer = new Worker("js/recognizer.js");
	// var id = 0;
	// recognizer.postMessage({command: 'initialize', callbackId: id});
	// var recognizer = new Module.Recognizer();
	// var words = new Module.VectorWords();
	// words.push_back(["HELLO", "HH AH L OW"]);
	// words.push_back(["WORLD", "W ER L D"]);
	// if (recognizer.addWords(words) != Module.ReturnType.SUCCESS) {
	// 	alert("Error while adding words");
	// }
	// //words.delete();
	// var pronunciation = recognizer.lookupWord("HELLO");
	// var pronunciation1 = recognizer.lookupWord("WORLD");

	// console.log(pronunciation);
	// console.log(pronunciation1);
	// words.delete();

	// var ids = new Module.Integers();
	// if (recognizer.addKeyword(ids, "HELLO WORLD") != Module.ReturnType.SUCCESS) {
	//      alert("Error while adding key phrase"); // Meaning that the key phrase has issues
	// }
	// var id = ids.get(0); // This is the id assigned to the search
	// ids.delete();

	// var array = []; // array that contains an audio buffer
	// var buffer = new Module.AudioBuffer();
	// for (var i = 0 ; i < array.length ; i++) {
	// 	buffer.push_back(array[i]); // Feed the array with audio data
	// }
	// var output = recognizer.start(); // Starts recognition on current language model
	// output = recognizer.process(buffer); // Processes the buffer
	// var hyp = recognizer.getHyp(); // Gets the current recognized string (hypothesis)
	// for (var i = 0 ; i < array.length ; i++) {
	// 	buffer.set(i, array[i]); // Feed buffer with new data
	// }
	// output = recognizer.process(buffer);
	// hyp = recognizer.getHyp();
	// output = recognizer.stop();
	// // Gets the final recognized string:
	// var final_hyp = recognizer.getHyp();
	// console.log(final_hyp);
	// buffer.delete();



	// recognizer.delete();





}
