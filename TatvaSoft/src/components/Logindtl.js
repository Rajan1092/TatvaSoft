import React from 'react'
import {Link} from 'react-router-dom'
import './Logindtl.css'

function Logindtl() {
  return (
    <>
       <div className='reg-login-heading'>
                <Link to='/loginreg' className='link'><h3>Login Or</h3></Link>
                <Link to='/catalog' className='link'><h3>Create an Account</h3></Link>
        </div>
                <div className='box1'>
                    <p>User Login</p>
                </div>
                <div className='box2'>
                    <input type='email' placeholder='Email Address' />
                    <input type='password' placeholder='Password' />
                </div>
            
    <div>Loginbox css is incomplete for this page</div>
    </>
  )
}

export default Logindtl