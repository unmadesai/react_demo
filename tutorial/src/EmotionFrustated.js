import React, { Component } from "react";
import Chart from "react-apexcharts";

class EmotionFrustated extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            //Emotion 1 Frustrated (Orange)
            series: [{
                name: "Frustation",
                data: [10, 41, 35, 51, 49, 62, 69]
            },
            // {
            //     name: "Miserable",
            //     data: [10, 41, 35, 51, 49, 62, 69]
            // }
            ],
            options: {
              chart: {
                height: 350,
                type: 'line',
                zoom: {
                  enabled: false
                }
              },
              yaxis: {
                min: 0,
                max: 100
              },
              dataLabels: {
                enabled: false
              },
              colors: ['#CD5213'],
              stroke: {
                curve: 'straight',
                colors: ['#CD5213', 'transparent'],
              },
              title: {
                text: 'Emotion: Frustration',
                align: 'left'
              },
              grid: {
                row: {
                  //colors: ['#CD5213', 'transparent'], // takes an array which will be repeated on columns
                  opacity: 0.5
                },
              },
              xaxis: {
                categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              }
            },
          
            //Emotion 2 Miserable (Blue)
            series2: [{
                name: "Miserable",
                data: [70, 51, 95, 21, 49, 42, 19]
            } ],
            options2: {
              chart: {
                height: 350,
                type: 'line',
                zoom: {
                  enabled: false
                }
              },
              yaxis: {
                min: 0,
                max: 100
              },
              dataLabels: {
                enabled: false
              },
              colors: ['#2B41E4'],
              stroke: {
                curve: 'straight',
                //colors: ['#CD5213', 'transparent'],
              },
              title: {
                text: 'Emotion: Miserable',
                align: 'left'
              },
            //   grid: {
            //     row: {
            //       //colors: ['#CD5213', 'transparent'], // takes an array which will be repeated on columns
            //       opacity: 0.5
            //     },
            //   },
              xaxis: {
                categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              }
            },

            //Emotion 3 Scared/Worried (Yellow)
            series3: [{
                name: "Scared/Worried",
                data: [20, 41, 55, 71, 59, 22, 19]
            } ],
            options3: {
              chart: {
                height: 350,
                type: 'line',
                zoom: {
                  enabled: false
                }
              },
              yaxis: {
                min: 0,
                max: 100
              },
              dataLabels: {
                enabled: false
              },
              colors: ['#FAC52B'],
              stroke: {
                curve: 'straight',
                //colors: ['#CD5213', 'transparent'],
              },
              title: {
                text: 'Emotion: Scared/Worried',
                align: 'left'
              },
            //   grid: {
            //     row: {
            //       //colors: ['#CD5213', 'transparent'], // takes an array which will be repeated on columns
            //       opacity: 0.5
            //     },
            //   },
              xaxis: {
                categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              }
            },

            //Emotion 4 Happy (Pink)
            series4: [{
                name: "Happy",
                data: [20, 51, 45, 31, 79, 12, 49]
            } ],
            options4: {
              chart: {
                height: 350,
                type: 'line',
                zoom: {
                  enabled: false
                }
              },
              yaxis: {
                min: 0,
                max: 100
              },
              dataLabels: {
                enabled: false
              },
              colors: ['#F5189A'],
              stroke: {
                curve: 'straight',
                //colors: ['#CD5213', 'transparent'],
              },
              title: {
                text: 'Emotion: Happy :)',
                align: 'left'
              },
            //   grid: {
            //     row: {
            //       //colors: ['#CD5213', 'transparent'], // takes an array which will be repeated on columns
            //       opacity: 0.5
            //     },
            //   },
              xaxis: {
                categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              }
            },

            //Emotion 5 Silly/Happier (Green)
            series5: [{
                name: "Silly/Happier than usual",
                data: [50, 21, 15, 31, 19, 52, 59]
            } ],
            options5: {
              chart: {
                height: 350,
                type: 'line',
                zoom: {
                  enabled: false
                }
              },
              yaxis: {
                min: 0,
                max: 100
              },
              dataLabels: {
                enabled: false
              },
              colors: ['#0BB34F'],
              stroke: {
                curve: 'straight',
                //colors: ['#CD5213', 'transparent'],
              },
              title: {
                text: 'Emotion: Silly/Happier than usual ^-^',
                align: 'left'
              },
            //   grid: {
            //     row: {
            //       //colors: ['#CD5213', 'transparent'], // takes an array which will be repeated on columns
            //       opacity: 0.5
            //     },
            //   },
              xaxis: {
                categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              }
            },


            //Emotion 6 Angry (Red)
            series6: [{
                name: "Angry",
                data: [60, 21, 5, 11, 79, 12, 39]
            } ],
            options6: {
              chart: {
                height: 350,
                type: 'line',
                zoom: {
                  enabled: false
                }
              },
              yaxis: {
                min: 0,
                max: 100
              },
              dataLabels: {
                enabled: false
              },
              colors: ['#F5180D'],
              stroke: {
                curve: 'straight',
                //colors: ['#CD5213', 'transparent'],
              },
              title: {
                text: 'Emotion: Angry -_-',
                align: 'left'
              },
            //   grid: {
            //     row: {
            //       //colors: ['#CD5213', 'transparent'], // takes an array which will be repeated on columns
            //       opacity: 0.5
            //     },
            //   },
              xaxis: {
                categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              }
            },

            //EndofEmotions
          
          };
        }

      

        render() {
          return (
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="line" height={350} width={900} />
                <Chart options={this.state.options2} series={this.state.series2} type="line" height={350} width={900} />
                <Chart options={this.state.options3} series={this.state.series3} type="line" height={350} width={900} />
                <Chart options={this.state.options4} series={this.state.series4} type="line" height={350} width={900} />
                <Chart options={this.state.options5} series={this.state.series5} type="line" height={350} width={900} />
                <Chart options={this.state.options6} series={this.state.series6} type="line" height={350} width={900} />
            </div>
          );
        }
}


export default EmotionFrustated;
