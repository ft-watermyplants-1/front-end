import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

//Material UI
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6b705c",
    },
    secondary: {
      main: "#8a5a44",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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

const FormContainer = styled.div`
  background-image: url("https://wallpaperaccess.com/full/343990.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  color: #4f4f4f;
  padding-top: 12%;
  padding-bottom: 15%;
`;

const initialValues = {
  username: "",
  password: "",
  phone_number: "",
};

export default function SignUp() {
  const [newUser, setNewUser] = useState(initialValues);
  const { push } = useHistory();
  const classes = useStyles();

  const checkFormValidity = (newUser) => {
    if (newUser.username.length < 3 || newUser.username.length > 30) {
      alert("Username must be between 3 and 30 characters.")
      return false
    } else if (newUser.password.length < 6 || newUser.password.length > 30) {
      alert("Password must be between 6 and 30 characters.")
      return false
    } else if (newUser.phone_number.length < 10) {
      alert("Please input a valid phone number containing 10 digits.")
      return false
    }
    return true
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (checkFormValidity(newUser)) {
      axios
        .post(
          "https://ft-watermyplants-1.herokuapp.com/api/auth/register",
          newUser
        )
        .then((res) => {
          console.log(res.data);
          push("/gallery");
        })
        .catch((err) => {
          alert(err.response.data.message);
          console.log(err);
        });
    }
  };

  const onChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <FormContainer>
        <Container
          component="main"
          maxWidth="xs"
          style={{
            backgroundColor: "white",
            paddingTop: ".1rem",
            paddingBottom: "3%",
            paddingLeft: "3%",
            paddingRight: "3%",
            borderRadius: "3%",
          }}
        >
          <CssBaseline />
          <div className={classes.paper}>
            <LockOutlinedIcon fontSize="large" color="secondary" />
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
                    value={newUser.username}
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
                    value={newUser.password}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="phone_number"
                    variant="outlined"
                    required
                    fullWidth
                    id="phone_number"
                    type="number"
                    label="Phone Number"
                    onChange={onChange}
                    value={newUser.phone_number}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="login" variant="body3">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </FormContainer>
    </ThemeProvider>
  );
}
