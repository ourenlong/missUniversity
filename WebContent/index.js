
var video=document.getElementsByTagName("video")[0];
var skip=document.getElementById("skip");
// $(function () {
//     $("div.skip").click(function () {
//         $("div.movie").animate({width:'0px',height:'0px',left:'50%',top:'50%'},400,function () {
//             $("div.movie").hide();
//         });
//         $("div.title").fadeIn(400);
//     });
// });

window.onload=function(){
    $(function() {
        var elm = $('.magazine');
        var startPos = $(elm).offset().top;

        $.event.add(window, "scroll", function() {
            var p = $(window).scrollTop();
            $(elm).css('position',((p) > startPos) ? 'fixed' : 'static');
            $(elm).css('top',((p) > startPos) ? '0px' : '');

            if(p>=getBottomOfVideo()){
                video.pause();
            }
        });

        $(".cancelnclik").removeAttr("href");
        $(".cancelnclik").removeAttr("onclick");
        $("#qr").click(function () {
            $(".QRBox").css("display","block");
        });
        $(".QRBox").click(function () {
            $(".QRBox").css("display","none");
        });

        $(".btn_back").mouseenter(function () {
            $(".btn_back").css("background","rgba(64,95,237,.5)");
            $(".btn_back").css("cursor","pointer");
        });

        $(".btn_back").mouseout(function () {
            $(".btn_back").css("background","url(\"images/backtohome.jpg\") center no-repeat");
            $(".btn_back").css("cursor","none");
        });
    });
};

// skip.onclick=function(){
//     $("#skip").hide();
//     $("#video").get(0).pause();
//     $("div.movie").animate({width:'0px',height:'0px',left:'50%',top:'50%'},100,function () {
//         $("div.movie").hide();
//     });
//     $("div.title").fadeIn(100);
//     $("div.test").fadeIn(100);
// }

video.oncanplay=function(){
    $("div.waiting").css("display","none");
    $("#video").css("display","block");
    // $("div.waiting").animate({display:'none'},0,function () {
    //     $("#video").animate({display:'block'},0);
    //     $("#video").get(0).play();
    // })
};

// video.onmousemove=function(){
//     if($("#video").attr("timeout")){
//         clearTimeout($("#video").get(0).timeout);
//     }
//     $("#skip").stop().animate({opacity: ".1"}, 200);
//     $("#skip").stop().animate({opacity: "1"}, 500);
//     $("#video").get(0).timeout=setTimeout(function () {
//         $("#skip").stop().animate({opacity: ".9"}, 200);
//         $("#skip").stop().animate({opacity: "0"}, 500);
//     },2000);
// }

// video.onended=function(){
// //     $("#skip").hide();
// //     $("div.movie").animate({width:'0px',height:'0px',left:'50%',top:'50%'},400,function () {
// //         $("div.movie").hide();
// //     });
// //     $("div.title").fadeIn(200);
// //     $("div.test").fadeIn(200);
// // }

function getBottomOfVideo(){
    var pos = $("#video").offset().top;
    var str=$("#video").css("height");
    var strlen=str.length;
    var substr=str.substr(0,strlen-2);
    var videoheight=parseFloat(substr);
    return pos+videoheight;
}


