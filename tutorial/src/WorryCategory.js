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
                data: [[new Date('2021-08-16, 09:00 +0800').getTime(),80], 
                        //comment out if missing for that day
                       [new Date('2021-08-17, 09:00 +0800').getTime(),80], 
                       [new Date('2021-08-18, 09:00 +0800').getTime(),80], 
                       [new Date('2021-08-19, 09:00 +0800').getTime(),80], 
                       [new Date('2021-08-20, 09:00 +0800').getTime(),80], 
                       [new Date('2021-08-21, 09:00 +0800').getTime(),80],
                       [new Date('2021-08-22, 09:00 +0800').getTime(),80]]
              },
              {
                name: 'Friends or Peers',
                //colors: '#2B61E4',
                data: [[new Date('2021-08-16, 14:00 +0800').getTime(),80], 
                       [new Date('2021-08-17, 14:00 +0800').getTime(),80], 
                       [new Date('2021-08-18, 14:00 +0800').getTime(),80], 
                       [new Date('2021-08-19, 14:00 +0800').getTime(),80], 
                       [new Date('2021-08-20, 14:00 +0800').getTime(),80], 
                       [new Date('2021-08-21, 14:00 +0800').getTime(),80],
                       [new Date('2021-08-22, 14:00 +0800').getTime(),80]]
              },
              {
                name: 'People I don\'t know',
                //colors: '#2B61E4',
                data: [[new Date('2021-08-16, 09:00 +0800').getTime(),50], 
                       [new Date('2021-08-17, 09:00 +0800').getTime(),50], 
                       [new Date('2021-08-18, 09:00 +0800').getTime(),50], 
                       [new Date('2021-08-19, 09:00 +0800').getTime(),50], 
                       [new Date('2021-08-20, 09:00 +0800').getTime(),50], 
                       [new Date('2021-08-21, 09:00 +0800').getTime(),50],
                       [new Date('2021-08-22, 09:00 +0800').getTime(),50]]
              },
              {
                name: 'School',
                //colors: '#2B61E4',
                data: [[new Date('2021-08-16, 14:00 +0800').getTime(),50], 
                       [new Date('2021-08-17, 14:00 +0800').getTime(),50], 
                       [new Date('2021-08-18, 14:00 +0800').getTime(),50], 
                       [new Date('2021-08-19, 14:00 +0800').getTime(),50], 
                       [new Date('2021-08-20, 14:00 +0800').getTime(),50], 
                       [new Date('2021-08-21, 14:00 +0800').getTime(),50],
                       [new Date('2021-08-22, 14:00 +0800').getTime(),50]]
              },
              {
                name: 'Health and safety',
                //colors: '#2B61E4',
                data: [[new Date('2021-08-16, 09:00 +0800').getTime(),20], 
                       [new Date('2021-08-17, 09:00 +0800').getTime(),20], 
                       [new Date('2021-08-18, 09:00 +0800').getTime(),20], 
                       [new Date('2021-08-19, 09:00 +0800').getTime(),20], 
                       [new Date('2021-08-20, 09:00 +0800').getTime(),20], 
                       [new Date('2021-08-21, 09:00 +0800').getTime(),20],
                       [new Date('2021-08-22, 09:00 +0800').getTime(),20]]
              },
              {
                name: 'Sports or extracurriculars',
                //colors: '#2B61E4',
                data: [[new Date('2021-08-16, 14:00 +0800').getTime(),20], 
                       [new Date('2021-08-17, 14:00 +0800').getTime(),20], 
                       [new Date('2021-08-18, 14:00 +0800').getTime(),20], 
                       [new Date('2021-08-19, 14:00 +0800').getTime(),20], 
                       [new Date('2021-08-20, 14:00 +0800').getTime(),20], 
                       [new Date('2021-08-21, 14:00 +0800').getTime(),20],
                       [new Date('2021-08-22, 14:00 +0800').getTime(),20]]
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
                    show: false
                  }
                },
                yaxis: {
                  lines: {
                    show: false
                  }
                },
              },
              xaxis: {
                type: 'datetime',
              },
              yaxis: {
                max: 100,
                show: false
              },
              markers: {
                size: 12
              },
              fill: {
                type: 'image',
                opacity: 1,
                image: {
                  src: ['images/worry_categories/family.png', 'images/worry_categories/friends.png', 'images/worry_categories/stranger.png', 
                  'images/worry_categories/school.png', 'images/worry_categories/health_safety.png', 'images/worry_categories/sports.png'],
                  width: 20,
                  height: 20
                }
              },
            },
            legend: {
              labels: {
                useSeriesColors: true
              },
              markers: {
                customHTML: [
                  function() {
                    return ''
                  }, function() {
                    return ''
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