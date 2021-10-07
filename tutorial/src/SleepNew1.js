import React, { Component } from "react";
import Chart from "react-apexcharts";

var qual_sleep = ['good', 'great', 'good', 'poor', 'average', 'poor', 'good', 
                'poor', 'great', 'good', 'poor', 'average', 'good', 'great'];

//color scheme:
//00AD22=light=poor sleep
//047900=medium=average sleep
//047900=medium2=good sleep
//59F15F=dark=great sleep

class SleepNew1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          
            series: [{
                data: [{
                  x: '15 Aug',
                  //reversed time - 1000=10pm, 2000=8am
                  //someone help T_T
                  y: [17, 23],
                  //need a check here with the corresponding quality of sleep value
                  //currently series does not allow if within each data point, only color
                  //so coloring individually, but this is not optimal!
                  //   if(qual_sleep[0] == "great") {
                  //     color: '#ffffff',
                  //   },
                  fillColor: '#A1FFB1',
                  
                }, 
                {
                  x: '15 Aug',
                  y: [0, 0],
                  fillColor: '#A1FFB1',
                //   dataLabels: {
                //       enabled: false,
                //   }

                },
                //16 Aug Monday
                {
                  x: '16 Aug',
                  y: [16, 22],
                  fillColor: '#047900',

                }, 
                {
                  x: '16 Aug',
                  y: [0, 1],
                  fillColor: '#A1FFB1',

                }, 
                //17 Aug Tuesday
                {
                  x: '17 Aug',
                  y: [17, 24],
                  fillColor: '#A1FFB1',

                },
                {
                  x: '17 Aug',
                  y: [0, 0],
                  fillColor: '#A1FFB1',

                }, 
                //18 Aug Wednesday
                {
                  x: '18 Aug',
                  y: [12, 20],
                  fillColor: '#00AD22',

                }, 
                {
                  x: '18 Aug',
                  y: [0, 0],
                  fillColor: '#A1FFB1',

                },
                //19 Aug Thursday
                {
                  x: '19 Aug',
                  y: [15, 21],
                  fillColor: '#047900',

                },
                {
                  x: '19 Aug',
                  y: [0, 0],
                  fillColor: '#A1FFB1',

                },
                //20 Aug Friday
                {
                  x: '20 Aug',
                  y: [15, 19],
                  fillColor: '#00AD22',

                },
                {
                  x: '20 Aug',
                  y: [0, 0],
                  fillColor: '#00AD22',

                },
                //21 Aug Saturday
                {
                  x: '21 Aug',
                  y: [15, 23],
                  fillColor: '#59F15F',

                },
                {
                  x: '21 Aug',
                  y: [0, 0],
                  fillColor: '#59F15F',

                },
                //22 Aug Sunday
                {
                  x: '22 Aug',
                  y: [15, 21],
                  fillColor: '#047900',

                },
                {
                  x: '22 Aug',
                  y: [0, 0],
                  fillColor: '#047900',

                },
                //23 Aug Monday
                {
                  x: '23 Aug',
                  y: [15, 18],
                  fillColor: '#59F15F',

                },
                {
                  x: '23 Aug',
                  y: [0, 0],
                  fillColor: '#59F15F',

                }, 
                //24 Aug Tuesday
                {
                  x: '24 Aug',
                  y: [14, 21],
                  fillColor: '#00AD22',

                }, 
                {
                  x: '24 Aug',
                  y: [0, 0],
                  fillColor: '#99EBA6',

                },
                //25 Aug Wednesday
                {
                  x: '25 Aug',
                  y: [14, 20],
                  fillColor: '#00AD22',

                }, 
                {
                  x: '25 Aug',
                  y: [0, 0],
                  fillColor: '#00AD22',

                },
                //26 Aug Thursday
                {
                  x: '26 Aug',
                  y: [14, 19],
                  fillColor: '#047900',

                },
                {
                  x: '26 Aug',
                  y: [0, 0],
                  fillColor: '#047900',

                },
                //27 Aug Friday
                {
                  x: '27 Aug',
                  y: [14, 20],
                  fillColor: '#047900',

                },
                {
                  x: '27 Aug',
                  y: [0, 0],
                  fillColor: '#047900',

                },
                //28 Aug Saturday
                {
                  x: '28 Aug',
                  y: [16, 20],
                  fillColor: '#25BB3E',

                },
                {
                  x: '28 Aug',
                  y: [0, 0],
                  fillColor: '#A1FFB1',

                }]
            }],
            options: {
              chart: {
                type: 'rangeBar',
                zoom: {
                    enabled: false,
                  },
                toolbar: {
                    show: false,
                }
                //height: 350
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                }
                
              },
              
              //great if we can traverse through qual_sleep array with seriesIndex 
              //but not sure how to do that, and cant get color based on hours of sleep
              //not sure how to use this, trying with individual data points now
            //   fill: {
            //     colors: [function({ value, seriesIndex, w }) {
            //       if(value < 15 && value >=8 ) {
            //           return '#7E36AF'
            //       } else if (value > 2 && value < 8) {
            //           return '#164666'
            //       } else {
            //           return '#D9534F'
            //       }
            //     }]
            //  },
              dataLabels: {
                enabled: true,
                textAnchor: 'middle',
                //offsetY:-20,

              },
              fill: {
                  opacity: 1,
              },
              xaxis: {
                type: 'categories',
                categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 
                'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
              },
              yaxis: {
                labels: {
                  rotate: -90
                },
                min: 0,
                max: 24,
                tickAmount: 12,
                reversed: true,
                axisTicks: {
                  show: true
                },
                labels: {
                  formatter: function (y) {
                    return y.toFixed(0) + "00";
                    }
                }
              },
              grid: {
                xaxis: {
                  lines: {
                    show: true
                  }
                }
              },
            },
        };
    }

      

        render() {
            return (
            <div>
                <div>
                <table style={{marginLeft: "32em", marginTop: "-0.5em"}}>
                   <tr>
                        <td class="sleeplabel">
                           <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.5em", backgroundColor: "#A1FFB1"}}>Poor </p>
                         </td>
                         <td class="sleeplabel">
                           <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.5em", backgroundColor: "#59F15F"}}>Average </p>
                         </td>
                         <td class="sleeplabel">
                           <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.5em", backgroundColor: "#00AD22"}}>Good </p>
                         </td>
                         <td class="sleeplabel">
                           <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.5em", backgroundColor: "#047900"}}>Great </p>
                         </td>                     
                   </tr>
               </table>
           </div>
           <div id="chart">
                    <Chart options={this.state.options} series={this.state.series} type="rangeBar" height={300} 
                           style={{marginLeft: "2.5em", marginRight: "0.3em"}}/>
                </div>
           </div>
            );
          }
      }
      
export default SleepNew1;
    