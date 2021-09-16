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
                // data: [//[new Date('2021-08-15, 12:00 +0800').getTime(),180],
                //        //[new Date('2021-08-16, 12:00 +0800').getTime(),180], 
                //         //comment out if missing for that day
                //        //[new Date('2021-08-17, 12:00 +0800').getTime(),180], 
                //        //[new Date('2021-08-18, 12:00 +0800').getTime(),180], 
                //        //[new Date('2021-08-19, 12:00 +0800').getTime(),180], 
                //        //[new Date('2021-08-20, 12:00 +0800').getTime(),180], 
                //        //[new Date('2021-08-21, 12:00 +0800').getTime(),180],
                //        //[new Date('2021-08-22, 12:00 +0800').getTime(),180],
                //        //[new Date('2021-08-23, 12:00 +0800').getTime(),180],
                //        [new Date('2021-08-24, 12:00 +0800').getTime(),180],
                //        //[new Date('2021-08-20, 12:00 +0800').getTime(),180],
                //        //[new Date('2021-08-26, 12:00 +0800').getTime(),180],
                //        //[new Date('2021-08-27, 12:00 +0800').getTime(),180],
                //        //[new Date('2021-08-28, 12:00 +0800').getTime(),180]
                //       ],
                // data: ['','','','','','','','','','','','','',''],
              },
              {
                name: 'Friends or Peers',
                //colors: '#2B61E4',
                // data: [
                //   //[new Date('2021-08-15, 12:00 +0800').getTime(),150],
                //        [new Date('2021-08-16, 12:00 +0800').getTime(),150], 
                //        [new Date('2021-08-17, 12:00 +0800').getTime(),150], 
                //   //     [new Date('2021-08-18, 12:00 +0800').getTime(),150], 
                //   //     [new Date('2021-08-19, 12:00 +0800').getTime(),150], 
                //   //     [new Date('2021-08-20, 12:00 +0800').getTime(),150], 
                //   //     [new Date('2021-08-21, 12:00 +0800').getTime(),150],
                //   //     [new Date('2021-08-22, 12:00 +0800').getTime(),150],
                //   //     [new Date('2021-08-23, 12:00 +0800').getTime(),150],
                //   //     [new Date('2021-08-24, 12:00 +0800').getTime(),150],
                //   //     [new Date('2021-08-20, 12:00 +0800').getTime(),150],
                //   //     [new Date('2021-08-26, 12:00 +0800').getTime(),150],
                //   //     [new Date('2021-08-27, 12:00 +0800').getTime(),150],
                //   //     [new Date('2021-08-28, 12:00 +0800').getTime(),150]
                // ]
                //data: ['','150','150','','','','','','','','','','',''],
              },
              {
                name: 'People I don\'t know',
                //colors: '#2B61E4',
                // data: [
                //   [new Date('2021-08-15, 12:00 +0800').getTime(),120],
                //       //  [new Date('2021-08-16, 12:00 +0800').getTime(),120], 
                //       //  [new Date('2021-08-17, 12:00 +0800').getTime(),120], 
                //       //  [new Date('2021-08-18, 12:00 +0800').getTime(),120], 
                //       //  [new Date('2021-08-19, 12:00 +0800').getTime(),120], 
                //       //  [new Date('2021-08-20, 12:00 +0800').getTime(),120], 
                //       //  [new Date('2021-08-21, 12:00 +0800').getTime(),120],
                //       //  [new Date('2021-08-22, 12:00 +0800').getTime(),120],
                //       //  [new Date('2021-08-23, 12:00 +0800').getTime(),120],
                //       //  [new Date('2021-08-24, 12:00 +0800').getTime(),120],
                //       //  [new Date('2021-08-20, 12:00 +0800').getTime(),120],
                //       //  [new Date('2021-08-26, 12:00 +0800').getTime(),120],
                //       //  [new Date('2021-08-27, 12:00 +0800').getTime(),120],
                //        [new Date('2021-08-28, 12:00 +0800').getTime(),120]
                //       ]
                //data: ['','','','','','','','','','','','','',''],
              },
              {
                name: 'School',
                //colors: '#2B61E4',
                // data: [[new Date('2021-08-15, 12:00 +0800').getTime(),90],
                //        [new Date('2021-08-16, 12:00 +0800').getTime(),90], 
                //        [new Date('2021-08-17, 12:00 +0800').getTime(),90], 
                //        [new Date('2021-08-18, 12:00 +0800').getTime(),90], 
                //        [new Date('2021-08-19, 12:00 +0800').getTime(),90], 
                //        [new Date('2021-08-20, 12:00 +0800').getTime(),90], 
                //        [new Date('2021-08-21, 12:00 +0800').getTime(),90],
                //        [new Date('2021-08-22, 12:00 +0800').getTime(),90],
                //        [new Date('2021-08-23, 12:00 +0800').getTime(),90],
                //        [new Date('2021-08-24, 12:00 +0800').getTime(),90],
                //        [new Date('2021-08-20, 12:00 +0800').getTime(),90],
                //        [new Date('2021-08-26, 12:00 +0800').getTime(),90],
                //        [new Date('2021-08-27, 12:00 +0800').getTime(),90],
                //        [new Date('2021-08-28, 12:00 +0800').getTime(),90]]
               //data: ['','','90','90','','','90','','','90','90','','','90'],
              },
              {
                name: 'Health and safety',
                //colors: '#2B61E4',
                // data: [
                //   [new Date('2021-08-15, 12:00 +0800').getTime(),60],
                // //        [new Date('2021-08-16, 12:00 +0800').getTime(),60], 
                // //        [new Date('2021-08-17, 12:00 +0800').getTime(),60], 
                // //        [new Date('2021-08-18, 12:00 +0800').getTime(),60], 
                // //        [new Date('2021-08-19, 12:00 +0800').getTime(),60], 
                // //        [new Date('2021-08-20, 12:00 +0800').getTime(),60], 
                //        [new Date('2021-08-21, 12:00 +0800').getTime(),60],
                //        [new Date('2021-08-22, 12:00 +0800').getTime(),60],
                //       //  [new Date('2021-08-23, 12:00 +0800').getTime(),60],
                //       //  [new Date('2021-08-24, 12:00 +0800').getTime(),60],
                //       //  [new Date('2021-08-20, 12:00 +0800').getTime(),60],
                //       //  [new Date('2021-08-26, 12:00 +0800').getTime(),60],
                //       //  [new Date('2021-08-27, 12:00 +0800').getTime(),60],
                //        [new Date('2021-08-28, 12:00 +0800').getTime(),60]
                //       ]
                //data: ['','60','','','','','','','','','','','',''],
              },
              {
                name: 'Sports or extracurriculars',
                //colors: '#2B61E4',
                // data: [
                //   //[new Date('2021-08-15, 12:00 +0800').getTime(),30],
                //       //  [new Date('2021-08-16, 12:00 +0800').getTime(),30], 
                //       //  [new Date('2021-08-17, 12:00 +0800').getTime(),30], 
                //       //  [new Date('2021-08-18, 12:00 +0800').getTime(),30], 
                //       //  [new Date('2021-08-19, 12:00 +0800').getTime(),30], 
                //        [new Date('2021-08-20, 12:00 +0800').getTime(),30], 
                //        //[new Date('2021-08-21, 12:00 +0800').getTime(),30],
                //        [new Date('2021-08-22, 12:00 +0800').getTime(),30],
                //       //  [new Date('2021-08-23, 12:00 +0800').getTime(),30],
                //       //  [new Date('2021-08-24, 12:00 +0800').getTime(),30],
                //       //  [new Date('2021-08-20, 12:00 +0800').getTime(),30],
                //        [new Date('2021-08-26, 12:00 +0800').getTime(),30],
                //       // [new Date('2021-08-27, 12:00 +0800').getTime(),30],
                //       // [new Date('2021-08-28, 12:00 +0800').getTime(),30]
                //     ]
               //data: ['','','','','','','','','','','','','',''],
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
                //type: 'datetime',
                type: 'category',
                categories: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 
            'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
                // categories: ['15 Aug', '16 Aug', '17 Aug', '18 Aug', '19 Aug', '20 Aug', '21 Aug', 
                // '22 Aug', '23 Aug', '24 Aug', '20 Aug', '26 Aug', '27 Aug', '28 Aug'],
                //tickAmount: 1,
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
                size: 8,
                shape: "circle",
                radius: 0,
                offsetX: 0,
                strokeColors: '#2B61E4',
               strokeWidth: 0.5,
                strokeOpacity: 0.9,
              },
              fill: {
                type: 'image',
                opacity: 1,
                image: {
                  src: ['images/worry_categories/family.png', 'images/worry_categories/friends.png', 'images/worry_categories/stranger.png', 
                  'images/worry_categories/school.png', 'images/worry_categories/health_safety.png', 'images/worry_categories/sports.png'],
                  width: 15,
                  height: 15,
                  // marginLeft: '2em',
                  // padding: {
                  //   left: '2em',
                  // }
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
        <div id="worry_category"> 
              <table>
                {/* Category 1 - Family */}
                <tr>
                  {/* <!-- comment out if not on that day --> */}
                  <th><img src='images/worry_categories/family.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/family.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/family.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/family.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/family.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/family.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/family.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/family.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/family.png' height='15px' width='15px'></img></th>            
                </tr>
                {/* Category 2 - Friends */}
                <tr>
                  {/* <!-- comment out if not on that day --> */}
                  <th><img src='images/worry_categories/friends.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/friends.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/friends.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/friends.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/friends.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/friends.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/friends.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/friends.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/friends.png' height='15px' width='15px'></img></th>            
                </tr>
                {/* Category 3 - Someone I don't know */}
                <tr>
                  {/* <!-- comment out if not on that day --> */}
                  <th><img src='images/worry_categories/stranger.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/stranger.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/stranger.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/stranger.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/stranger.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/stranger.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/stranger.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/stranger.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/stranger.png' height='15px' width='15px'></img></th>            
                </tr>
                {/* Category 4 - School */}
                <tr>
                  {/* <!-- comment out if not on that day --> */}
                  <th><img src='images/worry_categories/school.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/school.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/school.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/school.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/school.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/school.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/school.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/school.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/school.png' height='15px' width='15px'></img></th>            
                </tr>
                {/* Category 5 - Sports */}
                <tr>
                  {/* <!-- comment out if not on that day --> */}
                  <th><img src='images/worry_categories/sports.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/sports.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/sports.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/sports.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/sports.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/sports.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/sports.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/sports.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/sports.png' height='15px' width='15px'></img></th>            
                </tr>
                {/* Category 6 - Health */}
                <tr>
                  {/* <!-- comment out if not on that day --> */}
                  <th><img src='images/worry_categories/health_safety.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/health_safety.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/health_safety.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/health_safety.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/health_safety.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/health_safety.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/health_safety.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/health_safety.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_intensity/blank-03.png' height='15px' width='15px'></img></th>
                  <th><img src='images/worry_categories/health_safety.png' height='15px' width='15px'></img></th>            
                </tr>
              </table>
            </div>
            <div id="worryxaxisd">
              <table>
                <tr>
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

          <div>
              <table style={{marginLeft: "6em", marginTop: "0.5em"}}>
                  <tr>
                      {/* <td style={{display: "inline-block", whiteSpace: "nowrap"}}> */}
                      <td class="worrylabel">
                      {/* <figure>
                          <img  src='images/worry_categories/sports.png' height='15px' width='15px' />
                          <figcaption>Your label goes here</figcaption>
                      </figure> */}
                         {/* <span style={{float: "left", marginLeft: "0em"}}>
                            <img src='images/worry_categories/sports.png' height='15px' width='15px' />
                          </span>
                          <span style={{float: "right", marginLeft: "2em"}}> */}
                            <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/worry_categories/family.png' height='15px' width='15px' 
                                style={{verticalAlign: "middle"}}/> Family </p>
                        </td>
                        <td class="worrylabel">
                            <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/worry_categories/friends.png' height='15px' width='15px' 
                                style={{verticalAlign: "middle"}}/> Friends </p>
                        </td>
                        <td class="worrylabel">
                            <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/worry_categories/health_safety.png' height='15px' width='15px' 
                                style={{verticalAlign: "middle"}}/> Health </p>
                        </td>
                        <td class="worrylabel">
                            <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/worry_categories/school.png' height='15px' width='15px' 
                                style={{verticalAlign: "middle"}}/> School </p>
                        </td>
                        <td class="worrylabel">
                            <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/worry_categories/sports.png' height='15px' width='15px' 
                                style={{verticalAlign: "middle"}}/> Sports </p>
                        </td>
                        <td class="worrylabel">
                            <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/worry_categories/stranger.png' height='15px' width='15px' 
                                style={{verticalAlign: "middle"}}/> Stranger </p>                
                          {/* </span>          */}
                      </td>
                  </tr>
              </table>
          </div>

          {/* <Chart options={this.state.options} series={this.state.series} type="scatter" 
              height={200} style={{marginLeft: "4em", marginRight: "0.6em" }}/> */}
      </div>
  );
}

}

export default WorryCategory;