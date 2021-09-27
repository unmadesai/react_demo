import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class WCColumn extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        series: [
        {
          type: 'bar',
          name: 'How worried',
          data: [0,5,8,74,0,0,64,69,0,64,69,0,0,65]
        }, 
        {
            type: 'bar',
            name: 'How certain',
          data: [0,5,5,74,0,0,70,73,0,68,69,0,0,81]
        },
        {
          type: 'scatter',
          name: 'No data',
        data: [10,,,,10,,,,,,,10,,]
        },
        {
            type: 'scatter',
            name: 'Event happened',
          data: [,105,105,,,105,105,105,105,,,,105,]
        }],
        options: {
          chart: {
            zoom: {
                enabled: false
              },
              toolbar: {
                show: false
              },
          },
          legend: {
            fontSize: "14px",
            position: 'top',
            horizontalAlign: 'right',
          },
          plotOptions: {
            bar: {
              horizontal: false,
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
          xaxis: {
            categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 
            'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          },
          yaxis: {
            max: 100
          },
          colors: ['#2B61E4','#80B6F2'],
          markers: {
            size: [0, 0, 10, 10],
            strokeWidth: 0,
            hover: {
              sizeOffset: 0
            }
          },
          fill: {
            type: ['solid', 'solid', 'image','image'],
            image: {
                src: ['images/worry_certainty/nodata.png'],
                width: 15,
                height: 15
            },
            image: {
                src: ['images/worry_certainty/check.png'],
                width: 15,
                height: 15
            }
          },
        },    
      
      };
    }

    render() {
        return (
            <div>
              <div id="chart">                    
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={300} style={{marginLeft: "2.8em", marginRight: "0em" }} />
              </div>
              <div id="html-dist"></div>
            </div>
          );
        }
    }

  export default WCColumn;