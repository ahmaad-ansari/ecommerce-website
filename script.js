// JavaScript Document

function toggleMenu() {
	var x = document.getElementById("dropdown-menu");
	if (x.style.display === "none") {
		x.style.display = "flex";
	}
	else {
		x.style.display = "none";
	}
	
	$(document).click(function() {
		x.style.display = "none";
	});
}


