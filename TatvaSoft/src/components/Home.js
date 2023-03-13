// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";
// import image from "../img/RAJAN.jpg"
// import "./Home.css"
// import  login from  './Login.js'

// function Home() {
  
//   const navigate = useNavigate();
   
//   return (
    
//     <>
//     <img src={image} className="img1" style={{background:"linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5));"}} />
//     <p className='head'>Cloth Hub</p>
//     <button  className='btn'>Welcome</button>
//     </>
//   )
// }

// export default Home
import React from 'react';
import {useNavigate} from "react-router-dom"
import image from "../img/RAJAN.jpg"
import "./Home.css"

const Home = () => {
const navigate = useNavigate();
	
return (
	<>
		<img src={image} className="img1" style={{background:"linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5));"}} />
    <p className='head'>Cloth Hub</p>
		<button onClick={()=>navigate("/about")} className='btn'>Welcome</button>
	</>
)
};

export default Home;

