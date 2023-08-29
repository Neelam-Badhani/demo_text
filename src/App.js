import { useState } from 'react';
import './App.css';
//import React, { useState } from 'react';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import {
  {/*
  BrowserRouter as Router,
  Routes,
  Route,
  Link
//} from "react-router-dom";*/}
function App() {
  const [mode, setMode]= useState('light');//
  const [alert,setAlert]= useState(null);

  const showAlert=(message,type)=>{
     setAlert({
      msg:message,
      type: type
     })
     setTimeout(() =>{
      setAlert(null)
     },3000);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","sucess");
      document.title="Textutils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","sucess");
      document.title="Textutils - Light Mode";
    }
  }
  return (
    <>
{/*<Router>*/}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>  
      <div className="container my-3">
       {/*} <Routes>   
          <Route path="/about" element={<About />} />
          <Route path="/" element=} />
  </Routes>*/}
  <TextForm heading="Enter the text to analyze below" onShowAlert={showAlert}/>
      </div>
  {/* </Router>*/}
</>
  );
}
 
export default App;
