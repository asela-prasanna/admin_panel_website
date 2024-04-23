import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={40} text={"40%"} strokeWidth={5}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowDownOutlined fontSize="small"/>
              <div className="resultAmount">Rs. 1430</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowDownOutlined fontSize="small"/>
              <div className="resultAmount">Rs. 4150</div>
            </div>
          </div>
        </div>
         </div>
      </div>
    
  )
}

export default Featured