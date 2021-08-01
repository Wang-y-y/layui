var main = function () {
    var init = function () {
        nextTAB()
    };
    var nextTAB = function () {
        $.ajax({
            type: "GET",
            url: "json/data.json",
            dataType: "json",
            success: function (data) {
                // console.log(data);
                $("#moli").empty();
               data.data.forEach(item=>{
                   var li='';
                      if (item.children.length!==0){
                          li=`<li><div class="left-title bb js-leftTitle" >
                        <img src=${item.imgurl}>   
                        <span>${item.name}</span>                 
                        </div>                 
                    <ul class="js-${item.id}"></ul></li>`;
                      }else {
                          li=`<li><a href="${item.src}"><div class="left-title bb " >
                        <img src=${item.imgurl}>   
                        <span>${item.name}</span>                 
                        </div>                 
                    <ul class="js-${item.id}"></ul></a></li>`
                      }
                   $("#moli").append(li);
                   if (item.children.length!==0) {
                       getChildren(item.children, item.id);
                   }

                });
                b()
            }
        });
        var getChildren = function (childrenData, id) {
            console.log(childrenData);
            childrenData.forEach(subItm => {
                var subLi =`<li><div class="" >
                    </div>
                    <a target="content" href=${subItm.src} class="zi">${subItm.name}</a>
                    <ul class="js-${subItm.id}">
</ul></li>`;
                $(".js-" + id).append(subLi);
                if (subItm.children.length!==0) {
                    getChildren(subItm.children, subItm.id);
                } else {
                    return;
                }
            })
        };
        var b = function () {
            $(".js-leftTitle").click(function () {
                $(this).next().slideToggle();
                $(this).parent().siblings().children("ul").slideUp();


            });
            $(".exit").click(function () {
                $(this).parent(".me").toggle();
                $(".san").addClass("si")
            })
        }
    }
    return {
        init:init
    }
}();
