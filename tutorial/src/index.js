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

// import ApexChart from './App.js';
// import WorryVsCertainty from './WorryVsCertainty.js';
// import SymptomOccurence from './SymptomOccurence.js';
// import ExpectationReality from './ExpectationReality.js';
// import PeerQuality from './PeerInteractionQuality.js';
// import WorryCertainty from './WorryCertainty.js';
// import WorryCategoryDefault from './WorryCategoryDefault.js';
// import EmotionsBubbleNew from './EmotionBubbleNew.js';
// import Sleep from './Sleep.js';

import "./index.css";

ReactDOM.render(
  <div class="backgrounddiv">
    <div class="">
      {/* //<App />, */}
      <h4 class="charttitle"> Symptom Intensity</h4>
      <SymptomIntensity />
    </div>
    <div class="" style={{marginTop: "-1em"}}>
      <h4 class="charttitle"> Symptom Occurence</h4>
      <SymptomOccNew />
    </div>
    {/* <SymptomOccurence /> */}
    <div class="">
      <h4 class="charttitle"> Intensity of worries</h4>
      <WorryIntensity />
    </div>
    {/* <WorryVsCertainty /> */}
    <div class="">
      <h4 class="charttitle"> Worries vs Certainties</h4>
      <WCColumn />
    </div>
    {/* <ExpectationReality /> */}
    <div class="">
      <h4 class="charttitle"> Expectation vs Reality</h4>
      <ERNew />
    </div>
    <div class="">
      <h4 class="charttitle"> Category of worries</h4>
      <WorryCategory />
    </div>
    <div class="">
      <h4 class="charttitle"> School attendance</h4>
      <SchoolAttendance />
    </div>
    {/* <WorryCategoryDefault /> */}
    <div class="">
      <h4 class="charttitle"> Peer Interaction Worry</h4>
      <PeerWorry />
    </div>
    <div class="">
      <h4 class="charttitle"> Peer Interaction Quality</h4>
      {/* <PeerQuality /> */}
      <PeerInteractionQualityNew />
    </div>
    {/* <EmotionsBubbleNew /> */}
    <div class="">
      <h4 class="charttitle"> Emotions Summarized</h4>
      <Emotion />
    </div>
    <div class="">
      <h4 class="charttitle"> Individual emotions</h4>
      <br></br>
      <br></br>
      <EmotionFrustated />
    </div>
    {/* <Sleep /> */}
  </div>,
  document.getElementById("root")
  //<ApexChart />
);
