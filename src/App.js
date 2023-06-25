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
        <Route path='/'>
        <Route path="login" element={<Login/>} />
          <Route index element={<RequireAuth><Home/></RequireAuth>} />
                   <Route path='passengers'>
            <Route index element={<RequireAuth><List/></RequireAuth>}/>
            <Route path=':userId' element={<RequireAuth><Single/></RequireAuth>}/>
            <Route path= "new" element={<RequireAuth><New inputs={userInputs} title="Add New User"/></RequireAuth>}/>
          </Route>
          <Route path="riders">
          <Route index element={<RequireAuth><List/></RequireAuth>}/>
          <Route path="productId" element={<RequireAuth><Single/></RequireAuth>}/>
            <Route path= "new" element={<RequireAuth><New inputs = {productInputs} title="Add New Product"/></RequireAuth>}/>
          </Route>
          </Route>
      </Routes>
    </BrowserRouter>
    </div>
      );
}
export default App;
