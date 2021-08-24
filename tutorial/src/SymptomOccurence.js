import React, { Component } from "react";
import Chart from "react-apexcharts";

class SymptomOccurence extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [
            {
              data: [
                //headache morning
                {
                  x: 'Headache',
                  y: [
                    //monday morning
                    new Date('2021-08-16, 09:00').getTime(),
                    new Date('2021-08-16, 13:00').getTime(),
                  ]
                },
                //headache afternoon
                {
                  x: 'Headache',
                  y: [
                    //monday afternoon
                    new Date('2021-08-16, 14:00').getTime(),
                    new Date('2021-08-16, 18:00').getTime()
                  ]
                },
                //headache evening
                {
                  x: 'Headache',
                  y: [
                    //monday evening
                    new Date('2021-08-16, 19:00').getTime(),
                    new Date('2021-08-16, 23:00').getTime()
                  ]
                },
                //headache morning
                {
                  x: 'Headache',
                  y: [
                    //tuesday morning
                    new Date('2021-08-17, 09:00').getTime(),
                    new Date('2021-08-17, 13:00').getTime(),
                  ]
                },
                //headache afternoon
                {
                  x: 'Headache',
                  y: [
                    //tuesday afternoon
                    new Date('2021-08-17, 14:00').getTime(),
                    new Date('2021-08-17, 18:00').getTime()
                  ]
                },
                //headache evening
                {
                  x: 'Headache',
                  y: [
                    //tuesday evening
                    new Date('2021-08-17, 19:00').getTime(),
                    new Date('2021-08-17, 23:00').getTime()
                  ]
                },
                //headache morning
                {
                  x: 'Headache',
                  y: [
                    //wednesday morning
                    new Date('2021-08-18, 09:00').getTime(),
                    new Date('2021-08-18, 13:00').getTime(),
                  ]
                },
                //headache afternoon
                {
                  x: 'Headache',
                  y: [
                    //wednesday afternoon
                    new Date('2021-08-18, 14:00').getTime(),
                    new Date('2021-08-18, 18:00').getTime()
                  ]
                },
                //headache evening
                {
                  x: 'Headache',
                  y: [
                    //wednesday evening
                    new Date('2021-08-18, 19:00').getTime(),
                    new Date('2021-08-18, 23:00').getTime()
                  ]
                },
                //headache morning
                {
                  x: 'Headache',
                  y: [
                    //thursday morning
                    new Date('2021-08-19, 09:00').getTime(),
                    new Date('2021-08-19, 13:00').getTime(),
                  ]
                },
                //headache afternoon
                {
                  x: 'Headache',
                  y: [
                    //thursday afternoon
                    new Date('2021-08-19, 14:00').getTime(),
                    new Date('2021-08-19, 18:00').getTime()
                  ]
                },
                //headache evening
                {
                  x: 'Headache',
                  y: [
                    //thursday evening
                    new Date('2021-08-19, 19:00').getTime(),
                    new Date('2021-08-19, 23:00').getTime()
                  ]
                },
                //headache morning
                {
                  x: 'Headache',
                  y: [
                    //friday morning
                    new Date('2021-08-20, 09:00').getTime(),
                    new Date('2021-08-20, 13:00').getTime(),
                  ]
                },
                //headache afternoon
                {
                  x: 'Headache',
                  y: [
                    //friday afternoon
                    new Date('2021-08-20, 14:00').getTime(),
                    new Date('2021-08-20, 18:00').getTime()
                  ]
                },
                //headache evening
                {
                  x: 'Headache',
                  y: [
                    //friday evening
                    new Date('2021-08-20, 19:00').getTime(),
                    new Date('2021-08-20, 23:00').getTime()
                  ]
                },
                //headache morning
                {
                  x: 'Headache',
                  y: [
                    //saturday morning
                    new Date('2021-08-21, 09:00').getTime(),
                    new Date('2021-08-21, 13:00').getTime(),
                  ]
                },
                //headache afternoon
                {
                  x: 'Headache',
                  y: [
                    //saturday afternoon
                    new Date('2021-08-21, 14:00').getTime(),
                    new Date('2021-08-21, 18:00').getTime()
                  ]
                },
                //headache evening
                {
                  x: 'Headache',
                  y: [
                    //saturday evening
                    new Date('2021-08-21, 19:00').getTime(),
                    new Date('2021-08-21, 23:00').getTime()
                  ]
                },
                //headache morning
                {
                  x: 'Headache',
                  y: [
                    //sunday morning
                    new Date('2021-08-22, 09:00').getTime(),
                    new Date('2021-08-22, 13:00').getTime(),
                  ]
                },
                //headache afternoon
                {
                  x: 'Headache',
                  y: [
                    //sunday afternoon
                    new Date('2021-08-22, 14:00').getTime(),
                    new Date('2021-08-22, 18:00').getTime()
                  ]
                },
                //headache evening
                {
                  x: 'Headache',
                  y: [
                    //sunday evening
                    new Date('2021-08-22, 19:00').getTime(),
                    new Date('2021-08-22, 23:00').getTime()
                  ]
                },
                //
                //
                //
                //Dizziness morning
                {
                  x: 'Dizziness',
                  y: [
                    //monday morning
                    new Date('2021-08-16, 09:00').getTime(),
                    new Date('2021-08-16, 13:00').getTime(),
                  ]
                },
                //Dizziness afternoon
                {
                  x: 'Dizziness',
                  y: [
                    //monday afternoon
                    new Date('2021-08-16, 14:00').getTime(),
                    new Date('2021-08-16, 18:00').getTime()
                  ]
                },
                //Dizziness evening
                {
                  x: 'Dizziness',
                  y: [
                    //monday evening
                    new Date('2021-08-16, 19:00').getTime(),
                    new Date('2021-08-16, 23:00').getTime()
                  ]
                },
                //Dizziness morning
                {
                  x: 'Dizziness',
                  y: [
                    //tuesday morning
                    new Date('2021-08-17, 09:00').getTime(),
                    new Date('2021-08-17, 13:00').getTime(),
                  ]
                },
                //Dizziness afternoon
                {
                  x: 'Dizziness',
                  y: [
                    //tuesday afternoon
                    new Date('2021-08-17, 14:00').getTime(),
                    new Date('2021-08-17, 18:00').getTime()
                  ]
                },
                //Dizziness evening
                {
                  x: 'Dizziness',
                  y: [
                    //tuesday evening
                    new Date('2021-08-17, 19:00').getTime(),
                    new Date('2021-08-17, 23:00').getTime()
                  ]
                },
                //Dizziness morning
                {
                  x: 'Dizziness',
                  y: [
                    //wednesday morning
                    new Date('2021-08-18, 09:00').getTime(),
                    new Date('2021-08-18, 13:00').getTime(),
                  ]
                },
                //Dizziness afternoon
                {
                  x: 'Dizziness',
                  y: [
                    //wednesday afternoon
                    new Date('2021-08-18, 14:00').getTime(),
                    new Date('2021-08-18, 18:00').getTime()
                  ]
                },
                //Dizziness evening
                {
                  x: 'Dizziness',
                  y: [
                    //wednesday evening
                    new Date('2021-08-18, 19:00').getTime(),
                    new Date('2021-08-18, 23:00').getTime()
                  ]
                },
                //Dizziness morning
                {
                  x: 'Dizziness',
                  y: [
                    //thursday morning
                    new Date('2021-08-19, 09:00').getTime(),
                    new Date('2021-08-19, 13:00').getTime(),
                  ]
                },
                //Dizziness afternoon
                {
                  x: 'Dizziness',
                  y: [
                    //thursday afternoon
                    new Date('2021-08-19, 14:00').getTime(),
                    new Date('2021-08-19, 18:00').getTime()
                  ]
                },
                //Dizziness evening
                {
                  x: 'Dizziness',
                  y: [
                    //thursday evening
                    new Date('2021-08-19, 19:00').getTime(),
                    new Date('2021-08-19, 23:00').getTime()
                  ]
                },
                //Dizziness morning
                {
                  x: 'Dizziness',
                  y: [
                    //friday morning
                    new Date('2021-08-20, 09:00').getTime(),
                    new Date('2021-08-20, 13:00').getTime(),
                  ]
                },
                //Dizziness afternoon
                {
                  x: 'Dizziness',
                  y: [
                    //friday afternoon
                    new Date('2021-08-20, 14:00').getTime(),
                    new Date('2021-08-20, 18:00').getTime()
                  ]
                },
                //Dizziness evening
                {
                  x: 'Dizziness',
                  y: [
                    //friday evening
                    new Date('2021-08-20, 19:00').getTime(),
                    new Date('2021-08-20, 23:00').getTime()
                  ]
                },
                //Dizziness morning
                {
                  x: 'Dizziness',
                  y: [
                    //saturday morning
                    new Date('2021-08-21, 09:00').getTime(),
                    new Date('2021-08-21, 13:00').getTime(),
                  ]
                },
                //Dizziness afternoon
                {
                  x: 'Dizziness',
                  y: [
                    //saturday afternoon
                    new Date('2021-08-21, 14:00').getTime(),
                    new Date('2021-08-21, 18:00').getTime()
                  ]
                },
                //Dizziness evening
                {
                  x: 'Dizziness',
                  y: [
                    //saturday evening
                    new Date('2021-08-21, 19:00').getTime(),
                    new Date('2021-08-21, 23:00').getTime()
                  ]
                },
                //Dizziness morning
                {
                  x: 'Dizziness',
                  y: [
                    //sunday morning
                    new Date('2021-08-22, 09:00').getTime(),
                    new Date('2021-08-22, 13:00').getTime(),
                  ]
                },
                //Dizziness afternoon
                {
                  x: 'Dizziness',
                  y: [
                    //sunday afternoon
                    new Date('2021-08-22, 14:00').getTime(),
                    new Date('2021-08-22, 18:00').getTime()
                  ]
                },
                //Dizziness evening
                {
                  x: 'Dizziness',
                  y: [
                    //sunday evening
                    new Date('2021-08-22, 19:00').getTime(),
                    new Date('2021-08-22, 23:00').getTime()
                  ]
                },
                //
                //
                //
                //Fast heartbeat morning
                {
                  x: 'Fast heartbeat',
                  y: [
                    //monday morning
                    new Date('2021-08-16, 09:00').getTime(),
                    new Date('2021-08-16, 13:00').getTime(),
                  ]
                },
                //Fast heartbeat afternoon
                {
                  x: 'Fast heartbeat',
                  y: [
                    //monday afternoon
                    new Date('2021-08-16, 14:00').getTime(),
                    new Date('2021-08-16, 18:00').getTime()
                  ]
                },
                //Fast heartbeat evening
                {
                  x: 'Fast heartbeat',
                  y: [
                    //monday evening
                    new Date('2021-08-16, 19:00').getTime(),
                    new Date('2021-08-16, 23:00').getTime()
                  ]
                },
                //Fast heartbeat morning
                {
                  x: 'Fast heartbeat',
                  y: [
                    //tuesday morning
                    new Date('2021-08-17, 09:00').getTime(),
                    new Date('2021-08-17, 13:00').getTime(),
                  ]
                },
                //Fast heartbeat afternoon
                {
                  x: 'Fast heartbeat',
                  y: [
                    //tuesday afternoon
                    new Date('2021-08-17, 14:00').getTime(),
                    new Date('2021-08-17, 18:00').getTime()
                  ]
                },
                //Fast heartbeat evening
                {
                  x: 'Fast heartbeat',
                  y: [
                    //tuesday evening
                    new Date('2021-08-17, 19:00').getTime(),
                    new Date('2021-08-17, 23:00').getTime()
                  ]
                },
                //Fast heartbeat morning
                {
                  x: 'Fast heartbeat',
                  y: [
                    //wednesday morning
                    new Date('2021-08-18, 09:00').getTime(),
                    new Date('2021-08-18, 13:00').getTime(),
                  ]
                },
                //Fast heartbeat afternoon
                {
                  x: 'Fast heartbeat',
                  y: [
                    //wednesday afternoon
                    new Date('2021-08-18, 14:00').getTime(),
                    new Date('2021-08-18, 18:00').getTime()
                  ]
                },
                //Fast heartbeat evening
                {
                  x: 'Fast heartbeat',
                  y: [
                    //wednesday evening
                    new Date('2021-08-18, 19:00').getTime(),
                    new Date('2021-08-18, 23:00').getTime()
                  ]
                },
                //Fast heartbeat morning
                {
                  x: 'Fast heartbeat',
                  y: [
                    //thursday morning
                    new Date('2021-08-19, 09:00').getTime(),
                    new Date('2021-08-19, 13:00').getTime(),
                  ]
                },
                //Fast heartbeat afternoon
                {
                  x: 'Fast heartbeat',
                  y: [
                    //thursday afternoon
                    new Date('2021-08-19, 14:00').getTime(),
                    new Date('2021-08-19, 18:00').getTime()
                  ]
                },
                //Fast heartbeat evening
                {
                  x: 'Fast heartbeat',
                  y: [
                    //thursday evening
                    new Date('2021-08-19, 19:00').getTime(),
                    new Date('2021-08-19, 23:00').getTime()
                  ]
                },
                //Fast heartbeat morning
                {
                  x: 'Fast heartbeat',
                  y: [
                    //friday morning
                    new Date('2021-08-20, 09:00').getTime(),
                    new Date('2021-08-20, 13:00').getTime(),
                  ]
                },
                //Fast heartbeat afternoon
                {
                  x: 'Fast heartbeat',
                  y: [
                    //friday afternoon
                    new Date('2021-08-20, 14:00').getTime(),
                    new Date('2021-08-20, 18:00').getTime()
                  ]
                },
                //Fast heartbeat evening
                {
                  x: 'Fast heartbeat',
                  y: [
                    //friday evening
                    new Date('2021-08-20, 19:00').getTime(),
                    new Date('2021-08-20, 23:00').getTime()
                  ]
                },
                //Fast heartbeat morning
                {
                  x: 'Fast heartbeat',
                  y: [
                    //saturday morning
                    new Date('2021-08-21, 09:00').getTime(),
                    new Date('2021-08-21, 13:00').getTime(),
                  ]
                },
                //Fast heartbeat afternoon
                {
                  x: 'Fast heartbeat',
                  y: [
                    //saturday afternoon
                    new Date('2021-08-21, 14:00').getTime(),
                    new Date('2021-08-21, 18:00').getTime()
                  ]
                },
                //Fast heartbeat evening
                {
                  x: 'Fast heartbeat',
                  y: [
                    //saturday evening
                    new Date('2021-08-21, 19:00').getTime(),
                    new Date('2021-08-21, 23:00').getTime()
                  ]
                },
                //Fast heartbeat morning
                {
                  x: 'Fast heartbeat',
                  y: [
                    //sunday morning
                    new Date('2021-08-22, 09:00').getTime(),
                    new Date('2021-08-22, 13:00').getTime(),
                  ]
                },
                //Fast heartbeat afternoon
                {
                  x: 'Fast heartbeat',
                  y: [
                    //sunday afternoon
                    new Date('2021-08-22, 14:00').getTime(),
                    new Date('2021-08-22, 18:00').getTime()
                  ]
                },
                //Fast heartbeat evening
                {
                  x: 'Fast heartbeat',
                  y: [
                    //sunday evening
                    new Date('2021-08-22, 19:00').getTime(),
                    new Date('2021-08-22, 23:00').getTime()
                  ]
                },
                //
                //
                //
                //Nausea morning
                {
                  x: 'Nausea',
                  y: [
                    //monday morning
                    new Date('2021-08-16, 09:00').getTime(),
                    new Date('2021-08-16, 13:00').getTime(),
                  ]
                },
                //Nausea afternoon
                {
                  x: 'Nausea',
                  y: [
                    //monday afternoon
                    new Date('2021-08-16, 14:00').getTime(),
                    new Date('2021-08-16, 18:00').getTime()
                  ]
                },
                //Nausea evening
                {
                  x: 'Nausea',
                  y: [
                    //monday evening
                    new Date('2021-08-16, 19:00').getTime(),
                    new Date('2021-08-16, 23:00').getTime()
                  ]
                },
                //Nausea morning
                {
                  x: 'Nausea',
                  y: [
                    //tuesday morning
                    new Date('2021-08-17, 09:00').getTime(),
                    new Date('2021-08-17, 13:00').getTime(),
                  ]
                },
                //Nausea afternoon
                {
                  x: 'Nausea',
                  y: [
                    //tuesday afternoon
                    new Date('2021-08-17, 14:00').getTime(),
                    new Date('2021-08-17, 18:00').getTime()
                  ]
                },
                //Nausea evening
                {
                  x: 'Nausea',
                  y: [
                    //tuesday evening
                    new Date('2021-08-17, 19:00').getTime(),
                    new Date('2021-08-17, 23:00').getTime()
                  ]
                },
                //Nausea morning
                {
                  x: 'Nausea',
                  y: [
                    //wednesday morning
                    new Date('2021-08-18, 09:00').getTime(),
                    new Date('2021-08-18, 13:00').getTime(),
                  ]
                },
                //Nausea afternoon
                {
                  x: 'Nausea',
                  y: [
                    //wednesday afternoon
                    new Date('2021-08-18, 14:00').getTime(),
                    new Date('2021-08-18, 18:00').getTime()
                  ]
                },
                //Nausea evening
                {
                  x: 'Nausea',
                  y: [
                    //wednesday evening
                    new Date('2021-08-18, 19:00').getTime(),
                    new Date('2021-08-18, 23:00').getTime()
                  ]
                },
                //Nausea morning
                {
                  x: 'Nausea',
                  y: [
                    //thursday morning
                    new Date('2021-08-19, 09:00').getTime(),
                    new Date('2021-08-19, 13:00').getTime(),
                  ]
                },
                //Nausea afternoon
                {
                  x: 'Nausea',
                  y: [
                    //thursday afternoon
                    new Date('2021-08-19, 14:00').getTime(),
                    new Date('2021-08-19, 18:00').getTime()
                  ]
                },
                //Nausea evening
                {
                  x: 'Nausea',
                  y: [
                    //thursday evening
                    new Date('2021-08-19, 19:00').getTime(),
                    new Date('2021-08-19, 23:00').getTime()
                  ]
                },
                //Nausea morning
                {
                  x: 'Nausea',
                  y: [
                    //friday morning
                    new Date('2021-08-20, 09:00').getTime(),
                    new Date('2021-08-20, 13:00').getTime(),
                  ]
                },
                //Nausea afternoon
                {
                  x: 'Nausea',
                  y: [
                    //friday afternoon
                    new Date('2021-08-20, 14:00').getTime(),
                    new Date('2021-08-20, 18:00').getTime()
                  ]
                },
                //Nausea evening
                {
                  x: 'Nausea',
                  y: [
                    //friday evening
                    new Date('2021-08-20, 19:00').getTime(),
                    new Date('2021-08-20, 23:00').getTime()
                  ]
                },
                //Nausea morning
                {
                  x: 'Nausea',
                  y: [
                    //saturday morning
                    new Date('2021-08-21, 09:00').getTime(),
                    new Date('2021-08-21, 13:00').getTime(),
                  ]
                },
                //Nausea afternoon
                {
                  x: 'Nausea',
                  y: [
                    //saturday afternoon
                    new Date('2021-08-21, 14:00').getTime(),
                    new Date('2021-08-21, 18:00').getTime()
                  ]
                },
                //Nausea evening
                {
                  x: 'Nausea',
                  y: [
                    //saturday evening
                    new Date('2021-08-21, 19:00').getTime(),
                    new Date('2021-08-21, 23:00').getTime()
                  ]
                },
                //Nausea morning
                {
                  x: 'Nausea',
                  y: [
                    //sunday morning
                    new Date('2021-08-22, 09:00').getTime(),
                    new Date('2021-08-22, 13:00').getTime(),
                  ]
                },
                //Nausea afternoon
                {
                  x: 'Nausea',
                  y: [
                    //sunday afternoon
                    new Date('2021-08-22, 14:00').getTime(),
                    new Date('2021-08-22, 18:00').getTime()
                  ]
                },
                //Nausea evening
                {
                  x: 'Nausea',
                  y: [
                    //sunday evening
                    new Date('2021-08-22, 19:00').getTime(),
                    new Date('2021-08-22, 23:00').getTime()
                  ]
                },
                //
                //
                //
                //Stomachache morning
                {
                  x: 'Stomachache',
                  y: [
                    //monday morning
                    new Date('2021-08-16, 09:00').getTime(),
                    new Date('2021-08-16, 13:00').getTime(),
                  ]
                },
                //Stomachache afternoon
                {
                  x: 'Stomachache',
                  y: [
                    //monday afternoon
                    new Date('2021-08-16, 14:00').getTime(),
                    new Date('2021-08-16, 18:00').getTime()
                  ]
                },
                //Stomachache evening
                {
                  x: 'Stomachache',
                  y: [
                    //monday evening
                    new Date('2021-08-16, 19:00').getTime(),
                    new Date('2021-08-16, 23:00').getTime()
                  ]
                },
                //Stomachache morning
                {
                  x: 'Stomachache',
                  y: [
                    //tuesday morning
                    new Date('2021-08-17, 09:00').getTime(),
                    new Date('2021-08-17, 13:00').getTime(),
                  ]
                },
                //Stomachache afternoon
                {
                  x: 'Stomachache',
                  y: [
                    //tuesday afternoon
                    new Date('2021-08-17, 14:00').getTime(),
                    new Date('2021-08-17, 18:00').getTime()
                  ]
                },
                //Stomachache evening
                {
                  x: 'Stomachache',
                  y: [
                    //tuesday evening
                    new Date('2021-08-17, 19:00').getTime(),
                    new Date('2021-08-17, 23:00').getTime()
                  ]
                },
                //Stomachache morning
                {
                  x: 'Stomachache',
                  y: [
                    //wednesday morning
                    new Date('2021-08-18, 09:00').getTime(),
                    new Date('2021-08-18, 13:00').getTime(),
                  ]
                },
                //Stomachache afternoon
                {
                  x: 'Stomachache',
                  y: [
                    //wednesday afternoon
                    new Date('2021-08-18, 14:00').getTime(),
                    new Date('2021-08-18, 18:00').getTime()
                  ]
                },
                //Stomachache evening
                {
                  x: 'Stomachache',
                  y: [
                    //wednesday evening
                    new Date('2021-08-18, 19:00').getTime(),
                    new Date('2021-08-18, 23:00').getTime()
                  ]
                },
                //Stomachache morning
                {
                  x: 'Stomachache',
                  y: [
                    //thursday morning
                    new Date('2021-08-19, 09:00').getTime(),
                    new Date('2021-08-19, 13:00').getTime(),
                  ]
                },
                //Stomachache afternoon
                {
                  x: 'Stomachache',
                  y: [
                    //thursday afternoon
                    new Date('2021-08-19, 14:00').getTime(),
                    new Date('2021-08-19, 18:00').getTime()
                  ]
                },
                //Stomachache evening
                {
                  x: 'Stomachache',
                  y: [
                    //thursday evening
                    new Date('2021-08-19, 19:00').getTime(),
                    new Date('2021-08-19, 23:00').getTime()
                  ]
                },
                //Stomachache morning
                {
                  x: 'Stomachache',
                  y: [
                    //friday morning
                    new Date('2021-08-20, 09:00').getTime(),
                    new Date('2021-08-20, 13:00').getTime(),
                  ]
                },
                //Stomachache afternoon
                {
                  x: 'Stomachache',
                  y: [
                    //friday afternoon
                    new Date('2021-08-20, 14:00').getTime(),
                    new Date('2021-08-20, 18:00').getTime()
                  ]
                },
                //Stomachache evening
                {
                  x: 'Stomachache',
                  y: [
                    //friday evening
                    new Date('2021-08-20, 19:00').getTime(),
                    new Date('2021-08-20, 23:00').getTime()
                  ]
                },
                //Stomachache morning
                {
                  x: 'Stomachache',
                  y: [
                    //saturday morning
                    new Date('2021-08-21, 09:00').getTime(),
                    new Date('2021-08-21, 13:00').getTime(),
                  ]
                },
                //Stomachache afternoon
                {
                  x: 'Stomachache',
                  y: [
                    //saturday afternoon
                    new Date('2021-08-21, 14:00').getTime(),
                    new Date('2021-08-21, 18:00').getTime()
                  ]
                },
                //Stomachache evening
                {
                  x: 'Stomachache',
                  y: [
                    //saturday evening
                    new Date('2021-08-21, 19:00').getTime(),
                    new Date('2021-08-21, 23:00').getTime()
                  ]
                },
                //Stomachache morning
                {
                  x: 'Stomachache',
                  y: [
                    //sunday morning
                    new Date('2021-08-22, 09:00').getTime(),
                    new Date('2021-08-22, 13:00').getTime(),
                  ]
                },
                //Stomachache afternoon
                {
                  x: 'Stomachache',
                  y: [
                    //sunday afternoon
                    new Date('2021-08-22, 14:00').getTime(),
                    new Date('2021-08-22, 18:00').getTime()
                  ]
                },
                //Stomachache evening
                {
                  x: 'Stomachache',
                  y: [
                    //sunday evening
                    new Date('2021-08-22, 19:00').getTime(),
                    new Date('2021-08-22, 23:00').getTime()
                  ]
                },
                //Lower back pain morning
                {
                  x: 'Lower back pain',
                  y: [
                    //monday morning
                    new Date('2021-08-16, 09:00').getTime(),
                    new Date('2021-08-16, 13:00').getTime(),
                  ]
                },
                //Lower back pain afternoon
                {
                  x: 'Lower back pain',
                  y: [
                    //monday afternoon
                    new Date('2021-08-16, 14:00').getTime(),
                    new Date('2021-08-16, 18:00').getTime()
                  ]
                },
                //Lower back pain evening
                {
                  x: 'Lower back pain',
                  y: [
                    //monday evening
                    new Date('2021-08-16, 19:00').getTime(),
                    new Date('2021-08-16, 23:00').getTime()
                  ]
                },
                //Lower back pain morning
                {
                  x: 'Lower back pain',
                  y: [
                    //tuesday morning
                    new Date('2021-08-17, 09:00').getTime(),
                    new Date('2021-08-17, 13:00').getTime(),
                  ]
                },
                //Lower back pain afternoon
                {
                  x: 'Lower back pain',
                  y: [
                    //tuesday afternoon
                    new Date('2021-08-17, 14:00').getTime(),
                    new Date('2021-08-17, 18:00').getTime()
                  ]
                },
                //Lower back pain evening
                {
                  x: 'Lower back pain',
                  y: [
                    //tuesday evening
                    new Date('2021-08-17, 19:00').getTime(),
                    new Date('2021-08-17, 23:00').getTime()
                  ]
                },
                //Lower back pain morning
                {
                  x: 'Lower back pain',
                  y: [
                    //wednesday morning
                    new Date('2021-08-18, 09:00').getTime(),
                    new Date('2021-08-18, 13:00').getTime(),
                  ]
                },
                //Lower back pain afternoon
                {
                  x: 'Lower back pain',
                  y: [
                    //wednesday afternoon
                    new Date('2021-08-18, 14:00').getTime(),
                    new Date('2021-08-18, 18:00').getTime()
                  ]
                },
                //Lower back pain evening
                {
                  x: 'Lower back pain',
                  y: [
                    //wednesday evening
                    new Date('2021-08-18, 19:00').getTime(),
                    new Date('2021-08-18, 23:00').getTime()
                  ]
                },
                //Lower back pain morning
                {
                  x: 'Lower back pain',
                  y: [
                    //thursday morning
                    new Date('2021-08-19, 09:00').getTime(),
                    new Date('2021-08-19, 13:00').getTime(),
                  ]
                },
                //Lower back pain afternoon
                {
                  x: 'Lower back pain',
                  y: [
                    //thursday afternoon
                    new Date('2021-08-19, 14:00').getTime(),
                    new Date('2021-08-19, 18:00').getTime()
                  ]
                },
                //Lower back pain evening
                {
                  x: 'Lower back pain',
                  y: [
                    //thursday evening
                    new Date('2021-08-19, 19:00').getTime(),
                    new Date('2021-08-19, 23:00').getTime()
                  ]
                },
                //Lower back pain morning
                {
                  x: 'Lower back pain',
                  y: [
                    //friday morning
                    new Date('2021-08-20, 09:00').getTime(),
                    new Date('2021-08-20, 13:00').getTime(),
                  ]
                },
                //Lower back pain afternoon
                {
                  x: 'Lower back pain',
                  y: [
                    //friday afternoon
                    new Date('2021-08-20, 14:00').getTime(),
                    new Date('2021-08-20, 18:00').getTime()
                  ]
                },
                //Lower back pain evening
                {
                  x: 'Lower back pain',
                  y: [
                    //friday evening
                    new Date('2021-08-20, 19:00').getTime(),
                    new Date('2021-08-20, 23:00').getTime()
                  ]
                },
                //Lower back pain morning
                {
                  x: 'Lower back pain',
                  y: [
                    //saturday morning
                    new Date('2021-08-21, 09:00').getTime(),
                    new Date('2021-08-21, 13:00').getTime(),
                  ]
                },
                //Lower back pain afternoon
                {
                  x: 'Lower back pain',
                  y: [
                    //saturday afternoon
                    new Date('2021-08-21, 14:00').getTime(),
                    new Date('2021-08-21, 18:00').getTime()
                  ]
                },
                //Lower back pain evening
                {
                  x: 'Lower back pain',
                  y: [
                    //saturday evening
                    new Date('2021-08-21, 19:00').getTime(),
                    new Date('2021-08-21, 23:00').getTime()
                  ]
                },
                //Lower back pain morning
                {
                  x: 'Lower back pain',
                  y: [
                    //sunday morning
                    new Date('2021-08-22, 09:00').getTime(),
                    new Date('2021-08-22, 13:00').getTime(),
                  ]
                },
                //Lower back pain afternoon
                {
                  x: 'Lower back pain',
                  y: [
                    //sunday afternoon
                    new Date('2021-08-22, 14:00').getTime(),
                    new Date('2021-08-22, 18:00').getTime()
                  ]
                },
                //Lower back pain evening
                {
                  x: 'Lower back pain',
                  y: [
                    //sunday evening
                    new Date('2021-08-22, 19:00').getTime(),
                    new Date('2021-08-22, 23:00').getTime()
                  ]
                },
                //
                //
                //
                //Limb pain morning
                {
                  x: 'Limb pain',
                  y: [
                    //monday morning
                    new Date('2021-08-16, 09:00').getTime(),
                    new Date('2021-08-16, 13:00').getTime(),
                  ]
                },
                //Limb pain afternoon
                {
                  x: 'Limb pain',
                  y: [
                    //monday afternoon
                    new Date('2021-08-16, 14:00').getTime(),
                    new Date('2021-08-16, 18:00').getTime()
                  ]
                },
                //Limb pain evening
                {
                  x: 'Limb pain',
                  y: [
                    //monday evening
                    new Date('2021-08-16, 19:00').getTime(),
                    new Date('2021-08-16, 23:00').getTime()
                  ]
                },
                //Limb pain morning
                {
                  x: 'Limb pain',
                  y: [
                    //tuesday morning
                    new Date('2021-08-17, 09:00').getTime(),
                    new Date('2021-08-17, 13:00').getTime(),
                  ]
                },
                //Limb pain afternoon
                {
                  x: 'Limb pain',
                  y: [
                    //tuesday afternoon
                    new Date('2021-08-17, 14:00').getTime(),
                    new Date('2021-08-17, 18:00').getTime()
                  ]
                },
                //Limb pain evening
                {
                  x: 'Limb pain',
                  y: [
                    //tuesday evening
                    new Date('2021-08-17, 19:00').getTime(),
                    new Date('2021-08-17, 23:00').getTime()
                  ]
                },
                //Limb pain morning
                {
                  x: 'Limb pain',
                  y: [
                    //wednesday morning
                    new Date('2021-08-18, 09:00').getTime(),
                    new Date('2021-08-18, 13:00').getTime(),
                  ]
                },
                //Limb pain afternoon
                {
                  x: 'Limb pain',
                  y: [
                    //wednesday afternoon
                    new Date('2021-08-18, 14:00').getTime(),
                    new Date('2021-08-18, 18:00').getTime()
                  ]
                },
                //Limb pain evening
                {
                  x: 'Limb pain',
                  y: [
                    //wednesday evening
                    new Date('2021-08-18, 19:00').getTime(),
                    new Date('2021-08-18, 23:00').getTime()
                  ]
                },
                //Limb pain morning
                {
                  x: 'Limb pain',
                  y: [
                    //thursday morning
                    new Date('2021-08-19, 09:00').getTime(),
                    new Date('2021-08-19, 13:00').getTime(),
                  ]
                },
                //Limb pain afternoon
                {
                  x: 'Limb pain',
                  y: [
                    //thursday afternoon
                    new Date('2021-08-19, 14:00').getTime(),
                    new Date('2021-08-19, 18:00').getTime()
                  ]
                },
                //Limb pain evening
                {
                  x: 'Limb pain',
                  y: [
                    //thursday evening
                    new Date('2021-08-19, 19:00').getTime(),
                    new Date('2021-08-19, 23:00').getTime()
                  ]
                },
                //Limb pain morning
                {
                  x: 'Limb pain',
                  y: [
                    //friday morning
                    new Date('2021-08-20, 09:00').getTime(),
                    new Date('2021-08-20, 13:00').getTime(),
                  ]
                },
                //Limb pain afternoon
                {
                  x: 'Limb pain',
                  y: [
                    //friday afternoon
                    new Date('2021-08-20, 14:00').getTime(),
                    new Date('2021-08-20, 18:00').getTime()
                  ]
                },
                //Limb pain evening
                {
                  x: 'Limb pain',
                  y: [
                    //friday evening
                    new Date('2021-08-20, 19:00').getTime(),
                    new Date('2021-08-20, 23:00').getTime()
                  ]
                },
                //Limb pain morning
                {
                  x: 'Limb pain',
                  y: [
                    //saturday morning
                    new Date('2021-08-21, 09:00').getTime(),
                    new Date('2021-08-21, 13:00').getTime(),
                  ]
                },
                //Limb pain afternoon
                {
                  x: 'Limb pain',
                  y: [
                    //saturday afternoon
                    new Date('2021-08-21, 14:00').getTime(),
                    new Date('2021-08-21, 18:00').getTime()
                  ]
                },
                //Limb pain evening
                {
                  x: 'Limb pain',
                  y: [
                    //saturday evening
                    new Date('2021-08-21, 19:00').getTime(),
                    new Date('2021-08-21, 23:00').getTime()
                  ]
                },
                //Limb pain morning
                {
                  x: 'Limb pain',
                  y: [
                    //sunday morning
                    new Date('2021-08-22, 09:00').getTime(),
                    new Date('2021-08-22, 13:00').getTime(),
                  ]
                },
                //Limb pain afternoon
                {
                  x: 'Limb pain',
                  y: [
                    //sunday afternoon
                    new Date('2021-08-22, 14:00').getTime(),
                    new Date('2021-08-22, 18:00').getTime()
                  ]
                },
                //Limb pain evening
                {
                  x: 'Limb pain',
                  y: [
                    //sunday evening
                    new Date('2021-08-22, 19:00').getTime(),
                    new Date('2021-08-22, 23:00').getTime()
                  ]
                },
                // {
                //   x: 'Dizziness',
                //   y: [
                //     new Date('2021, 3, 2').getTime(),
                //     new Date('2021, 3, 3').getTime()
                //   ]
                // },
                // {
                //   x: 'Fast heartbeat',
                //   y: [
                //     new Date('2019-03-08'),
                //     new Date('2019-03-12')
                //   ]
                // },
                // {
                //   x: 'Nausea',
                //   y: [
                //     new Date('2019-03-12'),
                //     new Date('2019-03-18')
                //   ]
                // },
                // {
                //     x: 'Stomachache',
                //     y: [
                //       new Date('2019-03-15'),
                //       new Date('2019-03-22')
                //     ]
                // },
                // {
                //     x: 'Lower back pain',
                //     y: [
                //       new Date('2019-03-12').getTime(),
                //       new Date('2019-03-18').getTime()
                //     ]
                // },
                // {
                //     x: 'Limb pain',
                //     y: [
                //       new Date('2019-03-12').getTime(),
                //       new Date('2019-03-18').getTime()
                //     ]
                // }
              ]
            }
          ],
          options: {
            chart: {
              height: 350,
              type: 'rangeBar'
            },
            plotOptions: {
              bar: {
                horizontal: true
              }
            },
            xaxis: {
              type: 'datetime'
            }
          },
        
        
        };
      }

    

      render() {
        return (
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="rangeBar" height={250} />
            </div>
        );
      }
}

export default SymptomOccurence;
