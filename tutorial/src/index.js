import React from "react";

import ReactDOM from "react-dom";

import ApexCharts from "apexcharts";

import SymptomIntensity from "./SymptomIntensity.js";
// import SymptomOccNew from "./SymptomOccurenceNew.js";
// import WorryIntensity from "./WorryIntensity.js";
// import WCColumn from "./WCColumn.js";
// import ERNew from "./ERNew.js";
// import WorryCategory from "./WorryCategory.js";
// import SchoolAttendance from "./SchoolAttendance.js";
// import PeerWorry from "./PeerInteractionWorry.js";
// import PeerInteractionQualityNew from "./PeerInteractionQualityNew.js";
// import Emotion from "./Emotions.js";
// import EmotionDetailed from "./EmotionsDetailed.js";
// import ERBar from "./ERBar.js";
// import SleepNew1 from "./SleepNew1.js";
// import SleepSymOccCopy from "./SleepSymOccCopy.js";

import Trial  from "./trial.js";

import "./index.css";

ReactDOM.render(
  <div class="backgrounddiv">
      <form id="myForm">
    <input type="file" id="csvFile" accept=".csv" />
    <br />
    <input type="submit" value="Submit" />
  </form>
    <div class="">
      <h4 class="charttitle"> Intensity of My Symptoms </h4>
      {/* <SymptomIntensity /> */}
    </div>
    {/* <div class="" >
      <h4 class="charttitle"> When My Symptoms Occurred </h4>
      <SymptomOccNew />
    </div>
    <div class="">
      <h4 class="charttitle"> How Worried I Was</h4>
      <WorryIntensity />
    </div>
    <div class="" style= {{marginTop: "-1.5em"}}>
      <h4 class="charttitle"> What I Was Worried About </h4>
      <WorryCategory />
    </div>
    <div class="" >
      <h4 class="charttitle"> How Certain I Was </h4>
      <WCColumn />
    </div>
    <div class="">
      <h4 class="charttitle"> Problems expected vs Reality</h4>
      <ERNew />
    </div>
    <div class="">
      <h4 class="charttitle"> My Going to School</h4>
      <SchoolAttendance />
    </div>
    <div class="">
      <h4 class="charttitle"> My Worry About Interacting With Friends </h4>
      <PeerWorry />
    </div>
    <div class="">
      <h4 class="charttitle"> Did I Get Along With My Friends</h4>
      <PeerInteractionQualityNew />
    </div>
    {/* <div class="">
      <h4 class="charttitle"> My emotions for 2 weeks</h4>
      <Emotion />
    </div> */}
    {/* <div class="">
      <h4 class="charttitle"> My Emotions </h4>
      <h5 class="charttitle" style={{marginLeft: "1em"}}>Lines: Details, Bubbles: Overall Summary</h5>
      <br></br>
      <br></br>
      <EmotionDetailed />
    </div>
    <div class="">
      <h4 class="charttitle"> My sleep</h4>
      <SleepNew1 />
    </div>
    <div class="">
      <h4 class="charttitle"> My sleep new</h4>
      <SleepSymOccCopy />
    </div> */} 
  </div>,
  document.getElementById("root")
  //<ApexChart />
);

const myForm = document.getElementById("myForm");
const csvFile = document.getElementById("csvFile");

function csvToArray(str, delimiter = ",") {

  // slice from start of text to the first \n index
  // use split to create an array from string by delimiter
  const headers = str.slice(0, str.indexOf("\n")).split(delimiter);

  // slice from \n index + 1 to the end of the text
  // use split to create an array of each csv value row
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");

  // Map the rows
  // split values from each row into an array
  // use headers.reduce to create an object
  // object properties derived from headers:values
  // the object passed as an element of the array
  const arr = rows.map(function (row) {
    const values = row.split(delimiter);
    const el = headers.reduce(function (object, header, index) {
      object[header] = values[index];
      return object;
    }, {});
    return el;
  });

  // return the array
  return arr;
}

var data = null;

myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const input = csvFile.files[0];
  const reader = new FileReader();

  //onload defines what happens when read is complete
  reader.onload = function (e) {
    const text = e.target.result;
    data = csvToArray(text);
    //prints on screen
    //document.write(JSON.stringify(data));
    <SymptomIntensity />
  };
  
  reader.readAsText(input);
});

export default null;

export const datacsv =  data;
