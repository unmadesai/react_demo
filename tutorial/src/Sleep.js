import React, { Component } from "react";
import Chart from "react-apexcharts";

var quality=['good','great','average','good','poor','average','poor','good','great','great','good','average','poor','great'];
var qual_int=[1,2,1,2,0,3,2,3,0,1,2,3,2,1];

class Sleep extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Sleep reverse',
                data: [2,4,5,2,3,4,5,6,7,8,2,3,2,4]
              },
            ],
            options: {
              chart: {
                type: 'bar',
                height: 350
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                }
              },
              plotOptions: {
                bar: {
                  // colors: 
                  // [function({ value, seriesIndex, w }) {
                  //   console.log("Value is "+value);
                  //   console.log("Index is "+seriesIndex);
                  //   if (value < 4) {
                  //       return '#003478'
                  //   }
                  // //   else if (quality[seriesIndex] == 'good') {
                  // //     return '#000000'
                  // // }  
                  // }],
                  // {
                  //   ranges: [{
                  //     from: 100,
                  //     to: 46,
                  //     color: '#F15B46'
                  //   }, {
                  //     from: 45,
                  //     to: 0,
                  //     color: '#FEB019'
                  //   }]
                  // },
                  columnWidth: '60%',
                }
              },
              dataLabels: {
                enabled: false,
              },
              // yaxis: {
              //   // title: {
              //   //   text: 'Time',
              //   // },
              //   // labels: {
              //   //   formatter: function (y) {
              //   //     return y.toFixed(0) + "%";
              //   //   }
              //   // }
              // },
              xaxis: {
                type: 'categories',
                categories: ['15 Aug', '16 Aug', '17 Aug', '18 Aug', '19 Aug', '20 Aug', '21 Aug', 
                '22 Aug', '23 Aug', '24 Aug', '25 Aug', '26 Aug', '27 Aug', '28 Aug'],
              },
              yaxis: {
                labels: {
                  rotate: -90
                },
                min: 0,
                max: 11,
              },
              grid: {
                xaxis: {
                  lines: {
                    show: true
                  }
                }
              },
              yaxis: {
                reversed: true,
                axisTicks: {
                  show: true
                },
                labels: {
                  formatter: function (y) {
                    return y.toFixed(0) + "am";
                }
              }
            },
          }
        };

    }

    

    render() {
      return (
          <div id="chart">
              <Chart options={this.state.options} series={this.state.series} type="bar" height={300}/>
          </div>
      );
    }
}

export default Sleep;