import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.webp'
import cart from '../../assets/cart_icon.png'
const Navbar = () => {

const [menu , setMenu] = useState("home");

  return (
    
<div className='navbar'>

<div className='nav-logo'>
    <img src={logo} alt="" height="50px" srcset="" />
    <p>Shopify</p>
</div>


<ul className='nav-menu'>
<li onClick={()=>{setMenu("home")}}>Home{menu === "home"? <hr/>:<></>}</li>
<li onClick={()=>{setMenu("men")}}>Men{menu === "men"? <hr/>:<></>}</li>
<li onClick={()=>{setMenu("women")}}>Women{menu === "women"? <hr/>:<></>}</li>
<li onClick={()=>{setMenu("kids")}}>Kids{menu === "kids"? <hr/>:<></>}</li>
</ul>


<div className='nav-login-cart'>
<button>Log In</button>
<img src= {cart}  height="50px" alt="" srcset="" />
</div>


</div>



  )
}

export default Navbar
