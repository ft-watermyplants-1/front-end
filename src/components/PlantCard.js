import React, { useState } from "react";
import styled from "styled-components";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

//Material UI
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Card, CardContent } from "@material-ui/core";

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
  root: {
    width: 325,
    border: '1px solid gray',
    margin: '1em'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  info: {
    fontSize: 18,
    marginBottom: 20,
  },
  pos: {
    marginBottom: 20,
  },
  submit: {
    margin: theme.spacing(1, 11, 3),
  },
}));

const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;
  position: "absolute";
  border-radius: 25px;
`;

const StyledPlant = styled.div`
  max-width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  border: 2px solid black;
  border-radius: 25px;

  background-color: lightgrey;
  color: black;

  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: lightgrey;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  /* flex-wrap: wrap; */
`;

export default function PlantCard(props) {
  const { plant, submit, deletePlant } = props;
  const classes = useStyles();

  let initialFormValues = {
    species: plant.species,
    days_between_watering: plant.days_between_watering,
    notes: plant.notes,
    nickname: plant.nickname,
    img_url: plant.img_url,
  };

  const [showEdit, setShowEdit] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);

  /*   useEffect(() => {
    setFormValues({

    });
    console.log(formValues);
  }, []); */

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
    console.log(formValues);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log(formValues);
    submit(formValues, plant.plant_id);
    setShowEdit(false);
  };

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    //console.log(name, value);
    const valueToUse = type === "checkbox" ? checked : value;
    inputChange(name, valueToUse);
  };

  return (
    <Card className={classes.root}>
    <ThemeProvider theme = {theme}>
    {/* <StyledPlant className="plant"> */}
    <CardContent>
      <CssBaseline>
      <StyledPhoto
        src={
          plant.img_url !== null
            ? plant.img_url
            : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/houseplants-asplenium-nidus-peperomia-and-fittonia-royalty-free-image-946085220-1557179507.jpg?crop=1.00xw:0.668xh;0,0.332xh&resize=640:*"
        }
        alt={plant.nickname}
      />
      <Typography className={classes.pos} variant="h4">
        {plant.nickname}
      </Typography>
      {!showEdit ? (
        <StyledDiv className="plantData">
          <Typography className={classes.info}>
            Species: {formValues.species}
          </Typography>
          <Typography className={classes.info}>
            Days between watering: {plant.days_between_watering}
          </Typography>
          <Typography className={classes.info}>
            {plant.notes ? <Typography className={classes.info}>
              Notes: {plant.notes}
              </Typography> : null}
          </Typography>
        </StyledDiv>
      ) : (
        
        <form onSubmit={onSubmit} className="editPlant-form">
          <StyledDiv className="plantData species-input" id="species-input">
          <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                  name="species"
                  variant="outlined"
                  value={formValues.species}
                  onChange={onChange}
                  id="species"
                  label="Species"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                  name="days_between_watering"
                  variant="outlined"
                  value={formValues.days_between_watering}
                  onChange={onChange}
                  id="days_between_watering"
                  label="Days_between_watering"
                  type="number"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                  name="notes"
                  variant="outlined"
                  value={formValues.notes}
                  onChange={onChange}
                  id="notes"
                  label="Notes"
                  />
                </Grid>
                {/* <div className="submit"> */}
                  <Button
                  disabled={false} 
                  id="submit-button"
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                  >
                    Submit Edit
                  </Button>
                {/* </div> */}
            </Grid>
          </StyledDiv>
        </form>
      )}
      <EditButton showEdit={showEdit} setShowEdit={setShowEdit} />
      <DeleteButton plant_id={plant.plant_id} deletePlant={deletePlant} />{" "}
      </CssBaseline>
    {/* </StyledPlant> */}
    </CardContent>
    </ThemeProvider>
    </Card>
  );
}
