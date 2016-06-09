function changer1() {
	var element = document.getElementById("appear1");
	var txt = "something good";
	if (element.innerHTML == "") {
		element.innerHTML = txt;
	}
	else {
		element.innerHTML = "";
	}
}
function changer2() {
	var element = document.getElementById("appear2");
	var txt = "something bad";
	if (element.innerHTML == "") {
		element.innerHTML = txt;
	}
	else {
		element.innerHTML = "";
	}
}
function changer3() {
	var element = document.getElementById("appear3");
	var txt = "disappointed yet?";
	var img = document.createElement("img");
	img.src = "bootdemo/images/disappointment.jpg";

	if (element.innerHTML == "") {
		element.innerHTML = txt;
	}
	else if (element.innerHTML==txt) {
		element.innerHTML = img;
	}
	else{
		element.innerHTML = "";
	}
}