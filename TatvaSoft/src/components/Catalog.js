// import React from 'react'
// import { Link } from 'react-router-dom'


// function Catalog() {
//   return (
//     <>
    
//     <Link to='/'>Home</Link>
//     <h4>|</h4>
//     <Link to=''>Create an Account</Link>
//     <form>
//       <div >
//       <label className='fname'>First Name
//         <input type="text" />
//       </label>
//       </div>
//       <div className='lname'>
//       <label>Last Name
//         <input type="text" />
//       </label>
//       </div>
//       <div className='email'>
//       <label>Email Address
//         <input type="email" />
//       </label>
//       <select id="Roles">

//         <option value="Buyer">Buyer</option>
//         <option value="Seller">Seller</option>
 
//       </select>
//       </div>

//     </form>
    
   

//     </>
  
//   )
// }

// export default Catalog

// import React from 'react';
// import './Catalog.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'jquery/dist/jquery.min.js';
// import $ from 'jquery';




// class Catalog extends React.Component {
    
//   componentDidMount(){
 
//    //animation code
//     $(document).ready(function(){
//         $('.login-info-box').fadeOut();
//         $('.login-show').addClass('show-log-panel');
    
    
    
//     $('input[type="radio"]').on('change', function() {
       
    
//         if($('#log-reg-show').is(':checked')) {
//             $('.register-info-box').fadeIn();
//             $('.login-info-box').fadeOut();
            
//             $('.white-panel').removeClass('right-log');
            
//             $('.login-show').addClass('show-log-panel');
//             $('.register-show').removeClass('show-log-panel');
//         }
//         if($('#log-login-show').is(':checked')) {
//             $('.register-info-box').fadeOut(); 
//             $('.login-info-box').fadeIn();
            
//             $('.white-panel').addClass('right-log');
//             $('.register-show').addClass('show-log-panel');
//             $('.login-show').removeClass('show-log-panel');
            
//         }
//     });
// });
//   }
  
 
//   render() {
   
//     return (
     
//        <div className='rajan'>
//         <h1>TatvaSoft</h1>
//        <div class="login-reg-panel">
//             <div class="login-info-box">
//                 <h2>Have an account?</h2>
            
//                 <label id="label-register" for="log-reg-show">Login</label>
//                 <input type="radio" name="active-log-panel" id="log-reg-show" value="log-reg-show" />
//             </div>
                        
//             <div class="register-info-box">
//                 <h2>Don't have an account?</h2>
              
//                 <label id="label-login" for="log-login-show">Register</label>
//                 <input type="radio" name="active-log-panel" value="log-login-show" id="log-login-show" />
//             </div>
                        
//             <div class="white-panel">
//                 <div class="login-show">
//                 <h2>LOGIN</h2>
//                 <input type="text" placeholder="Email" />
//                 <input type="password" placeholder="Password" />
//                 <input type="button" value="Login" />
                
//                 </div>
//                 <div class="register-show">
//                 <h2>REGISTER</h2>
//                 <input type="text" placeholder="First Name" />
//                 <input type="text" placeholder="Last Name" />
//                 <input type="text" placeholder="Email" />
//                 <select id="Roles" value="Roles">
//                   <option value="Buyer">Buyer</option>
//                   <option value="Seller">Seller</option>
//                 </select>
//                 <input type="password" placeholder="Password" />
//                 <input type="password" placeholder="Confirm Password" />
//                 <input  type="button" value="Register"  />
//                 </div>
//             </div>
//             </div>
//             </div>
         
       
     
      
// )
// };
// }

// export default Catalog;
// import React from 'react'
// import Button from '@mui/material/Button';

// function Catalog() {
//   return (
//     <>
//     <div>catalog</div>
//     <Button variant="contained">Hello World</Button>
//     </>
//   )
// }

// export default Catalog

// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function Catalog() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }



import React from 'react'
import './Catalog.css'
import './textbox.css'
import RedButton from './RedButton';
import {Link} from 'react-router-dom'

function Catalog() {
  return (
   <>
   <div className='reg-login-heading'>
                <Link to='/loginreg' className='link'><h3>Login Or</h3></Link>
                
                <Link to='/catalog' className='link'><h3>Create an Account</h3></Link>
            </div>
            <div className='reg-sub-heading'>
                <span className='reg-info'>Personal Information </span>
                <hr></hr>
               
            </div>
            <div className='reg-login-container'>
                <form className='reg-login-form'>
                    <div className='reg-holder'>
                        <div className='reg-sub-holder'>
                            <label className='reg-form-label' for="fname">First Name</label>
                            <input type="text" id='fname' className='textBox'></input>
                        </div>
                        <div className='reg-sub-holder'>
                            <label className='reg-form-label' for="lname">Last Name</label>
                            <input type="text" id='lname' className='textBox'></input>
                        </div>
                    </div>
                    <div className='reg-holder'>
                        <div className='reg-sub-holder'>
                            <label className='reg-form-label' for="email">Email Address</label>
                            <input type="email" id='email' className='textBox'></input>
                        </div>
                    </div>
                    <div className='reg-holder'>
                    <div className='reg-sub-holder'>
                        <select id="Roles" value="Roles" >
                            <option value="Buyer" >Buyer</option>                   
                            <option value="Seller" >Seller</option>
                        </select>
                        </div>
                    </div>
                    <div className='reg-sub-heading' id='reg-login'>
                        <span className='reg-info' style={{ margin: "0px" }}>Login Information</span>
                        <hr></hr>
                    </div>
                    <div className='reg-holder'>
                        <div className='reg-sub-holder'>
                            <label className='reg-form-label' for="password">Password</label>
                            <input type="password" id='password' className='textBox'></input>
                        </div>
                        <div className='reg-sub-holder'>
                            <label className='reg-form-label' for="re-password">Confirm Password</label>
                            <input type="password" id='re-password' className='textBox'></input>
                        </div>
                    </div>
                    <div className='reg-holder'>
                        <RedButton buttonText="Register" />
                    </div>
                </form>
                <hr></hr>
            </div>
   </>
  )
}

export default Catalog