import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import {Admin} from "./components/AdminRegister"

import {Navbar} from "./components/Navbar"
import { AdminLogin} from "./components/AdminLogin"
import { AdminQues } from './components/adminQues';
import { UserTest } from './components/userTest';
import {Home} from "./components/Home"
function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/admin" element={<Admin/>} />
      <Route path="/log" element={<AdminLogin/>}/>
      <Route path="/ques" element={<AdminQues/>}/>
      <Route path="/test" element={<UserTest/>}/>
    </Routes>
    </div>
  );
}

export default App;
