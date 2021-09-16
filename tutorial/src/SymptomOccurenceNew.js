import React, { Component } from "react";
import Chart from "react-apexcharts";

//var time = 0;

function generateData(time, count, yrange) {
    var i = 0;
    var week = ['', 'Sun', '', '', 'Mon', '', '', 
                'Tues', '', '', 'Wed', '', '', 'Thurs',
                 '', '', 'Fri', '', '', 'Sat', '', 
                 '', 'Sun', '', '', 'Mon', '', '',
                 'Tues', '', '', 'Wed', '', '', 'Thurs', 
                 '', '', 'Fri', '', '', 'Sat', ''
              ];
    // var week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 
    // 'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

    //data to be changed
    var headache = [0,0,0,
      0,0,0,
      0,100,0,
      0,0,0,
      0,100,100,
      0,100,0,
      0,0,0,
      0,0,0,
      0,100,0,
      100,100,0,
      0,0,100,
      0,0,0,
      0,0,0,
      0,0,100];
    var dizziness = [0,0,0,
      0,0,100,
      0,0,0,
      100,0,0,
      0,0,0,
      0,0,0,
      0,0,100,
      0,0,0,
      0,0,0,
      0,0,0,
      0,0,0,
      0,0,0,
      0,0,0,
      0,0,0];
    var heartbeat = [0,0,100,
      0,0,0,
      0,0,0,
      0,0,0,
      0,0,0,
      0,0,0,
      0,100,100,
      0,0,0,
      0,0,0,
      0,0,0,
      0,0,0,
      0,0,0,
      0,0,0,
      0,0,0];
    var nausea = [0,100,0,
      0,0,0,
      0,0,0,
      100,0,0,
      0,0,0,
      0,0,100,
      100,0,0,
      0,0,0,
      0,0,0,
      0,0,0,
      0,0,0,
      0,0,0,
      0,0,0,
      0,0,0];
    var stomachache = [0,0,0,
      0,0,0,
      0,0,0,
      0,0,0,
      0,0,100,
      0,0,0,
      0,0,0,
      0,0,0,
      0,0,0,
      0,0,0,
      0,0,0,
      0,0,0,
      0,0,0,
      0,0,0];
    var backpain = [0,100,0,
      0,0,0,
      0,100,0,
      100,0,0,
      0,0,0,
      0,0,100,
      0,100,100,
      100,100,0,
      100,100,0,
      0,100,0,
      0,100,0,
      0,0,100,
      0,100,100,
      100,0,100];
    var limbpain = [0,100,0,
      100,100,0,
      100,0,100,
      0,0,0,
      0,100,100,
      0,100,100,
      100,0,0,
      100,100,0,
      0,100,0,
      100,0,100,
      100,0,100,
      0,0,0,
      0,100,100,
      100,0,0];



    var series = [];
    while (i < count) {
      var x= week[i];
      // if((i+1)%3==0) {
      //   var x=week[(i+1)/3-1];
      // }
        //var x = 'w' + (i + 1).toString();
      //var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var y=0;
      if(time == 0) {
        y = headache[i];
      }
      else if(time == 1) {
        y = dizziness[i];
      }
      else if(time == 2) {
        y = heartbeat[i];
      }
      else if(time == 3) {
        y = nausea[i];
      }
      else if(time == 4) {
        y = stomachache[i];
      }
      else if(time == 5) {
        y = backpain[i];
      }
      else if(time == 6) {
        y = limbpain[i];
      }
      //   console.log(y);
      //   if(y>=0 && y<=20) {

    //   }
      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }

class SymptomOccNew extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [
            {
              name: 'Limb pain',
              data: generateData(6, 42, {
                min: 0,
                max: 100
              })
            },
            {
              name: 'Back pain',
              data: generateData(5, 42, {
                min: 0,
                max: 100
              })
            },
            {
              name: 'Stomachache',
              data: generateData(4, 42, {
                min: 0,
                max: 100
              })
            },
            {
              name: 'Nausea',
              data: generateData(3, 42, {
                min: 0,
                max: 100
              })
            },
            {
              name: 'Fast heartbeat',
              data: generateData(2, 42, {
                min: 0,
                max: 100
              })
            },
            {
              name: 'Dizziness',
              data: generateData(1, 42, {
                min: 0,
                max: 100
              })
            },
            {
            name: 'Headache',
            data: generateData(0, 42, {
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
                        color: '#888888',
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
                        color: '#E70E02',
                        name: 'very high',
                      }
                    ]
                  }
                }
              },
            chart: {
              //height: 350,
              //type: 'area',
              background: '0',
              stacked:true,
              zoom: {
                enabled: false
              },
              toolbar: {
                show: false
              },
              // sparkline: {
              //   enabled: true
              // }
              // margin: {
              //   bottom: -2,
              // }
              // grid: {
              //   padding: {
              //     left: 0,
              //     right: 0
              //   }
              // }
            },
            legend: {
              horizontalAlign: 'center',
              // margin: {
              //   top: -10,
              // }
              show: false,
              
            },
            dataLabels: {
              enabled: false
            },
            //colors: ["#E70E02"],
            title: {
              //text: 'Occurence of symptoms',
              horizontalAlign: 'center',
              offsetX: 40
              // margin: {
              //   bottom: 0.2,
              // }
            },
          },
        
        
        };
      }


  render() {
    return (
        <div>
          <div id="chart">
          <div id="occurence"> 
              <table>
                <tr>
                  {/* <!-- comment out if not on that day --> */}
                  {/* Sunday */}
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='8px' width='8px'></img></th>
                  {/* Monday */}
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='8px' width='8px'></img></th>
                  {/* Tuesday */}
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='8px' width='8px'></img></th>
                  {/* Wednesday */}
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='8px' width='8px'></img></th>
                  {/* Thursday */}
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='8px' width='8px'></img></th>
                  {/* Friday */}
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='8px' width='8px'></img></th>
                  {/* Saturday */}
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='8px' width='8px'></img></th>
                  {/* Sunday  WEEK 2*/}
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='8px' width='8px'></img></th>
                  {/* Monday */}
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='8px' width='8px'></img></th>
                  {/* Tuesday */}
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='8px' width='8px'></img></th>
                  {/* Wednesday */}
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='8px' width='8px'></img></th>
                  {/* Thursday */}
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='8px' width='8px'></img></th>
                  {/* Friday */}
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='8px' width='8px'></img></th>
                  {/* Saturday */}
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='8px' width='8px'></img></th>       
                </tr>
              </table>
            </div>
            <Chart options={this.state.options} series={this.state.series} type="heatmap" height={220} style={{marginLeft: "-0.4em", marginRight: "-0.4em" }} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
}

export default SymptomOccNew;
