import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class WCColumn extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        series: [
        {
          type: 'bar',
          name: 'How worried I was',
          data: [44, 55, 41, 64, 22, 43, 21,58,52,65,32,18,84,22]
        }, 
        {
            type: 'bar',
            name: 'How certain I was',
          data: [53, 32, 33, 52, 13, 44, 32,75,15,23,65,32,45,85]
        },
        {
            type: 'scatter',
            name: 'Did the event happen',
          data: [95,,95,95,95,95,95,95,95,95,95,95,95,95]
        }],
        options: {
          chart: {
            //type: 'bar',
            //height: 430
            zoom: {
                enabled: false
              },
              toolbar: {
                show: false
              },
          },
          plotOptions: {
            bar: {
              horizontal: false,
            //   dataLabels: {
            //     enabled: false,
            //   },

            }
          },
          dataLabels: {
            enabled: false,
            offsetX: -6,
            style: {
              fontSize: '12px',
              colors: ['#fff']
            }
          },
          stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
          },
          
        //   tooltip: {
        //     shared: true,
        //     intersect: false
        //   },
          xaxis: {
            categories: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 
            'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
          },
          yaxis: {
            max: 100
          },
          colors: ['#2B61E4','#80B6F2','#2B61E4'],
          markers: {
            size: [0, 0, 10],
            strokeWidth: 0,
            hover: {
              sizeOffset: 0
            }
          },
          fill: {
            type: ['solid', 'solid', 'image'],
            image: {
                src: ['images/worry_certainty/check.png'],
                width: 15,
                height: 15
              }
          },
          title: {
            text: 'How worried vs How certain',
            horizontalAlign: 'center',
            //offsetX: 40
            // margin: {
            //   bottom: 0.2,
            // }
          },
        },
      
      
      };
    }

    render() {
        return (
            <div>
              <div id="chart">               
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={300} style={{marginLeft: "2em", marginRight: "0em" }} />
              </div>
              <div id="html-dist"></div>
            </div>
          );
        }
    }

  export default WCColumn;