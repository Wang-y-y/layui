var main=function () {
    var init=function () {
        dh();
    };
    var dh=function () {
		$.ajax({
		type: "GET",
			url: "../json/lunbo.json",
			dataType: "json",
			success: function (data) {
			console.log(data);
			data.data.forEach(item=>{
				var a="<li class=\"swiper-item\">"+"<img src='"+item.imgurl+"'>"+ "</li>";
				$(".box").append(a);
				var b ="<li>"+"<img src='"+item.img+"' >"+"</li>";
				$(".list").append(b);
			});
			dd()
		}
	});
		var dd=function () {
			let n=0, time=null;
			$(".big_box").hover(
				function(){
					clearInterval(timer)
				},
				function(){
					auto()
				}
			)
			$(".lefts_btn").click(function(){
				n++;
				n=n%$(".swiper-item").length;
				$(".swiper-item").eq(n).show().siblings().hide();
			});
			$(".rights_btn").click(function(){
				n--;
				n=(n+$(".swiper-item").length)%$(".swiper-item").length;
				$(".swiper-item").eq(n).show().siblings().hide();
			});
			function autoPlay(){
				n++;
				n=n%$(".swiper-item").length;
				$(".swiper-item").eq(n).show().siblings().hide();
			}
			function auto(){
				timer=setInterval(autoPlay,3000)
			}
			auto()
			$(".small_list").on("click","li",function(){
				$(".swiper-item").eq($(this).index()).show().siblings().hide();
				end=$(this).index();
			})
		}
    };
    return{
        init:init
    }
}();

