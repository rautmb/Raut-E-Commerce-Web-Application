import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const Mainheader=styled.header`
 padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }

  .navheaderleft{
  background:#9c9ca8;
  padding:10px;
  text-align:center;
  color:black;
  font-size:large;
  font-weight:700;
  }
`;

const Header=()=>{
    return(
        <>
        <Mainheader>
            <NavLink>
                {/* <img src="./images/logo.png" alt="logo img"/> */}
                <div className="navheaderleft">Raut_Store</div>
            </NavLink>
            <Navbar/>
        </Mainheader>
        </>
    )
}



export default Header;