window.onload = initiate;

//put all js in this function!!!g

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
	    console.log('device error:', player.deviceErrorCode);
	});

	player.on('error', function(error) {
	    console.log('error:', error);
	});

	player.on('startRecord', function() {
	    console.log('started recording!');
	});

	player.on('finishRecord', function() {
	    console.log('finished recording: ', player.recordedData);
	});
}

function audioCheck() {
	var recognizer = new Worker("js/recognizer.js");
	var id = 0;
	recognizer.postMessage({command: 'initialize', callbackId: id});
}
