function changer1() {
	var element = document.getElementById("appear1");
	var txt = "FeelsGoodMan";
	if (element.innerHTML == "") {
		element.innerHTML = txt;
	}
	else {
		element.innerHTML = "";
	}
}
function changer2() {
	var element = document.getElementById("appear2");
	var txt = "FeelsBadMan";
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


	if (element.innerHTML == "") {
		element.innerHTML = txt;
	}
	else{
		element.innerHTML = "";
	}
}