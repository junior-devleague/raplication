window.onload = initresults

function initresults(){
	function letterGrade(score, maximumLoserScore){
		if(score >= 130 && score <= 140){
			document.getElementById('score').innerHTML ='A'
		}

		if(score >= 100 && score < 130){
			document.getElementById('score').innerHTML = 'B'
		}

		if(score >= 85 && score < 100){
			document.getElementById('score').innerHTML = 'C'
		}

		if(score >= 65 && score < 85){
			document.getElementById('score').innerHTML = 'D'
		}

		if(score >= 0  && score < 65){
			document.getElementById('score').innerHTML = 'This score should not be possible'
		}

		//split

		if(score > 140 && score < 155){
			document.getElementById('score').innerHTML = 'B'
		}

		if(score > 155 && score < 165){
			document.getElementById('score').innerHTML = 'C'
		}

		if(score > 165 && score < 175){
			document.getElementById('score').innerHTML = 'D'
		}

		if(score > 175 && score < 185){
			document.getElementById('score').innerHTML = 'F'
		}

		if(score >= 185){
			document.getElementById('score').innerHTML = 'Go apply for a Guinness world record..'
		}

	}

letterGrade();

var score = randomScore();
letterGrade(score);

function randomScore(){
	// 60 is the minimum, 200 is the maximum
	var randomNumber = Math.floor(Math.random() * (200 - 80 + 1)) + 80;
	return randomNumber;
}

randomScore();

document.getElementById('wpm').innerHTML = score;


}