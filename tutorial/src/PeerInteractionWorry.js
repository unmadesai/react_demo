import React, { Component } from "react";
import Chart from "react-apexcharts";

class PeerInteractionWorry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'Morning',
        data: [14,64,20,33,16,0,0,54,35,0,24,19,35,31]
      }, {
        name: 'Afternoon',
        data: [57,33,0,31,0,61,65,29,25,20,28,23,21,32]
      }, {
        name: 'Evening',
        data: [60,31,15,12,56,62,78,60,20,19,37,37,19,68]
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