$(function () {
    chart1();
    chart2();
    chart3();

});
//折线统计图
function chart1() {
    //这个echarts对象应该是在echarts-all.js文件里面初始化好的，所以直接拿来用，
    var myChart = echarts.init(document.getElementById('chart1'));
    var mjBoxOption = {
        legend: {
            data: ['入书房人数', '出书房人数', '在书房人数'],
            y: 20,
            textStyle: {
                fontSize: 20,
                color: "#FFFFFF"
            }
        },
        color: ['#289df5', '#fbc01b', '#ff5050'],
        grid: {
            x: 50,
            y: 50,
            x2: 50,
            y2: 50,
            borderWidth: 1,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                length: 0
            },
            splitLine: {
                show: false,
                lineStyle: {
                    // color: ["#051d5f"],
                    // width: 1,
                    // type: 'solid'
                }
            },
            axisLabel: {
                interval: 2,
                textStyle: {
                    color: 'rgb(217, 214, 214)',
                    fontSize: 15
                }
            },
            name: '点',
            nameTextStyle: {
                padding: [24, 0, 0, 0],
                color: '#00c5d7'
            },
            nameGap: 0,
            data: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00',]
        },
        yAxis: {
            type: 'value',
            axisLine: {
                show: false
            },
            axisTick: {
                length: 0 // 刻度线的长度
            },
            splitLine: {
                lineStyle: {
                    color: ["#FFFFFF"],
                    width: 2,
                    type: 'solid'
                }
            },
            axisLabel: {
                textStyle: {
                    color: 'rgb(217, 214, 214)',
                    fontSize: 15
                }
            }
        },
        series: [{
            name: '入书房人数',
            type: 'line',
            smooth: true,
            symbol: 'circle', // 拐点类型
            symbolSize: 0, // 拐点圆的大小
            itemStyle: {
                normal: {
                    color: '#f1e830', // 折线条的颜色
                    borderColor: '#289df5', // 拐点边框颜色
                    areaStyle: {
                        type: 'default',
                        opacity: 0.1
                    }
                }
            },
            data: [310, 212, 221, 154, 80, 212, 221,]
        }, {
            name: '出书房人数',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#0fff33',
                    borderColor: '#fbc01b',
                    areaStyle: {
                        type: 'default',
                        opacity: 0.1
                    }
                }
            },
            data: [151, 282, 151, 120, 20, 200, 221]
        }, {
            name: '在书房人数',
            type: 'line',
            symbolSize: 8,   //拐点圆的大小
            smooth: true,
            symbol: 'circle',
            itemStyle: {
                normal: {
                    color: '#FFFFFF',
                    borderColor: '#FFFFFF',
                    lineStyle: {
                        color: '#FFFFFF',
                        width: 5
                    }
                    // areaStyle: {
                    //     type: 'default',
                    //     opacity: 0.1
                    // }
                }
            },
            data: [160, 250, 180, 100, 20, 112, 201]
        }]
    };
    myChart.setOption(mjBoxOption);
}

//柱状统计图
function chart2() {
    //这个echarts对象应该是在echarts-all.js文件里面初始化好的，所以直接拿来用，
    var myChart = echarts.init(document.getElementById('chart2'));
    var mjBoxOption = {
        // legend: {
        //     data: ['入在书房人数', '出在书房人数', '在书房人数'],
        //     y: 20,
        //     textStyle: {
        //         fontSize: 40,
        //         color: "#FFFFFF"
        //     }
        // },
        // color: ['#289df5', '#fbc01b', '#ff5050'],
        grid: {
            x: 50,
            y: 10,
            x2: 50,
            y2: 60,
            borderWidth: 1,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                length: 0
            },
            splitLine: {
                show: false,
                lineStyle: {
                    // color: ["#051d5f"],
                    // width: 1,
                    // type: 'solid'
                }
            },
            axisLabel: {
                formatter: function (params) {
                    var newParamsName = "";// 最终拼接成的字符串 
                    var paramsNameNumber = params.length;// 实际标签的个数 
                    var provideNumber = 5;// 每行能显示的字的个数 
                    var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 计算行数，向上取整 
                    //判断是否需要换行
                    if (paramsNameNumber > provideNumber) {
                        //循环得到每行的显示内容，p代表行 
                        for (var p = 0; p < rowNumber; p++) {
                            var tempStr = "";// 表示每一次截取的字符串 
                            var start = p * provideNumber;// 开始截取的位置 
                            var end = start + provideNumber;// 结束截取的位置
                            if (p == rowNumber - 1) {
                                // 最后一次不换行 
                                tempStr = params.substring(start, paramsNameNumber);
                            } else {
                                // 每一次拼接字符串并换行 
                                tempStr = params.substring(start, end) + "\n";
                            }
                            newParamsName += tempStr;// 最终拼成的字符串 
                        }
                    } else {
                        // 将旧标签的值赋给新标签 
                        newParamsName = params;
                    }
                    return newParamsName
                },
                x: 10,
                y: 50,
                interval: 0,
                rotate: -15,
                margin: 2,
                textStyle: {
                    color: 'rgb(217, 214, 214)',
                    fontSize: 13
                }
            },
            type: 'category',
            data: ['仙剑一剑一剑一剑一剑一剑', '盗墓笔记盗墓笔记盗墓笔记', '疯子', '中小学数学', '考研辅导'],
            nameTextStyle: {
                padding: [24, 0, 0, 0],
                color: '#00c5d7'
            },
            nameGap: 0
        },
        yAxis: {
            type: 'value',
            axisLine: {
                show: false
            },
            axisTick: {
                length: 0 // 刻度线的长度
            },
            splitLine: {
                lineStyle: {
                    color: ["#FFFFFF"],
                    width: 2,
                    type: 'solid'
                }
            },
            axisLabel: {
                textStyle: {
                    color: 'rgb(217, 214, 214)',
                    fontSize: 15
                }
            }
        },
        series: [{
            name: '入在书房人数',
            type: 'bar',
            smooth: true,
            symbol: 'circle', // 拐点类型
            symbolSize: 0, // 拐点圆的大小
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: 'rgb(217, 214, 214)',
                            fontSize: 15
                        }
                    },
                    color: '#6df5f9', // 折线条的颜色
                    areaStyle: {
                        type: 'default',
                        opacity: 0.1
                    }
                }
            },
            data: [310, 212, 221, 154, 80, 212, 221,]
        }]
    };
    myChart.setOption(mjBoxOption);
}

//饼状图
function chart3() {
    //这个echarts对象应该是在echarts-all.js文件里面初始化好的，所以直接拿来用，
    var myChart = echarts.init(document.getElementById('chart3'));
    var mjBoxOption = option = {
        radius: '70%',
        legend: {
            orient: 'vertical',
            x: 'left',
            y: 60,
            data: ['直接访问直接访问直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
            textStyle: {
                fontSize: 15,
                color: "#FFFFFF"
            }
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '80%',
                radius: ['54%', '80%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            formatter(v) {
                                let text = v.name
                                return text.length < 8 
                                    ? text 
                                    : `${text.slice(0,8)}\n${text.slice(8)}`
                            }
                        },
                        labelLine: {
                            show: true
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                label: {
                    normal: {
                        position: 'center',
                        textStyle: {
                            fontSize: 15,
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    },
                },
                data: [
                    { value: 335, name: '直接访问直接访问直接访问' },
                    { value: 310, name: '邮件营销' },
                    { value: 234, name: '联盟广告' },
                    { value: 135, name: '视频广告' },
                    { value: 1548, name: '搜索引擎' }
                ]
            }
        ]
    };
    myChart.setOption(mjBoxOption);
}