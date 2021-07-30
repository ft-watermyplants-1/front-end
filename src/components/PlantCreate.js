import React from "react";

//Material UI
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(105, 149, 114)",
    },
    secondary: {
      main: "#8a5a44",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function PlantModal(props) {
  const { values, submit, change } = props;
  const classes = useStyles();

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <ThemeProvider theme = {theme}>
        <Container
          component="main"
          maxWidth="xs"
          style={{
            paddingTop: ".1rem",
            paddingBottom: "1%",
            paddingLeft: "3%",
            paddingRight: "3%",
            marginBottom: "2%",
            borderRadius: "3%",
            backgroundColor:"lightgrey"
          }}
        >
          <CssBaseline />
    <div className={classes.paper}>
    <Typography component="h1" variant="h5">
              New Plant
            </Typography>
      <form onSubmit={onSubmit} className={classes.form}>
      <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
              name="nickname"
              variant="outlined"
              required
              fullWidth
              value={values.nickname}
              onChange={onChange}
              id="nickname"
              label="Nickname"
              />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="species"
              variant="outlined"
              required
              fullWidth
              value={values.species}
              onChange={onChange}
              id="species"
              label="Species"
            />
            </Grid>
          <Grid item xs={12}>
          <TextField
              name="days_between_watering"
              variant="outlined"
              required
              fullWidth
              value={values.days_between_watering}
              onChange={onChange}
              id="days_between_watering"
              label="Days Between Watering"
              type="number"
            />
          </Grid>
            <Grid item xs={12}>
            <TextField
            name="notes"
            variant="outlined"
            fullWidth
            value={values.notes}
            onChange={onChange}
            id="notes"
            label="Notes"
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
              name="img_url"
              variant="outlined"
              fullWidth
              value={values.img_url}
              onChange={onChange}
              id="img_url"
              label="Place Image URL Here"
            />
            </Grid>
          <Button disabled={false} type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
            Submit Plant
          </Button>
        </Grid>
      </form>
    </div>
    </Container>
    </ThemeProvider>
  );
}