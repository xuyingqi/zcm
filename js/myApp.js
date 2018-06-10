// document.addEventListener("touchmove",function(e){
//     e.preventDefault();
// });
// pure JS
// 13
var myApp = {
  swipe:function(){
    var elem = document.getElementById('mySwipe');
    window.mySwipe = Swipe(elem, {
      startSlide: 0,/*开始是第几页*/ 
      auto: 2000,/*自动播放的时间间隔*/ 
      continuous: true,// 
      // disableScroll: true,
      // stopPropagation: true,
      callback: function(index, element) {
        //把第index个li变亮
        //把全部的变暗
        $(elem).find("li").css("background-color","red");
        $(elem).find("li").eq(index).css("background-color","#fff");
        //把当前的变亮
        console.info(index,element);
      }
      // transitionEnd: function(index, element) {}
    }); 
  },
  pie:function(){
    //---------------------------画饼图
      $(function(){
        //找到所有 的data3中 data-pro属性值
        $(".data3").each(function(){
          //找到设置的进度值 以百分比为单位.
          var pro = $(this).attr("data-pro");
          
          var deg = pro * 360 / 100;  //得到度数
          //设置文本的值
          $(this).find(".bg").html(pro+"%");

          if(deg <=180){//1.不过超50% 不超过180度
            $(this).find(".over50").hide();//(1)over50不显示
            //(2)Inner
              // a)只显示左边一半
              // b)旋转角度（默认顺时针，向右转）
            $(this).find(".inner").css({"clip":"rect(0 0.58rem 1.16rem 0)"
              ,"transform":"rotate("+deg+"deg)"});
            // (3)Outer
            $(this).find(".outer").css("clip","rect(0 1.16rem 1.16rem .58rem)")
            // a)只显示右边一半
          }
          else if(deg <=360){

      // (1)over50显示
          $(this).find(".over50").show();
          $(this).find(".over50").css("clip","rect(0 1.16rem 1.16rem 0.58rem")
      // a)只显示右边一半（表示整个度数中的180度）
        
      // (2)Inner
      // a)只显示左边一半
      // b)旋转角度（默认顺时针，向右转）
          $(this).find(".inner").css({"clip":"rect(0 0.58rem 1.16rem 0)"
              ,"transform":"rotate("+deg+"deg)"});
      //(3)outer只显示左边一半
          $(this).find(".outer").css("clip","rect(0 0.58rem 1.16rem 0)")
          }
          console.info($(this).attr("data-pro"))
        })
      }) 
  }
}
