import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class Pie extends Component {
    getOption = () => {
        return {
          toolbox: {
            show:false,
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['BaiJun','Sara','John','Jeff','Yarn']
        },
        color: ['#e74c5e', '#47bd9a', '#06c2de', '#f9d570', '#4090cb'],
        series : [
            {
                name: 'Total sales',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'BaiJun'},
                    {value:310, name:'Sara'},
                    {value:234, name:'John'},
                    {value:135, name:'Jeff'},
                    {value:1548, name:'Yarn'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
        };
      };
    render() {
        return (
            <React.Fragment>
            <ReactEcharts
            option={this.getOption()}
            />
            </React.Fragment>
        );
    }
}
export default Pie;

