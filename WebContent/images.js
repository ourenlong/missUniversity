$(document).ready(function(){

var a=0;

$(".left").click(function(){
	a--;
	if (a==-1) {a=2;}
    $(".news_Sowing").animate({"left":-100%*a});
    });


$(".right").click(function(){
	a++;
	if (a==3) {a=0;}
    $(".news_Sowing").animate({"left":-1340*a});
    });

});