import "./datatable.scss"
import React, { useEffect, useState } from 'react';
import { db } from "../../firebase";
import { get, onValue, ref } from 'firebase/database';


const Datatable = () => {

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
    <div style={{marginTop: "100px"}}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{textAlign: "center"}}>No.</th>
            <th style={{textAlign: "center"}}>Name</th>
            <th style={{textAlign: "center"}}>Email</th>
            <th style={{textAlign: "center"}}>Phone</th>
            <th style={{textAlign: "center"}}>Action</th>
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
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
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
export default Datatable