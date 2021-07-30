import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import {loginSuccess} from "../actions/SignInAction";
import { connect } from "react-redux";
import { axiosWithAuth } from "../helper/AxiosWithAuth";

// Material UI
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOpenIcon from "@material-ui/icons/LockOpen";
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

const initialUserValue = {
  username: "",
  password: "",
};

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
  background-image: url("https://www.etonline.com/sites/default/files/images/2020-07/bloomscape_plants.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  color: #4f4f4f;
  padding: 12%;
`;

const Login = (props) => {
  const [user, setUser] = useState(initialUserValue);
  const { push } = useHistory();
  const classes = useStyles();

  const updateLoginForm = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (props.id) {
      push("/");
    }
  });

  const submit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/login", user)
      .then((res) => {
        localStorage.setItem("authorization", res.data.token);
        localStorage.setItem("user_id", res.data.user_id);
        console.log(res);
        loginSuccess()
        push("/protected/gallery");
      })
      .catch((error) => {
        alert("Username or password is incorrect");
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
            <LockOpenIcon fontSize="large" color="secondary" />
            <Typography component="h1" variant="h5">
              Welcome Back
            </Typography>
            <form className={classes.form} onSubmit={submit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="username"
                    variant="outlined"
                    required
                    fullWidth
                    onChange={updateLoginForm}
                    id="username"
                    label="Username"
                    autoFocus
                    value={user.username}
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
                    onChange={updateLoginForm}
                    value={user.password}
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
                Sign In
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/signup" variant="body3">
                    Don't have an account? Sign up
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </FormContainer>
    </ThemeProvider>
  );
};

export default connect((state) => {
  return {
    id: state.user_id,
  };
})(Login);
