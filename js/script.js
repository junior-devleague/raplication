window.onload = initiate;

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
}

//About

//Speech

//Composition

// randomizer
function randomizer(){
	var Tips = [
	"Multisyllabic words are useful in making writing more sophisticated.",
	"Consider using slant rhymes, which often are just as effective as real rhymes.",
	"Similes differ from metaphors in that they use the words 'like' and 'as'.",
	"Alliteration is a literary device that pertains to having the same first letter among many words in a sentence (i.e. Peter Piper picked a peck of pickled peppers).",
	"It is important to know how many syllables are in each line when writing a poem/song. Rhythm is one of the most important aspects of a piece.",
	"Do not be afraid to use the dictionary. Reading the dictionary or searching up words online can be beneficial in writing.",
	"Stray away from using words that are commonly learned in early elementary school. It should not be too hard to find a better replacement.",
	"Interior rhymes are useful, especially in rap music. These rhymes add to the overall flow to a poem or song.",
	"Personification is giving something that is nonhuman some human characteristics. Consider using this effect in writing.",
	"Consider using two word rhymes. An example is ‘navy seals’ and ‘baby meals’.  These function as a multisyllabic rhyme.",
	"A ‘double entendre’ is a clever way to signify a line has a second, hidden meaning.",
	"The best writers have the best diction. One must choose words wisely when writing a piece, especially when there is a rhyme scheme that must be met.",
	"Assonance is where multiple successive words share the same vowel sound. An example is ‘expect the best to reach success’.",
	"Incorporating a setting can help to put a reader in the author’s shoes.",
	"Sensory details can be engaging to a reader. Try incorporating them as much as possible."
	];

	  var randomNumber = Math.round(Math.random() * 14);
	  console.log(Tips[randomNumber]);

	  document.getElementById('answer').innerHTML = Tips[randomNumber];
}

function compositionLoad() {
	var hoverR = document.getElementById('buttonComp');
	hoverR.addEventListener('click', randomizer);
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
	//171,980.44444
	var startButton = document.getElementsByClassName('vjs-device-button vjs-control vjs-icon-device-perm'),
		array = ["Peter Piper picked a peck of pickled peppers",
				"Betty Botter bought some butter",
				"How much wood would a woodchuck chuck",
				"She sells seashells by the seashore",
				"I saw a kitten eating chicken in the kitchen",
				"I wish to wash my Irish wristwatch",
				"We surely shall see the sun shine soon",
				"Four fine fresh fish for you",
				"I saw Susie sitting in a shoeshine shop",
				"Lesser leather never weathered wetter weather better",
				"If I put it in my batter, it will make my batter bitter",
				"I have got a date at a quarter to eight. I’ll see you at the gate, so don’t be late",
				"I thought I thought of thinking of thanking you"],
		length = array.length,
		sButton = document.getElementById('start'),
		stopButton = document.getElementById('stop'),
		text = random(),
		resultButton = document.getElementById("results"),
		time;

	resultButton.addEventListener('click', function() {
		location.replace("result.html");
		time = document.getElementsByClassName("vjs-current-time-display");
		console.log(time[0].innerHTML);
	});

	startButton[0].click();
	sButton.addEventListener('click', function() {
		start();
	});

	stopButton.addEventListener('click', function() {
		annyang.pause();
		var button = document.getElementsByClassName('vjs-record-button vjs-control vjs-icon-record-stop');
		button[0].click();
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

	function start() {
		annyang.resume();
		var words = {};
		words[text] = correct;
		annyang.addCommands(words);
		console.log(words)
		var button = document.getElementsByClassName('vjs-record-button vjs-control vjs-icon-record-start');
		button[0].click();
		console.log("Starting the recording")
	}

	function end() {
		var button = document.getElementsByClassName('vjs-record-button vjs-control vjs-icon-record-stop');
		button[0].click();
		var result = document.getElementById("results");
		result.disabled = false;
		console.log("STOP!")
		annyang.abort();
		result.disabled = false;
		// same thing as $("#results").removeAttr("hidden")
		if (result.classList) {
		  result.classList.remove("hidden");
		}
		else {
		  result.hidden = result.hidden.replace(new RegExp('(^|\\b)' + hidden.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}

	}

	function correct() {
		console.log("correct, you pass");
		end();
	}

	function random() {
		var result = document.getElementById("text");
		var randIndex = Math.round(Math.random() * (length - 1));
		var text = document.createElement("p");
		text.innerHTML = array[randIndex];
		result.appendChild(text);
		console.log(array[randIndex]);
		return array[randIndex];
	}

	checkVoice();

}
