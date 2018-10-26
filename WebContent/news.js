$(function () {
    var list=$(".contentlist");
    var btn_pre=$(".btn_pre");
    var btn_next=$(".btn_next");
    list.attr("cur","0");
    var video_s=$(".video_Sowing");
    var left=$(".left");
    var right=$(".right");
    video_s.attr("cur","0");
    // var a=0;
    // $(".left").click(function(){
    //
    //     a--;
    //
    //     if (a==-1) {a=2;}
    //     $(".video_Sowing").animate({"left":-1340*a});
    //     });
    //
    // $(".right").click(function(){
    //     a++;
    //     if (a==3) {a=0;}
    //     $(".video_Sowing").animate({"left":-1340*a});
    //     });
    right.mouseenter(function () {
        $(".right img").attr("src","images/parts2_hover.jpg");
    });

    right.mouseleave(function () {
        $(".right img").attr("src","images/parts3.jpg");
    });

    left.mouseenter(function () {
        $(".left img").attr("src","images/parts3_hover.jpg");
    });

    left.mouseleave(function () {
        $(".left img").attr("src","images/parts2.jpg");
    });

    left.click(function () {
        var strcur=video_s.attr("cur");
        var cur=parseInt(strcur);
        cur=cur+100;
        list.attr("cur",(cur+''));
        if (cur==0){
            left.css("display","none");
        } else {
            left.css("display","block");
        }
        if (cur==-200){
            right.css("display","none");
        } else {
            right.css("display","block");
        }
        var leftstr = cur + "%";
        video_s.stop().animate({"left":`${leftstr}`}, 300);
        video_s.attr("cur",(cur+''));
    });

    right.click(function () {
        var strcur=video_s.attr("cur");
        var cur=parseInt(strcur);
        cur=cur-100;
        list.attr("cur",(cur+''));
        if (cur==0){
            left.css("display","none");
        } else {
            left.css("display","block");
        }
        if (cur==-200){
            right.css("display","none");
        } else {
            right.css("display","block");
        }
        var leftstr = cur + "%";
        video_s.stop().animate({"left":`${leftstr}`}, 300);
        video_s.attr("cur",(cur+''));
    });



    changePoint(1);
    list.attr("page","1");
    // btn_pre.click(function () {
    //     var curpage=parseInt(list.attr("curpage"));
    //     var topage=curpage-1||curpage+5;
    //     changeToPre(topage,list);
    //     list.attr("curpage",`${topage}`);
    // });

    btn_next.mouseenter(function () {
        $(".btn_next img").attr("src","images/parts2_hover.jpg");
    });

    btn_next.mouseleave(function () {
        $(".btn_next img").attr("src","images/parts3.jpg");
    });

    btn_pre.mouseenter(function () {
        $(".btn_pre img").attr("src","images/parts3_hover.jpg");
    });

    btn_pre.mouseleave(function () {
        $(".btn_pre img").attr("src","images/parts2.jpg");
    });

    btn_pre.click(function () {
        var strcur=list.attr("cur");
        var page=parseInt(list.attr("page"));
        var cur=parseInt(strcur);
        cur=cur+100;
        page--;
        list.attr("cur",(cur+''));
        if (cur==0){
            btn_pre.css("display","none");
        } else {
            btn_pre.css("display","block");
        }
        if (cur==500){
            btn_next.css("display","none");
        } else {
            btn_next.css("display","block");
        }
        var leftstr = cur + "%";
        list.stop().animate({"left":`${leftstr}`}, 300);
        list.attr("cur",(cur+''));
        list.attr("page",(page+''));
        changePoint(page);
    });

    btn_next.click(function () {
        var strcur=list.attr("cur");
        var page=parseInt(list.attr("page"));
        var cur=parseInt(strcur);
        cur=cur-100;
        page++;
        if (cur==0){
            btn_pre.css("display","none");
        } else {
            btn_pre.css("display","block");
        }
        if (cur==-500){
            btn_next.css("display","none");
        } else {
            btn_next.css("display","block");
        }
        var leftstr = cur + "%";
        list.stop().animate({left:`${leftstr}`}, 300);
        list.attr("cur",(cur+''));
        list.attr("page",(page+''));
        changePoint(page);
    });

    // $(".left").click(function(){
    //     a--;
    //     if (a==-1) {a=2;}
    //     $(".news_Sowing").animate({"left":-1340*a});
    //     });


    // $(".right").click(function(){
    //     a++;
    //     if (a==3) {a=0;}
    //     $(".news_Sowing").animate({"left":-1340*a});
    //     });


});

