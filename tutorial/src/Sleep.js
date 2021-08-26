import React, { Component } from "react";
import Chart from "react-apexcharts";

class Sleep extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          
            series: [{
              name: 'Sleep',
              data: [8,10,6,6,8,12,10]
            },
            {
                name: 'Sleep reverse',
                data: [-8,-10,-6,-6,-8,-12,-10]
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
                      from: -100,
                      to: -46,
                      color: '#F15B46'
                    }, {
                      from: -45,
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
                categories: [
                  '2021-08-16', '2021-08-17', '2021-08-18', '2021-08-19', '2021-08-20', '2021-08-21',
                  '2021-08-22'],
                labels: {
                  rotate: -90
                },
                title: {
                        text: "A"
                    },
              },
              {
                type: 'datetime',
                position: 'top',
                categories: [
                  '2021-08-16', '2021-08-17', '2021-08-18', '2021-08-19', '2021-08-20', '2021-08-21',
                  '2021-08-22'],
                labels: {
                  rotate: -90
                },
                opposite: true,
                title: {
                        text: "B"
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