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
                console.log(data);
                $("#moli").empty();
               data.data.forEach(item=>{
                    var li = `<li><div class="left-title" target="content">
                        <img src=${item.imgurl}>
                        <span>${item.name}</span>
                        </div>
                    <ul class="js-${item.id}"></ul></li>`;
                    $("#moli").append(li);
                    if (item.children.length != 0) {
                        getChildren(item.children, item.id);
                    }
                });
                b()
            }
        });
        var getChildren = function (childrenData, id) {
            childrenData.forEach(subItm => {
                var subLi =`<li><div class="left-title" target="content">
                        <img src=${subItm.imgurl}>
                        <span>${subItm.name}</span>
                    </div><ul class="js-${subItm.id}"></ul></li>`;;
                $(".js-" + id).append(subLi);
                if (subItm.children.length != 0) {
                    getChildren(subItm.children, subItm.id);
                } else {
                    return;
                }
            })
        };
        var b = function () {
            $(".left-title").click(function () {
                $(this).next().slideToggle();
                $(this).parent().siblings().children("ul").slideUp();
            });
        }
    }
    return {
        init:init
    }
}();
