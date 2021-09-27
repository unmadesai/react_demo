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
        chart: {
          type: 'bar',
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        legend: {
          fontSize: "14px",
          position: 'top',
          horizontalAlign: 'right',
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
          categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 
            'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        },
        yaxis: {
          max: 100
        },
        colors: ['#B192B5', '#89608E', '#68496E'],
        fill: {
          opacity: 1
        },
      },
    };
  }

  
render() {
    return (
        <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="bar" height={250} style={{marginLeft: "3em", marginRight: "0.3em" }}/>
        </div>
    );
  }
}

export default PeerInteractionWorry;