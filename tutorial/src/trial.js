import React, { Component } from "react";
import Chart from "react-apexcharts";

class Trial extends React.Component {
    constructor(props) {
        super(props);

            this.state = {
          
            series: [{
              name: 'Points',
              type: 'scatter',
            
              //2.14, 2.15, 3.61, 4.93, 2.4, 2.7, 4.2, 5.4, 6.1, 8.3
              data: [{
                x: 1,
                y: 2.14
              }, {
                x: 1.2,
                y: 2.19
              }, {
                x: 1.8,
                y: 2.43
              }, {
                x: 2.3,
                y: 3.8
              }, {
                x: 2.6,
                y: 4.14
              }, {
                x: 2.9,
                y: 5.4
              }, {
                x: 3.2,
                y: 5.8
              }, {
                x: 3.8,
                y: 6.04
              }, {
                x: 4.55,
                y: 6.77
              }, {
                x: 4.9,
                y: 8.1
              }, {
                x: 5.1,
                y: 9.4
              }, {
                x: 7.1,
                y: 7.14
              },{
                x: 9.18,
                y: 8.4
              }]
            },
            {
                name: 'Points2',
                type: 'scatter',
              
                //2.14, 2.15, 3.61, 4.93, 2.4, 2.7, 4.2, 5.4, 6.1, 8.3
                data: [{
                  x: 2,
                  y: 3.14
                }, {
                  x: 1.2,
                  y: 2.19
                }, {
                  x: 1.8,
                  y: 2.43
                }, {
                  x: 2.3,
                  y: 3.8
                }, {
                  x: 2.6,
                  y: 4.14
                }, {
                  x: 2.9,
                  y: 5.4
                }, {
                  x: 3.2,
                  y: 5.8
                }, {
                  x: 3.8,
                  y: 6.04
                }, {
                  x: 4.55,
                  y: 6.77
                }, {
                  x: 4.9,
                  y: 8.1
                }, {
                  x: 5.1,
                  y: 9.4
                }, {
                  x: 7.1,
                  y: 7.14
                },{
                  x: 9.18,
                  y: 8.4
                }]
              }, {
              name: 'Line',
              type: 'line',
              data: [{
                x: 1,
                y: 2.14
              }, {
                x: 1.2,
                y: 2.19
              }, {
                x: 1.8,
                y: 2.43
              }, {
                x: 4,
                y: 5
              }, {
                x: 5,
                y: 6
              }]

            },
            {
                name: 'Line',
                type: 'line',
                data: [{
                  x: 3,
                  y: 4.14
                }, {
                  x: 4.2,
                  y: 5.19
                }, {
                  x: 5.8,
                  y: 6.43
                }, {
                  x: 5,
                  y: 5
                }, {
                  x: 5,
                  y: 6
                }]
  
              },
        ],
            options: {
              chart: {
                height: 350,
                type: 'line',
              },
              fill: {
                type:'solid',
              },
              markers: {
                size: [6, 6, 0]
              },
              tooltip: {
                shared: false,
                intersect: true,
              },
              legend: {
                show: false
              },
              xaxis: {
                type: 'numeric',
                min: 0,
                max: 12,
                tickAmount: 12
              }
            },
          
          
          };
        }


render() {
    return (
      

<div id="chart">
<Chart options={this.state.options} series={this.state.series} type="line" height={350} />
</div>    


  );
}

}


export default Trial;