import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.webp'
import cart from '../../assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {

const [menu , setMenu] = useState("home");

  return (
    
<div className='navbar'>

<div className='nav-logo'>
    <img src={logo} alt="" height="50px" srcset="" />
    <p>Shopify</p>
</div>


<ul className='nav-menu'>
<li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none',color:'#626262'}} to='/'>Home</Link>{menu === "home"? <hr/>:<></>}</li>
<li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none',color:'#626262'}} to='/men'>Men</Link>{menu === "men"? <hr/>:<></>}</li>
<li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none',color:'#626262'}} to='/women'>Women</Link>{menu === "women"? <hr/>:<></>}</li>
<li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none',color:'#626262'}} to='/kids'>Kids</Link>{menu === "kids"? <hr/>:<></>}</li>
</ul>


<div className='nav-login-cart'>
<Link to='/login'><button>Log In</button></Link>
<Link to='/cart'><img src= {cart}  height="40px" alt="" srcset="" /></Link>
<div className='nav-cart-count'>0</div>

</div>


</div>



  )
}

export default Navbar
