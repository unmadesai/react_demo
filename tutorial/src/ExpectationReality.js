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

class ExpectationReality extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          
            series: [{
                name: 'Morning',
                colors: '#81A2EF',
                data: [[new Date('2021-08-16, 09:00 +0800').getTime(),20], 
                       [new Date('2021-08-17, 09:00 +0800').getTime(),30], 
                       [new Date('2021-08-18, 09:00 +0800').getTime(),40], 
                       [new Date('2021-08-19, 09:00 +0800').getTime(),60], 
                       [new Date('2021-08-20, 09:00 +0800').getTime(),20], 
                       [new Date('2021-08-21, 09:00 +0800').getTime(),30],
                       [new Date('2021-08-22, 09:00 +0800').getTime(),54]]
              },
              {
                name: 'Afternoon',
                colors: '#2B61E4',
                data: [[new Date('2021-08-16, 14:00 +0800').getTime(),50], 
                       [new Date('2021-08-17, 14:00 +0800').getTime(),20], 
                       [new Date('2021-08-18, 14:00 +0800').getTime(),30], 
                       [new Date('2021-08-19, 14:00 +0800').getTime(),70], 
                       [new Date('2021-08-20, 14:00 +0800').getTime(),55], 
                       [new Date('2021-08-21, 14:00 +0800').getTime(),35],
                       [new Date('2021-08-22, 14:00 +0800').getTime(),45]]
              },
              {
                name: 'Evening',
                colors: '#2B61E4',
                data: [[new Date('2021-08-16, 19:00 +0800').getTime(),20], 
                       [new Date('2021-08-17, 19:00 +0800').getTime(),70], 
                       [new Date('2021-08-18, 19:00 +0800').getTime(),50], 
                       [new Date('2021-08-19, 19:00 +0800').getTime(),65], 
                       [new Date('2021-08-20, 19:00 +0800').getTime(),75], 
                       [new Date('2021-08-21, 19:00 +0800').getTime(),34],
                       [new Date('2021-08-22, 19:00 +0800').getTime(),29]]
              },
            //   {
            //     name: 'TEAM 2',
            //     data: [[new Date('2021-08-16, 09:00').getTime(),20]]
            //   },
            //   {
            //     name: 'TEAM 3',
            //     data: [[new Date('2021-08-16, 09:00').getTime(),60]]
            //   },
            //   {
            //     name: 'TEAM 4',
            //     data: [[new Date('2021-08-16, 09:00').getTime(),10]]
            //   },
            //   {
            //     name: 'TEAM 5',
            //     data: [[new Date('2021-08-16, 09:00').getTime(),40]]
            //   },
            ],
            options: {
              chart: {
                height: 350,
                type: 'scatter',
                zoom: {
                  type: 'xy'
                }
              },
              colors: ['#81A2EF','#2B61E4','#2B61E4'],
              dataLabels: {
                enabled: false
              },
              grid: {
                xaxis: {
                  lines: {
                    show: true
                  }
                },
                yaxis: {
                  lines: {
                    show: true
                  }
                },
              },
              xaxis: {
                type: 'datetime',
              },
              yaxis: {
                max: 100
              }
            },
          
          
          };
}

    

render() {
  return (
      <div id="chart">
          <Chart options={this.state.options} series={this.state.series} type="scatter" height={250} />
      </div>
  );
}

}

export default ExpectationReality;