import React, { Component } from "react";
import Chart from "react-apexcharts";

class ERBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'Morning',
        type: 'bar',
        data: [0,7,7,76,0,0,64,73,0,67,71,0,0,72]
      }, {
        name: 'Afternoon',
        type: 'bar',
        data: [6,5,3,0,0,67,69,64,50,0,0,0,66,0]
      }, {
        name: 'Evening',
        type: 'bar',
        data: [4,6,71,0,73,41,36,0,0,0,0,0,0,69]
      }, {
        type: 'scatter',
        name: 'No data',
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
          max: 100
        },
        colors: ['#81A2EF', '#2B61E4', '#2B61E4'],
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
               <table style={{marginRight: "0.2em", position: "relative", float: "right", marginTop: "0.2em"}}>
                   <tr>
                       <td class="">
                           <p style={{marginTop: "0em", marginBottom: "-1em", padding: "0.1em"}}><img src='images/worry_certainty/certainty.png' height='16px' width='16px' 
                                 style={{verticalAlign: "-2px"}}/> Morning (Expected) </p>
                         </td>
                         <td class="">
                             <p style={{marginTop: "0em", marginBottom: "-1em", padding: "0.1em"}}><img src='images/worry_certainty/worry.png' height='16px' width='16px' 
                                 style={{verticalAlign: "-2px"}}/> Afternoon (Reality) </p>
                         </td>
                         <td class="">
                             <p style={{marginTop: "0em", marginBottom: "-1em", padding: "0.1em"}}><img src='images/worry_certainty/worry.png' height='16px' width='16px' 
                                 style={{verticalAlign: "-2px"}}/> Evening (Reality) </p>                
                         </td>
                         {/* <td class="">
                             <p style={{marginTop: "0em", marginBottom: "-1em", padding: "0.1em"}}><img src='images/worry_certainty/nodata.png' height='14px' width='14px' 
                                 style={{verticalAlign: "-2px"}}/> No data </p>                
                         </td>                      */}
                      </tr>
                    </table>
              </div>
          <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="bar" height={300} style={{marginLeft: "3em", marginRight: "0.3em" }}/>
        </div>
      </div>
        
    );
  }
}

export default ERBar;