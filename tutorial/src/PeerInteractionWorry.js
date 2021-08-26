import React, { Component } from "react";
import Chart from "react-apexcharts";

class PeerInteractionWorry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'Morning',
        data: [44, 55, 57, 56, 61, 58, 63]
      }, {
        name: 'Afternoon',
        data: [76, 85, 98, 98, 87, 80, 91]
      }, {
        name: 'Evening',
        data: [35, 41, 36, 26, 45, 48, 52]
      }],
      options: {
        title: {
          text: "Peer Interaction Worry",
        },
        chart: {
          type: 'bar',
          //height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '60%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['2021-08-16', '2021-08-17', '2021-08-18', '2021-08-19', '2021-08-20', '2021-08-21', '2021-08-22'],
        },
        yaxis: {
          // title: {
          //   text: '$ (thousands)'
          // }
          max: 100
        },
        colors: ['#89608E'],
        fill: {
          opacity: 1
        },
        // tooltip: {
        //   y: {
        //     formatter: function (val) {
        //       return "$ " + val + " thousands"
        //     }
        //   }
        // }
      },
    
    
    };
  }

  
render() {
    return (
        <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="bar" height={350}/>
        </div>
    );
  }
}

export default PeerInteractionWorry;