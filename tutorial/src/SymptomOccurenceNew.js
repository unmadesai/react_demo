import React, { Component } from "react";
import Chart from "react-apexcharts";

function generateData(time, count, yrange) {
    var i = 0;
    var week = ['', 'Sun', '', '', 'Mon', '', '', 
                'Tue', '', '', 'Wed', '', '', 'Thu',
                 '', '', 'Fri', '', '', 'Sat', '', 
                 '', 'Sun', '', '', 'Mon', '', '',
                 'Tue', '', '', 'Wed', '', '', 'Thu', 
                 '', '', 'Fri', '', '', 'Sat', ''
              ];

    //data to be changed
    //10=no data=grey, 0=no symptom=pale pink, 100=yes symptom
    //40=absence=grey, 0==absence=white, 100=red=presence of symptom
    //alternate 0 and 40 vertically for grey-white pattern for absence of symptom
    var headache = [0,10,10,
      0,0,0,
      0,100,0,
      0,0,0,
      0,100,100,
      0,100,0,
      0,10,0,
      0,0,0,
      0,100,0,
      0,100,0,
      100,0,100,
      0,10,0,
      0,0,0,
      0,0,100];
    var dizziness = [0,0,0,
      0,0,100,
      0,0,0,
      100,0,0,
      0,0,0,
      0,10,0,
      0,0,100,
      0,10,10,
      0,0,0,
      0,10,0,
      0,0,0,
      10,10,10,
      0,0,0,
      0,0,0];
    var heartbeat = [0,0,100,
      10,0,0,
      0,10,0,
      0,0,0,
      0,0,10,
      0,10,0,
      0,100,100,
      0,10,0,
      10,0,0,
      10,0,0,
      0,10,0,
      0,10,0,
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
      0,10,0,
      0,10,0,
      0,0,10,
      0,0,10,
      0,0,0];
    var stomachache = [0,0,0,
      0,0,0,
      0,10,0,
      10,0,0,
      10,0,100,
      0,0,0,
      0,0,0,
      0,10,0,
      0,0,10,
      0,0,10,
      0,10,0,
      10,0,0,
      0,0,0,
      0,0,0];
    var backpain = [0,100,0,
      0,0,0,
      0,100,0,
      100,0,0,
      0,0,0,
      0,0,100,
      100,100,100,
      100,100,0,
      0,100,0,
      0,100,0,
      0,100,0,
      0,0,100,
      0,100,100,
      100,0,100];
    var limbpain = [0,100,0,
      100,100,0,
      100,0,100,
      0,0,0,
      10,100,100,
      0,100,100,
      100,0,0,
      100,100,0,
      0,100,10,
      100,10,100,
      100,0,100,
      0,10,0,
      0,100,100,
      100,0,0];



    var series = [];
    while (i < count) {
      var x= week[i];
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
                        to: 9,
                        //no symptom=pale pink                       
                        color: '#FFD9D7',
                        name: 'no symptom',
                      },
                      {
                        from: 10,
                        to: 99,
                         //grey=no data
                        color: '#E0E0E0',
                        name: 'missing data',
                      },
                      {
                        from: 99,
                        to: 100,
                        //yes symptom=red
                        color: '#E70E02',
                        name: 'symptom',
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
          },        
        };
      }


  render() {
    return (
        <div>
          <div id="chart">
          <div>
               <table style={{marginRight: "1em", position: "relative", float: "right", marginTop: "1.2em"}}>
                   <tr>
                       <td class="">
                           <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/symptom_occurence/occurence.png' height='16px' width='16px' 
                                 style={{verticalAlign: "middle"}}/> Occured </p>
                         </td>
                         <td class="">
                             <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/symptom_occurence/no_occurence.png' height='16px' width='16px' 
                                 style={{verticalAlign: "middle"}}/> Did not occur </p>
                         </td>
                         <td class="">
                             <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/symptom_occurence/missing_data.png' height='16px' width='16px' 
                                 style={{verticalAlign: "middle"}}/> No Data </p>                
                         </td>
                         <td class="">
                             <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/symptom_occurence/medication.png' height='14px' width='14px' 
                                 style={{verticalAlign: "-1px"}}/> Medication taken </p>
                         </td>                      
                   </tr>
               </table>
           </div>
          {/* <div>
              <table style={{marginRight: "1em", position: "relative", float: "right", marginBottom: "-1em", marginTop: "0.2em"}}>
                  <tr>
                      <td class=" ">
                          <p style={{marginRight: "1em", padding: "0.1em"}}><img src='images/symptom_occurence/medication.png' height='14px' width='14px' 
                                style={{verticalAlign: "middle"}}/> Medication taken </p>
                        </td>
                  </tr>
              </table>
          </div> */}
          <div id="occurence" style={{marginTop: "-3em"}}> 
              <table>
                <tr>
                  {/* <!-- comment out if not on that day --> */}
                  {/* <!-- MEDICATION SYMBOL ABOVE SYMBOL OCCURENCE --> */}
                  {/* Sunday */}
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  {/* Monday */}
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  {/* Tuesday */}
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  {/* Wednesday */}
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  {/* Thursday */}
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  {/* Friday */}
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  {/* Saturday */}
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  {/* Sunday  WEEK 2*/}
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  {/* Monday */}
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  {/* Tuesday */}
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  {/* Wednesday */}
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  {/* Thursday */}
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  {/* Friday */}
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  {/* Saturday */}
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>
                  <th><img src='images/symptom_occurence/medication.png' height='8px' width='8px'></img></th>       
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