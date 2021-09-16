import React, { Component } from "react";
import Chart from "react-apexcharts";

function dataGeneration(x,y,z) {
var series = [];
var x=x;
var y=y;
var z=z;
series.push([x,y,z]);
console.log("value here is "+series);
return series;
}

// function generateData(baseval, count, yrange) {
//     var i = 0;
//     var series = [];
//     while (i < count) {
//       var x=new Date('2021-08-16, 09:00').getTime();
//       //var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
//       var y=20;
//       //var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
//       //var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
//       var z=20;
  
//       series.push([x, y, z]);
//       console.log("value is "+series);
//       baseval += 86400000;
//       i++;
//     }
//     return series;
//   }

class Emotion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
            name: 'Worried/Scared',
            data: dataGeneration(new Date('2021-08-16, 09:00 +0802').getTime(),50,60),
          },
          {
            name: 'Happy',
            data: dataGeneration(new Date('2021-08-16, 09:00 +0802').getTime(),38,50),
          },
          {
            name: 'Miserable',
            data: dataGeneration(new Date('2021-08-16, 09:00 +0808').getTime(),50,80),
          },
          {
            name: 'Silly/Happier',
            data: dataGeneration(new Date('2021-08-16, 09:00 +0806').getTime(),60,80),
          },
          {
            name: 'Angry',
            data: dataGeneration(new Date('2021-08-16, 09:00 +0803').getTime(),65,80),
          },
          {
            name: 'Frustrated',
            data: dataGeneration(new Date('2021-08-16, 09:00 +0805').getTime(),40,90),
          }
        ],
          options: {
            chart: {
                //height: 350,
                type: 'bubble',
            },
            colors: ['#FAC52B','#F5189A','#2B41E4','#0BB34F','#F5180D','#CD5213'],
            dataLabels: {
                enabled: false
            },
            fill: {
                opacity: 0.8
            },
            title: {
                text: 'Emotions Summarized',
                //offsetX: 40
            },
            grid: {
              show: false,
              xaxis: {
                lines: {
                  show: false,
                }
              },
              yaxis: {
                lines: {
                  show: false,
                }
              },
            },
            xaxis: {
                labels: {
                  show:false,
                },
                //tickAmount: 6,
                type: 'datetime',
                // min: "2021-08-16, 09:00 +0810",
                // max: "2021-08-16, 09:00 +0800",
                show: false,
                // lines: {
                //   show: false
                // }
            },
            yaxis: {
                min:30,
                max:70,
                show: false,
                labels: {
                  show:false,
                },
                // axisBorder: {
                //   show: false
                // },
                // axisTicks: {
                //   show: false,
                // },
                // lines: {
                //   show: false,
                // }
            }
          },
        
        
        };
      }

    

      render() {
        return (
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="bubble" height={500} width={350}/>
            </div>
        );
      }
}

export default Emotion;