var main = function () {
    var init = function () {
        nextTAB()
    };
    var nextTAB = function () {
            var myDate = new Date;
            var year = myDate.getFullYear(); //获取当前年
            var mon = myDate.getMonth() + 1; //获取当前月
            var date = myDate.getDate(); //获取当前日
            var h = myDate.getHours();//获取当前小时数(0-23)
            var m = myDate.getMinutes();//获取当前分钟数(0-59)
            // var s = myDate.getSeconds();//获取当前秒
            console.log(year, mon, date,h,m,);
            $("#tt").html(year + "年" + mon + "月" + date + "日" +h+":"+m);
    };
    return {
        init:init
    }
}();
