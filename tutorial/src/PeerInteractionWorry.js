import React, { Component } from "react";
import Chart from "react-apexcharts";

class PeerInteractionWorry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'Morning',
        data: [50,33,30,23,31,31,26,14,24,77,24,61,35,67]
      }, {
        name: 'Afternoon',
        data: [68,50,50,16,24,60,17,65,13,76,63,0,25,23]
      }, {
        name: 'Evening',
        data: [62,24,50,67,29,62,21,68,64,81,76,68,30,25]
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