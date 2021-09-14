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

class SchoolAttendance extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          
            series: [{
                name: 'Present',
                //colors: '#81A2EF',
                // data: [
                //       //[new Date('2021-08-15, 12:00 +0800').getTime(),10],
                //        [new Date('2021-08-16, 12:00 +0800').getTime(),10], 
                //         //comment out if absent for that day
                //        [new Date('2021-08-17, 12:00 +0800').getTime(),10], 
                //        //[new Date('2021-08-18, 12:00 +0800').getTime(),10], 
                //        //[new Date('2021-08-19, 12:00 +0800').getTime(),10], 
                //        //[new Date('2021-08-20, 12:00 +0800').getTime(),10], 
                //        //[new Date('2021-08-21, 12:00 +0800').getTime(),10],
                //        //[new Date('2021-08-22, 12:00 +0800').getTime(),10],
                //        //[new Date('2021-08-23, 12:00 +0800').getTime(),10],
                //        //[new Date('2021-08-24, 12:00 +0800').getTime(),10],
                //        [new Date('2021-08-25, 12:00 +0800').getTime(),10],
                //        [new Date('2021-08-26, 12:00 +0800').getTime(),10],
                //        [new Date('2021-08-27, 12:00 +0800').getTime(),10],
                //        //[new Date('2021-08-28, 12:00 +0800').getTime(),10]
                //       ]
                data: ['','10','10','10','','','','','','','10','10','10',''],
              },
              {
                name: 'Absent',
                //colors: '#2B61E4',
                // data: [
                //        [new Date('2021-08-15, 12:00 +0800').getTime(),10],
                //       //[new Date('2021-08-16, 12:00 +0800').getTime(),10], 
                //       //comment out if present for that day
                //       //if absent, add in corresponding reason segment too
                //        //[new Date('2021-08-17, 12:00 +0800').getTime(),10], 
                //        //[new Date('2021-08-18, 12:00 +0800').getTime(),10], 
                //        [new Date('2021-08-19, 12:00 +0800').getTime(),10], 
                //        [new Date('2021-08-20, 12:00 +0800').getTime(),10], 
                //        [new Date('2021-08-21, 12:00 +0800').getTime(),10],
                //        [new Date('2021-08-22, 12:00 +0800').getTime(),10],
                //        [new Date('2021-08-23, 12:00 +0800').getTime(),10],
                //        [new Date('2021-08-24, 12:00 +0800').getTime(),10],
                //       //  [new Date('2021-08-25, 12:00 +0800').getTime(),10],
                //       //  [new Date('2021-08-26, 12:00 +0800').getTime(),10],
                //       //  [new Date('2021-08-27, 12:00 +0800').getTime(),10],
                //        [new Date('2021-08-28, 12:00 +0800').getTime(),10]
                //       ]
                      data: ['10','','','','10','10','10','10','10','10','','','','10'],
              },
              {
                name: 'School Holiday', //reason 1
                //colors: '#2B61E4',
                data: [
                      //  [new Date('2021-08-16, 12:00 +0800').getTime(),4], 
                      //  [new Date('2021-08-17, 12:00 +0800').getTime(),4], 
                      //  [new Date('2021-08-18, 12:00 +0800').getTime(),4], 
                      //  [new Date('2021-08-19, 12:00 +0800').getTime(),4], 
                      //  [new Date('2021-08-20, 12:00 +0800').getTime(),4], 
                      //  [new Date('2021-08-21, 12:00 +0800').getTime(),4],
                      //  [new Date('2021-08-22, 12:00 +0800').getTime(),4]
                    ]
              },
              {
                name: 'Weekend', //reason 2
                //colors: '#2B61E4',
                // data: [
                //         [new Date('2021-08-15, 12:00 +0800').getTime(),4],
                //       //  [new Date('2021-08-16, 12:00 +0800').getTime(),20], 
                //       // [new Date('2021-08-17, 12:00 +0800').getTime(),4], 
                //       //  [new Date('2021-08-18, 12:00 +0800').getTime(),20], 
                //       //  [new Date('2021-08-19, 12:00 +0800').getTime(),20], 
                //       //  [new Date('2021-08-20, 12:00 +0800').getTime(),20], 
                //        [new Date('2021-08-21, 12:00 +0800').getTime(),4],
                //         [new Date('2021-08-22, 12:00 +0800').getTime(),4],
                //         //[new Date('2021-08-23, 12:00 +0800').getTime(),20]
                //       //  [new Date('2021-08-24, 12:00 +0800').getTime(),20]
                //       //  [new Date('2021-08-25, 12:00 +0800').getTime(),20]
                //       //  [new Date('2021-08-26, 12:00 +0800').getTime(),20]
                //       //  [new Date('2021-08-27, 12:00 +0800').getTime(),20]
                //         [new Date('2021-08-28, 12:00 +0800').getTime(),4]
                //     ]
                data: ['4','','','','','4','4','','','','','','','4'],
              },
              {
                name: 'Online Learning', //reason 3
                //colors: '#2B61E4',
                // data: [//[new Date('2021-08-16, 12:00 +0800').getTime(),20], 
                //        //[new Date('2021-08-17, 12:00 +0800').getTime(),20], 
                //        //[new Date('2021-08-18, 12:00 +0800').getTime(),4], 
                //         [new Date('2021-08-19, 12:00 +0800').getTime(),4], 
                //         [new Date('2021-08-20, 12:00 +0800').getTime(),4], 
                //       //  [new Date('2021-08-21, 12:00 +0800').getTime(),20],
                //       //  [new Date('2021-08-22, 12:00 +0800').getTime(),20],
                //         [new Date('2021-08-23, 12:00 +0800').getTime(),4],
                //         [new Date('2021-08-24, 12:00 +0800').getTime(),4],
                //       // [new Date('2021-08-25, 12:00 +0800').getTime(),4],
                //       //  [new Date('2021-08-26, 12:00 +0800').getTime(),20],
                //       //  [new Date('2021-08-27, 12:00 +0800').getTime(),20],
                //       //  [new Date('2021-08-28, 12:00 +0800').getTime(),20]
                //     ]
                data: ['','','','','4','','','4','4','4','','','',''],

              },
              {
                name: 'Home sick', //reason 4
                //colors: '#2B61E4',
                data: [//[new Date('2021-08-16, 12:00 +0800').getTime(),20], 
                //        [new Date('2021-08-17, 12:00 +0800').getTime(),20], 
                //        [new Date('2021-08-18, 12:00 +0800').getTime(),20], 
                      //  [new Date('2021-08-19, 12:00 +0800').getTime(),4], 
                      // [new Date('2021-08-20, 12:00 +0800').getTime(),20], 
                      //  [new Date('2021-08-21, 12:00 +0800').getTime(),20],
                      //  [new Date('2021-08-22, 12:00 +0800').getTime(),20]
                      //  [new Date('2021-08-23, 12:00 +0800').getTime(),20]
                      //  [new Date('2021-08-24, 12:00 +0800').getTime(),20]
                      //  [new Date('2021-08-25, 12:00 +0800').getTime(),20]
                      //  [new Date('2021-08-26, 12:00 +0800').getTime(),20]
                      //  [new Date('2021-08-27, 12:00 +0800').getTime(),20]
                      //  [new Date('2021-08-28, 12:00 +0800').getTime(),20]
                    ]
              },
              {
                name: 'Doctor\'s appointment', //reason 5
                //colors: '#2B61E4',
                data: [
                //        [new Date('2021-08-16, 12:00 +0800').getTime(),20], 
                //        [new Date('2021-08-17, 12:00 +0800').getTime(),20], 
                //        [new Date('2021-08-18, 12:00 +0800').getTime(),20], 
                //        [new Date('2021-08-19, 12:00 +0800').getTime(),20], 
                     //  [new Date('2021-08-20, 12:00 +0800').getTime(),4], 
                      // [new Date('2021-08-21, 12:00 +0800').getTime(),20],
                      //  [new Date('2021-08-22, 12:00 +0800').getTime(),20]
                      //  [new Date('2021-08-23, 12:00 +0800').getTime(),20]
                      //  [new Date('2021-08-24, 12:00 +0800').getTime(),20]
                      //  [new Date('2021-08-25, 12:00 +0800').getTime(),20]
                      //  [new Date('2021-08-26, 12:00 +0800').getTime(),20]
                       // [new Date('2021-08-27, 12:00 +0800').getTime(),4]
                      //  [new Date('2021-08-28, 12:00 +0800').getTime(),20]
                    ]
              },
              {
                name: 'Summer vacation', //reason 6
                //colors: '#2B61E4',
                data: [
                  //      [new Date('2021-08-16, 12:00 +0800').getTime(),20], 
                //        [new Date('2021-08-17, 12:00 +0800').getTime(),20], 
                //        [new Date('2021-08-18, 12:00 +0800').getTime(),20], 
                //        [new Date('2021-08-19, 12:00 +0800').getTime(),20], 
                //        [new Date('2021-08-20, 12:00 +0800').getTime(),20], 
                     //  [new Date('2021-08-21, 12:00 +0800').getTime(),4],
                      //  [new Date('2021-08-22, 12:00 +0800').getTime(),20]
                      //  [new Date('2021-08-23, 12:00 +0800').getTime(),20]
                      //  [new Date('2021-08-24, 12:00 +0800').getTime(),20]
                      //  [new Date('2021-08-25, 12:00 +0800').getTime(),20]
                      //  [new Date('2021-08-26, 12:00 +0800').getTime(),20]
                      //  [new Date('2021-08-27, 12:00 +0800').getTime(),20]
                      //  [new Date('2021-08-28, 12:00 +0800').getTime(),20]
                    ]
              },
              {
                name: 'Home-schooled', //reason 7
                //colors: '#2B61E4',
                data: [
                      //  [new Date('2021-08-16, 12:00 +0800').getTime(),20], 
                      //  [new Date('2021-08-17, 12:00 +0800').getTime(),20], 
                      //  [new Date('2021-08-18, 12:00 +0800').getTime(),20], 
                      //  [new Date('2021-08-19, 12:00 +0800').getTime(),20], 
                      //  [new Date('2021-08-20, 12:00 +0800').getTime(),20], 
                      //  [new Date('2021-08-21, 12:00 +0800').getTime(),20],
                      // [new Date('2021-08-22, 12:00 +0800').getTime(),4]
                    ]
              },
              
            ],
            options: {
              title: {
                text: "School attendance",
                offsetX: -10
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
              colors: ['#89608E'],
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
                //type: 'datetime',
                type: 'category',
                categories: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 
            'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
              },
              yaxis: {
                max: 10,
                show: false
              },
              markers: {
                size: 8,
                strokeColors: '#68496E',
               strokeWidth: 0.5,
                strokeOpacity: 0.9,
              },
              fill: {
                type: 'image',
                opacity: 1,
                image: {
                  src: ['images/school_attendance/present.png', 'images/school_attendance/absent.png', 
                  'images/school_attendance/school_holiday.png', 'images/school_attendance/weekend.png', 
                  'images/school_attendance/online_learning.png', 'images/school_attendance/home_sick.png',
                  'images/school_attendance/doctor_appt.png', 'images/school_attendance/summer_vacation.png',
                  'images/school_attendance/home_schooled.png'],
                  width: 15,
                  height: 15
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
          <Chart options={this.state.options} series={this.state.series} type="scatter" height={200} style={{marginLeft: "4em", marginRight: "0.6em" }}/>
      </div>
  );
}

}

export default SchoolAttendance;