// function changeToPre(p,list) {
//     list.stop().animate({"margin-left":"0"}, 300);
//     setTimeout(loadNewPage(p,list),300);
// }

// function loadNewPage(curpage,list) {
//     var li=$(".contentlist li");
//     switch (curpage-1||curpage+5){
//         case 1:
//             list.prepend(`<li id="item1"><div class="content"><img src="images/1.jpg"><div class="txtcontain"><div class="txtcenter"><div class="txtcontent">9月28日下午,由重庆云鹿羽科技有限公司主办的“Miss university学府小姐”模特大赛暨品牌形象大使选拔赛新闻发布会在重庆凯宾斯基酒店举行。本次选拔大赛是一场大型公益性选美品牌赛事,旨在关注年轻女性身心健康,促进高校文化交流,同时为大学生解决就业难题。活动过程当中,来自各行业的商家企业也将联合通过系统的人才筛选、培养、储备方式,为参与活动的大学生创造有利的就业与创业机会,参赛的选手们还有机会被梦寐以求的航空公司邀请参加面试。</div></div></div></div></li>`);
//             li.remove("#item4");
//             list.stop().animate({"margin-left":"-100%"});
//             break;
//         case 2:
//             list.prepend(`<li id="item2"><div class="content"><img src="images/5.jpg"><div class="txtcontain"><div class="txtcenter"><div class="txtcontent">华龙网9月28日16时讯（记者 冉桐）今（28）日下午，“Miss university学府小姐”模特大赛暨品牌形象大使选拔赛新闻发布会在重庆市南岸区举行。此次大赛将选出10名“学府女神”，并打造成符合新时代标准的正能量“女神”。</div></div></div></div></li>`);
//             li.remove("#item5");
//             list.stop().animate({"margin-left":"-100%"});
//             break;
//         case 3:
//             list.prepend(`<li id="item3"><div class="content"><img src="images/3.jpg"><div class="txtcontain"><div class="txtcenter"><div class="txtcontent">昨日（9月28日）下午，“Miss university学府小姐”模特大赛暨品牌形象大使选拔赛新闻发布会在重庆举行。本次选拔大赛是一场大型公益性选美品牌赛事，旨在关注年轻女性身心健康，促进高校文化交流，同时为大学生解决就业难题。</div></div></div></div></li>`);
//             li.remove("#item6");
//             list.stop().animate({"margin-left":"-100%"});
//             break;
//         case 4:
//             list.prepend(`<li id="item4"><div class="content"><img src="images/8.jpg"><div class="txtcontain"><div class="txtcenter"><div class="txtcontent">28日下午，“Miss university学府小姐”模特大赛暨品牌形象大使选拔赛新闻发布会在重庆市南岸区举行。此次大赛将选出10名“学府女神”，并打造成符合新时代标准的正能量“女神”。</div></div></div></div></li>`);
//             li.remove("#item1");
//             list.stop().animate({"margin-left":"-100%"});
//             break;
//         case 5:
//             list.prepend(`<li id="item5"><div class="content"><img src="images/7.jpg"><div class="txtcontain"><div class="txtcenter"><div class="txtcontent">国际在线重庆频道报道（朱明达）：9月19日，由重庆云鹿羽科技有限公司主办的大型公益选美赛事“Miss University学府小姐”大赛选美签约仪式在重庆凯宾斯基酒店举行。大赛旨在宣扬关爱大学生健康成长，促进高校文化交流，给众多重庆大学生提供展示平台及就业机会。</div></div></div></div></li>`);
//             li.remove("#item2");
//             list.stop().animate({"margin-left":"-100%"});
//             break;
//         case 6:
//             list.prepend(`<li id="item6"><div class="content"><img src="images/9.jpg"><div class="txtcontain"><div class="txtcenter"><div class="txtcontent">大学生要能明确自身定位，善于在就业中发挥优势特长。9月28日下午，由重庆云鹿羽科技有限公司主办的“Miss university学府小姐”模特大赛暨品牌形象大使选拔赛新闻发布会在重庆凯宾斯基酒店举行，本次选拔大赛不仅增进了高校之间的文化交流，还是一场大型的公益性选美品牌赛事。</div></div></div></div></li>`);
//             li.remove("#item3");
//             list.stop().animate({"margin-left":"-100%"});
//             break;
//     }
// }

function changePoint(page) {
    $(".pointOfEle img").each(function (index, element) {
        if (index+1 == page) {
            $(this).attr("src", "images/parts1.gif");
        }else {
            $(this).attr("src", "images/parts11.gif");
        }
    });
}