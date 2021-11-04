import React, { Component } from "react";
import Chart from "react-apexcharts";

function dataGeneration(x,y,z) {
  var series = [];
  var x=x;
  var y=y;
  var z=z;
  series.push([x,y,z]);
  return series;
  }

class EmotionDetailed extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            //Emotion 1 Frustrated (Orange)
            series1: [
              
              // {
              //   name: 'Worried/Scared Bubble',
              //   type: "bubble",
              //   data: dataGeneration(new Date('2021-08-16, 09:00 +0800').getTime(),50,10),
              // },

              {
                name: "Frustation",
                type: "line",
                //data: [62,61,19,29,69,75,82,88,29,3,2,23,24,5]
                //data: [0,5,4,50,0,0,59,76,66,66,0,0,50]
                data: [
                [new Date('2021-08-15, 09:00 +0800').getTime(),0],
                [new Date('2021-08-15, 14:00 +0800').getTime(),28],
                [new Date('2021-08-15, 19:00 +0800').getTime(),15],

                [new Date('2021-08-16, 09:00 +0800').getTime(),5], 
                [new Date('2021-08-16, 14:00 +0800').getTime(),40],
                [new Date('2021-08-16, 19:00 +0800').getTime(),26], 

                [new Date('2021-08-17, 09:00 +0800').getTime(),4], 
                [new Date('2021-08-17, 14:00 +0800').getTime(),13], 
                [new Date('2021-08-17, 19:00 +0800').getTime(),15], 

                [new Date('2021-08-18, 09:00 +0800').getTime(),50], 
                [new Date('2021-08-18, 14:00 +0800').getTime(),20],
                [new Date('2021-08-18, 19:00 +0800').getTime(),40], 

                [new Date('2021-08-19, 09:00 +0800').getTime(),0], 
                [new Date('2021-08-19, 14:00 +0800').getTime(),10], 
                [new Date('2021-08-19, 19:00 +0800').getTime(),63], 

                [new Date('2021-08-20, 09:00 +0800').getTime(),0], 
                [new Date('2021-08-20, 14:00 +0800').getTime(),27], 
                [new Date('2021-08-20, 19:00 +0800').getTime(),21], 

                [new Date('2021-08-21, 09:00 +0800').getTime(),19],
                [new Date('2021-08-21, 14:00 +0800').getTime(),29],
                [new Date('2021-08-21, 19:00 +0800').getTime(),36],

                [new Date('2021-08-22, 09:00 +0800').getTime(),46],
                [new Date('2021-08-22, 14:00 +0800').getTime(),24],
                [new Date('2021-08-22, 19:00 +0800').getTime(),50],

                [new Date('2021-08-23, 09:00 +0800').getTime(),0],
                [new Date('2021-08-23, 14:00 +0800').getTime(),20],
                [new Date('2021-08-23, 19:00 +0800').getTime(),0],

                [new Date('2021-08-24, 09:00 +0800').getTime(),46],
                [new Date('2021-08-24, 14:00 +0800').getTime(),0],
                [new Date('2021-08-24, 19:00 +0800').getTime(),20],

                [new Date('2021-08-25, 09:00 +0800').getTime(),56],
                [new Date('2021-08-25, 14:00 +0800').getTime(),20],
                [new Date('2021-08-25, 19:00 +0800').getTime(),20],

                [new Date('2021-08-26, 09:00 +0800').getTime(),0],
                [new Date('2021-08-26, 14:00 +0800').getTime(),15],
                [new Date('2021-08-26, 19:00 +0800').getTime(),20],

                [new Date('2021-08-27, 09:00 +0800').getTime(),0],
                [new Date('2021-08-27, 14:00 +0800').getTime(),22],
                [new Date('2021-08-27, 19:00 +0800').getTime(),0],

                [new Date('2021-08-28, 09:00 +0800').getTime(),50],
                [new Date('2021-08-28, 14:00 +0800').getTime(),0],
                [new Date('2021-08-28, 19:00 +0800').getTime(),39]]
                     
              },
              {
                name: 'Frustration Summarized',
                type: "bubble",
                data: dataGeneration(new Date('2021-08-16, 09:00 +0800').getTime(),50,24/2),
              },

              
               
          ],
            options1: {
              chart: {
                type: 'line',
                zoom: {
                  enabled: false
                },
                toolbar: {
                  show: false
                },
                //background: null,
              },
              legend: {
                show: false,
              },
              yaxis: {
                min: 0,
                max: 100,
                tickAmount: 4,
                labels: {
                  formatter: function (y) {
                    if(y<100 && y>0) {
                      return "";
                    }
                    else if(y==0) {
                      return "Not At All";
                    }
                    else if(y==100) {
                      return "Extremely";
                    }
                  }
                },
              },
              dataLabels: {
                enabled: false
              },
              colors: ['#5D3D82'],
              stroke: {
                curve: 'straight',
                colors: ['#5D3D82'],
                width: 2,
              },
              // grid: {
              //   row: {
              //     opacity: 0
              //   },
              // },
              xaxis: {
                type: "datetime",
                show: false,
                labels: {
                    show:false,
                    datetimeUTC: false,
                },
              }
            },


            //Emotion 2 Miserable (Blue)
            series2: [{
                name: "Miserable",
                type: "line",
                //data: [62,61,19,29,69,75,82,88,29,3,2,23,24,5]
                //data: [0,5,4,50,0,0,59,76,66,66,0,0,50]
                data: [
                [new Date('2021-08-15, 09:00 +0800').getTime(),0],
                [new Date('2021-08-15, 14:00 +0800').getTime(),15],
                [new Date('2021-08-15, 19:00 +0800').getTime(),12],

                [new Date('2021-08-16, 09:00 +0800').getTime(),5], 
                [new Date('2021-08-16, 14:00 +0800').getTime(),50],
                [new Date('2021-08-16, 19:00 +0800').getTime(),16], 

                [new Date('2021-08-17, 09:00 +0800').getTime(),6], 
                [new Date('2021-08-17, 14:00 +0800').getTime(),53], 
                [new Date('2021-08-17, 19:00 +0800').getTime(),21], 

                [new Date('2021-08-18, 09:00 +0800').getTime(),34], 
                [new Date('2021-08-18, 14:00 +0800').getTime(),42],
                [new Date('2021-08-18, 19:00 +0800').getTime(),50], 

                [new Date('2021-08-19, 09:00 +0800').getTime(),0], 
                [new Date('2021-08-19, 14:00 +0800').getTime(),65], 
                [new Date('2021-08-19, 19:00 +0800').getTime(),73], 

                [new Date('2021-08-20, 09:00 +0800').getTime(),0], 
                [new Date('2021-08-20, 14:00 +0800').getTime(),10], 
                [new Date('2021-08-20, 19:00 +0800').getTime(),41], 

                [new Date('2021-08-21, 09:00 +0800').getTime(),53],
                [new Date('2021-08-21, 14:00 +0800').getTime(),29],
                [new Date('2021-08-21, 19:00 +0800').getTime(),36],

                [new Date('2021-08-22, 09:00 +0800').getTime(),50],
                [new Date('2021-08-22, 14:00 +0800').getTime(),24],
                [new Date('2021-08-22, 19:00 +0800').getTime(),50],

                [new Date('2021-08-23, 09:00 +0800').getTime(),0],
                [new Date('2021-08-23, 14:00 +0800').getTime(),41],
                [new Date('2021-08-23, 19:00 +0800').getTime(),0],

                [new Date('2021-08-24, 09:00 +0800').getTime(),50],
                [new Date('2021-08-24, 14:00 +0800').getTime(),0],
                [new Date('2021-08-24, 19:00 +0800').getTime(),20],

                [new Date('2021-08-25, 09:00 +0800').getTime(),50],
                [new Date('2021-08-25, 14:00 +0800').getTime(),55],
                [new Date('2021-08-25, 19:00 +0800').getTime(),50],

                [new Date('2021-08-26, 09:00 +0800').getTime(),0],
                [new Date('2021-08-26, 14:00 +0800').getTime(),20],
                [new Date('2021-08-26, 19:00 +0800').getTime(),60],

                [new Date('2021-08-27, 09:00 +0800').getTime(),0],
                [new Date('2021-08-27, 14:00 +0800').getTime(),66],
                [new Date('2021-08-27, 19:00 +0800').getTime(),0],

                [new Date('2021-08-28, 09:00 +0800').getTime(),50],
                [new Date('2021-08-28, 14:00 +0800').getTime(),0],
                [new Date('2021-08-28, 19:00 +0800').getTime(),69]]
                     
              },

              {
                name: 'Miserable Summarized',
                type: "bubble",
                data: dataGeneration(new Date('2021-08-16, 09:00 +0800').getTime(),50,34/2),
              },
          
            ],
            options2: {
              chart: {
                type: 'line',
                zoom: {
                  enabled: false
                },
                toolbar: {
                  show: false
                },
              },
              yaxis: {
                min: 0,
                max: 100,
                tickAmount: 4,
                labels: {
                  formatter: function (y) {
                    if(y<100 && y>0) {
                      return "";
                    }
                    else if(y==0) {
                      return "Not At All";
                    }
                    else if(y==100) {
                      return "Extremely";
                    }
                  }
                },
              },
              legend: {
                show: false,
              },
              dataLabels: {
                enabled: false
              },
              colors: ['#036B69'],
              stroke: {
                curve: 'straight',
                colors: ['#036B69'],
                width: 2,
              },
              grid: {
                row: {
                  opacity: 0.5
                },
              },
              xaxis: {
                type: "datetime",
                show: false,
                labels: {
                    show:false,
                    datetimeUTC: false,
                },
              }
            },


             //Emotion 3 Scared/Worried (Yellow)
            series3: [{
                name: "Scared/Worried",
                type: "line",
                //data: [62,61,19,29,69,75,82,88,29,3,2,23,24,5]
                //data: [0,5,4,50,0,0,59,76,66,66,0,0,50]
                data: [
                [new Date('2021-08-15, 09:00 +0800').getTime(),0],
                [new Date('2021-08-15, 14:00 +0800').getTime(),26],
                [new Date('2021-08-15, 19:00 +0800').getTime(),45],

                [new Date('2021-08-16, 09:00 +0800').getTime(),5], 
                [new Date('2021-08-16, 14:00 +0800').getTime(),50],
                [new Date('2021-08-16, 19:00 +0800').getTime(),15], 

                [new Date('2021-08-17, 09:00 +0800').getTime(),4], 
                [new Date('2021-08-17, 14:00 +0800').getTime(),53], 
                [new Date('2021-08-17, 19:00 +0800').getTime(),21], 

                [new Date('2021-08-18, 09:00 +0800').getTime(),71], 
                [new Date('2021-08-18, 14:00 +0800').getTime(),20],
                [new Date('2021-08-18, 19:00 +0800').getTime(),50], 

                [new Date('2021-08-19, 09:00 +0800').getTime(),0], 
                [new Date('2021-08-19, 14:00 +0800').getTime(),10], 
                [new Date('2021-08-19, 19:00 +0800').getTime(),54], 

                [new Date('2021-08-20, 09:00 +0800').getTime(),0], 
                [new Date('2021-08-20, 14:00 +0800').getTime(),11], 
                [new Date('2021-08-20, 19:00 +0800').getTime(),41], 

                [new Date('2021-08-21, 09:00 +0800').getTime(),55],
                [new Date('2021-08-21, 14:00 +0800').getTime(),41],
                [new Date('2021-08-21, 19:00 +0800').getTime(),36],

                [new Date('2021-08-22, 09:00 +0800').getTime(),68],
                [new Date('2021-08-22, 14:00 +0800').getTime(),88],
                [new Date('2021-08-22, 19:00 +0800').getTime(),85],

                [new Date('2021-08-23, 09:00 +0800').getTime(),0],
                [new Date('2021-08-23, 14:00 +0800').getTime(),51],
                [new Date('2021-08-23, 19:00 +0800').getTime(),45],

                [new Date('2021-08-24, 09:00 +0800').getTime(),66],
                [new Date('2021-08-24, 14:00 +0800').getTime(),0],
                [new Date('2021-08-24, 19:00 +0800').getTime(),20],

                [new Date('2021-08-25, 09:00 +0800').getTime(),72],
                [new Date('2021-08-25, 14:00 +0800').getTime(),20],
                [new Date('2021-08-25, 19:00 +0800').getTime(),41],

                [new Date('2021-08-26, 09:00 +0800').getTime(),0],
                [new Date('2021-08-26, 14:00 +0800').getTime(),1],
                [new Date('2021-08-26, 19:00 +0800').getTime(),66],

                [new Date('2021-08-27, 09:00 +0800').getTime(),0],
                [new Date('2021-08-27, 14:00 +0800').getTime(),22],
                [new Date('2021-08-27, 19:00 +0800').getTime(),0],

                [new Date('2021-08-28, 09:00 +0800').getTime(),66],
                [new Date('2021-08-28, 14:00 +0800').getTime(),0],
                [new Date('2021-08-28, 19:00 +0800').getTime(),69]]
                     
              },
              {
                name: 'Scared Summarized',
                type: "bubble",
                data: dataGeneration(new Date('2021-08-16, 09:00 +0800').getTime(),50,43/2),
              },

          ],
            options3: {
              chart: {
                type: 'line',
                zoom: {
                  enabled: false
                },
                toolbar: {
                  show: false
                },
              },
              yaxis: {
                min: 0,
                max: 100,
                tickAmount: 4,
                labels: {
                  formatter: function (y) {
                    if(y<100 && y>0) {
                      return "";
                    }
                    else if(y==0) {
                      return "Not At All";
                    }
                    else if(y==100) {
                      return "Extremely";
                    }
                  }
                },
              },
              dataLabels: {
                enabled: false
              },
              legend: {
                show: false,
              },
              colors: ['#369DF7'],
              stroke: {
                curve: 'straight',
                colors: ['#369DF7', 'transparent'],
                width: 2,
              },
              grid: {
                row: {
                  opacity: 0.5
                },
              },
              xaxis: {
                type: "datetime",
                show: false,
                labels: {
                    show:false,
                    datetimeUTC: false,
                },
              }
            },

            //Emotion 4 Happy (Pink)
            series4: [{
                name: "Happy",
                type: "line",
                //data: [62,61,19,29,69,75,82,88,29,3,2,23,24,5]
                //data: [0,5,4,50,0,0,59,76,66,66,0,0,50]
                data: [
                [new Date('2021-08-15, 09:00 +0800').getTime(),0],
                [new Date('2021-08-15, 14:00 +0800').getTime(),62],
                [new Date('2021-08-15, 19:00 +0800').getTime(),44],

                [new Date('2021-08-16, 09:00 +0800').getTime(),7], 
                [new Date('2021-08-16, 14:00 +0800').getTime(),55],
                [new Date('2021-08-16, 19:00 +0800').getTime(),64], 

                [new Date('2021-08-17, 09:00 +0800').getTime(),76], 
                [new Date('2021-08-17, 14:00 +0800').getTime(),45], 
                [new Date('2021-08-17, 19:00 +0800').getTime(),61], 

                [new Date('2021-08-18, 09:00 +0800').getTime(),73], 
                [new Date('2021-08-18, 14:00 +0800').getTime(),20],
                [new Date('2021-08-18, 19:00 +0800').getTime(),62], 

                [new Date('2021-08-19, 09:00 +0800').getTime(),10], 
                [new Date('2021-08-19, 14:00 +0800').getTime(),50], 
                [new Date('2021-08-19, 19:00 +0800').getTime(),83], 

                [new Date('2021-08-20, 09:00 +0800').getTime(),20], 
                [new Date('2021-08-20, 14:00 +0800').getTime(),87], 
                [new Date('2021-08-20, 19:00 +0800').getTime(),61], 

                [new Date('2021-08-21, 09:00 +0800').getTime(),50],
                [new Date('2021-08-21, 14:00 +0800').getTime(),81],
                [new Date('2021-08-21, 19:00 +0800').getTime(),65],

                [new Date('2021-08-22, 09:00 +0800').getTime(),30],
                [new Date('2021-08-22, 14:00 +0800').getTime(),55],
                [new Date('2021-08-22, 19:00 +0800').getTime(),40],

                [new Date('2021-08-23, 09:00 +0800').getTime(),30],
                [new Date('2021-08-23, 14:00 +0800').getTime(),60],
                [new Date('2021-08-23, 19:00 +0800').getTime(),40],

                [new Date('2021-08-24, 09:00 +0800').getTime(),67],
                [new Date('2021-08-24, 14:00 +0800').getTime(),60],
                [new Date('2021-08-24, 19:00 +0800').getTime(),30],

                [new Date('2021-08-25, 09:00 +0800').getTime(),50],
                [new Date('2021-08-25, 14:00 +0800').getTime(),85],
                [new Date('2021-08-25, 19:00 +0800').getTime(),50],

                [new Date('2021-08-26, 09:00 +0800').getTime(),40],
                [new Date('2021-08-26, 14:00 +0800').getTime(),60],
                [new Date('2021-08-26, 19:00 +0800').getTime(),25],

                [new Date('2021-08-27, 09:00 +0800').getTime(),0],
                [new Date('2021-08-27, 14:00 +0800').getTime(),66],
                [new Date('2021-08-27, 19:00 +0800').getTime(),0],

                [new Date('2021-08-28, 09:00 +0800').getTime(),67],
                [new Date('2021-08-28, 14:00 +0800').getTime(),57],
                [new Date('2021-08-28, 19:00 +0800').getTime(),11]]
                     
              },

              {
                name: 'Happy Summarized',
                type: "bubble",
                data: dataGeneration(new Date('2021-08-16, 09:00 +0800').getTime(),50,54/2),
              },
          ],
            options4: {
              chart: {
                type: 'line',
                zoom: {
                  enabled: false
                },
                toolbar: {
                  show: false
                },
              },
              yaxis: {
                min: 0,
                max: 100,
                tickAmount: 4,
                labels: {
                  formatter: function (y) {
                    if(y<100 && y>0) {
                      return "";
                    }
                    else if(y==0) {
                      return "Not At All";
                    }
                    else if(y==100) {
                      return "Extremely";
                    }
                  }
                },
              },
              legend: {
                show: false,
              },
              dataLabels: {
                enabled: false
              },
              colors: ['#FFC107'],
              stroke: {
                curve: 'straight',
                colors: ['#FFC107', 'transparent'],
                width: 2,
              },
              grid: {
                row: {
                  opacity: 0.5
                },
              },
              xaxis: {
                type: "datetime",
                show: false,
                labels: {
                    show:false,
                    datetimeUTC: false,
                },
              }
            },

            //Emotion 5 Angry (Red)
            series5: [{
                name: "Angry",
                type: "line",
                //data: [62,61,19,29,69,75,82,88,29,3,2,23,24,5]
                //data: [0,5,4,50,0,0,59,76,66,66,0,0,50]
                data: [
                [new Date('2021-08-15, 09:00 +0800').getTime(),0],
                [new Date('2021-08-15, 14:00 +0800').getTime(),26],
                [new Date('2021-08-15, 19:00 +0800').getTime(),4],

                [new Date('2021-08-16, 09:00 +0800').getTime(),4], 
                [new Date('2021-08-16, 14:00 +0800').getTime(),88],
                [new Date('2021-08-16, 19:00 +0800').getTime(),16], 

                [new Date('2021-08-17, 09:00 +0800').getTime(),3], 
                [new Date('2021-08-17, 14:00 +0800').getTime(),0], 
                [new Date('2021-08-17, 19:00 +0800').getTime(),21], 

                [new Date('2021-08-18, 09:00 +0800').getTime(),37], 
                [new Date('2021-08-18, 14:00 +0800').getTime(),74],
                [new Date('2021-08-18, 19:00 +0800').getTime(),1], 

                [new Date('2021-08-19, 09:00 +0800').getTime(),0], 
                [new Date('2021-08-19, 14:00 +0800').getTime(),41], 
                [new Date('2021-08-19, 19:00 +0800').getTime(),22], 

                [new Date('2021-08-20, 09:00 +0800').getTime(),0], 
                [new Date('2021-08-20, 14:00 +0800').getTime(),54], 
                [new Date('2021-08-20, 19:00 +0800').getTime(),44], 

                [new Date('2021-08-21, 09:00 +0800').getTime(),56],
                [new Date('2021-08-21, 14:00 +0800').getTime(),29],
                [new Date('2021-08-21, 19:00 +0800').getTime(),36],

                [new Date('2021-08-22, 09:00 +0800').getTime(),50],
                [new Date('2021-08-22, 14:00 +0800').getTime(),24],
                [new Date('2021-08-22, 19:00 +0800').getTime(),25],

                [new Date('2021-08-23, 09:00 +0800').getTime(),0],
                [new Date('2021-08-23, 14:00 +0800').getTime(),25],
                [new Date('2021-08-23, 19:00 +0800').getTime(),0],

                [new Date('2021-08-24, 09:00 +0800').getTime(),50],
                [new Date('2021-08-24, 14:00 +0800').getTime(),4],
                [new Date('2021-08-24, 19:00 +0800').getTime(),20],

                [new Date('2021-08-25, 09:00 +0800').getTime(),50],
                [new Date('2021-08-25, 14:00 +0800').getTime(),78],
                [new Date('2021-08-25, 19:00 +0800').getTime(),52],

                [new Date('2021-08-26, 09:00 +0800').getTime(),0],
                [new Date('2021-08-26, 14:00 +0800').getTime(),44],
                [new Date('2021-08-26, 19:00 +0800').getTime(),60],

                [new Date('2021-08-27, 09:00 +0800').getTime(),0],
                [new Date('2021-08-27, 14:00 +0800').getTime(),45],
                [new Date('2021-08-27, 19:00 +0800').getTime(),0],

                [new Date('2021-08-28, 09:00 +0800').getTime(),50],
                [new Date('2021-08-28, 14:00 +0800').getTime(),0],
                [new Date('2021-08-28, 19:00 +0800').getTime(),10]]
                     
              },
              {
                name: 'Angry Summarized',
                type: "bubble",
                data: dataGeneration(new Date('2021-08-16, 09:00 +0800').getTime(),50,33/2),
              },
          ],
            options5: {
              chart: {
                type: 'line',
                zoom: {
                  enabled: false
                },
                toolbar: {
                  show: false
                },
              },
              legend: {
                position: 'top',
                fontSize: "14px",
                horizontalAlign: 'right',
              },
              legend: {
                show: false,
              },
              yaxis: {
                min: 0,
                max: 100,
                tickAmount: 4,
                labels: {
                  formatter: function (y) {
                    if(y<100 && y>0) {
                      return "";
                    }
                    else if(y==0) {
                      return "Not At All";
                    }
                    else if(y==100) {
                      return "Extremely";
                    }
                  }
                },
              },
              dataLabels: {
                enabled: false
              },
              colors: ['#E03A1C'],
              stroke: {
                curve: 'straight',
                colors: ['#E03A1C', 'transparent'],
                width: 2,
              },
              grid: {
                row: {
                  opacity: 0.5
                },
              },
              xaxis: {
                type: "datetime",
                show: false,
                labels: {
                    show:false,
                    datetimeUTC: false,
                },
              }
            },
          
            
          
          };
        }
      

        render() {
          return (
          <div>
            <div>
              <table style={{marginRight: "0.7em", position: "relative", float: "right", marginTop: "-1.2em"}}>
                <tr>
                  <td class="">
                      <p style={{marginTop: "0em", marginBottom: "-1em", padding: "0.1em"}}><img src='images/emotions/worried.png' height='16px' width='16px' 
                            style={{verticalAlign: "-3px"}}/> Worried/Scared </p>
                    </td>
                    <td class="">
                        <p style={{marginTop: "0em", marginBottom: "-1em", padding: "0.1em"}}><img src='images/emotions/happy.png' height='16px' width='16px' 
                            style={{verticalAlign: "-3px"}}/> Happy </p>
                    </td>
                    <td class="">
                        <p style={{marginTop: "0em", marginBottom: "-1em", padding: "0.1em"}}><img src='images/emotions/miserable.png' height='16px' width='16px' 
                            style={{verticalAlign: "-3px"}}/> Miserable </p>
                    </td>
                    <td class="">
                        <p style={{marginTop: "0em", marginBottom: "-1em", padding: "0.1em"}}><img src='images/emotions/angry.png' height='16px' width='16px' 
                            style={{verticalAlign: "-3px"}}/> Angry </p>                
                    </td>  
                    <td class="">
                        <p style={{marginTop: "0em", marginBottom: "-1em", padding: "0.1em"}}><img src='images/emotions/frustrated.png' height='16px' width='16px' 
                            style={{verticalAlign: "-3px"}}/> Frustrated </p>                
                    </td>                     
                 </tr>
               </table>
            </div>
            <div id="chart">                
                <Chart options={this.state.options3} series={this.state.series3} type="line" height={100} 
                        style={{marginLeft: "1em", marginRight: "1em", marginTop: "-2em" }}/>
                <hr style={{marginLeft: "2em", marginRight: "1.5em", marginTop: "-1em" }}></hr>
                <Chart options={this.state.options4} series={this.state.series4} type="line" height={100} 
                        style={{marginLeft: "1em", marginRight: "1em", marginTop: "-1.2em" }}/>
                <hr style={{marginLeft: "2em", marginRight: "1.5em", marginTop: "-1em" }}></hr>                       
                <Chart options={this.state.options2} series={this.state.series2} height={100} 
                        style={{marginLeft: "1em", marginRight: "1em", marginTop: "-1.2em" }}/>
                <hr style={{marginLeft: "2em", marginRight: "1.5em", marginTop: "-1em" }}></hr>
                <Chart options={this.state.options5} series={this.state.series5} type="line" height={100} 
                        style={{marginLeft: "1em", marginRight: "1em", marginTop: "-1.2em" }}/>
                <hr style={{marginLeft: "2em", marginRight: "1.5em", marginTop: "-1em" }}></hr>
                <Chart options={this.state.options1} series={this.state.series1} height={100} 
                        style={{marginLeft: "1em", marginRight: "1em", marginTop: "-1.2em" }}/>
        
                <div id="expvsrel"> 
                    <table>
                        <tr>
                        <td>Sun</td>
                        <td>Mon</td>
                        <td>Tue</td>
                        <td>Wed</td>
                        <td>Thu</td>
                        <td>Fri</td>
                        <td>Sat</td>
                        <td>Sun</td>
                        <td>Mon</td>
                        <td>Tue</td>
                        <td>Wed</td>
                        <td>Thu</td>
                        <td>Fri</td>
                        <td>Sat</td>                         
                        </tr>
                    </table>
                </div>
                {/* <Chart options={this.state.options2} series={this.state.series2} type="line" height={250} width={300} />
                <Chart options={this.state.options3} series={this.state.series3} type="line" height={250} width={300} />
                <Chart options={this.state.options4} series={this.state.series4} type="line" height={250} width={300}/>
                <Chart options={this.state.options6} series={this.state.series6} type="line" height={250} width={300}/> */}
            </div>
            </div>  
          );
        }
}


export default EmotionDetailed;