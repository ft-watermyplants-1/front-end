import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {logout} from "../actions/SignInAction";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    background: rgb(105, 149, 114);
    height: 7vh;
    align-items: center;
    padding: 0 5%;

    a{
        color: white;
        font-weight: bold;
        font-size: 1.2rem;
        text-decoration: none;
    }

    & .navLinks{
        display: flex;
        width: 30%;
        justify-content: space-between;
        align-self: center;
        
        & a{
            color: white;
            text-decoration: none;

            &:hover{
                color: black;
            }
        }
    }
`;

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

const Navigation = (props) => {
  /* const { authenticated } = props;
  console.log(authenticated); */
  const { push } = useHistory();
  const classes = useStyles();

  const logout = () => {
    localStorage.removeItem("authorization");
    // logout()
    push("/");
  } 

  return (
    <Nav>
      <Link to="/">WMP</Link>
      <div className="navLinks">
        <Link to="/">Home</Link>
        {props.authorization ? <div></div> : <Link className={classes.navBar} to="/signup">Sign Up</Link>}
        {props.authorization ? <div></div> : <Link className={classes.navBar} to="/login">Login</Link>}
        {props.authorization ? <Link to="/protected/gallery">Gallery</Link> : <div></div>}
        {props.authorization ? <Link onClick={logout} to="/">Logout</Link> : <div></div> }
        {/* <Link className={classes.navBar} to="/protected/gallery">Gallery</Link>
        <Link className={classes.navBar} onClick={logout} to="/">Logout</Link> */}
      </div>
    </Nav>
  );
};

const mapStateToProps = (state) => {
  return{
    authorization: state.authorization
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
//export default Navigation;
