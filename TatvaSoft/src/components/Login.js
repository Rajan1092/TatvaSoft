// import React from 'react'
// import "./Login.css"

// function validate(){
        

//     var x = document.forms["myForm"]["usrid"].value;
//     var y = document.forms["myForm"]["psswrd"].value;

//     if (x == "LDRP" && y == "1092")
//     {
//         alert("Welcome to my website");
//         return true;
//     }
//     else if (x == "LDRP" || (y != "1092" && y != ""))
//     {
//         alert("Please check Password");
//         return false;
//     }
//     else if ((x != "LDRP" && x != "") || y == "1092")
//     {
//         alert("Please check Username");
//         return false;
//     }
//     else{
//       alert("Enter the required field(s)");
//       return false;
//     }
// };


//  export const Login = () => {
//   return (
//     <>
//     <header>
//         <div className='conntainer'>

//             <div id="logo">
//                 <h1>Cloth  Hub</h1>
//             </div>
//         </div>
//     </header>
//     <section className='login'>
//     <h2>Log in</h2>
//                 <div class="contain-login">
//                     <form name="myForm"  onsubmit="return validate()">
//                     <label for="username">Username*</label>
//                      <input type="text" placeholder="Username" name="usrid" id="usename" />
//                      <label for="password">Password*</label>
//                     <input type="password" placeholder="Password" name="psswrd" id="password" />
//                     <button type="login" id="submit" >Log in</button>

//                   </form>
//                 </div>
//     </section>

 
    
    
//     </>
//   )
// }

// export  default Login

import React from 'react';
import {useNavigate} from "react-router-dom"
 import "./Login.css"

 function validate(){
        

    var x = document.forms["myForm"]["usrid"].value;
    var y = document.forms["myForm"]["psswrd"].value;

    if (x == "LDRP" && y == "1092")
    {
        alert("Welcome to my website");
        return true;
    }
    else if (x == "LDRP" || (y != "1092" && y != ""))
    {
        alert("Please check Password");
        return false;
    }
    else if ((x != "LDRP" && x != "") || y == "1092")
    {
        alert("Please check Username");
        return false;
    }
    else{
      alert("Enter the required field(s)");
      return false;
    }
};

const Login = () => {
const navigate = useNavigate();

return (
<>
	{/* <h1 style={{color:"green"}}>A Computer Science portal for geeks.</h1>
	<button onClick={()=>navigate(-1)}>Go Back Home</button> */}

    <header>
       
         <div className='conntainer'>
        
             <div id="logo">
                <h1>Cloth  Hub</h1>
            </div>
         </div>
     </header>
    <section className='login'>
    <h2>Log in</h2>
                <div class="contain-login">
                     <form name="myForm"  onsubmit="return validate()">
                     <label for="username">Username*</label>
                     <input type="text" placeholder="Username" name="usrid" id="usename" />
                     <label for="password">Password*</label>
                    <input type="password" placeholder="Password" name="psswrd" id="password" />
                     <button type="login" id="submit" onClick={()=>navigate("/catalog")} >Log in</button>

                  </form>
                </div>
     </section>

</>
)
};

export default Login;

