import React, { Component } from "react";
import Chart from "react-apexcharts";

function generateData(time, count, yrange) {
    var i = 0;
    var week = ['', 'Sun', '', '', 'Mon', '', '', 
                'Tue', '', '', 'Wed', '', '', 'Thu',
                 '', '', 'Fri', '', '', 'Sat', ''
              ];

    //basic division into categories of sleep based on numbers
    //0-20 = no sleep = to be marked grey just for reference, marked #eeeeee
    //21-40 = poor sleep = marked #99EBA6
    //41-60 = average sleep = marked #34D54F
    //61-80 = good sleep = marked #1F9833
    //81-100 = great sleep = marked #11551D
    //for consistency, recording poor sleep as 25, average sleep as 45, good sleep as 65 and great sleep as 85, and no sleep or other periods as 0 
    //this is just for quick prototyping, feel free to change logic as required, can probably be made MUCH more concise
    //h0-h23 is 24 hours of day, think of it as a 24x7 table, we fill in n columns per day based on when they go to sleep and when they wake up
    //eg slept at 10pm and woke up at 7am = h13(24-10-1 [-1 since time starts from top of bar]) to h5 (12-7) should be coloured
    var h0 = [0,0,0,0,0,0,0];
    var h1 = [0,0,0,0,0,0,0];
    var h2 = [0,0,0,0,0,0,0];
    var h3 = [0,0,0,0,0,0,0];
    var h4 = [0,0,0,0,0,0,45];
    var h5 = [25,0,0,0,65,0,45];
    var h6 = [25,45,0,0,65,0,45];
    var h7 = [25,45,0,25,65,85,45];
    var h8 = [25,45,65,25,65,85,45];
    var h9 = [25,45,65,25,65,85,45];
    var h10 = [25,45,65,25,65,85,45];
    var h11 = [25,45,65,25,65,85,45];
    var h12 = [25,45,65,25,65,85,45];
    var h13 = [25,45,65,25,65,85,45];
    var h14 = [0,45,0,25,65,85,45];
    var h15 = [0,0,0,25,0,85,45];
    var h16 = [0,0,0,0,0,0,45];
    var h17 = [0,0,0,0,0,0,0];
    var h18 = [0,0,0,0,0,0,0];
    var h19 = [0,0,0,0,0,0,0];
    var h20 = [0,0,0,0,0,0,0];
    var h21 = [0,0,0,0,0,0,0];
    var h22 = [0,0,0,0,0,0,0];
    var h23 = [0,0,0,0,0,0,0];

    var series = [];
    while (i < count) {
      var x= week[i];
      var y=0;
      // str = 'h'.concat(time);
      // print(str);
      // y = str[i];
      if(time == 0) {
        y = h0[i];
      }
      else if(time == 1) {
        y = h1[i];
      }
      else if(time == 2) {
        y = h2[i];
      }
      else if(time == 3) {
        y = h3[i];
      }
      else if(time == 4) {
        y = h4[i];
      }
      else if(time == 5) {
        y = h5[i];
      }
      else if(time == 6) {
        y = h6[i];
      }
      else if(time == 7) {
        y = h7[i];
      }
      else if(time == 8) {
        y = h8[i];
      }
      else if(time == 9) {
        y = h9[i];
      }
      else if(time == 10) {
        y = h10[i];
      }
      else if(time == 11) {
        y = h11[i];
      }
      else if(time == 12) {
        y = h12[i];
      }
      else if(time == 13) {
        y = h13[i];
      }
      else if(time == 14) {
        y = h14[i];
      }
      else if(time == 15) {
        y = h15[i];
      }
      else if(time == 16) {
        y = h16[i];
      }
      else if(time == 17) {
        y = h17[i];
      }
      else if(time == 18) {
        y = h18[i];
      }
      else if(time == 19) {
        y = h19[i];
      }
      else if(time == 20) {
        y = h20[i];
      }
      else if(time == 21) {
        y = h21[i];
      }
      else if(time == 22) {
        y = h22[i];
      }
      else if(time == 23) {
        y = h23[i];
      }

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }

class SleepSymOccCopy extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [
            {
              //h0
              name: '11 am',
              data: generateData(0, 21)
            },
            {
              //h1
              name: '10 am',
              data: generateData(1, 21)
            },
            {
              //h2
              name: '9 am',
              data: generateData(2, 21)
            },
            {
              //h3
              name: '8 am',
              data: generateData(3, 21)
            },
            {
              //h4
              name: '7 am',
              data: generateData(4, 21)
            },
            {
              //h5
              name: '6 am',
              data: generateData(5, 21)
            },
            {
              //h6
              name: '5 am',
              data: generateData(6, 21)
            },
            {
              //h7
              name: '4 am',
              data: generateData(7, 21)
            },
            {
              //h8
              name: '3 am',
              data: generateData(8, 21)
            },
            {
              //h9
              name: '2 am',
              data: generateData(9, 21)
            },
            {
              //h10
              name: '1 am',
              data: generateData(10, 21)
            },
            {
              //h11
              name: 'Midnight',
              data: generateData(11, 21)
            },
            {
              //h12
              name: '11 pm',
              data: generateData(12, 21)
            },
            {
              //h13
              name: '10 pm',
              data: generateData(13, 21)
            },
            {
              //h14
              name: '9 pm',
              data: generateData(14, 21)
            },
            {
              //h15
              name: '8 pm',
              data: generateData(15, 21)
            },
            {
              //h16
              name: '7 pm',
              data: generateData(16, 21)
            },
            {
              //h17
              name: '6 pm',
              data: generateData(17, 21)
            },
            {
              //h18
              name: '5 pm',
              data: generateData(18, 21)
            },
            {
              //h19
              name: '4 pm',
              data: generateData(19, 21)
            },
            {
              //h20
              name: '3 pm',
              data: generateData(20, 21)
            },
            {
              //h21
              name: '2 pm',
              data: generateData(21, 21)
            },
            {
              //h22
              name: '1 pm',
              data: generateData(22, 21)
            },
            {
              //h23
              name: 'Noon',
              data: generateData(23, 21)
            },

          ],
          options: {
            plotOptions: {
                heatmap: {
                  colorScale: {
                    ranges: [{
                        from: 0,
                        to: 20,
                        //no sleep=white                       
                        color: '#eeeeee',
                        name: 'no sleep',
                      },
                      {
                        from: 21,
                        to: 40,
                        //poor                       
                        color: '#99EBA6',
                        name: 'poor sleep',
                      },
                      {
                        from: 41,
                        to: 60,
                        //average                       
                        color: '#34D54F',
                        name: 'average sleep',
                      },
                      {
                        from: 61,
                        to: 80,
                        //good                       
                        color: '#1F9833',
                        name: 'good sleep',
                      },
                      {
                        from: 81,
                        to: 100,
                        //great                       
                        color: '#11551D',
                        name: 'great sleep',
                      },
                      
                    ]
                  }
                }
              },
            chart: {
              background: '0',
              stacked:true,
              zoom: {
                enabled: false
              },
              toolbar: {
                show: false
              },
            },
            legend: {
              horizontalAlign: 'center',
              show: false,              
            },
            dataLabels: {
              enabled: false,
            },
            title: {
              horizontalAlign: 'center',
              offsetX: 40,
            },
            xaxis: {
              labels: {
                show: false,
              }
            },
          },        
        };
      }


  render() {
    return (
        <div>
          <div id="chart">
          <div>
                <table style={{marginLeft: "67em", marginTop: "-0.5em"}}>
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
                         <td class="sleeplabel">
                             <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/worry_certainty/nodata.png' height='13px' width='13px' 
                                 style={{verticalAlign: "-2px"}}/> No Data </p>                
                         </td>                  
                   </tr>
               </table>
            </div>
            <div id="sleephoursN" style={{marginTop: "-2em"}}> 
              <table>
                <tr>
                  {/* <!-- comment out if not on that day --> */}
                  <th>Hours</th>
                  <td>6</td>
                  <td>6</td>
                  <td>8</td>
                  <td>-</td>
                  <td>8</td>
                  <td>6</td>
                  <td>10</td>                   
                </tr>
              </table>
            </div>
            <Chart options={this.state.options} series={this.state.series} type="heatmap" height={350} style={{marginLeft: "-0.4em", marginRight: "-0.4em",marginTop: "-2em"}} />
          </div>
          <div id="expvsrelSleepN" style={{marginTop: "-2em"}}> 
              <table>
                <tr>
                  {/* <!-- comment out if not on that day --> */}
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
        </div>
      );
    }
}

export default SleepSymOccCopy;