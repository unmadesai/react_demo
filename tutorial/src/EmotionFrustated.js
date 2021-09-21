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
                //data: [62,61,19,29,69,75,82,88,29,3,2,23,24,5]
                data: [50,64,33,67,26,32,59,70,67,93,72,66,32,23]
            },
            ],
            options: {
              chart: {
                type: 'line',
                zoom: {
                  enabled: false
                },
                toolbar: {
                  show: false
                },
                background: '#ffffff',
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
                  opacity: 0.5
                },
              },
              xaxis: {
                categories: ['Su', 'M', 'T', 'W', 'Th', 'F', 'S', 
                 'Su', 'M', 'T', 'W', 'Th', 'F', 'S'],
              }
            },
          
            //Emotion 2 Miserable (Blue)
            series2: [{
                name: "Miserable",
               data: [50,64,30,66,28,23,26,31,60,94,63,62,67,21]
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
                },
                background: '#ffffff',
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
                width: 3,
              },
              title: {
                text: 'Emotion: Miserable',
                align: 'left'
              },
              xaxis: {
                categories: ['Su', 'M', 'T', 'W', 'Th', 'F', 'S', 
                 'Su', 'M', 'T', 'W', 'Th', 'F', 'S'],
              }
            },
            
            //Emotion 3 Scared/Worried (Yellow)
            series3: [{
                name: "Scared/Worried",
                data: [50,24,31,30,22,27,24,12,64,82,57,55,35,25]
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
                },
                background: '#ffffff',
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
                width: 3,
              },
              title: {
                text: 'Emotion: Scared/Worried',
                align: 'left'
              },
              xaxis: {
                categories: ['Su', 'M', 'T', 'W', 'Th', 'F', 'S', 
                 'Su', 'M', 'T', 'W', 'Th', 'F', 'S'],
              }
            },

            //Emotion 4 Happy (Pink)
            series4: [{
                name: "Happy",
                data: [50,50,31,50,61,50,29,25,65,13,30,32,24,65]
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
                },
                background: '#ffffff',
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
                width: 3,
              },
              title: {
                text: 'Emotion: Happy',
                align: 'left'
              },
              xaxis: {
                categories: ['Su', 'M', 'T', 'W', 'Th', 'F', 'S', 
                 'Su', 'M', 'T', 'W', 'Th', 'F', 'S'],
              }

            },

            //Emotion 6 Angry (Red)
            series6: [{
                name: "Angry",
                data: [50,50,29,31,32,31,25,28,64,82,56,20,25,28]
                
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
                },
                background: '#ffffff',
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
              },
              title: {
                text: 'Emotion: Angry',
                align: 'left'
              },
              xaxis: {
                categories: ['Su', 'M', 'T', 'W', 'Th', 'F', 'S', 
                 'Su', 'M', 'T', 'W', 'Th', 'F', 'S'],
              }
            },

            //EndofEmotions
          
          };
        }
      

        render() {
          return (
            
            <div id="chart" style={{display: "inline-block"}}>
                <Chart options={this.state.options} series={this.state.series} type="line" height={250} width={300}/>
                <Chart options={this.state.options2} series={this.state.series2} type="line" height={250} width={300} />
                <Chart options={this.state.options3} series={this.state.series3} type="line" height={250} width={300} />
                <Chart options={this.state.options4} series={this.state.series4} type="line" height={250} width={300}/>
                <Chart options={this.state.options6} series={this.state.series6} type="line" height={250} width={300}/>
            </div>
            
          );
        }
}


export default EmotionFrustated;
