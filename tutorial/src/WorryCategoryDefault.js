import React, { Component } from "react";
import Chart from "react-apexcharts";


// function generateDayWiseTimeSeries(baseval, count, yrange) {
//     var i = 0;
//     var series = [];
//     while (i < count) {
//       var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
  
//       series.push([baseval, y]);
//       baseval += 86400000;
//       i++;
//     }
//     return series;
//   }

class WorryCategoryDefault extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          
          series: [{
            name: 'Messenger',
            data: [
              [16.4, 5.4],
              [21.7, 4],
              [25.4, 3],
              [19, 2],
              [10.9, 1],
              [13.6, 3.2],
              [10.9, 7],
              [10.9, 8.2],
              [16.4, 4],
              [13.6, 4.3],
              [13.6, 12],
              [29.9, 3],
              [10.9, 5.2],
              [16.4, 6.5],
              [10.9, 8],
              [24.5, 7.1],
              [10.9, 7],
              [8.1, 4.7],
              [19, 10],
              [27.1, 10],
              [24.5, 8],
              [27.1, 3],
              [29.9, 11.5],
              [27.1, 0.8],
              [22.1, 2]
            ]
          }, {
            name: 'Instagram',
            data: [
              [6.4, 5.4],
              [11.7, 4],
              [15.4, 3],
              [9, 2],
              [10.9, 11],
              [20.9, 7],
              [12.9, 8.2],
              [6.4, 14],
              [11.6, 12]
            ]
          }],
          options: {
            chart: {
              height: 350,
              type: 'scatter',
              animations: {
                enabled: false,
              },
              zoom: {
                enabled: false,
              },
              toolbar: {
                show: false
              }
            },
            colors: ['#056BF6', '#D2376A'],
            xaxis: {
              tickAmount: 10,
              min: 0,
              max: 40
            },
            yaxis: {
              tickAmount: 7
            },
            markers: {
              size: 20
            },
            fill: {
              type: 'image',
              opacity: 1,
              image: {
                src: ['images/cardiogram.png', 'images/running.png'],
                width: 40,
                height: 40
              }
            },
            legend: {
              labels: {
                useSeriesColors: true
              },
              markers: {
                customHTML: [
                  function() {
                    return ''
                  }, function() {
                    return ''
                  }
                ]
              }
            }
            
          },
        
        
        };
      }

    

render() {
  return (
      <div id="chart">
          <Chart options={this.state.options} series={this.state.series} type="scatter" height={350} />
      </div>
  );
}

}

export default WorryCategoryDefault;