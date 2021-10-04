import React, { Component } from "react";
import Chart from "react-apexcharts";


class EmotionDetailed extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            //Emotion 1 Frustrated (Orange)
            series: [{
                name: "Frustation",
                //data: [62,61,19,29,69,75,82,88,29,3,2,23,24,5]
                //data: [0,5,4,50,0,0,59,76,66,66,0,0,50]
                data: [
                [new Date('2021-08-15, 09:00 +0800').getTime(),5],
                [new Date('2021-08-15, 14:00 +0800').getTime(),58],
                [new Date('2021-08-15, 19:00 +0800').getTime(),45],

                [new Date('2021-08-16, 09:00 +0800').getTime(),27], 
                [new Date('2021-08-16, 14:00 +0800').getTime(),50],
                [new Date('2021-08-16, 19:00 +0800').getTime(),36], 

                [new Date('2021-08-17, 09:00 +0800').getTime(),37], 
                [new Date('2021-08-17, 14:00 +0800').getTime(),53], 
                [new Date('2021-08-17, 19:00 +0800').getTime(),15], 

                [new Date('2021-08-18, 09:00 +0800').getTime(),76], 
                [new Date('2021-08-18, 14:00 +0800').getTime(),20],
                [new Date('2021-08-18, 19:00 +0800').getTime(),50], 

                [new Date('2021-08-19, 09:00 +0800').getTime(),20], 
                [new Date('2021-08-19, 14:00 +0800').getTime(),10], 
                [new Date('2021-08-19, 19:00 +0800').getTime(),73], 

                [new Date('2021-08-20, 09:00 +0800').getTime(),54], 
                [new Date('2021-08-20, 14:00 +0800').getTime(),67], 
                [new Date('2021-08-20, 19:00 +0800').getTime(),41], 

                [new Date('2021-08-21, 09:00 +0800').getTime(),64],
                [new Date('2021-08-21, 14:00 +0800').getTime(),29],
                [new Date('2021-08-21, 19:00 +0800').getTime(),36],

                [new Date('2021-08-22, 09:00 +0800').getTime(),15],
                [new Date('2021-08-22, 14:00 +0800').getTime(),24],
                [new Date('2021-08-22, 19:00 +0800').getTime(),50],

                [new Date('2021-08-23, 09:00 +0800').getTime(),0],
                [new Date('2021-08-23, 14:00 +0800').getTime(),50],
                [new Date('2021-08-23, 19:00 +0800').getTime(),0],

                [new Date('2021-08-24, 09:00 +0800').getTime(),67],
                [new Date('2021-08-24, 14:00 +0800').getTime(),0],
                [new Date('2021-08-24, 19:00 +0800').getTime(),20],

                [new Date('2021-08-25, 09:00 +0800').getTime(),14],
                [new Date('2021-08-25, 14:00 +0800').getTime(),20],
                [new Date('2021-08-25, 19:00 +0800').getTime(),50],

                [new Date('2021-08-26, 09:00 +0800').getTime(),40],
                [new Date('2021-08-26, 14:00 +0800').getTime(),15],
                [new Date('2021-08-26, 19:00 +0800').getTime(),60],

                [new Date('2021-08-27, 09:00 +0800').getTime(),0],
                [new Date('2021-08-27, 14:00 +0800').getTime(),22],
                [new Date('2021-08-27, 19:00 +0800').getTime(),0],

                [new Date('2021-08-28, 09:00 +0800').getTime(),72],
                [new Date('2021-08-28, 14:00 +0800').getTime(),0],
                [new Date('2021-08-28, 19:00 +0800').getTime(),69]]
                     
            }],
            options: {
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


            //Emotion 2 Miserable (Blue)
            series2: [{
                name: "Miserable",
                //data: [62,61,19,29,69,75,82,88,29,3,2,23,24,5]
                //data: [0,5,4,50,0,0,59,76,66,66,0,0,50]
                data: [
                [new Date('2021-08-15, 09:00 +0800').getTime(),0],
                [new Date('2021-08-15, 14:00 +0800').getTime(),15],
                [new Date('2021-08-15, 19:00 +0800').getTime(),12],

                [new Date('2021-08-16, 09:00 +0800').getTime(),27], 
                [new Date('2021-08-16, 14:00 +0800').getTime(),50],
                [new Date('2021-08-16, 19:00 +0800').getTime(),16], 

                [new Date('2021-08-17, 09:00 +0800').getTime(),37], 
                [new Date('2021-08-17, 14:00 +0800').getTime(),53], 
                [new Date('2021-08-17, 19:00 +0800').getTime(),21], 

                [new Date('2021-08-18, 09:00 +0800').getTime(),76], 
                [new Date('2021-08-18, 14:00 +0800').getTime(),42],
                [new Date('2021-08-18, 19:00 +0800').getTime(),50], 

                [new Date('2021-08-19, 09:00 +0800').getTime(),20], 
                [new Date('2021-08-19, 14:00 +0800').getTime(),65], 
                [new Date('2021-08-19, 19:00 +0800').getTime(),73], 

                [new Date('2021-08-20, 09:00 +0800').getTime(),15], 
                [new Date('2021-08-20, 14:00 +0800').getTime(),10], 
                [new Date('2021-08-20, 19:00 +0800').getTime(),41], 

                [new Date('2021-08-21, 09:00 +0800').getTime(),64],
                [new Date('2021-08-21, 14:00 +0800').getTime(),29],
                [new Date('2021-08-21, 19:00 +0800').getTime(),36],

                [new Date('2021-08-22, 09:00 +0800').getTime(),73],
                [new Date('2021-08-22, 14:00 +0800').getTime(),24],
                [new Date('2021-08-22, 19:00 +0800').getTime(),50],

                [new Date('2021-08-23, 09:00 +0800').getTime(),0],
                [new Date('2021-08-23, 14:00 +0800').getTime(),41],
                [new Date('2021-08-23, 19:00 +0800').getTime(),0],

                [new Date('2021-08-24, 09:00 +0800').getTime(),67],
                [new Date('2021-08-24, 14:00 +0800').getTime(),0],
                [new Date('2021-08-24, 19:00 +0800').getTime(),20],

                [new Date('2021-08-25, 09:00 +0800').getTime(),71],
                [new Date('2021-08-25, 14:00 +0800').getTime(),55],
                [new Date('2021-08-25, 19:00 +0800').getTime(),50],

                [new Date('2021-08-26, 09:00 +0800').getTime(),40],
                [new Date('2021-08-26, 14:00 +0800').getTime(),20],
                [new Date('2021-08-26, 19:00 +0800').getTime(),60],

                [new Date('2021-08-27, 09:00 +0800').getTime(),0],
                [new Date('2021-08-27, 14:00 +0800').getTime(),66],
                [new Date('2021-08-27, 19:00 +0800').getTime(),0],

                [new Date('2021-08-28, 09:00 +0800').getTime(),72],
                [new Date('2021-08-28, 14:00 +0800').getTime(),0],
                [new Date('2021-08-28, 19:00 +0800').getTime(),69]]
                     
            }],
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
              },
              dataLabels: {
                enabled: false
              },
              colors: ['#036B69'],
              stroke: {
                curve: 'straight',
                colors: ['#036B69', 'transparent'],
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
                //data: [62,61,19,29,69,75,82,88,29,3,2,23,24,5]
                //data: [0,5,4,50,0,0,59,76,66,66,0,0,50]
                data: [
                [new Date('2021-08-15, 09:00 +0800').getTime(),25],
                [new Date('2021-08-15, 14:00 +0800').getTime(),26],
                [new Date('2021-08-15, 19:00 +0800').getTime(),45],

                [new Date('2021-08-16, 09:00 +0800').getTime(),42], 
                [new Date('2021-08-16, 14:00 +0800').getTime(),50],
                [new Date('2021-08-16, 19:00 +0800').getTime(),15], 

                [new Date('2021-08-17, 09:00 +0800').getTime(),37], 
                [new Date('2021-08-17, 14:00 +0800').getTime(),53], 
                [new Date('2021-08-17, 19:00 +0800').getTime(),21], 

                [new Date('2021-08-18, 09:00 +0800').getTime(),76], 
                [new Date('2021-08-18, 14:00 +0800').getTime(),20],
                [new Date('2021-08-18, 19:00 +0800').getTime(),50], 

                [new Date('2021-08-19, 09:00 +0800').getTime(),77], 
                [new Date('2021-08-19, 14:00 +0800').getTime(),10], 
                [new Date('2021-08-19, 19:00 +0800').getTime(),54], 

                [new Date('2021-08-20, 09:00 +0800').getTime(),30], 
                [new Date('2021-08-20, 14:00 +0800').getTime(),11], 
                [new Date('2021-08-20, 19:00 +0800').getTime(),41], 

                [new Date('2021-08-21, 09:00 +0800').getTime(),24],
                [new Date('2021-08-21, 14:00 +0800').getTime(),41],
                [new Date('2021-08-21, 19:00 +0800').getTime(),36],

                [new Date('2021-08-22, 09:00 +0800').getTime(),4],
                [new Date('2021-08-22, 14:00 +0800').getTime(),88],
                [new Date('2021-08-22, 19:00 +0800').getTime(),85],

                [new Date('2021-08-23, 09:00 +0800').getTime(),11],
                [new Date('2021-08-23, 14:00 +0800').getTime(),51],
                [new Date('2021-08-23, 19:00 +0800').getTime(),45],

                [new Date('2021-08-24, 09:00 +0800').getTime(),25],
                [new Date('2021-08-24, 14:00 +0800').getTime(),0],
                [new Date('2021-08-24, 19:00 +0800').getTime(),20],

                [new Date('2021-08-25, 09:00 +0800').getTime(),71],
                [new Date('2021-08-25, 14:00 +0800').getTime(),20],
                [new Date('2021-08-25, 19:00 +0800').getTime(),41],

                [new Date('2021-08-26, 09:00 +0800').getTime(),33],
                [new Date('2021-08-26, 14:00 +0800').getTime(),1],
                [new Date('2021-08-26, 19:00 +0800').getTime(),66],

                [new Date('2021-08-27, 09:00 +0800').getTime(),0],
                [new Date('2021-08-27, 14:00 +0800').getTime(),22],
                [new Date('2021-08-27, 19:00 +0800').getTime(),0],

                [new Date('2021-08-28, 09:00 +0800').getTime(),52],
                [new Date('2021-08-28, 14:00 +0800').getTime(),0],
                [new Date('2021-08-28, 19:00 +0800').getTime(),69]]
                     
            }],
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
              },
              dataLabels: {
                enabled: false
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
                //data: [62,61,19,29,69,75,82,88,29,3,2,23,24,5]
                //data: [0,5,4,50,0,0,59,76,66,66,0,0,50]
                data: [
                [new Date('2021-08-15, 09:00 +0800').getTime(),25],
                [new Date('2021-08-15, 14:00 +0800').getTime(),22],
                [new Date('2021-08-15, 19:00 +0800').getTime(),4],

                [new Date('2021-08-16, 09:00 +0800').getTime(),27], 
                [new Date('2021-08-16, 14:00 +0800').getTime(),55],
                [new Date('2021-08-16, 19:00 +0800').getTime(),14], 

                [new Date('2021-08-17, 09:00 +0800').getTime(),37], 
                [new Date('2021-08-17, 14:00 +0800').getTime(),15], 
                [new Date('2021-08-17, 19:00 +0800').getTime(),21], 

                [new Date('2021-08-18, 09:00 +0800').getTime(),76], 
                [new Date('2021-08-18, 14:00 +0800').getTime(),20],
                [new Date('2021-08-18, 19:00 +0800').getTime(),22], 

                [new Date('2021-08-19, 09:00 +0800').getTime(),20], 
                [new Date('2021-08-19, 14:00 +0800').getTime(),40], 
                [new Date('2021-08-19, 19:00 +0800').getTime(),73], 

                [new Date('2021-08-20, 09:00 +0800').getTime(),30], 
                [new Date('2021-08-20, 14:00 +0800').getTime(),67], 
                [new Date('2021-08-20, 19:00 +0800').getTime(),41], 

                [new Date('2021-08-21, 09:00 +0800').getTime(),64],
                [new Date('2021-08-21, 14:00 +0800').getTime(),1],
                [new Date('2021-08-21, 19:00 +0800').getTime(),65],

                [new Date('2021-08-22, 09:00 +0800').getTime(),73],
                [new Date('2021-08-22, 14:00 +0800').getTime(),15],
                [new Date('2021-08-22, 19:00 +0800').getTime(),40],

                [new Date('2021-08-23, 09:00 +0800').getTime(),0],
                [new Date('2021-08-23, 14:00 +0800').getTime(),50],
                [new Date('2021-08-23, 19:00 +0800').getTime(),0],

                [new Date('2021-08-24, 09:00 +0800').getTime(),67],
                [new Date('2021-08-24, 14:00 +0800').getTime(),0],
                [new Date('2021-08-24, 19:00 +0800').getTime(),10],

                [new Date('2021-08-25, 09:00 +0800').getTime(),71],
                [new Date('2021-08-25, 14:00 +0800').getTime(),85],
                [new Date('2021-08-25, 19:00 +0800').getTime(),50],

                [new Date('2021-08-26, 09:00 +0800').getTime(),40],
                [new Date('2021-08-26, 14:00 +0800').getTime(),20],
                [new Date('2021-08-26, 19:00 +0800').getTime(),25],

                [new Date('2021-08-27, 09:00 +0800').getTime(),0],
                [new Date('2021-08-27, 14:00 +0800').getTime(),66],
                [new Date('2021-08-27, 19:00 +0800').getTime(),0],

                [new Date('2021-08-28, 09:00 +0800').getTime(),88],
                [new Date('2021-08-28, 14:00 +0800').getTime(),57],
                [new Date('2021-08-28, 19:00 +0800').getTime(),11]]
                     
            }],
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
                //data: [62,61,19,29,69,75,82,88,29,3,2,23,24,5]
                //data: [0,5,4,50,0,0,59,76,66,66,0,0,50]
                data: [
                [new Date('2021-08-15, 09:00 +0800').getTime(),0],
                [new Date('2021-08-15, 14:00 +0800').getTime(),26],
                [new Date('2021-08-15, 19:00 +0800').getTime(),4],

                [new Date('2021-08-16, 09:00 +0800').getTime(),27], 
                [new Date('2021-08-16, 14:00 +0800').getTime(),88],
                [new Date('2021-08-16, 19:00 +0800').getTime(),16], 

                [new Date('2021-08-17, 09:00 +0800').getTime(),45], 
                [new Date('2021-08-17, 14:00 +0800').getTime(),0], 
                [new Date('2021-08-17, 19:00 +0800').getTime(),21], 

                [new Date('2021-08-18, 09:00 +0800').getTime(),48], 
                [new Date('2021-08-18, 14:00 +0800').getTime(),74],
                [new Date('2021-08-18, 19:00 +0800').getTime(),1], 

                [new Date('2021-08-19, 09:00 +0800').getTime(),58], 
                [new Date('2021-08-19, 14:00 +0800').getTime(),41], 
                [new Date('2021-08-19, 19:00 +0800').getTime(),22], 

                [new Date('2021-08-20, 09:00 +0800').getTime(),1], 
                [new Date('2021-08-20, 14:00 +0800').getTime(),54], 
                [new Date('2021-08-20, 19:00 +0800').getTime(),44], 

                [new Date('2021-08-21, 09:00 +0800').getTime(),64],
                [new Date('2021-08-21, 14:00 +0800').getTime(),29],
                [new Date('2021-08-21, 19:00 +0800').getTime(),36],

                [new Date('2021-08-22, 09:00 +0800').getTime(),14],
                [new Date('2021-08-22, 14:00 +0800').getTime(),24],
                [new Date('2021-08-22, 19:00 +0800').getTime(),25],

                [new Date('2021-08-23, 09:00 +0800').getTime(),10],
                [new Date('2021-08-23, 14:00 +0800').getTime(),25],
                [new Date('2021-08-23, 19:00 +0800').getTime(),0],

                [new Date('2021-08-24, 09:00 +0800').getTime(),77],
                [new Date('2021-08-24, 14:00 +0800').getTime(),4],
                [new Date('2021-08-24, 19:00 +0800').getTime(),20],

                [new Date('2021-08-25, 09:00 +0800').getTime(),71],
                [new Date('2021-08-25, 14:00 +0800').getTime(),78],
                [new Date('2021-08-25, 19:00 +0800').getTime(),52],

                [new Date('2021-08-26, 09:00 +0800').getTime(),20],
                [new Date('2021-08-26, 14:00 +0800').getTime(),44],
                [new Date('2021-08-26, 19:00 +0800').getTime(),60],

                [new Date('2021-08-27, 09:00 +0800').getTime(),0],
                [new Date('2021-08-27, 14:00 +0800').getTime(),45],
                [new Date('2021-08-27, 19:00 +0800').getTime(),0],

                [new Date('2021-08-28, 09:00 +0800').getTime(),24],
                [new Date('2021-08-28, 14:00 +0800').getTime(),0],
                [new Date('2021-08-28, 19:00 +0800').getTime(),10]]
                     
            }],
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
              yaxis: {
                min: 0,
                max: 100,
                tickAmount: 4,
              },
              dataLabels: {
                enabled: false
              },
              colors: ['#5D3D82'],
              stroke: {
                curve: 'straight',
                colors: ['#5D3D82', 'transparent'],
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
              <table style={{marginRight: "0.7em", position: "relative", float: "right", marginTop: "-0.2em"}}>
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
                        style={{marginLeft: "3em", marginRight: "1em", marginTop: "-2em" }}/>
                <Chart options={this.state.options4} series={this.state.series4} type="line" height={100} 
                        style={{marginLeft: "3em", marginRight: "1em", marginTop: "-2em" }}/>
                <Chart options={this.state.options2} series={this.state.series2} type="line" height={100} 
                        style={{marginLeft: "3em", marginRight: "1em", marginTop: "-2.5em" }}/>
                <Chart options={this.state.options5} series={this.state.series5} type="line" height={100} 
                        style={{marginLeft: "3em", marginRight: "1em", marginTop: "-2.5em" }}/>
                <Chart options={this.state.options} series={this.state.series} type="line" height={100} 
                        style={{marginLeft: "3em", marginRight: "1em", marginTop: "-2.5em" }}/>
        
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