import React, { Component } from "react";
import Chart from "react-apexcharts";

class SymptomOccurence extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [
            {
              data: [
                {
                  x: 'Headache',
                  y: [
                    //new Date('2019-03-02, 09:00 GMT-08:00').getTime(),
                    //new Date('2019-03-02, 13:00 GMT-08:00').getTime(),
                    //monday morning
                    new Date('2021-08-16, 09:00').getTime(),
                    new Date('2021-03-16, 13:00').getTime(),
                    //monday afternoon
                    new Date('2021-08-16, 14:00').getTime(),
                    new Date('2021-03-16, 18:00').getTime(),
                    //monday evening
                    new Date('2021-08-16, 19:00').getTime(),
                    new Date('2021-03-16, 23:00').getTime(),
                    //tuesday morning
                    new Date('2021-08-17, 09:00').getTime(),
                    new Date('2021-03-17, 13:00').getTime(),
                    //tuesday afternoon
                    new Date('2021-08-17, 14:00').getTime(),
                    new Date('2021-03-17, 18:00').getTime(),
                    //monday
                    new Date('2021-08-16, 09:00').getTime(),
                    new Date('2021-03-16, 13:00').getTime(),
                    //new Date('2019-03-02, 19, 00, 00')
                  ]
                },
                {
                  x: 'Dizziness',
                  y: [
                    new Date('2021, 3, 2').getTime(),
                    new Date('2021, 3, 3').getTime()
                  ]
                },
                // {
                //   x: 'Fast heartbeat',
                //   y: [
                //     new Date('2019-03-08'),
                //     new Date('2019-03-12')
                //   ]
                // },
                // {
                //   x: 'Nausea',
                //   y: [
                //     new Date('2019-03-12'),
                //     new Date('2019-03-18')
                //   ]
                // },
                // {
                //     x: 'Stomachache',
                //     y: [
                //       new Date('2019-03-15'),
                //       new Date('2019-03-22')
                //     ]
                // },
                // {
                //     x: 'Lower back pain',
                //     y: [
                //       new Date('2019-03-12').getTime(),
                //       new Date('2019-03-18').getTime()
                //     ]
                // },
                // {
                //     x: 'Limb pain',
                //     y: [
                //       new Date('2019-03-12').getTime(),
                //       new Date('2019-03-18').getTime()
                //     ]
                // }
              ]
            }
          ],
          options: {
            chart: {
              height: 350,
              type: 'rangeBar'
            },
            plotOptions: {
              bar: {
                horizontal: true
              }
            },
            xaxis: {
              type: 'datetime'
            }
          },
        
        
        };
      }

    

      render() {
        return (
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="rangeBar" height={250} />
            </div>
        );
      }
}

export default SymptomOccurence;
