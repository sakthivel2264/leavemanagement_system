import React from "react";
const Header = () =>{
    return(
        <Header classname="header">
            <a href="#abc" className="logo">Off Days</a>
            <i className="bx bx-menu" id="menu-icon"></i>
            <nav classsname="navbar">
               <a href="#home" className="active">Home</a>
               <a href="#about">About</a>
                </nav>
                
        </Header>
    );
}
export default Header;