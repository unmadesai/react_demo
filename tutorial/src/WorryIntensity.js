import React, { Component } from "react";
import Chart from "react-apexcharts";

function generateData(count, yrange) {
    var i = 0;
    var week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 
                'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var intensity = [0,5,8,74,0,40,64,49,0,64,69,90,90,65];
    var series = [];
    while (i < count) {
      var x= week[i];
      var y = intensity[i];

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }

class WorryIntensity extends React.Component {
    constructor(props) {
        super(props);

        this.state = {        
          series: [
          {
            name: 'Morning',
            data: generateData(14, {
              min: 0,
              max: 100
            })
          },          
          ],
          options: {
            plotOptions: {
                heatmap: {
                  colorScale: {
                    ranges: [{
                        from: 0,
                        to: 20,
                        color: '#BFD7F2',
                        name: 'very low',
                      },
                      {
                        from: 21,
                        to: 40,
                        color: '#80B6F2',
                        name: 'low',
                      },
                      {
                        from: 41,
                        to: 60,
                        color: '#1D2FE8',
                        name: 'medium',
                      },
                      {
                        from: 61,
                        to: 80,
                        color: '#000B85',
                        name: 'high',
                      },
                      {
                        from: 81,
                        to: 100,
                        color: '#000538',
                        name: 'very high',
                      }
                    ]
                  }
                }
              },
            chart: {
              zoom: {
                enabled: false
              },
              toolbar: {
                show: false
              }
            },
            dataLabels: {
              enabled: false
            },
            legend: {
              show: true,
            },
          },
        };
      }


  render() {
    return (
        <div>
          <div id="chart">            
            {/* <div>
              <table style={{marginRight: "1em", position: "relative", float: "right", marginBottom: "-1em", marginTop: "-1em"}}>
                  <tr>
                      <td class=" ">
                          <p style={{marginRight: "1em", padding: "0.1em"}}><img src='images/worry_intensity/avoidance.png' height='25px' width='25px' 
                                style={{verticalAlign: "middle"}}/> Avoidance </p>
                        </td>
                  </tr>
              </table>
          </div> */}
          <div>
               <table style={{marginRight: "0.7em", position: "relative", float: "right", marginTop: "0em"}}>
                   <tr>
                       <td class="">
                           <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/worry_intensity/verylow.png' height='16px' width='16px' 
                                 style={{verticalAlign: "middle"}}/> Very Low </p>
                         </td>
                         <td class="">
                             <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/worry_intensity/low.png' height='16px' width='16px' 
                                 style={{verticalAlign: "middle"}}/> Low </p>
                         </td>
                         <td class="">
                             <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/worry_intensity/medium.png' height='16px' width='16px' 
                                 style={{verticalAlign: "middle"}}/> Medium </p>                
                         </td>
                         <td class="">
                             <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/worry_intensity/high.png' height='16px' width='16px' 
                                 style={{verticalAlign: "middle"}}/> High </p>                
                         </td>
                         <td class="">
                             <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/worry_intensity/veryhigh.png' height='16px' width='16px' 
                                 style={{verticalAlign: "middle"}}/> Very High </p>                
                         </td>
                         <td class="">
                             <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/worry_intensity/avoidance.png' height='20px' width='20px' 
                                 style={{verticalAlign: "middle"}}/> Avoided</p>
                         </td>                      
                   </tr>
               </table>
           </div>
          <div id="avoidance"> 
              <table>
                <tr>
                  {/* <!-- comment out if not on that day --> */}
                  {/* <!-- AVOIDANCE ABOVE HEATMAP --> */}
                  <th><img src='images/worry_intensity/avoidance.png' height='25px' width='25px'></img></th>
                  <th><img src='images/worry_intensity/avoidance.png' height='25px' width='25px'></img></th>
                  <th><img src='images/worry_intensity/avoidance.png' height='25px' width='25px'></img></th>
                  <th><img src='images/worry_intensity/blank.png' height='25px' width='25px'></img></th>
                  <th><img src='images/worry_intensity/avoidance.png' height='25px' width='25px'></img></th>
                  <th><img src='images/worry_intensity/avoidance.png' height='25px' width='25px'></img></th>
                  <th><img src='images/worry_intensity/avoidance.png' height='25px' width='25px'></img></th>
                  <th><img src='images/worry_intensity/avoidance.png' height='25px' width='25px'></img></th>
                  <th><img src='images/worry_intensity/avoidance.png' height='25px' width='25px'></img></th>
                  <th><img src='images/worry_intensity/avoidance.png' height='25px' width='25px'></img></th>
                  <th><img src='images/worry_intensity/avoidance.png' height='25px' width='25px'></img></th>
                  <th><img src='images/worry_intensity/blank.png' height='25px' width='25px'></img></th>
                  <th><img src='images/worry_intensity/avoidance.png' height='25px' width='25px'></img></th>
                  <th><img src='images/worry_intensity/blank.png' height='25px' width='25px'></img></th>            
                </tr>
              </table>
            </div>
            <Chart options={this.state.options} series={this.state.series} type="heatmap" height={100} style={{marginLeft: "1.5em", marginRight: "-0.5em"}}/>
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
}

export default WorryIntensity;