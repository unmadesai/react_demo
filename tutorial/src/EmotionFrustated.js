import React, { Component } from "react";
import Chart from "react-apexcharts";

var frusM = [64,63,57,65,70,63,99,100,36,3,2,67,6,0];
var frusA = [61,59,0,23,38,84,77,65,35,4,4,3,0,15];
var frusE = [61,61,0,1,100,79,71,100,18,3,0,0,68,1];

var miserableM = [57,58,0,65,18,69,100,100,59,0,0,0,9,28];
var miserableA = [60,8,0,73,41,0,24,100,35,1,2,1,69,17];
var miserableE = [38,43,0,2,85,75,70,72,17,3,2,3,4,3];

var worriedM = [0,62,61,67,26,73,95,100,23,59,14,62,72,70];
var worriedA = [64,59,0,70,65,64,77,100,26,2,65,64,4,6];
var worriedE = [30,62,61,12,61,81,67,100,22,4,67,1,2,75];

var happyM = [59,61,68,73,29,61,1,0,76,93,66,3,3,69];
var happyA = [59,60,0,57,65,4,100,0,72,62,64,33,6,80];
var happyE = [64,71,59,71,15,0,0,64,92,88,78,30,6,75];

var sillyM = [55,50,0,64,0,0,0,0,0,4,3,2,4,4];
var sillyA = [0,6,0,0,0,0,64,0,1,2,3,0,1,4];
var sillyE = [0,76,0,11,0,0,0,0,0,1,3,1,5,3];

var angryM = [32,39,11,0,21,26,99,69,64,28,8,3,2,89];
var angryA = [0,14,0,23,0,78,0,61,25,18,62,30,3,29];
var angryE = [57,29,66,25,68,68,70,72,24,2,7,1,63,75];

function generateData(emotion) {
  var i = 0;
  var count=14;
  //var emotion = emotion;
  var series = [];
  while (i < count) {
    if(emotion == 1) {
      var y = (frusM[i]+frusA[i]+frusE[i])/3;
      console.log("frustrated");
    }
    else if(emotion == 2) {
      var y = (miserableM[i]+miserableA[i]+miserableE[i])/3;
      console.log("miserable");
    }
    else if(emotion == 3) {
      var y = (worriedM[i]+worriedA[i]+worriedE[i])/3;
      console.log("worried");
    }
    else if(emotion == 4) {
      var y = (happyM[i]+happyA[i]+happyE[i])/3;
      console.log("happy");
    }
    else if(emotion == 5) {
      var y = (sillyM[i]+sillyA[i]+sillyE[i])/3;
      console.log("silly");
    }
    else if(emotion == 6) {
      var y = (angryM[i]+angryA[i]+angryE[i])/3;
      console.log("angry");
    }
    else {
      var y = 0;
      console.log("emotion value is "+ emotion);
    }
    series.push({
      y: parseInt(y)
    });
    i++;
  }
  console.log(series);
  return series;
}

