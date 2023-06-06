import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

const Single = () => {
  return (
    <div className ="single">
        <Sidebar />
        <div className="singleContainer">
          <Navbar/>
          <div className="top">
            <div className="left">
              <div className="editButton">Edit</div>
              <h1 className="title">Information</h1>
             <div className="item">
                <img 
                src="data:image/jpeg;base64,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"
                alt=""
                className="itemImg"
                />
                <div className="details">
                  <h1 className="itemTitle">Jane Doe</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email: </span>
                    <span className="itemValue">janedoe@gmail.com</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone: </span>
                    <span className="itemValue">+1 2313 12 14</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address: </span>
                    <span className="itemValue">Hapugala Galle</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country: </span>
                    <span className="itemValue">USA</span>
                  </div>
                </div>
                details
  </div> 
            </div>
            <div className="right">
              <Chart aspect={3/1} title="User Spending (Last 6 months)"/>
            </div>
          </div>
          <div className="bottom">
          <h1 className="title">Last Transaction</h1>
            <List/>
          </div>
          
        </div>
        </div>
  )
}

export default Single