import React, { Component } from "react";
import Chart from "react-apexcharts";

class PeerInteractionQuality extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          
            series: [{
                name: 'Morning',
                colors: '#81A2EF',
                data: [[new Date('2021-08-15, 09:00 +0800').getTime(),20], 
                       [new Date('2021-08-16, 09:00 +0800').getTime(),20], 
                       [new Date('2021-08-17, 09:00 +0800').getTime(),20], 
                       //[new Date('2021-08-18, 09:00 +0800').getTime(),0], 
                       //[new Date('2021-08-19, 09:00 +0800').getTime(),-40], 
                       //[new Date('2021-08-20, 09:00 +0800').getTime(),20],
                       //[new Date('2021-08-21, 09:00 +0800').getTime(),-40],
                       [new Date('2021-08-22, 09:00 +0800').getTime(),-20], 
                       [new Date('2021-08-23, 09:00 +0800').getTime(),20], 
                       //[new Date('2021-08-24, 09:00 +0800').getTime(),0], 
                       //[new Date('2021-08-25, 09:00 +0800').getTime(),-20], 
                       //[new Date('2021-08-26, 09:00 +0800').getTime(),-40], 
                       //[new Date('2021-08-27, 09:00 +0800').getTime(),0],
                       [new Date('2021-08-28, 09:00 +0800').getTime(),40]]
              },
              {
                name: 'Afternoon',
                colors: '#2B61E4',
                data: [[new Date('2021-08-15, 14:00 +0800').getTime(),20], 
                [new Date('2021-08-16, 14:00 +0800').getTime(),20], 
                //[new Date('2021-08-17, 14:00 +0800').getTime(),20], 
                //[new Date('2021-08-18, 14:00 +0800').getTime(),40], 
                [new Date('2021-08-19, 14:00 +0800').getTime(),20], 
                [new Date('2021-08-20, 14:00 +0800').getTime(),-40],
                [new Date('2021-08-21, 14:00 +0800').getTime(),40],
                //[new Date('2021-08-22, 14:00 +0800').getTime(),-20], 
                //[new Date('2021-08-23, 14:00 +0800').getTime(),-20], 
                //[new Date('2021-08-24, 14:00 +0800').getTime(),40], 
                //[new Date('2021-08-25, 14:00 +0800').getTime(),20], 
                [new Date('2021-08-26, 14:00 +0800').getTime(),20], 
                [new Date('2021-08-27, 14:00 +0800').getTime(),20],
                [new Date('2021-08-28, 14:00 +0800').getTime(),20]]
              },
              {
                name: 'Evening',
                colors: '#2B61E4',
                data: [[new Date('2021-08-15, 19:00 +0800').getTime(),20], 
                [new Date('2021-08-16, 19:00 +0800').getTime(),20], 
                //[new Date('2021-08-17, 19:00 +0800').getTime(),0], 
                //[new Date('2021-08-18, 19:00 +0800').getTime(),20], 
                [new Date('2021-08-19, 19:00 +0800').getTime(),-20], 
                [new Date('2021-08-20, 19:00 +0800').getTime(),20],
                //[new Date('2021-08-21, 19:00 +0800').getTime(),40],
                //[new Date('2021-08-22, 19:00 +0800').getTime(),-20], 
                [new Date('2021-08-23, 19:00 +0800').getTime(),20], 
                //[new Date('2021-08-24, 19:00 +0800').getTime(),20], 
                //[new Date('2021-08-25, 19:00 +0800').getTime(),40], 
                //[new Date('2021-08-26, 19:00 +0800').getTime(),40], 
                [new Date('2021-08-27, 19:00 +0800').getTime(),20],
                [new Date('2021-08-28, 19:00 +0800').getTime(),20]]
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
                text: "Peer Interaction Quality",
              },
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
              colors: ['#B192B5', '#89608E', '#68496E'],
              dataLabels: {
                enabled: false
              },
              grid: {
                xaxis: {
                  lines: {
                    show: true
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
                labels: {
                  formatter: function (y) {
                    if(y==20)
                      return "Positive";
                    else if(y==40)
                      return "Very Positive";
                    else if(y==-20)
                      return "Negative";
                    else if(y==-40)
                      return "Very Negative";
                    else if(y==0)
                      return "Neutral";
                  }
                },
                //categories: [-40,-20,0,20,40],
                //categories: ['Very Positive','Positive','Neutral','Negative','Very Negative'],
                tickAmount: 20,
                min: -40,
                max: 40
              }
            },
          
          
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

export default PeerInteractionQuality;