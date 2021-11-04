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
import EmotionDetailed from "./EmotionsDetailed.js";
import SleepNew from './SleepNew.js';
import ERBar from "./ERBar.js";
import SleepNew1 from "./SleepNew1.js";


import Trial  from "./trial.js";

import "./index.css";

ReactDOM.render(
  <div class="backgrounddiv">
    <div class="">
      <h4 class="charttitle"> Intensity of My Symptoms </h4>
      <SymptomIntensity />
    </div>
    <div class="" >
      <h4 class="charttitle"> When My Symptoms Occured </h4>
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
    <div class="">
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
  </div>,
  document.getElementById("root")
  //<ApexChart />
);
