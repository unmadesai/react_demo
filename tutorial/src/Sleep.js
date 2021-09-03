import React, { Component } from "react";
import Chart from "react-apexcharts";

class Sleep extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          
            series: [{
                name: 'Sleep reverse',
                data: [8,10,6,6,8,12,10,8,10,6,6,8,12,10]
              },
            ],
            options: {
              chart: {
                type: 'bar',
                height: 350
              },
              plotOptions: {
                bar: {
                  colors: {
                    ranges: [{
                      from: 100,
                      to: 46,
                      color: '#F15B46'
                    }, {
                      from: 45,
                      to: 0,
                      color: '#FEB019'
                    }]
                  },
                  columnWidth: '60%',
                }
              },
              dataLabels: {
                enabled: false,
              },
              yaxis: {
                title: {
                  text: 'Time',
                },
                // labels: {
                //   formatter: function (y) {
                //     return y.toFixed(0) + "%";
                //   }
                // }
              },
              xaxis: [{
                type: 'datetime',
                position: 'top',
                categories: ['15 Aug', '16 Aug', '17 Aug', '18 Aug', '19 Aug', '20 Aug', '21 Aug', 
                '22 Aug', '23 Aug', '24 Aug', '25 Aug', '26 Aug', '27 Aug', '28 Aug'],
                labels: {
                  rotate: -90
                },
                title: {
                        text: "A"
                    },
              }]
            },

          };

    }

    

    render() {
      return (
          <div id="chart">
              <Chart options={this.state.options} series={this.state.series} type="bar" height={500}/>
          </div>
      );
    }
}

export default Sleep;