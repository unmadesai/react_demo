import React, { Component } from "react";
import Chart from "react-apexcharts";

var qual_sleep = ['good', 'great', 'good', 'poor', 'average', 'poor', 'good', 
                'poor', 'great', 'good', 'poor', 'average', 'good', 'great'];

//color scheme:
//99EBA6=light=poor sleep
//34D54F=medium=okay sleep
//1F9833=medium2=good sleep
//11551D=dark=great sleep

class SleepNew1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          
            series: [{
                data: [{
                  x: '15 Aug',
                  //12-(wakeup time), 24-(going to sleep time)
                  //eg 12-6,24-8 = slept from 8pm to 6am
                  //if sleep time post 12am, add 12, eg 1am=13
                  y: [12-(7), 24-(13)],
                  //need a check here with the corresponding quality of sleep value
                  //currently series does not allow if within each data point, only color
                  //so coloring individually, but this is not optimal!
                  //   if(qual_sleep[0] == "great") {
                  //     color: '#ffffff',
                  //   },
                  fillColor: '#1F9833',
                  
                }, 
                //16 Aug Monday
                {
                  x: '16 Aug',
                  y: [12-(8), 24-(14)],
                  fillColor: '#1F9833',

                }, 
                //17 Aug Tuesday
                {
                  x: '17 Aug',
                  y: [12-(7), 24-(11)],
                  fillColor: '#11551D',

                },
                //18 Aug Wednesday
                {
                  x: '18 Aug',
                  y: [12-(10), 24-(16)],
                  fillColor: '#99EBA6',

                }, 
                //19 Aug Thursday
                {
                  x: '19 Aug',
                  y: [12-(9), 24-(15)],
                  fillColor: '#34D54F',

                },
                //20 Aug Friday
                {
                  x: '20 Aug',
                  y: [12-(9), 24-(17)],
                  fillColor: '#99EBA6',

                },
                //21 Aug Saturday
                {
                  x: '21 Aug',
                  y: [12-(9), 24-(13)],
                  fillColor: '#1F9833',

                },
                //22 Aug Sunday
                {
                  x: '22 Aug',
                  y: [12-(9), 24-(15)],
                  fillColor: '#1F9833',

                },
                //23 Aug Monday
                {
                  x: '23 Aug',
                  y: [12-(9), 24-(18)],
                  fillColor: '#99EBA6',

                },
                //24 Aug Tuesday
                {
                  x: '24 Aug',
                  y: [12-(10), 24-(15)],
                  fillColor: '#1F9833',

                }, 
                //25 Aug Wednesday
                {
                  x: '25 Aug',
                  y: [12-(10), 24-(16)],
                  fillColor: '#34D54F',

                }, 
                //26 Aug Thursday
                {
                  x: '26 Aug',
                  y: [12-(10), 24-(17)],
                  fillColor: '#34D54F',

                },
                //27 Aug Friday
                {
                  x: '27 Aug',
                  y: [12-(10), 24-(16)],
                  fillColor: '#1F9833',

                },
                //28 Aug Saturday
                {
                  x: '28 Aug',
                  y: [12-(8), 24-(16)],
                  fillColor: '#99EBA6',

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
                //enabled: true,
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
                  //using noon-noon model
                  formatter: function (y) {
                    if(y<12 && y!=0) {
                      return y.toFixed(0) + " pm";
                    }
                    else if(y>12 && y!=24) {
                      return (y-12).toFixed(0) + " am";
                    }
                    if(y==0 || y==24) {
                      return "Noon";
                    }
                    if(y==12) {
                      return "Midnight";
                    }
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
                           <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.5em", backgroundColor: "#11551D", color: "#ffffff"}}>Great </p>
                         </td>                     
                   </tr>
               </table>
           </div>
          <div id="sleephours" style={{marginTop: "0em"}}> 
              <table>
                <tr>
                  {/* <!-- comment out if not on that day --> */}
                  {/* <td>Hours</td> */}
                  <td>8</td>
                  <td>8</td>
                  <td>7</td>
                  <td>-</td>
                  <td>-</td>
                  <td>5</td>
                  <td>8</td>
                  <td>-</td>
                  <td>8</td>
                  <td>8</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>7</td>                         
                </tr>
              </table>
            </div>
           <div id="chart">
                    <Chart options={this.state.options} series={this.state.series} type="rangeBar" height={300} 
                           style={{marginLeft: "2.5em", marginRight: "0.3em", marginTop: "-2em"}}/>
                </div>
           </div>
            );
          }
      }
      
export default SleepNew1;
    