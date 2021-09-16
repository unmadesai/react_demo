import React, { Component } from "react";
import Chart from "react-apexcharts";

//var time = 0;

function generateData(time, count, yrange) {
    var i = 0;
    var week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 
                'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

    //data to be changed
    // var intensityM = [56,61,25,37,58,48,36,0,27,0,88,0,78,20];
    // var intensityA = [25,57,0,29,54,45,42,0,77,33,0,0,92,12];
    // var intensityE = [58,20,77,88,10,18,55,27,49,52,18,36,66,98];
    var intensityM = [0,5,6,71,0,0,65,70,0,67,50,0,0,64];
    var intensityA = [6,8,7,0,78,70,67,65,75,68,50,0,64,0];
    var intensityE = [6,2,73,0,58,66,49,0,0,71,50,51,60,50];

    var series = [];
    while (i < count) {
      var x= week[i];
        //var x = 'w' + (i + 1).toString();
      //var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
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
          // {
          //   type: 'scatter',
          //   name: 'Did the event happen',
          //   data: [95,,95,95,95,95,95,95,95,95,95,95,95,95]
          // }
          ],
          options: {
            plotOptions: {
                heatmap: {
                 // useFillColorAsStroke: false,
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
              //type: 'area',
              //stacked:true,
              zoom: {
                enabled: false
              },
              toolbar: {
                show: false
              },
              // sparkline: {
              //   enabled: true
              // }
              // margin: {
              //   bottom: -2,
              // }
              // grid: {
              //   padding: {
              //     left: 0,
              //     right: 0
              //   }
              // }
            },
            legend: {
              horizontalAlign: 'center',
              // margin: {
              //   top: -10,
              // }
              
            },
            dataLabels: {
              enabled: false
            },
            //colors: ["#E70E02"],
            title: {
             text: 'Intensity of symptoms',
              horizontalAlign: 'center',
              // style: {
              //   marginLeft: "1.8em",
              //   marginBottom: "-2em" 
              // } 
              // margin: {
              //   bottom: 0.2,
              // }
            },
            // markers: {
            //   size: [0, 0, 0, 10],
            //   strokeWidth: 0,
            //   hover: {
            //     sizeOffset: 0
            //   }
            // },
            // fill: {
            //   type: ['solid', 'solid', 'solid', 'image'],
            //   image: {
            //       src: ['images/worry_certainty/check.png'],
            //       width: 15,
            //       height: 15
            //     }
            // }
          },
        
        
        };
      }


  render() {
    return (
        <div>
          <div id="chart">
           
            <Chart options={this.state.options} series={this.state.series} type="heatmap" height={200} style={{marginLeft: "1em", marginRight: "-0.5em" }} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
}

export default SymptomIntensity;
