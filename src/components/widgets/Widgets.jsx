import "./widgets.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { onValue, ref } from 'firebase/database';
import { useState, useEffect } from "react";
import { db } from "../../firebase";

const Widgets = () => {
  let data;
  const [dataLengths, setDataLengths] = useState({
    users: 0,
    Adrivers: 0,
    rideRequests: 0,
    drivers:0
  });

  const dbRef = {
    users: ref(db, 'users'),
    Adrivers: ref(db, 'activeDrivers'),
    drivers: ref(db, 'drivers'),
    rideRequests: ref(db, 'All Ride Requests'),
  };

  useEffect(() => {
    const unsubscribe = onValue(dbRef.users, (snapshot) => {
      if (snapshot.exists()) {
        setDataLengths((prevDataLengths) => ({
          ...prevDataLengths,
          users: Object.keys(snapshot.val()).length,
        }));
      }
    });

    const unsubscribe2 = onValue(dbRef.drivers, (snapshot) => {
      if (snapshot.exists()) {
        setDataLengths((prevDataLengths) => ({
          ...prevDataLengths,
          drivers: Object.keys(snapshot.val()).length,
        }));
      }
    });

    const unsubscribe3 = onValue(dbRef.rideRequests, (snapshot) => {
      if (snapshot.exists()) {
        setDataLengths((prevDataLengths) => ({
          ...prevDataLengths,
          rideRequests: Object.keys(snapshot.val()).length,
        }));
      }
    });

    const unsubscribe4 = onValue(dbRef.Adrivers, (snapshot) => {
      if (snapshot.exists()) {
        setDataLengths((prevDataLengths) => ({
          ...prevDataLengths,
          Adrivers: Object.keys(snapshot.val()).length,
        }));
      }
    });

    return () => {
      unsubscribe();
      unsubscribe2();
      unsubscribe3();
      unsubscribe4();
    };
  }, [dbRef.users, dbRef.drivers, dbRef.rideRequests, dbRef.Adrivers]);
  
  const amount = 100;
  const diff1 = 20;
  const diff2 = 7;
  const diff3 = 18;
  const diff4 = 35;





    // switch (type){
    //   case "passengers":
    //     data = {
    //       title: "PASSENGERS",
    //       isMony: false,
    //       link: "See all Passengers",
    //       icon: (<Person2OutlinedIcon 
    //       className="icon" 
    //       style={{
    //         color: "crimson",
    //         backgroundColor:"rgba(255,0,0,0.2)",
    //       }}
    //       />
    //       ),
    //     };
    //     break;
    //     case "riders":
    //     data = {
    //       title: "RIDERS",
    //       isMony: false,
    //       link: "View all Riders",
    //       icon: (<ShoppingCartOutlinedIcon 
    //       className="icon" 
    //       style={{
    //         color: "goldenrod",
    //         backgroundColor:"rgba(218,165,32,0.2)",
    //       }}
    //       />
    //       ),
    //     };
    //     break;
    //     case "available riders":
    //     data = {
    //       title: "AVAILABLE RIDERS",
    //       isMony: false,
    //       link: "View Available Riders",
    //       icon: (<MonetizationOnOutlinedIcon 
    //       className="icon"
    //       style={{
    //         color: "green",
    //         backgroundColor:"rgba(0,128,0,0.2)",
    //       }}
    //       />
    //       ),
    //     };
    //     break;
    //     case "earnings":
    //     data = {
    //       title: "EARNINGS",
    //       isMony: false,
    //       link: "See Earnings",
    //       icon: (<AccountBalanceWalletOutlinedIcon 
    //       className="icon"
    //       style={{
    //         color: "purple",
    //         backgroundColor:"rgba(0,128,0,0.2)",
    //       }}
    //       />
    //       ),
    //     };
    //     break;
    //     default:
    //     break;

    // }
    
  return (
    <>
    <div className="widget">
        <div className="left">
          <span className="title">Passengers</span>
          <span className="counter">
          {dataLengths.users}
            </span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpIcon />
            {diff1} %
            </div>
            {<Person2OutlinedIcon />}
        </div>
    </div>

    <div className="widget">
        <div className="left">
          <span className="title">Active Drivers</span>
          <span className="counter">
            {dataLengths.Adrivers}
            </span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpIcon />
            {diff2} %
            </div>
            {<Person2OutlinedIcon />}
        </div>
    </div>

    <div className="widget">
        <div className="left">
          <span className="title">Drivers</span>
          <span className="counter">
            {dataLengths.drivers}
            </span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpIcon />
            {diff3} %
            </div>
            {<Person2OutlinedIcon />}
        </div>
    </div>

    <div className="widget">
        <div className="left">
          <span className="title">Rides</span>
          <span className="counter">
           {dataLengths.rideRequests}
            </span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpIcon />
            {diff4} %
            </div>
            {<AccountBalanceWalletOutlinedIcon />}
        </div>
    </div>
    </>
  )
}

export default Widgets