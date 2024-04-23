import "./datatable.scss"
import React, { useEffect, useState } from 'react';
import { db } from "../../firebase";
import { onValue, ref } from 'firebase/database';
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
//import { colors } from "@mui/material";


const Passenger = () => {

  const [data,setData] = useState([]);
  const usersRef = ref(db, 'users');

  // useEffect(()=>{
  //   db.child("users").on("value", (DataSnapshot)=>{
  //       if(DataSnapshot.val()!==null) {
  //         setData({...DataSnapshot.val()});
  //       }else{
  //         setData({});
  //       }
  //   });
  //   // return () => {
  //   //   setData({});
  //   // }
  //   },[]
  // );
  useEffect(() => {
    const unsubscribe = onValue(usersRef, (snapshot) => {
      if (snapshot.exists()) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });
  
    return () => {
      unsubscribe(); // Unsubscribe when the component unmounts
    };
  }, []);

  return(
    <>
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
    <div className="datatable-container">
      <table className="datatable">
        <thead className="datatableTitle">
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id, index) =>{
            return(
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{data[id].name}</td>
                <td>{data[id].email}</td>
                <td>{data[id].phone}</td>
                <td>
                  <button className="cellAction viewButton">Edit</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
    </div>
    </div>
    </>
  );

//   const handleDelete = (id) => {
//     setData(data.filter(item=>item.id !== id))
//   }
//   const actionColumn = [{
//     field: "action", 
//     headerName: "Action", 
//     width: 200, 
//     renderCell:(params)=>{
//     return (
//       <div className="cellAction">
//         <Link to="/passengers/:userId" style={{textDecoration: "none"}}>
//         <div className="viewButton">View</div>
//         </Link>
//         <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
//       </div>
//     );
// },
// },
// ];
//   return (
//     <div className="datatable">
//       <div className="datatableTitle">
//         Add New User
//         <Link to="/passengers/new" style={{textDecoration:"none"}} className="link">
//           Add New
//           </Link>
//       </div>
//        <DataGrid
//        className="datagrid"
//         rows={data}
//         columns={userColumns.concat(actionColumn)}
//         pageSize={9}
//         rowsPerPageOptions={[9]}
//         checkboxSelection
//       />      
//     </div>
//   )
}
export default Passenger