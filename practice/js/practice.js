
function clickBtn(workId){
	var currentElm = document.getElementById(workId);
	var workClsElm = document.getElementsByClassName("works");

	if(currentElm.style.display == "block"){
		currentElm.style.display = "none"
	}else{
		for(var i=0; i < workClsElm.length; i++){
			if(workClsElm[i].style.display=="block"){
				workClsElm[i].style.display="none"
			}
		}

		if (currentElm.style.display == "none" || currentElm.style.display == ""){
				currentElm.style.display = "block";
		}
	}
}
