import React, { Component } from "react";
import Chart from "react-apexcharts";

class WorryVsCertainty extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'How worried I was',
        data: [56, 75, 82, 56, 64, 58, 50]
      }, {
        name: 'How certain I was',
        data: [76, 50, 22, 98, 55, 80, 91]
      }],
      options: {
        title: {
          text: "How worried vs how certain",
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
        colors: ['#2B61E4'],
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

export default WorryVsCertainty;