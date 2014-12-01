// JavaScript Document
var CurrentImgIndex = 1;
var NextImgIndex = 2;
var SlideCount;
var Loop;

$(document).ready(LoadSlider());

//Preload Slider
function LoadSlider(){

	
	$("#slider img#img" + CurrentImgIndex).fadeIn(500);	

	//get the number of images in the slider
	SlideCount = $("#slider img").size();
	
	StartSlider(SlideCount);
}

//Start Loop
function StartSlider(){
	
	Loop  = setInterval( 
		function ChangeImage(){
			$("#slider img#img" + CurrentImgIndex).fadeOut(500);
			$("#slider img#img" + NextImgIndex).fadeIn(500);
			
			//Move to next Image
			CurrentImgIndex = NextImgIndex;	
			NextImgIndex = (NextImgIndex < SlideCount) ? NextImgIndex + 1 : 1; //if the slideindex move to the last image return to the 1st image

		}//ChangeImage()
	,3000);
}


//
function nextImage(){		
		clearInterval(Loop);
		$("#slider img#img" + CurrentImgIndex).fadeOut(500);
		$("#slider img#img" + NextImgIndex).fadeIn(500);
		
		//Move to next Image
		CurrentImgIndex = NextImgIndex;	
		NextImgIndex = (NextImgIndex < SlideCount) ? NextImgIndex + 1 : 1; //if the slideindex move to the last image return to the 1st image
		StartSlider();
}


//
function prevImage(){
		clearInterval(Loop);
	
		NextImgIndex = (CurrentImgIndex > 1) ? CurrentImgIndex - 1 : 3; //if the slideindex move to the 1st image return to the last image

		$("#slider img#img" + CurrentImgIndex).fadeOut(500);
		$("#slider img#img" + NextImgIndex).fadeIn(500);
		
		//Move to next Image
		CurrentImgIndex = NextImgIndex;	
		NextImgIndex = (CurrentImgIndex < SlideCount) ? CurrentImgIndex + 1 : 1; //if the slideindex move to the last image return to the 1st image
		StartSlider();
}
