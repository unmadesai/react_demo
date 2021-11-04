import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class WCColumn extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        series: [
        {
          type: 'bar',
          name: 'How Worried',
          data: [86,79,82,45,24,0,0,100,24,74,38,58,80,68]
        }, 
        {
            type: 'bar',
            name: 'How Certain',
          data: [90,81,100,100,0,0,20,20,18,16,24,91,89,98]
        },
        {
          type: 'scatter',
          name: 'No Data',
        data: [,,,,,,,,,,,,,]
        },
        {
            type: 'scatter',
            name: 'Event Happened',
          data: [105,105,105,105,,,105,105,105,105,,105,105,105]
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
            // fontSize: "14px",
            // position: 'top',
            // horizontalAlign: 'right',
            show:false,
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
            max: 100,
            labels: {
              formatter: function (y) {
                if(y<100 && y>0) {
                  return "";
                }
                else if(y==0) {
                  return "Not At All";
                }
                else if(y==100) {
                  return "Extremely";
                }
              }
            },
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
              <div>
               <table style={{marginRight: "0.7em", position: "relative", float: "right", marginTop: "0em"}}>
                   <tr>
                       <td class="">
                           <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/worry_certainty/worry.png' height='16px' width='16px' 
                                 style={{verticalAlign: "-2px"}}/> How Worried </p>
                         </td>
                         <td class="">
                             <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/worry_certainty/certainty.png' height='16px' width='16px' 
                                 style={{verticalAlign: "-2px"}}/> How Certain </p>
                         </td>
                         <td class="">
                             <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/worry_certainty/check.png' height='20px' width='20px' 
                                 style={{verticalAlign: "-3px"}}/> Event Happened </p>                
                         </td>
                         <td class="">
                             <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/worry_certainty/nodata.png' height='13px' width='13px' 
                                 style={{verticalAlign: "-2px"}}/> No Data </p>                
                         </td>                     
                      </tr>
                    </table>
              </div>
              <div id="chart">                    
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={180} style={{marginLeft: "1em", marginRight: "0em" }} />
              </div>
              <div id="html-dist"></div>
            </div>
          );
        }
    }

  export default WCColumn;