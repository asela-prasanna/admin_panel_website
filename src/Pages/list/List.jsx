import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Passenger from "../../components/datatable/Passenger"

const List = () => {
  return (
    <div className ="list">
      <Sidebar/>
      <div className="listContainer">
      <Navbar/>
      <Passenger/>
      </div>
      </div>
  )
}

export default List