import React, { Component } from "react";
import Chart from "react-apexcharts";

class ERNew extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          
            series: [{
                name: 'Morning (Expectations)',
                colors: '#81A2EF',
                data: [[new Date('2021-08-15, 09:00 +0800').getTime(),67],
                       [new Date('2021-08-16, 09:00 +0800').getTime(),54], 
                       [new Date('2021-08-17, 09:00 +0800').getTime(),19], 
                       [new Date('2021-08-18, 09:00 +0800').getTime(),39], 
                       [new Date('2021-08-19, 09:00 +0800').getTime(),39], 
                       [new Date('2021-08-20, 09:00 +0800').getTime(),0], 
                       [new Date('2021-08-21, 09:00 +0800').getTime(),0],
                       [new Date('2021-08-22, 09:00 +0800').getTime(),65],
                       [new Date('2021-08-23, 09:00 +0800').getTime(),55],
                       [new Date('2021-08-24, 09:00 +0800').getTime(),0],
                       [new Date('2021-08-25, 09:00 +0800').getTime(),33],
                       [new Date('2021-08-26, 09:00 +0800').getTime(),50],
                       [new Date('2021-08-27, 09:00 +0800').getTime(),59],
                       [new Date('2021-08-28, 09:00 +0800').getTime(),59]]
              },
              {
                name: 'Afternoon (Reality)',
                colors: '#2B61E4',
                data: [[new Date('2021-08-15, 14:00 +0800').getTime(),58],
                       [new Date('2021-08-16, 14:00 +0800').getTime(),58], 
                       [new Date('2021-08-17, 14:00 +0800').getTime(),0], 
                       [new Date('2021-08-18, 14:00 +0800').getTime(),40], 
                       [new Date('2021-08-19, 14:00 +0800').getTime(),0], 
                       [new Date('2021-08-20, 14:00 +0800').getTime(),59], 
                       [new Date('2021-08-21, 14:00 +0800').getTime(),83],
                       [new Date('2021-08-22, 14:00 +0800').getTime(),0],
                       [new Date('2021-08-23, 14:00 +0800').getTime(),37],
                       [new Date('2021-08-24, 14:00 +0800').getTime(),0],
                       [new Date('2021-08-25, 14:00 +0800').getTime(),67],
                       [new Date('2021-08-26, 14:00 +0800').getTime(),0],
                       [new Date('2021-08-27, 14:00 +0800').getTime(),0],
                       [new Date('2021-08-28, 14:00 +0800').getTime(),54]]
              },
              {
                name: 'Evening (Reality)',
                colors: '#2B61E4',
                data: [[new Date('2021-08-15, 19:00 +0800').getTime(),63],
                       [new Date('2021-08-16, 19:00 +0800').getTime(),58], 
                       [new Date('2021-08-17, 19:00 +0800').getTime(),0], 
                       [new Date('2021-08-18, 19:00 +0800').getTime(),63], 
                       [new Date('2021-08-19, 19:00 +0800').getTime(),56], 
                       [new Date('2021-08-20, 19:00 +0800').getTime(),66], 
                       [new Date('2021-08-21, 19:00 +0800').getTime(),81],
                       [new Date('2021-08-22, 19:00 +0800').getTime(),0],
                       [new Date('2021-08-23, 19:00 +0800').getTime(),38],
                       [new Date('2021-08-24, 19:00 +0800').getTime(),0],
                       [new Date('2021-08-25, 19:00 +0800').getTime(),67],
                       [new Date('2021-08-26, 19:00 +0800').getTime(),0],
                       [new Date('2021-08-27, 19:00 +0800').getTime(),0],
                       [new Date('2021-08-28, 19:00 +0800').getTime(),62]]
              },
            ],
            options: {
              chart: {
                height: 350,
                type: 'scatter',
                zoom: {
                  enabled: false
                },
                toolbar: {
                  show: false
                }
              },
              legend: {
                position: 'top',
                fontSize: "14px",
                horizontalAlign: 'right',
              },
              colors: ['#81A2EF','#2B61E4','#2B61E4'],
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
                max: 100
              }
            },
          
          
          };
}

    

render() {
  return (
      <div id="chart">
          <Chart options={this.state.options} series={this.state.series} type="scatter" height={250} style={{marginLeft: "3.4em", marginRight: "1em" }}/>
          <div id="expvsrel"> 
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

export default ERNew;