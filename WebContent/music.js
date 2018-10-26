//表示当前正在播放的是哪张图片
var currentId=0;
var MaxSize=8;
 
window.onload=function () {
    $(".cancelnclik").removeAttr("onclick");

    $("#qr").click(function () {
        // $(".content").css("z-index","-1");
        $(".QRBox").css("display","block");
    });
    $(".QRBox").click(function () {
        $(".QRBox").css("display","none");
    });


    $(".titleElement1").mouseenter(function () {
        changeTo(1);
    });
    $(".titleElement" + 2).mouseenter(function () {
        changeTo(2);
    });
    $(".titleElement" + 3).mouseenter(function () {
        changeTo(3);
    });
    $(".titleElement" + 4).mouseenter(function () {
        changeTo(4);
    });
    $(".titleElement" + 5).mouseenter(function () {
        changeTo(5);
    });
    $(".titleElement" + 6).mouseenter(function () {
        changeTo(6);
    });
    $(".titleElement" + 7).mouseenter(function () {
        changeTo(7);
    });
    $(".titleElement" + 8).mouseenter(function () {
        changeTo(8);
    });
    changeTo(1);

    setInterval(function () {
        var id=currentId+1;
        changeTo(id>MaxSize?(id%MaxSize):id);
    },3000);
    $("div.title").fadeIn();
}

function changeTo(id) {
    if(currentId!=id){
        cancelHover(currentId);
        setHover(id);
        currentId=id;
    }
}

function cancelHover(id) {
    if(id!=0) {
        $(".slideElement" + id).css("z-index", "0");
        $(".slideElement" + id).stop().animate({opacity: ".95"}, 200);
        $(".slideElement" + id).stop().animate({opacity: "0"}, 500);
        $(".titleElement" + id).css("color", "#fff");
    }
}

function setHover(id) {
    $(".slideElement"+id).css("z-index","1");
    $(".slideElement"+id).stop().animate({opacity:".05"},200);
    $(".slideElement"+id).stop().animate({opacity:"1"},500);
    $(".titleElement"+id).css("color","#52e2c0");
}
