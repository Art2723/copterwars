var s_hero;

var img = new Image();
img.onload = onImgLoad;
img.src = "sprites3.png";

function onImgLoad(){
	s_hero = {
		img:img,
		default:{
			transform:0,
			rotate:0,
			//x, y, width, height
			sprites: [
			    new Sprite(22, 36, 162, 44),
			    new Sprite(22, 82, 162, 44),
			    new Sprite(22, 126, 162, 44),
			    new Sprite(22, 168, 162, 44)
			]
		}
};



function Sprite(img, x, y, width, height) {
	//this.img = img;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};
