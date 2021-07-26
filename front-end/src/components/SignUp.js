// import axios from "axios";
import React, { useState} from "react";
// import {useHistory} from "react-router-dom";
import styled from 'styled-components'
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MuiPhoneNumber from "material-ui-phone-number";


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(3)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  }));

const FormContainer = styled.div`
    background-image: url('https://post.healthline.com/wp-content/uploads/2020/05/435791-Forget-You-Have-Plants-11-Types-That-Will-Forgive-You_Thumnail.jpg');
    background-repeat: no-repeat;
    background-position: center; 
    background-attachment: fixed;
    background-size: cover;
    color: #4f4f4f;
    padding: 10%;
`

const initialValues = {
    username: "",
    password: "",
    phoneNumber: ""
  };

export default function SignUp() {

    const [newUser, setNewUser] = useState(initialValues);
    // const {push} = useHistory();
    const classes = useStyles();

    // const handlePhoneChange = value => {
    //     if (value) {
    //       this.useState({ phone_number: value });
    //     }
    // }
    

    const onSubmit = event => {
        event.preventDefault();
        console.log(newUser);
        // axios.post("https://ft-watermyplants-1.herokuapp.com/", newUser)
        // .then(res=>{
        //     console.log(res.data);
        //     push("/login");
        // })

    }

    // const onChange = (e) => {
    //     const { name, value } = e.target;
    //     setNewUser({ ...newUser, [name]: value });
    //   };

    const onChange = (e) => {
        e.preventDefault();
        // const { name, value } = e.target
        // validate(name, value)
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    return (
        <FormContainer>
            <Container component="main" maxWidth="xs" style={{backgroundColor: 'white', paddingTop: '.1rem', paddingBottom: '3%', paddingLeft: '3%', paddingRight: '3%', borderRadius: '3%'}}>
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Create an Account
                    </Typography>
                    <form className={classes.form} onSubmit={onSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    name="username"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    onChange={onChange}
                                    id="username"
                                    label="Username"
                                    autoFocus
                                    value = {newUser.username}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="password"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="password"
                                    type="password"
                                    label="Password"
                                    onChange={onChange}
                                    value = {newUser.password}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <MuiPhoneNumber
                                    name="phone"
                                    label="Phone Number"
                                    data-cy="user-phone"
                                    defaultCountry={"us"}
                                    value={newUser.phoneNumber}
                                    variant="outlined"
                                    required
                                    fullWidth
                                />
                                {/* <TextField
                                    name="phone_number"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="phone_number"
                                    type="number"
                                    label="Phone Number"
                                    onChange={onChange}
                                    value = {newUser.phone_number}
                                /> */}
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}>
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                            <Link href="#" variant="body3">
                                Already have an account? Sign in
                            </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </FormContainer>
    )
}