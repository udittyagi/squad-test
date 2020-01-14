import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Box,
  Typography,
  Divider,
  makeStyles,
} from '@material-ui/core';

import Card from '../card'
import { Modal } from '../../utils';
import FormControls from './formControls';

const useStyles = makeStyles(theme => ({
  divider: {
    marginTop: '10px',
    marginBottom: '20px',
  },
}))

function SegmentPanel(props) {
  const { plans, value, index } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(0);

  const classes = useStyles();

  const modalOpenHandler = (index) => {
    setSelectedPlan(index);
    setModalOpen(true);
  }

  let cards = null;
  if (value === index) {
    cards = plans.map((plan, i) => (
      <Grid item xs={12} md={6} lg={3} key={plan.price}>
        <Card
          plan={plan}
          index={i}
          isPopular={i === 1}
          isLast={i === plans.length - 1}
          clickHandler={() => modalOpenHandler(i)}
        />
      </Grid>
    ))
  }

  let modal = null;
  if (modalOpen) {
    modal = (
      <Modal
        open={modalOpen}
        click={() => setModalOpen(false)}
        style={{ padding: '10px' }}
      >
        <Typography
          align="center"
          variant="h5"
          color="primary"
        >
          Get Started With Squad Voice
        </Typography>
        <Divider className={classes.divider} />
        <Typography
          display="inline"
          variant="button"
        >
          Plan Selected :
        </Typography>
        <Typography
          display="inline"
        >
          {" " + plans[selectedPlan].plan_name}
        </Typography>
        <FormControls plan={plans[selectedPlan]} />
      </Modal>
    )
  }
  return (
    <React.Fragment>
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
      >
        {value === index && (
          <Box p={3}>
            <Grid container spacing={2}>
              {cards}
            </Grid>
          </Box>
        )}
      </Typography>
      {modal}
    </React.Fragment>
  );
}

SegmentPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default SegmentPanel;