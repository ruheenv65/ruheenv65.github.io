function showWords(){
	var myDots=document.getElementById("continue");
	var showMore=document.getElementById("hidden");
	var myButton=document.getElementById("link");
	
	if(myDots.style.display==="none"){
		myDots.style.display="inline";
		myButton.innerHTML="See More...";
		showMore.style.display="none";
	}else{
		myDots.style.display="none";
		myButton.innerHTML="See Less...";
		showMore.style.display="inline";
	}
}
function showWord(){
	var myDots=document.getElementById("continued");
	var showMore=document.getElementById("hide");
	var myButton=document.getElementById("links");
	
	if(myDots.style.display==="none"){
		myDots.style.display="inline";
		myButton.innerHTML="See More...";
		showMore.style.display="none";
	}else{
		myDots.style.display="none";
		myButton.innerHTML="See Less...";
		showMore.style.display="inline";
	}
}

function showGrade(){
	let html=document.getElementById("sel-html").value;
	let styles=document.getElementById("sel-styles").value;
	let padding=document.getElementById("sel-padding").value;
	let white=document.getElementById("sel-white").value;
	let resultP=document.getElementById("result");
	resultP.classList.remove("hidden");
	let num=0;
	

if (html=="index.html"){
	resultP.innerHTML="<p>Question 1-Correct</p>";
	
}
else{
	resultP.innerHTML= "<p>Question 1-Incorrect</p>";

	
}
if (styles=="."){
	resultP.innerHTML+="<p>Question 2-Correct</p>";
}
else{
	resultP.innerHTML+= "<p>Question 2-Incorrect</p>";

}
if (padding=="padding:5px;"){
	resultP.innerHTML+="<p>Question 3-Correct</p>";
	
}
else{
	resultP.innerHTML+= "<p>Question 3-Incorrect</p>";
}
if (white=="color:white;"){
	resultP.innerHTML+="<p>Question 4-Correct</p>";
}
else{
	resultP.innerHTML+= "<p>Question 4-Incorrect</p>";
}
}

setInterval(changeSlide, 1000);
function changeSlide(){
	let shaniya=document.getElementById("shaniya");
	let pooja=document.getElementById("pooja");
	let riti=document.getElementById("riti");
	let nidhi=document.getElementById("nidhi");
	
	if(!shaniya.classList.contains("hidden")){
	riti.classList.remove("hidden");
		shaniya.classList.add("hidden");
}
	else if(!riti.classList.contains("hidden")){
	pooja.classList.remove("hidden");
		riti.classList.add("hidden");
	}
	else if(!pooja.classList.contains("hidden")){
	nidhi.classList.remove("hidden");
		pooja.classList.add("hidden");
	}
	else if(!nidhi.classList.contains("hidden")){
	shaniya.classList.remove("hidden");
		nidhi.classList.add("hidden");
	}
}