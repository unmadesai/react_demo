import React, { Component } from "react";
import Chart from "react-apexcharts";

var qual_sleep = ['good', 'great', 'good', 'poor', 'average', 'poor', 'good', 
                'poor', 'great', 'good', 'poor', 'average', 'good', 'great'];

//color scheme:
//99EBA6=light=poor sleep
//34D54F=medium=average sleep
//1F9833=medium2=good sleep
//11551D=dark=great sleep

class SleepNew extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          
            series: [{
                data: [{
                  x: '15 Aug',
                  //reversed time - 1000=10pm, 2000=8am
                  //someone help T_T
                  y: [10, 20],
                  //need a check here with the corresponding quality of sleep value
                  //currently series does not allow if within each data point, only color
                  //so coloring individually, but this is not optimal!
                  //   if(qual_sleep[0] == "great") {
                  //     color: '#ffffff',
                  //   },
                  fillColor: '#99EBA6',
                }, {
                  x: '16 Aug',
                  y: [11, 18],
                  fillColor: '#34D54F',

                }, {
                  x: '17 Aug',
                  y: [12, 21],
                  fillColor: '#1F9833',

                }, {
                  x: '18 Aug',
                  y: [10, 20],
                  fillColor: '#99EBA6',

                }, {
                  x: '19 Aug',
                  y: [14, 21],
                  fillColor: '#34D54F',

                }, {
                  x: '20 Aug',
                  y: [13, 19],
                  fillColor: '#99EBA6',

                }, {
                  x: '21 Aug',
                  y: [11, 19],
                  fillColor: '#11551D',

                }, {
                  x: '22 Aug',
                  y: [14, 21],
                  fillColor: '#34D54F',

                }, {
                  x: '23 Aug',
                  y: [12, 20],
                  fillColor: '#11551D',

                }, {
                  x: '24 Aug',
                  y: [12, 21],
                  fillColor: '#99EBA6',

                }, {
                  x: '25 Aug',
                  y: [11, 18],
                  fillColor: '#99EBA6',

                }, {
                  x: '26 Aug',
                  y: [14, 20],
                  fillColor: '#34D54F',

                }, {
                  x: '27 Aug',
                  y: [11, 19],
                  fillColor: '#1F9833',

                }, {
                  x: '28 Aug',
                  y: [12, 19],
                  fillColor: '#25BB3E',

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
                enabled: true
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
                //reversed: true,
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
                           <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.5em", backgroundColor: "#99EBA6"}}>Poor </p>
                         </td>
                         <td class="sleeplabel">
                           <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.5em", backgroundColor: "#34D54F"}}>Average </p>
                         </td>
                         <td class="sleeplabel">
                           <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.5em", backgroundColor: "#1F9833"}}>Good </p>
                         </td>
                         <td class="sleeplabel">
                           <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.5em", backgroundColor: "#11551D"}}>Great </p>
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
      
export default SleepNew;
    