import React, { Component } from "react";
import Chart from "react-apexcharts";

class PeerInteractionQualityNew extends React.Component {
    constructor(props) {
        super(props);

        this.state = {          
            series: [{
                name: 'Morning',
                data: [
                       //80 = absent data, wont show up on graph
                       //comment out for no interaction and uncomment in below no interaction equivalent
                       [new Date('2021-08-15, 09:00 +0800').getTime(),80],
                       [new Date('2021-08-16, 09:00 +0800').getTime(),-20], 
                       [new Date('2021-08-17, 09:00 +0800').getTime(),20], 
                       [new Date('2021-08-18, 09:00 +0800').getTime(),-20], 
                       [new Date('2021-08-19, 09:00 +0800').getTime(),80], 
                       [new Date('2021-08-20, 09:00 +0800').getTime(),80], 
                      //  [new Date('2021-08-21, 09:00 +0800').getTime(),20],
                       [new Date('2021-08-22, 09:00 +0800').getTime(),20],
                       [new Date('2021-08-23, 09:00 +0800').getTime(),80],
                       [new Date('2021-08-24, 09:00 +0800').getTime(),-20],
                       [new Date('2021-08-25, 09:00 +0800').getTime(),20],
                       [new Date('2021-08-26, 09:00 +0800').getTime(),80],
                       [new Date('2021-08-27, 09:00 +0800').getTime(),80],
                       [new Date('2021-08-28, 09:00 +0800').getTime(),20]]
              },
              {
                name: 'Afternoon',
                data: [[new Date('2021-08-15, 14:00 +0800').getTime(),-20],
                       [new Date('2021-08-16, 14:00 +0800').getTime(),-20], 
                       [new Date('2021-08-17, 14:00 +0800').getTime(),-20], 
                       [new Date('2021-08-18, 14:00 +0800').getTime(),80], 
                       [new Date('2021-08-19, 14:00 +0800').getTime(),-40], 
                       [new Date('2021-08-20, 14:00 +0800').getTime(),20], 
                       [new Date('2021-08-21, 14:00 +0800').getTime(),20],
                       [new Date('2021-08-22, 14:00 +0800').getTime(),-20],
                       [new Date('2021-08-23, 14:00 +0800').getTime(),-20],
                       [new Date('2021-08-24, 14:00 +0800').getTime(),-20],
                       [new Date('2021-08-25, 14:00 +0800').getTime(),-20],
                       [new Date('2021-08-26, 14:00 +0800').getTime(),80],
                       [new Date('2021-08-27, 14:00 +0800').getTime(),20],
                       [new Date('2021-08-28, 14:00 +0800').getTime(),80]]
              },
              {
                name: 'Evening',
                data: [[new Date('2021-08-15, 19:00 +0800').getTime(),-40],
                       [new Date('2021-08-16, 19:00 +0800').getTime(),-20], 
                       [new Date('2021-08-17, 19:00 +0800').getTime(),-40], 
                       [new Date('2021-08-18, 19:00 +0800').getTime(),80], 
                       [new Date('2021-08-19, 19:00 +0800').getTime(),-20], 
                       [new Date('2021-08-20, 19:00 +0800').getTime(),-20], 
                       [new Date('2021-08-21, 19:00 +0800').getTime(),20],
                       [new Date('2021-08-22, 19:00 +0800').getTime(),0],
                       [new Date('2021-08-23, 19:00 +0800').getTime(),0],
                       [new Date('2021-08-24, 19:00 +0800').getTime(),-20],
                       [new Date('2021-08-25, 19:00 +0800').getTime(),20],
                       [new Date('2021-08-26, 19:00 +0800').getTime(),20],
                       [new Date('2021-08-27, 19:00 +0800').getTime(),20],
                       [new Date('2021-08-28, 19:00 +0800').getTime(),-20]]
              },
              {
                type: 'scatter',
                //no interaction morning
                name: '',
                data: [
                      //  [new Date('2021-08-15, 09:00 +0800').getTime(),60],
                      //  [new Date('2021-08-16, 09:00 +0800').getTime(),60], 
                      //  [new Date('2021-08-17, 09:00 +0800').getTime(),60], 
                      //  [new Date('2021-08-18, 09:00 +0800').getTime(),60], 
                      //  [new Date('2021-08-19, 09:00 +0800').getTime(),60], 
                      //  [new Date('2021-08-20, 09:00 +0800').getTime(),60], 
                       [new Date('2021-08-21, 09:00 +0800').getTime(),-60],
                      //  [new Date('2021-08-22, 09:00 +0800').getTime(),60],
                      //  [new Date('2021-08-23, 09:00 +0800').getTime(),60],
                      //  [new Date('2021-08-24, 09:00 +0800').getTime(),60],
                      //  [new Date('2021-08-25, 09:00 +0800').getTime(),60],
                      //  [new Date('2021-08-26, 09:00 +0800').getTime(),60],
                      //  [new Date('2021-08-27, 09:00 +0800').getTime(),60],
                      //  [new Date('2021-08-28, 09:00 +0800').getTime(),60]
                    ]
              },
              {
                type: 'scatter',
                //no interaction afternoon
                name: '',
                data: [
                      //  [new Date('2021-08-15, 14:00 +0800').getTime(),60],
                      //  [new Date('2021-08-16, 14:00 +0800').getTime(),60], 
                      //  [new Date('2021-08-17, 14:00 +0800').getTime(),60], 
                      //  [new Date('2021-08-18, 14:00 +0800').getTime(),60], 
                      //  [new Date('2021-08-19, 14:00 +0800').getTime(),60], 
                      //  [new Date('2021-08-20, 14:00 +0800').getTime(),60], 
                      //  [new Date('2021-08-21, 14:00 +0800').getTime(),60],
                      //  [new Date('2021-08-22, 14:00 +0800').getTime(),60],
                      //  [new Date('2021-08-23, 14:00 +0800').getTime(),60],
                      //  [new Date('2021-08-24, 14:00 +0800').getTime(),60],
                      //  [new Date('2021-08-25, 14:00 +0800').getTime(),60],
                        [new Date('2021-08-26, 14:00 +0800').getTime(),-60],
                      //  [new Date('2021-08-27, 14:00 +0800').getTime(),60],
                      //  [new Date('2021-08-28, 14:00 +0800').getTime(),60]
                      ]
              },
              {
                type: 'scatter',
                name: '',
                //no interaction evening
                data: [
                        // [new Date('2021-08-15, 19:00 +0800').getTime(),60],
                        // [new Date('2021-08-16, 19:00 +0800').getTime(),60], 
                        // [new Date('2021-08-17, 19:00 +0800').getTime(),60], 
                         [new Date('2021-08-18, 19:00 +0800').getTime(),-60], 
                        // [new Date('2021-08-19, 19:00 +0800').getTime(),60], 
                        // [new Date('2021-08-20, 19:00 +0800').getTime(),60], 
                        // [new Date('2021-08-21, 19:00 +0800').getTime(),60],
                        // [new Date('2021-08-22, 19:00 +0800').getTime(),60],
                        // [new Date('2021-08-23, 19:00 +0800').getTime(),60],
                        // [new Date('2021-08-24, 19:00 +0800').getTime(),60],
                        // [new Date('2021-08-25, 19:00 +0800').getTime(),60],
                         [new Date('2021-08-26, 19:00 +0800').getTime(),-60],
                        // [new Date('2021-08-27, 19:00 +0800').getTime(),60],
                        // [new Date('2021-08-28, 19:00 +0800').getTime(),60]
                      ]
            }
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
                // position: 'top',
                // fontSize: "14px",
                // horizontalAlign: 'right',
                show: false,
              },
              colors: ['#B192B5', '#89608E', '#68496E', '#393939', '#393939', '#393939'],
              dataLabels: {
                enabled: false
              },
              grid: {
                yaxis: {
                  lines: {
                    show: false
                  }
                },
                xaxis: {
                  lines: {
                    show: false,
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
                labels: {
                  formatter: function (y) {
                    if(y==20)
                      return "Negative";
                    else if(y==40)
                      return "Very Negative";
                    else if(y==-20)
                      return "Positive";
                    else if(y==-40)
                      return "Very Positive";
                    else if(y==0)
                      return "Neutral";
                    else if (y==-60)
                      return "No interactions";
                  }
                },
                //categories: [-40,-20,0,20,40],
                //categories: ['Very Positive','Positive','Neutral','Negative','Very Negative'],
                tickAmount: 20,
                min: -60,
                max: 40
              },
              markers: {
                size: [8, 8, 8, 8, 10 ,10],
                shape: 'square',
                strokeWidth: 0,
                hover: {
                  sizeOffset: 0
                }
              },
              fill: {
                type: ['solid', 'solid', 'solid', 'solid',  'solid',  'solid'],
                // image: {
                //     src: ['images/peer_quality/noInteraction.png'],
                //     width: 10,
                //     height: 10,
                //   }
              },
            },
          };
}

    

render() {
  return (
        <div>
          <div>
               <table style={{marginRight: "0.7em", position: "relative", float: "right", marginTop: "0em"}}>
                   <tr>
                       <td class="">
                           <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/peer_quality/morning.png' height='16px' width='16px' 
                                 style={{verticalAlign: "-3px"}}/> Morning </p>
                         </td>
                         <td class="">
                             <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/peer_quality/afternoon.png' height='16px' width='16px' 
                                 style={{verticalAlign: "-3px"}}/> Afternoon </p>
                         </td>
                         <td class="">
                             <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/peer_quality/evening.png' height='16px' width='16px' 
                                 style={{verticalAlign: "-3px"}}/> Evening </p>                
                         </td>
                         <td class="">
                             <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/peer_quality/noInteractionLegend.png' height='16px' width='16px' 
                                 style={{verticalAlign: "-3px"}}/> No interactions </p>                
                         </td>                     
                      </tr>
                    </table>
          </div>
          <div id="chart">
             <Chart options={this.state.options} series={this.state.series} type="scatter" height={250} style={{marginLeft: "0.2em", marginRight: "1em" }}/>
            <div id="expvsrel" style={{ marginTop: "0em"}}> 
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
          </div>
      </div>  
  );
}

}

export default PeerInteractionQualityNew;