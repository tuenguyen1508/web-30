var slide = document.getElementsByClassName('slide');
var sizeSlide = slide[0].clientWidth;
var next = 0;
var chuyenslide1 = document.getElementById('next-image1');
var img = chuyenslide1.getElementsByTagName('img');
var max = sizeSlide*img.length;
max = max - sizeSlide;
var point-image = document.getElementsByClassName('point-image');
var count1 = 0;
function opa05 (){
	for(let i=0;i<img.length;i++){
		point-image[i].style.opacity =0.5;
	}
}
function nextright (){
	if(next < max) {next += sizeSlide;count1++}
	else {next = 0;count1=0}
	chuyenslide1.style.marginLeft = '-' + next + 'px';
	opa05();
	point-image[count1].style.opacity = 1;

}
function nextleft (){
	if(next == 0) {next = max;count1=img.length-1;}
	else {next -= sizeSlide;count1--}
	chuyenslide1.style.marginLeft = '-' + next + 'px';
	opa05();
	point-image[count1].style.opacity = 1;
}
setInterval(function (){
	nextright();
},10000);