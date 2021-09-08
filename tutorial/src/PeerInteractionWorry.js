import React, { Component } from "react";
import Chart from "react-apexcharts";

class PeerInteractionWorry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'Morning',
        data: [73,72,79,4,68,74,98,100,100,12,62,5,9,0]
      }, {
        name: 'Afternoon',
        data: [63,82,0,66,69,100,0,100,63,3,2,2,1,10]
      }, {
        name: 'Evening',
        data: [71,63,72,1,100,100,79,100,79,3,64,3,0,11]
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