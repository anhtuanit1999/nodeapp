var NoBtn = function(){
	var rInteract = Math.floor(Math.random() * 101);

	if(rInteract <= 60){
		move();
	}else{
		replace();
	}
}

var replace = function(){
	var no_btn = document.getElementById("no");
	var yes_btn = document.getElementById("yes");

	var styles_yes = window.getComputedStyle(yes_btn);
	var top_yes = styles_yes.getPropertyValue("top");
	var left_yes = styles_yes.getPropertyValue("left");

	var temp_top = top_yes;
	var temp_left = left_yes;

	var styles_no = window.getComputedStyle(no_btn);
	var top_no = styles_no.getPropertyValue("top");
	var left_no = styles_no.getPropertyValue("left");

	yes_btn.style.top = top_no;
	yes_btn.style.left = left_no;
	no_btn.style.top = temp_top;
	no_btn.style.left = temp_left;
}
var move = function(){
	var no_btn = document.getElementById("no");
	var yes_btn = document.getElementById("yes");

	no_btn.style.top = Math.floor(Math.random() * 400);
	no_btn.style.left = Math.floor(Math.random() * 800);
}

var YesBtn = function(){
	Swal.fire("Anh biết mà! 😘", "Mlem Mlem Mlem", "success");
}