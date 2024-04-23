import logo from './logo.svg';
import { productInputs, userInputs } from './formSource';
import './App.css';
import Home from './Pages/home/Home';
import Login from './Pages/login/Login';
import List from './Pages/list/List';
import Single from './Pages/single/single';
import New from './Pages/new/New';
import "./style/dark.scss"
import { AuthContext } from './context/AuthContext';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { useContext } from 'react';
import { DarkModeContext } from './context/darkMOdeContext';
import Rider from './components/datatable/Rider';
import RideReq from './components/datatable/RideReq';
import Earnings from './components/datatable/Earnings';
import Passenger from './components/datatable/Passenger';

function App() {

   const {darkMode} = useContext(DarkModeContext);

   const {currentUser} = useContext(AuthContext)

   

   const RequireAuth = ({children}) =>{
    return currentUser ? (children) : <Navigate to="/login" />
   }

   console.log(currentUser)


  return (
    <div className={darkMode ? "app dark" : "app"}>
    <BrowserRouter>
      <Routes>
        
        {/* <Route path="Home" element={<Login/>} /> */}
          <Route index element={<RequireAuth><Home/></RequireAuth>} />
                  
            <Route index element={<RequireAuth><List/></RequireAuth>}/>
            <Route path=':userId' element={<RequireAuth><Single/></RequireAuth>}/>
            <Route path= "new" element={<RequireAuth><New inputs={userInputs} title="Add New User"/></RequireAuth>}/>
            <Route path="passengers" element = {<Passenger/>}/>
          <Route path="riders" element = {<Rider/>}/>
          <Route path="rideReq" element = {<RideReq/>}/>
          <Route path="earnings" element = {<Earnings/>}/>
          <Route index element={<RequireAuth><List/></RequireAuth>}/>
          <Route path="productId" element={<RequireAuth><Single/></RequireAuth>}/>
            <Route path= "new" element={<RequireAuth><New inputs = {productInputs} title="Add New Product"/></RequireAuth>}/>
        
          
      </Routes>
    </BrowserRouter>
    </div>
      );
}
export default App;
