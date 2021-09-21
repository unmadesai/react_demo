import React, { Component } from "react";
import Chart from "react-apexcharts";

function generateData(time, count, yrange) {
    var i = 0;
    var week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 
                'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    //data to be changed
    // var intensityM = [56,61,25,37,58,48,36,0,27,0,88,0,78,20];
    // var intensityA = [25,57,0,29,54,45,42,0,77,33,0,0,92,12];
    // var intensityE = [58,20,77,88,10,18,55,27,49,52,18,36,66,98];
    var intensityM = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var intensityA = [0,0,0,0,0,0,0,0,0,28,0,0,0,0];
    var intensityE = [24,0,0,0,0,0,0,27,0,51,0,0,0,0];

    var series = [];
    while (i < count) {
      var x= week[i];
      var y=0;
      if(time == 0) {
        y = intensityM[i];
      }
      else if(time == 1) {
        y = intensityA[i];
      }
      else if(time == 2) {
        y = intensityE[i];
      }

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
            data: generateData(2, 14, {
              min: 0,
              max: 100
            })
          },
          {
            name: 'Afternoon',
            data: generateData(1, 14, {
              min: 0,
              max: 100
            })
          },
          {
            name: 'Morning',
            data: generateData(0, 14, {
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
              zoom: {
                enabled: false
              },
              toolbar: {
                show: false
              },
            },
            legend: {
              horizontalAlign: 'right',
              fontSize: "14px",     
              marginBottom: "-10em"
            },
            dataLabels: {
              enabled: false
            },
          },       
        };
      }


  render() {
    return (
        <div>
          <div id="chart" style={{marginTop: "-1em"}}>           
            <Chart options={this.state.options} series={this.state.series} type="heatmap" height={200} style={{marginLeft: "1em", marginRight: "-0.5em" }} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
}

export default SymptomIntensity;
