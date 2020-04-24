import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class Line extends Component {
    getOption = () => {
        return {
          tooltip : {
            trigger: 'axis'
          },
          toolbox: {
            show:false,
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            zlevel: 0,
            x: 50,
            x2: 50,
            y: 30,
            y2: 30,
            borderWidth: 0,
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: 'rgba(0,0,0,0)',
          },
          xAxis : [
            {
                type: 'category',
                data: ['Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6', 'Week7']
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            },
          ],
          color: ['#e85768'],
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
export default Line;

