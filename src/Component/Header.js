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
`;

const Header=()=>{
    return(
        <>
        <Mainheader>
            <NavLink>
                <img src="./images/logo.png" alt="logo img"/>
            </NavLink>
            <Navbar/>
        </Mainheader>
        </>
    )
}



export default Header;