/**
 * Created by zxy on 2016/5/18.
 */
  var sousuo=$(".sousuo");
  sousuo.click(function () {
      $(".mask").show();
      // $("html,body").css("overflow","hidden");
      $(".bag").find("label").addClass("close");
      $(".item,.sousuo").each(function(){
          $(this).transition({scale:[0.5,0.5],opacity:0,},500,function(){
              $(this).css("display","none")
              if($(this).is(".sousuo")) {
                  $(".nsousuo").css("display","inline-block").transition({x:0},2000);
                  $(".lianjie").css('display','block');
              }
          })
      })
  })
//关闭点击事件
    var close=$(".bag").find("label")
    close.click(function () {
        if($(this).hasClass("close")){
        $(".mask").hide();
        $(".bag").find("label").removeClass("close");
        $(".item,.sousuo").each(function(){
            $(".nsousuo").css("display","none").transition({x:40},0)
            $(this).css("display","inline-block")
            $(".lianjie").css('display','none');
            $(this).transition({scale:[1,1],opacity:1,},1000)
        })
        }
    })

//菜单栏效果
$(".liangheng").click(function () {
    $(this).children().toggleClass("zhuan")
    $(".showmore").toggleClass("active")

    $(".bag").toggleClass("active")

    if($(".bag").hasClass("active")){
        $(".bag").animate({right:-40},500)
    }else{
        $(".bag").animate({right:0},500)
    }


    if($(".showmore").hasClass("active")){
        $(".showmore").animate({height:'100%'},500)
    }else{
        $(".showmore").animate({height:0},500)
    }

})


//底部点击效果    .slidelj   slianjie


  $(".slianjie").each(function(){
      $(this).click(function(){
          $(this).find(".slidelj").each(function(){
              $(this).slideToggle();
          })
          $(this).find(".shizi").toggleClass("xuanzhuan")
          if($(this).find(".shizi").hasClass("xuanzhuan")){
              $(this).find(".sheng").transition({rotate:45})
              $(this).find(".sshu").transition({rotate:45})
          }else{
              $(this).find(".sheng").transition({rotate:0})
              $(this).find(".sshu").transition({rotate:0})
          }
      })
  })
//轮播图效果
   var box=$(".midcenter");
   var aa=$(".midcenter_list")
   var lefts=box.width();
   var yuan=$(".yuan")
//   初始化
     yuan.css({background:"#999999",border:"none"}).eq(0).css({background:"#fff",border:"1px solid blue"})
     aa.css({left:lefts}).eq(0).css({left:0});
//    aa.not("aa:nth-of-type(1)").css({left:lefts});
 var t=setInterval(move,2000);
 var index=0;
 var next=0;
 function move(){
     
     next++;
     if(next==aa.length){
         next=0;
     }
     aa.eq(next).css({left:lefts});
     aa.eq(index).animate({left:-lefts})
     aa.eq(next).animate({left:0});

     yuan.css({background:"#999999",border:"none"})
     yuan.eq(next).css({background:"#fff",border:"1px solid blue"})
     index=next;
 }
