import React, { Component } from "react";
import Chart from "react-apexcharts";

class PeerInteractionWorry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'Morning',
        data: [44, 55, 57, 56, 61, 58, 63, 78, 14, 25, 36, 54, 21, 54]
      }, {
        name: 'Afternoon',
        data: [76, 85, 98, 98, 87, 80, 91, 45, 12, 75, 16, 13, 88, 19]
      }, {
        name: 'Evening',
        data: [35, 41, 36, 26, 45, 48, 52, 12, 85, 85, 45, 12, 55, 74]
      }],
      options: {
        title: {
          text: "Peer Interaction Worry",
        },
        chart: {
          type: 'bar',
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
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
          categories: ['15 Aug', '16 Aug', '17 Aug', '18 Aug', '19 Aug', '20 Aug', '21 Aug', 
          '22 Aug', '23 Aug', '24 Aug', '25 Aug', '26 Aug', '27 Aug', '28 Aug'],
        },
        yaxis: {
          // title: {
          //   text: '$ (thousands)'
          // }
          max: 100
        },
        colors: ['#B192B5', '#89608E', '#68496E'],
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
            <Chart options={this.state.options} series={this.state.series} type="bar" height={250}/>
        </div>
    );
  }
}

export default PeerInteractionWorry;