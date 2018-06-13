let prev = document.getElementsByClassName('prev'),
	next = document.getElementsByClassName('next'),
	box = document.getElementsByClassName('top');

let parentPrev = prev[0].parentNode.nodeName;

let numberOfClick = 0;

function consoleLog(){
	numberOfClicks = numberOfClick++;
	console.log(numberOfClicks);
	box[0].style.transform = "translateX(" + "-" + numberOfClick * 200 + "px)";

	if(numberOfClick * 200 == 1000){
		box[0].style.transform = "translateX(" + 0 + "px)";
		numberOfClick = 0;
	}
}

prev[0].addEventListener('click', consoleLog);