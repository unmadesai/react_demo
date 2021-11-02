import React, { Component } from "react";
import Chart from "react-apexcharts";

class ERNew extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          
            series: [{
                name: 'Morning (Expected)',
                colors: '#81A2EF',
                type: 'scatter',
                data: [
                      //  [new Date('2021-08-15, 01:00 +0800').getTime(),0],
                       [new Date('2021-08-16, 01:00 +0800').getTime(),7], 
                       [new Date('2021-08-17, 01:00 +0800').getTime(),7], 
                       [new Date('2021-08-18, 01:00 +0800').getTime(),76], 
                      //  [new Date('2021-08-19, 01:00 +0800').getTime(),0], 
                      //  [new Date('2021-08-20, 01:00 +0800').getTime(),0], 
                       [new Date('2021-08-21, 01:00 +0800').getTime(),64],
                       [new Date('2021-08-22, 01:00 +0800').getTime(),73],
                      //  [new Date('2021-08-23, 01:00 +0800').getTime(),0],
                       [new Date('2021-08-24, 01:00 +0800').getTime(),67],
                       [new Date('2021-08-25, 01:00 +0800').getTime(),71],
                      //  [new Date('2021-08-26, 01:00 +0800').getTime(),0],
                      //  [new Date('2021-08-27, 01:00 +0800').getTime(),0],
                       [new Date('2021-08-28, 01:00 +0800').getTime(),72]
                      ]
              },
              {
                name: 'Afternoon (Reality)',
                colors: '#2B61E4',
                type: 'bar',
                data: [[new Date('2021-08-15, 8:00 +0800').getTime(),6],
                       [new Date('2021-08-16, 8:00 +0800').getTime(),5], 
                       [new Date('2021-08-17, 8:00 +0800').getTime(),3], 
                       [new Date('2021-08-18, 8:00 +0800').getTime(),0], 
                       [new Date('2021-08-19, 8:00 +0800').getTime(),0], 
                       [new Date('2021-08-20, 8:00 +0800').getTime(),67], 
                       [new Date('2021-08-21, 8:00 +0800').getTime(),69],
                       [new Date('2021-08-22, 8:00 +0800').getTime(),64],
                       [new Date('2021-08-23, 8:00 +0800').getTime(),50],
                       [new Date('2021-08-24, 8:00 +0800').getTime(),0],
                       [new Date('2021-08-25, 8:00 +0800').getTime(),0],
                       [new Date('2021-08-26, 8:00 +0800').getTime(),0],
                       [new Date('2021-08-27, 8:00 +0800').getTime(),66],
                       [new Date('2021-08-28, 8:00 +0800').getTime(),0]]
              },
              {
                name: 'Evening (Reality)',
                colors: '#000B85',
                type: 'bar',
                data: [[new Date('2021-08-15, 10:00 +0800').getTime(),4],
                       [new Date('2021-08-16, 10:00 +0800').getTime(),6], 
                       [new Date('2021-08-17, 10:00 +0800').getTime(),71], 
                       [new Date('2021-08-18, 10:00 +0800').getTime(),0], 
                       [new Date('2021-08-19, 10:00 +0800').getTime(),73], 
                       [new Date('2021-08-20, 10:00 +0800').getTime(),41], 
                       [new Date('2021-08-21, 10:00 +0800').getTime(),36],
                       [new Date('2021-08-22, 10:00 +0800').getTime(),0],
                       [new Date('2021-08-23, 10:00 +0800').getTime(),0],
                       [new Date('2021-08-24, 10:00 +0800').getTime(),0],
                       [new Date('2021-08-25, 10:00 +0800').getTime(),0],
                       [new Date('2021-08-26, 10:00 +0800').getTime(),0],
                       [new Date('2021-08-27, 10:00 +0800').getTime(),0],
                       [new Date('2021-08-28, 10:00 +0800').getTime(),69]]
              }, 
              //{
              //   name: 'Line Sunday 1',
              //   colors: '#000000',
              //   type: 'line',
              //   data: [{
              //     x: new Date('2021-08-15, 09:00 +0800').getTime(),
              //     y: 0
              //   }, {
              //     x: new Date('2021-08-15, 14:00 +0800').getTime(),
              //     y: 6
              //   }, {
              //     x: new Date('2021-08-15, 13:00 +0800').getTime(),
              //     y: 4
              //   }]
              // }
            ],
            options: {
              chart: {
                height: 350,
                //type: 'scatter',
                //type: 'bar',
                zoom: {
                  enabled: false
                },
                toolbar: {
                  show: false
                }
              },
              fill: {
                type:'solid',
              },
              markers: {
                size: [6]
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: '30%',
                  endingShape: 'rounded'
                },
              },
              legend: {
                // position: 'top',
                // fontSize: "14px",
                // horizontalAlign: 'right',
                show: false,
              },
              colors: ['#81A2EF','#2B61E4','#000B85'],
              dataLabels: {
                enabled: false
              },
              grid: {
                yaxis: {
                  lines: {
                    show: true
                  }
                },
              },
              xaxis: {
                show: false,
                labels: {
                    show:false,
                    datetimeUTC: false,
                },
                type: 'datetime',
                
              },
              yaxis: {
                max: 100,
                labels: {
                  formatter: function (y) {
                    if(y<100 && y>0) {
                      return "";
                    }
                    else if(y==0) {
                      return "Not At All";
                    }
                    else if(y==100) {
                      return "Extremely";
                    }
                  }
                },
              }
            },
          
          
          };
}

    

render() {
  return (
    <div>
      <div>
        <table style={{marginRight: "0.3em", position: "relative", float: "right", marginTop: "0.1em"}}>
            <tr>
                <td class="">
                    <p style={{marginTop: "0em", marginBottom: "-1em", padding: "0.1em"}}><img src='images/expectation_reality/morning.png' height='16px' width='16px' 
                          style={{verticalAlign: "-2px"}}/> Morning (Expected) </p>
                  </td>
                  <td class="">
                      <p style={{marginTop: "0em", marginBottom: "-1em", padding: "0.1em"}}><img src='images/expectation_reality/afternoon.png' height='16px' width='16px' 
                          style={{verticalAlign: "-2px"}}/> Afternoon (Reality) </p>
                  </td>
                  <td class="">
                      <p style={{marginTop: "0em", marginBottom: "-1em", padding: "0.1em"}}><img src='images/worry_intensity/high.png' height='16px' width='16px' 
                          style={{verticalAlign: "-2px"}}/> Evening (Reality) </p>                
                  </td>             
              </tr>
            </table>
      </div>
      <div id="chart">
          <Chart options={this.state.options} series={this.state.series} type="bar" height={250} style={{marginLeft: "1em", marginRight: "1em"}}/>
          <div id="expvsrel" style={{marginTop: "-1em"}}> 
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
    </div>
  );
}

}

export default ERNew;