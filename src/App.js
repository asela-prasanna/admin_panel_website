import logo from './logo.svg';
import { productInputs, userInputs } from './formSource';
import './App.css';
import Home from './Pages/home/Home';
import Login from './Pages/login/Login';
import List from './Pages/list/List';
import Single from './Pages/single/single';
import New from './Pages/new/New';
import "./style/dark.scss"

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { useContext } from 'react';
import { DarkModeContext } from './context/darkMOdeContext';

function App() {

   const {darkMode} = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>} />
          <Route path="login" element={<Login/>} />
          <Route path='passengers'>
            <Route index element={<List/>}/>
            <Route path=':userId' element={<Single/>}/>
            <Route path= "new" element={<New inputs={userInputs} title="Add New User"/>}/>
          </Route>
          <Route path="riders">
          <Route index element={<List/>}/>
          <Route path="productId" element={<Single/>}/>
            <Route path= "new" element={<New inputs = {productInputs} title="Add New Product"/>}/>
          </Route>
          </Route>
      </Routes>
    </BrowserRouter>
    </div>
      );
}
export default App;
