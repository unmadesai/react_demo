import React, { Component } from "react";
import Chart from "react-apexcharts";

function generateData(time, count, yrange) {
    var i = 0;
    var week = ['SunM1', 'MonM1', 'TueM1', 'WedM1', 'ThuM1', 'FriM1', 'SatM1',
                'SunA1', 'MonA1', 'TueA1', 'WedA1', 'ThuA1', 'FriA1', 'SatA1', 
                'SunE1', 'MonE1', 'TueE1', 'WedE1', 'ThuE1', 'FriE1', 'SatE1',
                'SunM2', 'MonM2', 'TueM2', 'WedM2', 'ThuM2', 'FriM2', 'SatM2',
                'SunA2', 'MonA2', 'TueA2', 'WedA2', 'ThuA2', 'FriA2', 'SatA2', 
                'SunE2', 'MonE2', 'TueE2', 'WedE2', 'ThuE2', 'FriE2', 'SatE2'];

    //data to be changed
    // var intensityM = [56,61,25,37,58,48,36,0,27,0,88,0,78,20];
    // var intensityA = [25,57,0,29,54,45,42,0,77,33,0,0,92,12];
    // var intensityE = [58,20,77,88,10,18,55,27,49,52,18,36,66,98];

    var xM = ['SunM1', 'MonM1', 'TueM1', 'WedM1', 'ThuM1', 'FriM1', 'SatM1','SunM2', 'MonM2', 'TueM2', 'WedM2', 'ThuM2', 'FriM2', 'SatM2'];
    var xA = ['SunA1', 'MonA1', 'TueA1', 'WedA1', 'ThuA1', 'FriA1', 'SatA1','SunA2', 'MonA2', 'TueA2', 'WedA2', 'ThuA2', 'FriA2', 'SatA2'];
    var xE = ['SunE1', 'MonE1', 'TueE1', 'WedE1', 'ThuE1', 'FriE1', 'SatE1','SunE2', 'MonE2', 'TueE2', 'WedE2', 'ThuE2', 'FriE2', 'SatE2'];

    var intensityM = [56,61,18,37,58,18,36,0,27,0,88,0,78,80];
    var intensityA = [75,57,0,69,54,15,42,0,77,33,0,0,92,82];
    var intensityE = [88,20,17,88,10,18,55,27,49,52,18,36,66,98];

    var series=[];
    var j = 0;
   
      for (j=0;j<14;j++)
      {
          var x=xM[j];
          var y=intensityM[j];
          series.push({
            x: x,
            y: y
          });
          var x=xA[j];
          var y=intensityA[j];
          series.push({
            x: x,
            y: y
          });
          var x=xE[j];
          var y=intensityE[j];
          series.push({
            x: x,
            y: y
          });
      }
    

    // var series = [];
    // while (i < count) {
    //   var x= week[i];
    //   var y=0;
    //   if(time == 0) {
    //     y = intensityM[i];
    //   }
    //   else if(time == 1) {
    //     y = intensityA[i];
    //   }
    //   else if(time == 2) {
    //     y = intensityE[i];
    //   }

    //   series.push({
    //     x: x,
    //     y: y
    //   });
    //   i++;
    // }
    return series;
  }

class SymptomIntensity extends React.Component {
    constructor(props) {
        super(props);

        this.state = {     
          series: [
            {
              name: 'Symptom Intensity',
              data: generateData(0,42, {
                min: 0, max:100                
              })
            }
          ],   
          // series: [{
          //   name: 'Evening',
          //   data: generateData(2, 14, {
          //     min: 0,
          //     max: 100
          //   })
          // },
          // {
          //   name: 'Afternoon',
          //   data: generateData(1, 14, {
          //     min: 0,
          //     max: 100
          //   })
          // },
          // {
          //   name: 'Morning',
          //   data: generateData(0, 14, {
          //     min: 0,
          //     max: 100
          //   })
          // },
          // ],
          options: {
            plotOptions: {
                heatmap: {
                  colorScale: {
                    ranges: [{
                      from: 0,
                      to: 0,
                      color: '#FFFFFF',
                      name: 'no data',
                    },
                      {
                        from: 1,
                        to: 20,
                        color: '#FEB2AE',
                        name: 'very low',
                      },
                      {
                        from: 21,
                        to: 40,
                        color: '#FD655D',
                        name: 'low',
                      },
                      {
                        from: 41,
                        to: 60,
                        color: '#E70E02',
                        name: 'medium',
                      },
                      {
                        from: 61,
                        to: 80,
                        color: '#B60B02',
                        name: 'high',
                      },
                      {
                        from: 81,
                        to: 100,
                        color: '#510501',
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
              },
            },
            fill: {
              opacity: 1,
              type: 'solid',
            },
            legend: {
              horizontalAlign: 'right',
              fontSize: "14px",     
              marginBottom: "-10em"
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              labels: {
                show: false,
              }
            },
            yaxis: {
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
          <div>
               <table style={{marginRight: "0em", position: "relative", float: "right", marginTop: "0.4em", marginBottom: "-1.5em"}}>
                   <tr>

                        <td class="">
                           <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em", fontSize: "15px"}}><img src='images/symptom_intensity/verylow.png' height='14px' width='14px' 
                                 style={{verticalAlign: "-1.5px"}}/> Very Low </p>
                         </td>
                         <td class="">
                             <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em", fontSize: "15px"}}><img src='images/symptom_intensity/low.png' height='14px' width='14px' 
                                 style={{verticalAlign: "-1.5px"}}/> Low </p>
                         </td>
                         <td class="">
                             <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em", fontSize: "15px"}}><img src='images/symptom_intensity/medium.png' height='14px' width='14px' 
                                 style={{verticalAlign: "-1.5px"}}/> Medium </p>                
                         </td>
                         <td class="">
                             <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em", fontSize: "15px"}}><img src='images/symptom_intensity/high.png' height='14px' width='14px' 
                                 style={{verticalAlign: "-1.5px"}}/> High </p>                
                         </td>
                         <td class="">
                             <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em", fontSize: "15px"}}><img src='images/symptom_intensity/veryhigh.png' height='14px' width='14px' 
                                 style={{verticalAlign: "-1.5px"}}/> Very High </p>                
                         </td>      
                         <td class="">
                           <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em", fontSize: "15px"}}><img src='images/symptom_occurence/missing_data.png' height='14px' width='14px' 
                                 style={{verticalAlign: "-1.5px"}}/> No Data </p>
                         </td>              
                   </tr>
               </table>
           </div>
          
          <div id="chart" style={{marginTop: "-2em"}}>           
            <Chart options={this.state.options} series={this.state.series} type="heatmap" height={100} style={{marginLeft: "4.5em", marginRight: "-0.5em" }} />
          </div>
          <div id="expvsrel" style={{marginTop: "-1.5em"}}> 
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

export default SymptomIntensity;