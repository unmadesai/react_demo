import React, { Component } from "react";
import Chart from "react-apexcharts";

function generateData(count, yrange) {
    var i = 0;
    var week = ['15 Aug', '16 Aug', '17 Aug', '18 Aug', '19 Aug', '20 Aug', '21 Aug', 
    '22 Aug', '23 Aug', '24 Aug', '25 Aug', '26 Aug', '27 Aug', '28 Aug'];
    var intensity = [76,79,72,100,100,100,100,100,100,74,78,88,91,98];
    var series = [];
    while (i < count) {
      var x= week[i];
        //var x = 'w' + (i + 1).toString();
      //var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var y = intensity[i];
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

class WorryIntensity extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [
          {
            name: 'Morning',
            data: generateData(14, {
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
                        color: '#BFD7F2',
                        name: 'very low',
                      },
                      {
                        from: 21,
                        to: 40,
                        color: '#80B6F2',
                        name: 'low',
                      },
                      {
                        from: 41,
                        to: 60,
                        color: '#1D2FE8',
                        name: 'medium',
                      },
                      {
                        from: 61,
                        to: 80,
                        color: '#000B85',
                        name: 'high',
                      },
                      {
                        from: 81,
                        to: 100,
                        color: '#000538',
                        name: 'very high',
                      }
                    ]
                  }
                }
              },
            chart: {
              height: 350,
              type: 'heatmap',
              zoom: {
                enabled: false
              },
              toolbar: {
                show: false
              }
            },
            dataLabels: {
              enabled: false
            },
            legend: {
              show: true,
            },
            //colors: ["#E70E02"],
            title: {
              text: 'Intensity of worries'
            },
          },
        
        
        };
      }


  render() {
    return (
        <div>
          <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="heatmap" height={120} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
}

export default WorryIntensity;
