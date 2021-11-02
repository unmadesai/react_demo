import React, { Component } from "react";
import Chart from "react-apexcharts";

class PeerInteractionWorry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'Morning',
        type: 'bar',
        data: [73,72,79,4,68,74,98,100,100,12,62,5,9,0]
      }, {
        name: 'Afternoon',
        type: 'bar',
        data: [63,82,0,66,69,100,0,100,63,3,2,2,1,10]
      }, {
        name: 'Evening',
        type: 'bar',
        data: [71,63,72,1,100,100,79,100,79,3,64,3,0,11]
      }, {
        type: 'scatter',
        name: 'No Data',
      data: [,,,,,,,,,,,,,]
    }],
      options: {
        chart: {
          //type: 'bar',
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        legend: {
          // fontSize: "14px",
          // position: 'top',
          // horizontalAlign: 'right',
          show: false,
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
        colors: ['#B192B5', '#89608E', '#68496E'],
        markers: {
          size: [0, 0, 0, 8],
          strokeWidth: 0,
          hover: {
            sizeOffset: 0
          }
        },
        fill: {
          type: ['solid', 'solid', 'solid', 'image'],
          opacity: 1,
          image: {
              src: ['images/worry_certainty/nodata.png'],
              width: 10,
              height: 10
          },
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
                           <p style={{marginTop: "0em", marginBottom: "-1em", padding: "0.1em"}}><img src='images/peer_worry/morning.png' height='16px' width='16px' 
                                 style={{verticalAlign: "-2px"}}/> Morning </p>
                         </td>
                         <td class="">
                             <p style={{marginTop: "0em", marginBottom: "-1em", padding: "0.1em"}}><img src='images/peer_worry/afternoon.png' height='16px' width='16px' 
                                 style={{verticalAlign: "-2px"}}/> Afternoon </p>
                         </td>
                         <td class="">
                             <p style={{marginTop: "0em", marginBottom: "-1em", padding: "0.1em"}}><img src='images/peer_worry/evening.png' height='16px' width='16px' 
                                 style={{verticalAlign: "-2px"}}/> Evening </p>                
                         </td>
                         <td class="">
                             <p style={{marginTop: "0em", marginBottom: "-1em", padding: "0.1em"}}><img src='images/peer_worry/nodata.png' height='14px' width='14px' 
                                 style={{verticalAlign: "-2px"}}/> No Data </p>                
                         </td>                     
                      </tr>
                    </table>
              </div>
          <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="bar" height={300} style={{marginLeft: "1em", marginRight: "0.3em" }}/>
        </div>
      </div>
        
    );
  }
}

export default PeerInteractionWorry;