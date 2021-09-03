import React, { Component } from "react";
import Chart from "react-apexcharts";

class WorryVsCertainty extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'How worried I was',
        data: [56, 75, 82, 56, 64, 58, 50, 78, 65, 47, 58, 12, 41, 75]
      }, {
        name: 'How certain I was',
        data: [76, 50, 22, 98, 55, 80, 91, 45, 58, 54, 10, 16, 67, 55]
      }],
      options: {
        title: {
          text: "How worried vs how certain",
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
        colors: ['#2B61E4', '#80B6F2'],
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

export default WorryVsCertainty;