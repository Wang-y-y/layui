(function () {
    var myChart = echarts.init(document.querySelector(".chart"));

    option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: [ '联勤联动', '预警信息', '问题数据']
        },
        grid: {
            // left: '3%',
            // right: '4%',
            bottom: '8%',
            containLabel: false
        },
        toolbox: {
            feature: {
                // saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['12-27', '12-28', '12-29', '12-30', '12-31', '01-01', '01-02']
        },
        yAxis: {
            type: 'value'
        },
        series: [

            {
                name: '联勤联动',
                type: 'line',
                stack: '总量',
                data: [0, 0.1, 0.2, 0.3, 0.3, 0.1, 0.3]
            },
            {
                name: '预警信息',
                type: 'line',
                stack: '总量',
                data: [0.5, 0.4, 0.2, 0.2, 0.3, 0.4, 0.3]
            },
            {
                name: '问题数据',
                type: 'line',
                stack: '总量',
                data: [0.1, 0.3, 0.1, 0.4, 0.2, 0.5, 0.1]
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();