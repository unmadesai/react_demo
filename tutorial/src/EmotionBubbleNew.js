import React, { Component } from 'react';
//import logo from './logo.svg';

import BubbleChart from '@weknow/react-bubble-chart-d3';

//import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state={

            data: [
                { label: 'CRM', value: 1 },
                { label: 'API', value: 1 },
                { label: 'Data', value: 1 },
                { label: 'Commerce', value: 1 },
                { label: 'AI', value: 3 },
                { label: 'Management', value: 5 },
                { label: 'Testing', value: 6 },
                { label: 'Mobile', value: 9 },
                { label: 'Conversion', value: 9 },
                { label: 'Misc', value: 21 },
                { label: 'Databases', value: 22 },
                { label: 'DevOps', value: 22 },
                { label: 'Javascript', value: 23 },
                { label: 'Languages / Frameworks', value: 25 },
                { label: 'Front End', value: 26 },
                { label: 'Content', value: 26 },
              ]
        }
      }


  render() {
    return (
      <div className="App">
        <BubbleChart
          width={800}
          height={800}
          fontFamily="Arial"
          
        />
      </div>
    );
  }
}

export default App;