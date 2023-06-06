import "./widgets.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';


const Widgets = ({type}) => {
  let data;

  //temporary
  const amount = 100;
  const diff =20;





    switch (type){
      case "passengers":
        data = {
          title: "PASSENGERS",
          isMony: false,
          link: "See all users",
          icon: (<Person2OutlinedIcon 
          className="icon" 
          style={{
            color: "crimson",
            backgroundColor:"rgba(255,0,0,0.2)",
          }}
          />
          ),
        };
        break;
        case "riders":
        data = {
          title: "RIDERS",
          isMony: false,
          link: "View all orders",
          icon: (<ShoppingCartOutlinedIcon 
          className="icon" 
          style={{
            color: "goldenrod",
            backgroundColor:"rgba(218,165,32,0.2)",
          }}
          />
          ),
        };
        break;
        case "available riders":
        data = {
          title: "AVAILABLE RIDERS",
          isMony: false,
          link: "View net earning",
          icon: (<MonetizationOnOutlinedIcon 
          className="icon"
          style={{
            color: "green",
            backgroundColor:"rgba(0,128,0,0.2)",
          }}
          />
          ),
        };
        break;
        case "earnings":
        data = {
          title: "EARNINGS",
          isMony: false,
          link: "See details",
          icon: (<AccountBalanceWalletOutlinedIcon 
          className="icon"
          style={{
            color: "purple",
            backgroundColor:"rgba(0,128,0,0.2)",
          }}
          />
          ),
        };
        break;
        default:
        break;

    }


  return (
    <div className="widget">
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">
            {data.isMoney && "$"} {amount}
            </span>
          <span className="link">{data.link}</span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpIcon />
            {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widgets