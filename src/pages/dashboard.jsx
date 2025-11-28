import { useEffect, useState } from "react";
import { useContext } from "react"
import { appcontext } from "../context/context"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export let Dashboard = () => {
    let {setislogged}=useContext(appcontext)
    let navigate=useNavigate()
  let [tripData, setTripData] = useState([]);
        let {token}=useContext(appcontext)
        console.log(typeof token)
  useEffect(() => {
    axios
      .get("https://flextripbackend.onrender.com/trip",
         {
      headers: {
        token: token,
      }
    }
      )
      
      .then((res) => {
        console.log(res.data.AllTrip);
        setTripData(res.data.AllTrip);  // ← save data into state so React can render it
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
        <button className="dashboard-btn" onClick={()=>{
      setislogged(false);
      navigate("/login");
      
    }}>Admin Logout</button>
     <button className="dashboard-btn" onClick={()=>{
      navigate("/");
    }}>Back to LandingPage</button>
      <h2 className="dashboardH2">Dashboard</h2>

      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
          </tr>
        </thead>

        <tbody>
          {tripData.length > 0 ? (
            tripData.map((item,index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.message}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No Data Available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
