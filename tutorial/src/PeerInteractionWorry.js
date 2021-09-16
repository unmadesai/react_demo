import React, { Component } from "react";
import Chart from "react-apexcharts";

class PeerInteractionWorry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'Morning',
        data: [0,4,5,61,0,0,65,62,0,58,66,0,0,50]
      }, {
        name: 'Afternoon',
        data: [6,6,7,0,50,68,66,63,65,67,50,0,50,0]
      }, {
        name: 'Evening',
        data: [6,5,35,0,50,66,70,0,0,66,50,50,49,65]
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
          // categories: ['15 Aug', '16 Aug', '17 Aug', '18 Aug', '19 Aug', '20 Aug', '21 Aug', 
          // '22 Aug', '23 Aug', '24 Aug', '25 Aug', '26 Aug', '27 Aug', '28 Aug'],
          categories: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 
            'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
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
            <Chart options={this.state.options} series={this.state.series} type="bar" height={250} style={{marginLeft: "2em", marginRight: "0em" }}/>
        </div>
    );
  }
}

export default PeerInteractionWorry;