import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App(){
  const[mode,setMode]= useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{

    setAlert({
      message,
      type
    })

  setTimeout(() => {
    setAlert(null)
  }, 1800);

  }


  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#343a40'
      showAlert("Dark mode has been enabled","success");

    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success");
    }
  }

  return (
<BrowserRouter>
<>
<Navbar title="TextUtils2" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert} />
<div className="container">
  <Routes>
    <Route path="/" element={<TextForm heading="TextForm" showAlert={showAlert} mode={mode} />}/>
    <Route path="/about" element={<About />}/>

</Routes>
</div>

</>
</BrowserRouter>
  );
}

export default App;
