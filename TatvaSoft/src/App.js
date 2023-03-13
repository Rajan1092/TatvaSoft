import logo from './logo.svg';
// import { Routes, Route} from 'react-router-dom'
import './App.css';
import Home  from './components/Home';
import Login from './components/Login';
import Catalog from './components/Catalog';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Logindtl from './components/Logindtl';

  

function App() {
  return (
    <div className="App">
      {/* <Home></Home>
      <Login /> */}
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/login' element={<Login />} />
      </Routes> */}
         <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<Login/>}/> */}
        <Route exact path="/catalog" element={<Catalog/>}/>
        <Route exact path="/loginreg" element={<Logindtl />}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
