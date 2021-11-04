function SchoolAttendance () {
  return (
        <div id="chart">
          <br></br>
          <br></br>
          <div>
                <table style={{marginLeft: "3em", marginTop: "0.5em"}}>
                    <tr>
                        <td class="attendancelabel">
                              <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/school_attendance/doctor_appt.png' height='16px' width='16px' 
                                  style={{verticalAlign: "middle"}}/> Doctor</p>
                          </td>
                          <td class="attendancelabel">
                              <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/school_attendance/home_schooled.png' height='16px' width='16px' 
                                  style={{verticalAlign: "middle"}}/> Home-school</p>
                          </td>
                          <td class="attendancelabel">
                              <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/school_attendance/home_sick.png' height='16px' width='16px' 
                                  style={{verticalAlign: "middle"}}/> Sick</p>
                          </td>
                          <td class="attendancelabel">
                              <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/school_attendance/online_learning.png' height='16px' width='16px' 
                                  style={{verticalAlign: "middle"}}/> Online</p>
                          </td>
                          <td class="attendancelabel">
                              <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/school_attendance/school_holiday.png' height='16px' width='16px' 
                                  style={{verticalAlign: "middle"}}/> Holiday</p>
                          </td>
                          <td class="attendancelabel">
                              <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/school_attendance/summer_vacation.png' height='16px' width='16px' 
                                  style={{verticalAlign: "middle"}}/> Vacation</p>                
                        </td>
                        <td class="attendancelabel">
                              <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/school_attendance/weekend.png' height='16px' width='16px' 
                                  style={{verticalAlign: "middle"}}/> Weekend</p>                
                        </td>
                        <td class="attendancelabel">
                              <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/school_attendance/present.png' height='13px' width='13px' 
                                  style={{verticalAlign: "-1px"}}/> Attended</p>                
                        </td>
                        <td class="attendancelabel">
                              <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/school_attendance/nodata.png' height='13px' width='13px' 
                                  style={{verticalAlign: "-1px"}}/> No Data</p>                
                        </td>

                    </tr>
                </table>
            </div>
            <br></br>
          <div id="attendance_category"> 
                <table>
                  {/* Present/Reason for absence/No data - keep nodata size 15!*/}
                  <tr>
                    {/* <!-- comment out if not on that day --> */}
                    <th><img src='images/school_attendance/home_sick.png' height='18px' width='18px'></img></th>
                    <th><img src='images/school_attendance/present.png' height='18px' width='18px'></img></th>
                    <th><img src='images/school_attendance/present.png' height='18px' width='18px'></img></th>
                    <th><img src='images/school_attendance/online_learning.png' height='18px' width='18px'></img></th>
                    <th><img src='images/school_attendance/online_learning.png' height='18px' width='18px'></img></th>
                    <th><img src='images/school_attendance/present.png' height='18px' width='18px'></img></th>
                    <th><img src='images/school_attendance/weekend.png' height='18px' width='18px'></img></th>
                    <th><img src='images/school_attendance/weekend.png' height='18px' width='18px'></img></th>
                    <th><img src='images/school_attendance/present.png' height='18px' width='18px'></img></th>
                    <th><img src='images/school_attendance/online_learning.png' height='18px' width='18px'></img></th>
                    <th><img src='images/school_attendance/online_learning.png' height='18px' width='18px'></img></th>
                    <th><img src='images/school_attendance/online_learning.png' height='18px' width='18px'></img></th>
                    <th><img src='images/school_attendance/present.png' height='18px' width='18px'></img></th>
                    <th><img src='images/school_attendance/weekend.png' height='18px' width='18px'></img></th>            
                  </tr>
                </table>
              </div>
              <div id="worryxaxisd">
                <table>
                  <tr>
                    <td>Sun</td>
                    <td>Mon</td>
                    <td>Tue</td>
                    <td>Wed</td>
                    <td>Thu</td>
                    <td>Fri</td>
                    <td>Sat</td>
                    <td>Sun</td>
                    <td>Mon</td>
                    <td>Tue</td>
                    <td>Wed</td>
                    <td>Thu</td>
                    <td>Fri</td>
                    <td>Sat</td>                         
                  </tr>
                </table>
              </div>
        </div>
    );
  }
  
  
  export default SchoolAttendance;