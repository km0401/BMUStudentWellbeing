import { useState } from "react";
import { UserData, UserData1 } from "../Data";
import DoughnutChart from "../DoughnutChart";
import BarChart from "../BarChart";
import Header from "../Header";
import Table from "../Table.js";
import Table2 from "../Table2.js";
import StudentAppointment from "../StudentAppointment";
import GoogleCalendar from "../GoogleCalendar";

function Doctors() {
  const [userData] = useState({
    labels: UserData.map((data) => data.name),
    datasets: [
      {
        label: "Medicine Supplies",
        data: UserData.map((data) => data.Supplies),
        backgroundColor: [
          "#7EB0FC",
          "#8DFA98",
          "#DD8AFA"
        ],
        borderColor: "white",
        borderWidth: 3.3,
      },
    ],
  });
  const [userData1] = useState({
    labels: UserData1.map((data) => data.Month),
    datasets: [
      {
        label: "Pharmacy Orders",
        data: UserData1.map((data) => data.Pharmacy_Orders),
        backgroundColor: [
         " #88DBF9"
        ],
        borderColor: "#E4E6ED",
        borderWidth: 1.8,
        borderRadius: 20,
        borderSkipped: false,
      },
    ],
  });

  return (
   <>
      <div>
        <Header />
      </div>
      <div>
      <h1 style={{ fontSize: '24px', textAlign: 'left', marginLeft: '15px' }}> Hello, <span style={{ color: 'blue' }}>Dr. </span><span style={{ color: 'blue' }}>XYZ</span></h1>      
    </div>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop: "10px"}}>
      <div >
      <h1>Patient List</h1>
        <StudentAppointment/>
    </div> 
      <div >
      <h1>Schedule</h1>
        <GoogleCalendar/>
    </div> 
</div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop: "30px", marginBottom:"40px"}}>
        <div style={{ width: 600, marginLeft:'20px'}}>
        <h1>Pharmacy Orders</h1>
        <BarChart chartData={userData1} />
      </div>
      <div style={{ width: 310, marginRight:'70px'}}>
        <h1>Medicinal Supplies</h1>
        <DoughnutChart chartData={userData} />
      </div>
     
       </div>
    </>
  );
}
export default Doctors