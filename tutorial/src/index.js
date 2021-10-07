import React from "react";

import ReactDOM from "react-dom";

import ApexCharts from "apexcharts";

import SymptomIntensity from "./SymptomIntensity.js";
import SymptomOccNew from "./SymptomOccurenceNew.js";
import WorryIntensity from "./WorryIntensity.js";
import WCColumn from "./WCColumn.js";
import ERNew from "./ERNew.js";
import WorryCategory from "./WorryCategory.js";
import SchoolAttendance from "./SchoolAttendance.js";
import PeerWorry from "./PeerInteractionWorry.js";
import PeerInteractionQualityNew from "./PeerInteractionQualityNew.js";
import Emotion from "./Emotions.js";
import EmotionFrustated from "./EmotionFrustated.js";
import EmotionDetailed from "./EmotionsDetailed.js";
import SleepNew from './SleepNew.js';
import ERBar from "./ERBar.js";
import SleepNew1 from "./SleepNew1.js";

import Trial  from "./trial.js";

// import ApexChart from './App.js';
// import WorryVsCertainty from './WorryVsCertainty.js';
// import SymptomOccurence from './SymptomOccurence.js';
// import ExpectationReality from './ExpectationReality.js';
// import PeerQuality from './PeerInteractionQuality.js';
// import WorryCertainty from './WorryCertainty.js';
// import WorryCategoryDefault from './WorryCategoryDefault.js';
// import EmotionsBubbleNew from './EmotionBubbleNew.js';
//import Sleep from './Sleep.js';

import "./index.css";
//import SleepNew2 from "./SleepNew2.js";

ReactDOM.render(
  <div class="backgrounddiv">
    <div class="">
      {/* //<App />, */}
      <h4 class="charttitle"> How intense my symptoms were </h4>
      <SymptomIntensity />
    </div>
    <div class="" style={{marginTop: "-1em"}}>
      <h4 class="charttitle"> When my symptoms occured </h4>
      <SymptomOccNew />
    </div>
    {/* <SymptomOccurence /> */}
    <div class="">
      <h4 class="charttitle"> How worried I was</h4>
      <WorryIntensity />
    </div>
    {/* <WorryVsCertainty /> */}
    <div class="">
      <h4 class="charttitle"> How certain I was </h4>
      <WCColumn />
    </div>
    {/* <ExpectationReality /> */}
    <div class="">
      <h4 class="charttitle"> Expected Problems vs Reality</h4>
      <ERNew />
      {/* line chart possible but without x-axis datetime */}
      {/* <Trial /> */}
    </div>
    <div class="">
      <h4 class="charttitle"> Expectations vs Reality Bar</h4>
      <ERBar />
      {/* line chart possible but without x-axis datetime */}
      {/* <Trial /> */}
    </div>
    <div class="">
      <h4 class="charttitle"> What I was worried about </h4>
      <WorryCategory />
    </div>
    <div class="">
      <h4 class="charttitle"> When I went to school</h4>
      <SchoolAttendance />
    </div>
    {/* <WorryCategoryDefault /> */}
    <div class="">
      <h4 class="charttitle"> My worry about interacting with friends </h4>
      <PeerWorry />
    </div>
    <div class="">
      <h4 class="charttitle"> Did I get along with friends</h4>
      {/* <PeerQuality /> */}
      <PeerInteractionQualityNew />
    </div>
    {/* <EmotionsBubbleNew /> */}
    <div class="">
      <h4 class="charttitle"> My emotions for 2 weeks</h4>
      <Emotion />
    </div>
    <div class="">
      <h4 class="charttitle"> Each emotion from 0 to 100 </h4>
      <br></br>
      <br></br>
      <EmotionDetailed />
      {/* <EmotionFrustated /> */}
    </div>
    {/* <div class="">
      <h4 class="charttitle"> Sleep</h4>
      <Sleep />
    </div> */}
    <div class="">
      <h4 class="charttitle"> My sleep (color scheme 1)</h4>
      <SleepNew />
    </div>
    <div class="">
      <h4 class="charttitle"> My sleep (color scheme 2)</h4>
      <SleepNew1 />
    </div>
    {/* <div class="">
      <h4 class="charttitle"> My sleep KM</h4>
      <SleepNew2 />
    </div> */}
  </div>,
  document.getElementById("root")
  //<ApexChart />
);
