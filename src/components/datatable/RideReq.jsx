import "./datatable.scss";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { get, onValue, ref } from "firebase/database";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "../../Pages/list/list.scss";

const RideReq = () => {
  const [data, setData] = useState([]);
  const usersRef = ref(db, "All Ride Requests");

  useEffect(() => {
    const unsubscribe = onValue(usersRef, (snapshot) => {
      if (snapshot.exists()) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });
    console.log(data);
    return () => {
      unsubscribe(); // Unsubscribe when the component unmounts
    };
  }, []);

  return (
    <>
      <div className="list">
        <Sidebar />
       
        <div className="listContainer">
          <Navbar />
          <div className="datatable-container">
          <table className="datatable">
            <thead className="datatableTitle">
              <tr>
                <th>ID</th>
                <th>Car Details</th>
                <th>Destination Address</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(data).map((id, index) => {
                return (
                  <tr key={id}>
                    <th scope="row">{index + 1}</th>
                    <td>{data[id].car_details}</td>
                    <td>{data[id].
destinationAddress}</td>
                    <td>{data[id].phone}</td>
                    <td>
                      <button className="cellAction viewButton">Edit</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default RideReq;
