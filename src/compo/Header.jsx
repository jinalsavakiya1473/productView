import React from 'react'
import { MdMenu } from "react-icons/md";
import {BsFillHandbagFill } from "react-icons/bs";
import { FaPinterest,FaFacebookF,FaTwitter} from "react-icons/fa";
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className='sticky'>
            <nav className="navbar navbar-expand-lg py-3">
                <div className="container">
                    <Link className="navbar-brand text-center text-light" to="/">
                        <h2 className='fw-bold'><span>IN</span>STYLE</h2>
                        <p>FASHION FORWARD</p>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <MdMenu className='text-light fs-2'/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className='ms-auto d-lg-flex'>
                            <li><Link to="/">Home</Link> </li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#"><FaPinterest /></a></li>
                            <li><a href="#"><FaFacebookF /></a></li>
                            <li><a href="#"><FaTwitter /></a></li>
                            <li><Link to="/product" ><BsFillHandbagFill /></Link> </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
