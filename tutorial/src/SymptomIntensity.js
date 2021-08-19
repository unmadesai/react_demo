import React, { Component } from "react";
import Chart from "react-apexcharts";

function generateData(count, yrange) {
    var i = 0;
    var week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var series = [];
    while (i < count) {
      var x= week[i];
        //var x = 'w' + (i + 1).toString();
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    //   console.log(y);
    //   if(y>=0 && y<=20) {

    //   }
      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }

class SymptomIntensity extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
            name: 'Evening',
            data: generateData(7, {
              min: 0,
              max: 100
            })
          },
          {
            name: 'Afternoon',
            data: generateData(7, {
              min: 0,
              max: 100
            })
          },
          {
            name: 'Morning',
            data: generateData(7, {
              min: 0,
              max: 100
            })
          },
          ],
          options: {
            plotOptions: {
                heatmap: {
                  colorScale: {
                    ranges: [{
                        from: 0,
                        to: 20,
                        color: '#FEB2AE',
                        name: 'very low',
                      },
                      {
                        from: 21,
                        to: 40,
                        color: '#FD655D',
                        name: 'low',
                      },
                      {
                        from: 41,
                        to: 60,
                        color: '#E70E02',
                        name: 'medium',
                      },
                      {
                        from: 61,
                        to: 80,
                        color: '#B60B02',
                        name: 'high',
                      },
                      {
                        from: 81,
                        to: 100,
                        color: '#510501',
                        name: 'very high',
                      }
                    ]
                  }
                }
              },
            chart: {
              height: 350,
              type: 'heatmap',
            },
            dataLabels: {
              enabled: false
            },
            //colors: ["#E70E02"],
            title: {
              text: 'Intensity of symptoms'
            },
          },
        
        
        };
      }


  render() {
    return (
        <div>
          <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="heatmap" height={350} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
}

export default SymptomIntensity;
