// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';


function App() {
  const [mode,setMode]= useState('light');
  const[alert, setAlert]= useState(null);
  const showAlert=(message,type)=>{
   setAlert({
    msg:message,
    type:type
   }) ;
   setTimeout(()=>{
    setAlert(null);
   },2000)
  }
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Dark Mode on","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode on","success")
    }
  }
 
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
    <div className="container">
    <TextForm heading="Enter text to analyze below" mode={mode} showAlert={showAlert}/>
    </div>
    {/* <About/> */}
    </>
  );
}

export default App;
