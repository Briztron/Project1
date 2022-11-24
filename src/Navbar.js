import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css"
const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand " to="/" id="lucky" >Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-link" >
        <Link  to="/" >Home</Link>
         </li>
         <li className="nav-link" >
        <Link  to="/Blogs" >Blogs</Link>
         </li>
         <li className="nav-link"  >
        <Link  to="/Clients" >Clients</Link>
         </li>
         <li className="nav-link"  >
        <Link  to="/Contacts" >Contact</Link>
         </li>
         <li className="nav-link"  >
        <Link  to="/Services" >Services</Link>
         </li>
      
     
       
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar