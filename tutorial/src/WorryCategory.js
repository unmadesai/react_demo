import React, { Component } from "react";
import Chart from "react-apexcharts";


// function generateDayWiseTimeSeries(baseval, count, yrange) {
//     var i = 0;
//     var series = [];
//     while (i < count) {
//       var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
  
//       series.push([baseval, y]);
//       baseval += 86400000;
//       i++;
//     }
//     return series;
//   }

class WorryCategory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          
            series: [{
                name: 'Family',
                //colors: '#81A2EF',
                data: [[new Date('2021-08-15, 12:00 +0800').getTime(),180],
                       [new Date('2021-08-16, 12:00 +0800').getTime(),180], 
                        //comment out if missing for that day
                       [new Date('2021-08-17, 12:00 +0800').getTime(),180], 
                       [new Date('2021-08-18, 12:00 +0800').getTime(),180], 
                       [new Date('2021-08-19, 12:00 +0800').getTime(),180], 
                       [new Date('2021-08-20, 12:00 +0800').getTime(),180], 
                       [new Date('2021-08-21, 12:00 +0800').getTime(),180],
                       [new Date('2021-08-22, 12:00 +0800').getTime(),180],
                       [new Date('2021-08-23, 12:00 +0800').getTime(),180],
                       [new Date('2021-08-24, 12:00 +0800').getTime(),180],
                       [new Date('2021-08-25, 12:00 +0800').getTime(),180],
                       [new Date('2021-08-26, 12:00 +0800').getTime(),180],
                       [new Date('2021-08-27, 12:00 +0800').getTime(),180],
                       [new Date('2021-08-28, 12:00 +0800').getTime(),180]]
              },
              {
                name: 'Friends or Peers',
                //colors: '#2B61E4',
                data: [[new Date('2021-08-15, 12:00 +0800').getTime(),150],
                       [new Date('2021-08-16, 12:00 +0800').getTime(),150], 
                       [new Date('2021-08-17, 12:00 +0800').getTime(),150], 
                       [new Date('2021-08-18, 12:00 +0800').getTime(),150], 
                       [new Date('2021-08-19, 12:00 +0800').getTime(),150], 
                       [new Date('2021-08-20, 12:00 +0800').getTime(),150], 
                       [new Date('2021-08-21, 12:00 +0800').getTime(),150],
                       [new Date('2021-08-22, 12:00 +0800').getTime(),150],
                       [new Date('2021-08-23, 12:00 +0800').getTime(),150],
                       [new Date('2021-08-24, 12:00 +0800').getTime(),150],
                       [new Date('2021-08-25, 12:00 +0800').getTime(),150],
                       [new Date('2021-08-26, 12:00 +0800').getTime(),150],
                       [new Date('2021-08-27, 12:00 +0800').getTime(),150],
                       [new Date('2021-08-28, 12:00 +0800').getTime(),150]]
              },
              {
                name: 'People I don\'t know',
                //colors: '#2B61E4',
                data: [[new Date('2021-08-15, 12:00 +0800').getTime(),120],
                       [new Date('2021-08-16, 12:00 +0800').getTime(),120], 
                       [new Date('2021-08-17, 12:00 +0800').getTime(),120], 
                       [new Date('2021-08-18, 12:00 +0800').getTime(),120], 
                       [new Date('2021-08-19, 12:00 +0800').getTime(),120], 
                       [new Date('2021-08-20, 12:00 +0800').getTime(),120], 
                       [new Date('2021-08-21, 12:00 +0800').getTime(),120],
                       [new Date('2021-08-22, 12:00 +0800').getTime(),120],
                       [new Date('2021-08-23, 12:00 +0800').getTime(),120],
                       [new Date('2021-08-24, 12:00 +0800').getTime(),120],
                       [new Date('2021-08-25, 12:00 +0800').getTime(),120],
                       [new Date('2021-08-26, 12:00 +0800').getTime(),120],
                       [new Date('2021-08-27, 12:00 +0800').getTime(),120],
                       [new Date('2021-08-28, 12:00 +0800').getTime(),120]]
              },
              {
                name: 'School',
                //colors: '#2B61E4',
                data: [[new Date('2021-08-15, 12:00 +0800').getTime(),90],
                       [new Date('2021-08-16, 12:00 +0800').getTime(),90], 
                       [new Date('2021-08-17, 12:00 +0800').getTime(),90], 
                       [new Date('2021-08-18, 12:00 +0800').getTime(),90], 
                       [new Date('2021-08-19, 12:00 +0800').getTime(),90], 
                       [new Date('2021-08-20, 12:00 +0800').getTime(),90], 
                       [new Date('2021-08-21, 12:00 +0800').getTime(),90],
                       [new Date('2021-08-22, 12:00 +0800').getTime(),90],
                       [new Date('2021-08-23, 12:00 +0800').getTime(),90],
                       [new Date('2021-08-24, 12:00 +0800').getTime(),90],
                       [new Date('2021-08-25, 12:00 +0800').getTime(),90],
                       [new Date('2021-08-26, 12:00 +0800').getTime(),90],
                       [new Date('2021-08-27, 12:00 +0800').getTime(),90],
                       [new Date('2021-08-28, 12:00 +0800').getTime(),90]]
              },
              {
                name: 'Health and safety',
                //colors: '#2B61E4',
                data: [[new Date('2021-08-15, 12:00 +0800').getTime(),60],
                       [new Date('2021-08-16, 12:00 +0800').getTime(),60], 
                       [new Date('2021-08-17, 12:00 +0800').getTime(),60], 
                       [new Date('2021-08-18, 12:00 +0800').getTime(),60], 
                       [new Date('2021-08-19, 12:00 +0800').getTime(),60], 
                       [new Date('2021-08-20, 12:00 +0800').getTime(),60], 
                       [new Date('2021-08-21, 12:00 +0800').getTime(),60],
                       [new Date('2021-08-22, 12:00 +0800').getTime(),60],
                       [new Date('2021-08-23, 12:00 +0800').getTime(),60],
                       [new Date('2021-08-24, 12:00 +0800').getTime(),60],
                       [new Date('2021-08-25, 12:00 +0800').getTime(),60],
                       [new Date('2021-08-26, 12:00 +0800').getTime(),60],
                       [new Date('2021-08-27, 12:00 +0800').getTime(),60],
                       [new Date('2021-08-28, 12:00 +0800').getTime(),60]]
              },
              {
                name: 'Sports or extracurriculars',
                //colors: '#2B61E4',
                data: [[new Date('2021-08-15, 12:00 +0800').getTime(),30],
                       [new Date('2021-08-16, 12:00 +0800').getTime(),30], 
                       [new Date('2021-08-17, 12:00 +0800').getTime(),30], 
                       [new Date('2021-08-18, 12:00 +0800').getTime(),30], 
                       [new Date('2021-08-19, 12:00 +0800').getTime(),30], 
                       [new Date('2021-08-20, 12:00 +0800').getTime(),30], 
                       [new Date('2021-08-21, 12:00 +0800').getTime(),30],
                       [new Date('2021-08-22, 12:00 +0800').getTime(),30],
                       [new Date('2021-08-23, 12:00 +0800').getTime(),30],
                       [new Date('2021-08-24, 12:00 +0800').getTime(),30],
                       [new Date('2021-08-25, 12:00 +0800').getTime(),30],
                       [new Date('2021-08-26, 12:00 +0800').getTime(),30],
                       [new Date('2021-08-27, 12:00 +0800').getTime(),30],
                       [new Date('2021-08-28, 12:00 +0800').getTime(),30]]
              },
            //   {
            //     name: 'TEAM 2',
            //     data: [[new Date('2021-08-16, 09:00').getTime(),20]]
            //   },
            //   {
            //     name: 'TEAM 3',
            //     data: [[new Date('2021-08-16, 09:00').getTime(),60]]
            //   },
            //   {
            //     name: 'TEAM 4',
            //     data: [[new Date('2021-08-16, 09:00').getTime(),10]]
            //   },
            //   {
            //     name: 'TEAM 5',
            //     data: [[new Date('2021-08-16, 09:00').getTime(),40]]
            //   },
            ],
            options: {
              title: {
                text: "Category of Worries",
              },
              chart: {
                height: 350,
                type: 'scatter',
                zoom: {
                  //type: 'xy'
                  enabled: false,
                },
                toolbar: {
                  show: false
                }
              },
              colors: ['#81A2EF','#2B61E4','#2B61E4'],
              dataLabels: {
                enabled: false
              },
              grid: {
                xaxis: {
                  lines: {
                    show: false,
                  }
                },
                yaxis: {
                  lines: {
                    show: false,
                  }
                },
              },
              dataLabels: {
                enabled: false,
              },
              xaxis: {
                type: 'datetime',
                // categories: ['15 Aug', '16 Aug', '17 Aug', '18 Aug', '19 Aug', '20 Aug', '21 Aug', 
                // '22 Aug', '23 Aug', '24 Aug', '25 Aug', '26 Aug', '27 Aug', '28 Aug'],
                tickAmount: 1,
                // labels: {
                //   show: true,
                // }
              },
              yaxis: {
                max: 200,
                show: false
              },
              // legend: {
              //   show: true,
              // },
              markers: {
                size: 12
              },
              fill: {
                type: 'image',
                opacity: 1,
                image: {
                  src: ['images/worry_categories/family.png', 'images/worry_categories/friends.png', 'images/worry_categories/stranger.png', 
                  'images/worry_categories/school.png', 'images/worry_categories/health_safety.png', 'images/worry_categories/sports.png'],
                  width: 15,
                  height: 15
                }
              },
            },
            legend: {
              // labels: {
              //   useSeriesColors: true
              // },
              // markers: {
              //   size: 12
              // },
              // fill: {
              //   type: 'image',
              //   opacity: 1,
              //   image: {
              //     src: ['images/worry_categories/family.png', 'images/worry_categories/friends.png', 'images/worry_categories/stranger.png', 
              //     'images/worry_categories/school.png', 'images/worry_categories/health_safety.png', 'images/worry_categories/sports.png'],
              //     width: 15,
              //     height: 15
              //   }
              // },
              markers: {
                customHTML: [
                  function() {
                    return (
                      <div>
                        <img src="images/worry_categories/family.png" />
                      </div>
                    );
                  }
                ]
              }
            }
          
          };
}

    

render() {
  return (
      <div id="chart">
          <Chart options={this.state.options} series={this.state.series} type="scatter" height={250} />
      </div>
  );
}

}

export default WorryCategory;