class EmotionFrustated extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            //Emotion 1 Frustrated (Orange)
            series: [{
                name: "Frustation",
                //data: generateData(1)
                //data: [62,61,19,29,69,75,82,88,29,3,2,23,24,5]
                data: [0,5,4,50,0,0,59,76,0,66,66,0,0,50]
            },
            // {
            //     name: "Miserable",
            //     data: [10, 41, 35, 51, 49, 62, 69]
            // }
            ],
            options: {
              chart: {
                //height: 350,
                type: 'line',
                zoom: {
                  enabled: false
                },
                toolbar: {
                  show: false
                }
              },
              yaxis: {
                min: 0,
                max: 100,
                tickAmount: 5,
              },
              dataLabels: {
                enabled: false
              },
              colors: ['#CD5213'],
              stroke: {
                curve: 'straight',
                colors: ['#CD5213', 'transparent'],
                width: 3,
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
                // categories: ['15 Aug', '16 Aug', '17 Aug', '18 Aug', '19 Aug', '20 Aug', '21 Aug', 
                // '22 Aug', '23 Aug', '24 Aug', '25 Aug', '26 Aug', '27 Aug', '28 Aug'],
                categories: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 
                'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
              }
            },
          
            //Emotion 2 Miserable (Blue)
            series2: [{
                name: "Miserable",
                //data: generateData(2),
               //data: [51,36,0,46,48,48,64,90,37,1,1,1,27,16]
               data: [0,5,6,34,0,0,53,50,0,50,50,0,0,50]
            } ],
            options2: {
              chart: {
                height: 350,
                type: 'line',
                zoom: {
                  enabled: false
                },
                toolbar: {
                  show: false
                }
              },
              yaxis: {
                min: 0,
                max: 100,
                tickAmount: 5,
              },
              dataLabels: {
                enabled: false
              },
              colors: ['#2B41E4'],
              stroke: {
                curve: 'straight',
                //colors: ['#CD5213', 'transparent'],
                width: 3,
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
                // categories: ['15 Aug', '16 Aug', '17 Aug', '18 Aug', '19 Aug', '20 Aug', '21 Aug', 
                // '22 Aug', '23 Aug', '24 Aug', '25 Aug', '26 Aug', '27 Aug', '28 Aug'],
                categories: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 
                'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
              }
            },
            
            //Emotion 3 Scared/Worried (Yellow)
            series3: [{
                name: "Scared/Worried",
                //data: generateData(3),
                //data: [31,61,40,49,50,72,79,100,23,21,48,42,26,50]
                data: [0,5,4,71,0,0,55,68,0,66,72,0,0,66]
            } ],
            options3: {
              chart: {
                height: 350,
                type: 'line',
                zoom: {
                  enabled: false
                },
                toolbar: {
                  show: false
                }
              },
              yaxis: {
                min: 0,
                max: 100,
                tickAmount: 5,
              },
              dataLabels: {
                enabled: false
              },
              colors: ['#FAC52B'],
              stroke: {
                curve: 'straight',
                //colors: ['#CD5213', 'transparent'],
                width: 3,
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
                // categories: ['15 Aug', '16 Aug', '17 Aug', '18 Aug', '19 Aug', '20 Aug', '21 Aug', 
                // '22 Aug', '23 Aug', '24 Aug', '25 Aug', '26 Aug', '27 Aug', '28 Aug'],
                categories: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 
                'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
              }
            },

            //Emotion 4 Happy (Pink)
            series4: [{
                name: "Happy",
                //data: generateData(4),
                //data: [60,64,42,67,36,21,33,21,80,81,69,22,5,74]
                data: [0,7,6,73,0,0,50,0,0,50,50,0,0,67]
            } ],
            options4: {
              chart: {
                height: 350,
                type: 'line',
                zoom: {
                  enabled: false
                },
                toolbar: {
                  show: false
                }
              },
              yaxis: {
                min: 0,
                max: 100,
                tickAmount: 5,
              },
              dataLabels: {
                enabled: false
              },
              colors: ['#F5189A'],
              stroke: {
                curve: 'straight',
                //colors: ['#CD5213', 'transparent'],
                width: 3,
              },
              title: {
                text: 'Emotion: Happy',
                align: 'left'
              },
            //   grid: {
            //     row: {
            //       //colors: ['#CD5213', 'transparent'], // takes an array which will be repeated on columns
            //       opacity: 0.5
            //     },
            //   },
              xaxis: {
                // categories: ['15 Aug', '16 Aug', '17 Aug', '18 Aug', '19 Aug', '20 Aug', '21 Aug', 
                // '22 Aug', '23 Aug', '24 Aug', '25 Aug', '26 Aug', '27 Aug', '28 Aug'],
                categories: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 
                'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
              }
            },

            //Emotion 5 Silly/Happier (Green)
            series5: [{
                name: "Silly/Happier than usual",
               // data: generateData(5)
               //data: [18,44,0,25,0,0,21,0,0,2,1,3,3,3]
               data: [0,5,4,64,0,0,26,50,0,50,50,0,0,50]
            } ],
            options5: {
              chart: {
                height: 350,
                type: 'line',
                zoom: {
                  enabled: false
                },
                toolbar: {
                  show: false
                }
              },
              yaxis: {
                min: 0,
                max: 100,
                tickAmount: 5,
              },
              dataLabels: {
                enabled: false
              },
              colors: ['#0BB34F'],
              stroke: {
                curve: 'straight',
                width: 3,
                //colors: ['#CD5213', 'transparent'],
              },
              title: {
                text: 'Emotion: Silly/Happier than usual',
                align: 'left'
              },
            //   grid: {
            //     row: {
            //       //colors: ['#CD5213', 'transparent'], // takes an array which will be repeated on columns
            //       opacity: 0.5
            //     },
            //   },
              xaxis: {
                // categories: ['15 Aug', '16 Aug', '17 Aug', '18 Aug', '19 Aug', '20 Aug', '21 Aug', 
                // '22 Aug', '23 Aug', '24 Aug', '25 Aug', '26 Aug', '27 Aug', '28 Aug'],
                categories: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 
                'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
              }
            },


            //Emotion 6 Angry (Red)
            series6: [{
                name: "Angry",
                //data: generateData(6),
                //data: [29,27,25,16,29,57,56,67,37,16,25,11,22,64]
                data: [0,4,3,37,0,0,56,50,0,50,50,0,0,50]
                
            } ],
            
            options6: {
              chart: {
                height: 350,
                type: 'line',
                zoom: {
                  enabled: false
                },
                toolbar: {
                  show: false
                }
              },
              yaxis: {
                min: 0,
                max: 100,
                tickAmount: 5,
              },
              dataLabels: {
                enabled: false
              },
              colors: ['#F5180D'],
              stroke: {
                curve: 'straight',
                width: 3,
                //colors: ['#CD5213', 'transparent'],
              },
              title: {
                text: 'Emotion: Angry',
                align: 'left'
              },
            //   grid: {
            //     row: {
            //       //colors: ['#CD5213', 'transparent'], // takes an array which will be repeated on columns
            //       opacity: 0.5
            //     },
            //   },
              xaxis: {
                // categories: ['15 Aug', '16 Aug', '17 Aug', '18 Aug', '19 Aug', '20 Aug', '21 Aug', 
                // '22 Aug', '23 Aug', '24 Aug', '25 Aug', '26 Aug', '27 Aug', '28 Aug'],
                categories: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 
                'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
              }
            },

            //EndofEmotions
          
          };
        }
      

        render() {
          return (
            
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="line" height={250} width={300}/>
                <Chart options={this.state.options2} series={this.state.series2} type="line" height={250} width={300} />
                <Chart options={this.state.options3} series={this.state.series3} type="line" height={250} width={300} />
                <Chart options={this.state.options4} series={this.state.series4} type="line" height={250} width={300}/>
                <Chart options={this.state.options5} series={this.state.series5} type="line" height={250} width={300}/>
                <Chart options={this.state.options6} series={this.state.series6} type="line" height={250} width={300}/>
            </div>
            
          );
        }
}


export default EmotionFrustated;
