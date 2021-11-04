function worryCategory() { 
  return (
       <div id="chart">
         <br></br>
         <br></br>
         {/* <div>
               <table style={{marginLeft: "6em", marginTop: "0.5em"}}>
                   <tr>
                       <td class="worrylabel">
                           <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/worry_categories/family.png' height='20px' width='20px' 
                                 style={{verticalAlign: "middle"}}/> Family </p>
                         </td>
                         <td class="worrylabel">
                             <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/worry_categories/friends.png' height='20px' width='20px' 
                                 style={{verticalAlign: "middle"}}/> Friends </p>
                         </td>
                         <td class="worrylabel">
                             <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/worry_categories/stranger.png' height='20px' width='20px' 
                                 style={{verticalAlign: "middle"}}/> Stranger </p>                
                         </td>
                         <td class="worrylabel">
                             <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/worry_categories/school.png' height='20px' width='20px' 
                                 style={{verticalAlign: "middle"}}/> School </p>
                         </td>
                         <td class="worrylabel">
                             <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/worry_categories/sports.png' height='20px' width='20px' 
                                 style={{verticalAlign: "middle"}}/> Sports </p>
                         </td>
                         <td class="worrylabel">
                             <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/worry_categories/health_safety.png' height='20px' width='20px' 
                                 style={{verticalAlign: "middle"}}/> Health </p>
                         </td>   
                         <td class="worrylabel">
                             <p style={{marginTop: "0em", marginBottom: "0.2em", padding: "0.1em"}}><img src='images/worry_categories/nodata.png' height='14px' width='14px' 
                                 style={{verticalAlign: "-1px"}}/> No Data </p>
                         </td>                      
                   </tr>
               </table>
           </div>
           <br></br> */}
         <div id="worry_category"> 
               <table>
                 {/* Category 1 - Family */}
                 <tr>
                   {/* <!-- comment out if not on that day --> */}
                   <td><img src='images/worry_categories/family.png' height='15px' width='15px'></img></td>
                   <td>Family</td>
                   {/* <th><img src='images/worry_categories/family.png' height='15px' width='15px'></img></th> */}
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>            
                 </tr>
                 {/* Category 2 - Friends */}
                 <tr>
                   {/* <!-- comment out if not on that day --> */}
                   <td><img src='images/worry_categories/friends.png' height='15px' width='15px'></img></td>
                   <td>Friends</td>
                   {/* <th><img src='images/worry_categories/friends.png' height='15px' width='15px'></img></th> */}
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>            
                 </tr>
                 {/* Category 3 - Someone I don't know */}
                 <tr>
                   {/* <!-- comment out if not on that day --> */}
                   <td><img src='images/worry_categories/stranger.png' height='15px' width='15px'></img></td>
                   <td>Strangers</td>
                   {/* <th><img src='images/worry_categories/stranger.png' height='15px' width='15px'></img></th> */}
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>            
                 </tr>
                 {/* Category 4 - School */}
                 <tr>
                   {/* <!-- comment out if not on that day --> */}
                   <td><img src='images/worry_categories/school.png' height='15px' width='15px'></img></td>
                   <td>School</td>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>            
                 </tr>
                 {/* Category 5 - Sports */}
                 <tr>
                   {/* <!-- comment out if not on that day --> */}
                   <td><img src='images/worry_categories/sports.png' height='15px' width='15px'></img></td>
                   <td>Sports</td>
                   {/* <th><img src='images/worry_categories/sports.png' height='15px' width='15px'></img></th> */}
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>            
                 </tr>
                 {/* Category 6 - Health */}
                 <tr>
                   {/* <!-- comment out if not on that day --> */}
                   <td><img src='images/worry_categories/health_safety.png' height='15px' width='15px'></img></td>
                   <td>Health</td>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/blank.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>
                   <th><img src='images/worry_categories/yes.png' height='15px' width='15px'></img></th>            
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
 
 export default worryCategory;