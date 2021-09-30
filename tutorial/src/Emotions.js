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

class Emotion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        
        series: [{
          name: 'Worried/Scared',
          data: dataGeneration(15,70,80),
        },
        {
          name: 'Happy',
          data: dataGeneration(30,40,60),
        },
        {
          name: 'Miserable',
          data: dataGeneration(60,30,60),
        },
        {
          name: 'Angry',
          data: dataGeneration(50,70,50),
        },
        {
          name: 'Frustrated',
          data: dataGeneration(80,75,60),
        }
      ],



          options: {
            chart: {
                type: 'bubble',
                //background: '#ffffff',
                zoom: {
                  enabled: false
                },
                toolbar: {
                  show: false
                },
            },
            colors: ['#369DF7','#FFC107','#036B69','#5D3D82','#E03A1C'],
            dataLabels: {
                enabled: false
            },
            fill: {
                opacity: 1
            },
            legend: {
              position: 'top',
              horizontalAlign: 'right',
              fontSize: "14px",
            },
            grid: {
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
                show: false,
                min: 0,
                max:100,
                labels: {
                  show:false,
                },
                type: 'numeric',
                
            },
            yaxis: {
                min:10,
                max:90,
                labels: {
                  show:false,
                },
            }
          },
        };
      }

      render() {
        return (
            <div id="chart" style={{marginTop: "0.5em"}}>
              <br></br>
                <Chart options={this.state.options} series={this.state.series} type="bubble" height={300} width={500}/>
            </div>
        );
      }
}

export default Emotion;