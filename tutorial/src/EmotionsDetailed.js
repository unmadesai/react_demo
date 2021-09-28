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
                [new Date('2021-08-15, 09:00 +0800').getTime(),0],
                [new Date('2021-08-15, 14:00 +0800').getTime(),26],
                [new Date('2021-08-15, 19:00 +0800').getTime(),4],

                [new Date('2021-08-16, 09:00 +0800').getTime(),27], 
                [new Date('2021-08-16, 14:00 +0800').getTime(),50],
                [new Date('2021-08-16, 19:00 +0800').getTime(),16], 

                [new Date('2021-08-17, 09:00 +0800').getTime(),37], 
                [new Date('2021-08-17, 14:00 +0800').getTime(),53], 
                [new Date('2021-08-17, 19:00 +0800').getTime(),21], 

                [new Date('2021-08-18, 09:00 +0800').getTime(),76], 
                [new Date('2021-08-18, 14:00 +0800').getTime(),20],
                [new Date('2021-08-18, 19:00 +0800').getTime(),50], 

                [new Date('2021-08-19, 09:00 +0800').getTime(),20], 
                [new Date('2021-08-19, 14:00 +0800').getTime(),10], 
                [new Date('2021-08-19, 19:00 +0800').getTime(),73], 

                [new Date('2021-08-20, 09:00 +0800').getTime(),30], 
                [new Date('2021-08-20, 14:00 +0800').getTime(),67], 
                [new Date('2021-08-20, 19:00 +0800').getTime(),41], 

                [new Date('2021-08-21, 09:00 +0800').getTime(),64],
                [new Date('2021-08-21, 14:00 +0800').getTime(),29],
                [new Date('2021-08-21, 19:00 +0800').getTime(),36],

                [new Date('2021-08-22, 09:00 +0800').getTime(),73],
                [new Date('2021-08-22, 14:00 +0800').getTime(),24],
                [new Date('2021-08-22, 19:00 +0800').getTime(),50],

                [new Date('2021-08-23, 09:00 +0800').getTime(),0],
                [new Date('2021-08-23, 14:00 +0800').getTime(),50],
                [new Date('2021-08-23, 19:00 +0800').getTime(),0],

                [new Date('2021-08-24, 09:00 +0800').getTime(),67],
                [new Date('2021-08-24, 14:00 +0800').getTime(),0],
                [new Date('2021-08-24, 19:00 +0800').getTime(),20],

                [new Date('2021-08-25, 09:00 +0800').getTime(),71],
                [new Date('2021-08-25, 14:00 +0800').getTime(),20],
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
              colors: ['#CD5213'],
              stroke: {
                curve: 'straight',
                colors: ['#CD5213', 'transparent'],
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
                [new Date('2021-08-15, 14:00 +0800').getTime(),26],
                [new Date('2021-08-15, 19:00 +0800').getTime(),4],

                [new Date('2021-08-16, 09:00 +0800').getTime(),27], 
                [new Date('2021-08-16, 14:00 +0800').getTime(),50],
                [new Date('2021-08-16, 19:00 +0800').getTime(),16], 

                [new Date('2021-08-17, 09:00 +0800').getTime(),37], 
                [new Date('2021-08-17, 14:00 +0800').getTime(),53], 
                [new Date('2021-08-17, 19:00 +0800').getTime(),21], 

                [new Date('2021-08-18, 09:00 +0800').getTime(),76], 
                [new Date('2021-08-18, 14:00 +0800').getTime(),20],
                [new Date('2021-08-18, 19:00 +0800').getTime(),50], 

                [new Date('2021-08-19, 09:00 +0800').getTime(),20], 
                [new Date('2021-08-19, 14:00 +0800').getTime(),10], 
                [new Date('2021-08-19, 19:00 +0800').getTime(),73], 

                [new Date('2021-08-20, 09:00 +0800').getTime(),30], 
                [new Date('2021-08-20, 14:00 +0800').getTime(),67], 
                [new Date('2021-08-20, 19:00 +0800').getTime(),41], 

                [new Date('2021-08-21, 09:00 +0800').getTime(),64],
                [new Date('2021-08-21, 14:00 +0800').getTime(),29],
                [new Date('2021-08-21, 19:00 +0800').getTime(),36],

                [new Date('2021-08-22, 09:00 +0800').getTime(),73],
                [new Date('2021-08-22, 14:00 +0800').getTime(),24],
                [new Date('2021-08-22, 19:00 +0800').getTime(),50],

                [new Date('2021-08-23, 09:00 +0800').getTime(),0],
                [new Date('2021-08-23, 14:00 +0800').getTime(),50],
                [new Date('2021-08-23, 19:00 +0800').getTime(),0],

                [new Date('2021-08-24, 09:00 +0800').getTime(),67],
                [new Date('2021-08-24, 14:00 +0800').getTime(),0],
                [new Date('2021-08-24, 19:00 +0800').getTime(),20],

                [new Date('2021-08-25, 09:00 +0800').getTime(),71],
                [new Date('2021-08-25, 14:00 +0800').getTime(),20],
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
              colors: ['#2B41E4'],
              stroke: {
                curve: 'straight',
                colors: ['#2B41E4', 'transparent'],
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
                [new Date('2021-08-15, 09:00 +0800').getTime(),0],
                [new Date('2021-08-15, 14:00 +0800').getTime(),26],
                [new Date('2021-08-15, 19:00 +0800').getTime(),4],

                [new Date('2021-08-16, 09:00 +0800').getTime(),27], 
                [new Date('2021-08-16, 14:00 +0800').getTime(),50],
                [new Date('2021-08-16, 19:00 +0800').getTime(),16], 

                [new Date('2021-08-17, 09:00 +0800').getTime(),37], 
                [new Date('2021-08-17, 14:00 +0800').getTime(),53], 
                [new Date('2021-08-17, 19:00 +0800').getTime(),21], 

                [new Date('2021-08-18, 09:00 +0800').getTime(),76], 
                [new Date('2021-08-18, 14:00 +0800').getTime(),20],
                [new Date('2021-08-18, 19:00 +0800').getTime(),50], 

                [new Date('2021-08-19, 09:00 +0800').getTime(),20], 
                [new Date('2021-08-19, 14:00 +0800').getTime(),10], 
                [new Date('2021-08-19, 19:00 +0800').getTime(),73], 

                [new Date('2021-08-20, 09:00 +0800').getTime(),30], 
                [new Date('2021-08-20, 14:00 +0800').getTime(),67], 
                [new Date('2021-08-20, 19:00 +0800').getTime(),41], 

                [new Date('2021-08-21, 09:00 +0800').getTime(),64],
                [new Date('2021-08-21, 14:00 +0800').getTime(),29],
                [new Date('2021-08-21, 19:00 +0800').getTime(),36],

                [new Date('2021-08-22, 09:00 +0800').getTime(),73],
                [new Date('2021-08-22, 14:00 +0800').getTime(),24],
                [new Date('2021-08-22, 19:00 +0800').getTime(),50],

                [new Date('2021-08-23, 09:00 +0800').getTime(),0],
                [new Date('2021-08-23, 14:00 +0800').getTime(),50],
                [new Date('2021-08-23, 19:00 +0800').getTime(),0],

                [new Date('2021-08-24, 09:00 +0800').getTime(),67],
                [new Date('2021-08-24, 14:00 +0800').getTime(),0],
                [new Date('2021-08-24, 19:00 +0800').getTime(),20],

                [new Date('2021-08-25, 09:00 +0800').getTime(),71],
                [new Date('2021-08-25, 14:00 +0800').getTime(),20],
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
              colors: ['#FAC52B'],
              stroke: {
                curve: 'straight',
                colors: ['#FAC52B', 'transparent'],
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
                [new Date('2021-08-15, 09:00 +0800').getTime(),0],
                [new Date('2021-08-15, 14:00 +0800').getTime(),26],
                [new Date('2021-08-15, 19:00 +0800').getTime(),4],

                [new Date('2021-08-16, 09:00 +0800').getTime(),27], 
                [new Date('2021-08-16, 14:00 +0800').getTime(),50],
                [new Date('2021-08-16, 19:00 +0800').getTime(),16], 

                [new Date('2021-08-17, 09:00 +0800').getTime(),37], 
                [new Date('2021-08-17, 14:00 +0800').getTime(),53], 
                [new Date('2021-08-17, 19:00 +0800').getTime(),21], 

                [new Date('2021-08-18, 09:00 +0800').getTime(),76], 
                [new Date('2021-08-18, 14:00 +0800').getTime(),20],
                [new Date('2021-08-18, 19:00 +0800').getTime(),50], 

                [new Date('2021-08-19, 09:00 +0800').getTime(),20], 
                [new Date('2021-08-19, 14:00 +0800').getTime(),10], 
                [new Date('2021-08-19, 19:00 +0800').getTime(),73], 

                [new Date('2021-08-20, 09:00 +0800').getTime(),30], 
                [new Date('2021-08-20, 14:00 +0800').getTime(),67], 
                [new Date('2021-08-20, 19:00 +0800').getTime(),41], 

                [new Date('2021-08-21, 09:00 +0800').getTime(),64],
                [new Date('2021-08-21, 14:00 +0800').getTime(),29],
                [new Date('2021-08-21, 19:00 +0800').getTime(),36],

                [new Date('2021-08-22, 09:00 +0800').getTime(),73],
                [new Date('2021-08-22, 14:00 +0800').getTime(),24],
                [new Date('2021-08-22, 19:00 +0800').getTime(),50],

                [new Date('2021-08-23, 09:00 +0800').getTime(),0],
                [new Date('2021-08-23, 14:00 +0800').getTime(),50],
                [new Date('2021-08-23, 19:00 +0800').getTime(),0],

                [new Date('2021-08-24, 09:00 +0800').getTime(),67],
                [new Date('2021-08-24, 14:00 +0800').getTime(),0],
                [new Date('2021-08-24, 19:00 +0800').getTime(),20],

                [new Date('2021-08-25, 09:00 +0800').getTime(),71],
                [new Date('2021-08-25, 14:00 +0800').getTime(),20],
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
              colors: ['#F5189A'],
              stroke: {
                curve: 'straight',
                colors: ['#F5189A', 'transparent'],
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
                [new Date('2021-08-16, 14:00 +0800').getTime(),50],
                [new Date('2021-08-16, 19:00 +0800').getTime(),16], 

                [new Date('2021-08-17, 09:00 +0800').getTime(),37], 
                [new Date('2021-08-17, 14:00 +0800').getTime(),53], 
                [new Date('2021-08-17, 19:00 +0800').getTime(),21], 

                [new Date('2021-08-18, 09:00 +0800').getTime(),76], 
                [new Date('2021-08-18, 14:00 +0800').getTime(),20],
                [new Date('2021-08-18, 19:00 +0800').getTime(),50], 

                [new Date('2021-08-19, 09:00 +0800').getTime(),20], 
                [new Date('2021-08-19, 14:00 +0800').getTime(),10], 
                [new Date('2021-08-19, 19:00 +0800').getTime(),73], 

                [new Date('2021-08-20, 09:00 +0800').getTime(),30], 
                [new Date('2021-08-20, 14:00 +0800').getTime(),67], 
                [new Date('2021-08-20, 19:00 +0800').getTime(),41], 

                [new Date('2021-08-21, 09:00 +0800').getTime(),64],
                [new Date('2021-08-21, 14:00 +0800').getTime(),29],
                [new Date('2021-08-21, 19:00 +0800').getTime(),36],

                [new Date('2021-08-22, 09:00 +0800').getTime(),73],
                [new Date('2021-08-22, 14:00 +0800').getTime(),24],
                [new Date('2021-08-22, 19:00 +0800').getTime(),50],

                [new Date('2021-08-23, 09:00 +0800').getTime(),0],
                [new Date('2021-08-23, 14:00 +0800').getTime(),50],
                [new Date('2021-08-23, 19:00 +0800').getTime(),0],

                [new Date('2021-08-24, 09:00 +0800').getTime(),67],
                [new Date('2021-08-24, 14:00 +0800').getTime(),0],
                [new Date('2021-08-24, 19:00 +0800').getTime(),20],

                [new Date('2021-08-25, 09:00 +0800').getTime(),71],
                [new Date('2021-08-25, 14:00 +0800').getTime(),20],
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
              yaxis: {
                min: 0,
                max: 100,
                tickAmount: 4,
              },
              dataLabels: {
                enabled: false
              },
              colors: ['#F5180D'],
              stroke: {
                curve: 'straight',
                colors: ['#F5180D', 'transparent'],
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
            
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="line" height={100} 
                        style={{marginLeft: "3em", marginRight: "1em", marginTop: "-2em" }}/>
                <Chart options={this.state.options2} series={this.state.series2} type="line" height={100} 
                        style={{marginLeft: "3em", marginRight: "1em", marginTop: "-2em" }}/>
                <Chart options={this.state.options3} series={this.state.series3} type="line" height={100} 
                        style={{marginLeft: "3em", marginRight: "1em", marginTop: "-2em" }}/>
                <Chart options={this.state.options4} series={this.state.series4} type="line" height={100} 
                        style={{marginLeft: "3em", marginRight: "1em", marginTop: "-2em" }}/>
                <Chart options={this.state.options5} series={this.state.series5} type="line" height={100} 
                        style={{marginLeft: "3em", marginRight: "1em", marginTop: "-2em" }}/>
        
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
            
          );
        }
}


export default EmotionDetailed;