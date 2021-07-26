import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    background: rgb(105, 149, 114);
    height: 5vh;
    align-items: center;
    padding: 0 5%;

    a{
        color: ${props => props.theme.white};
        font-weight: bold;
        font-size: 1rem;
        text-decoration: none;
    }

    & .navLinks{
        display: flex;
        width: 20%;
        justify-content: space-between;
        align-self: center;
        
        & a{
            color: ${props => props.theme.white};
            text-decoration: none;

            &:hover{
                color: ${props => props.theme.black};
            }
        }
    }
`;

const Navigation = (props) => {
  return (
    <Nav>
      <Link to="/">WMP</Link>
      <div className="navLinks">
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
        <Link to="/gallery">Gallery</Link>
      </div>
    </Nav>
  );
};

export default Navigation;
