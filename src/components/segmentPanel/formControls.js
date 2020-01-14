import React, { useState } from 'react'
import {
  Grid,
  TextField,
  makeStyles,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  modalGrid: {
    marginTop: '12px',
  },
  button: {
    marginTop: '10px',
  }
}))

function FormControls() {
  const [modalState, setModalState] = useState({});
  const classes = useStyles();

  const inputChangeHandler = (event) => {
    const newModalState = { ...modalState, [event.target.name]: event.target.value };
    setModalState(newModalState);
  }

  const submitHandler = () => {
    let str = '';
    Object.keys(modalState).forEach(key => {
      str = `${str}
      ${key}: ${modalState[key]}`
    })
    console.log(modalState)
    window.alert(str);
  }

  return (
    <React.Fragment>
      <Grid container spacing={4} className={classes.modalGrid}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            name="name"
            value={(modalState.name) || ''}
            onChange={inputChangeHandler}
            variant="outlined"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Email Address"
            name="email"
            value={(modalState.email) || ''}
            onChange={inputChangeHandler}
            variant="outlined"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Phone Number"
            name="phone"
            value={(modalState.phone) || ''}
            onChange={inputChangeHandler}
            variant="outlined"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="No. of leads you generated in a month"
            name="leadNo"
            type="number"
            value={(modalState.leadNo) || ''}
            onChange={inputChangeHandler}
            variant="outlined"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Total Leads in your CRM"
            name="crmNo"
            type="number"
            value={(modalState.crmNo) || ''}
            onChange={inputChangeHandler}
            variant="outlined"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Which CRM do you use"
            name="crmName"
            value={(modalState.crmName) || ''}
            onChange={inputChangeHandler}
            variant="outlined"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="No. of agents"
            name="agentNo"
            type="number"
            value={(modalState.agentNo) || ''}
            onChange={inputChangeHandler}
            variant="outlined"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">What are your biggest lead sources</FormLabel>
            <RadioGroup
              name="source"
              value={modalState.source}
              onChange={inputChangeHandler}
            >
              <Grid container spacing={2}>
                <Grid item xs={6} md={6} lg={3}>
                  <FormControlLabel
                    value="zillow"
                    control={<Radio color="primary" />}
                    label="Zillow"
                  />
                </Grid>
                <Grid item xs={6} md={6} lg={3}>
                  <FormControlLabel
                    value="realtor"
                    control={<Radio color="primary" />}
                    label="Realtor"
                  />
                </Grid>
                <Grid item xs={6} md={6} lg={3}>
                  <FormControlLabel
                    value="yelopo"
                    control={<Radio color="primary" />}
                    label="Yelopo"
                  />
                </Grid>
                <Grid item xs={6} md={6} lg={3}>
                  <FormControlLabel
                    value="other"
                    control={<Radio color="primary" />}
                    label="Other"
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">How do you hear about us?</FormLabel>
            <RadioGroup
              name="about"
              value={modalState.about}
              onChange={inputChangeHandler}
            >
              <Grid container spacing={2}>
                <Grid item xs={6} md={6} lg={3}>
                  <FormControlLabel
                    value="google"
                    control={<Radio color="primary" />}
                    label="Google"
                  />
                </Grid>
                <Grid item xs={6} md={6} lg={3}>
                  <FormControlLabel
                    value="facebook"
                    control={<Radio color="primary" />}
                    label="Facebook"
                  />
                </Grid>
                <Grid item xs={6} md={6} lg={3}>
                  <FormControlLabel
                    value="email"
                    control={<Radio color="primary" />}
                    label="Email"
                  />
                </Grid>
                <Grid item xs={6} md={6} lg={3}>
                  <FormControlLabel
                    value="friends"
                    control={<Radio color="primary" />}
                    label="Friends"
                  />
                </Grid>
                <Grid item xs={6} md={6} lg={2}>
                  <FormControlLabel
                    value="realClosers"
                    control={<Radio color="primary" />}
                    label="Real Closers"
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={submitHandler}
      >
        Submit
      </Button>
    </React.Fragment>
  );
}

export default FormControls;