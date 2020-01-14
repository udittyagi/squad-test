import React from 'react';
import {
  Paper,
  Typography,
  Divider,
  makeStyles,
  Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  rootPaper: {
    height: '383px',
  },
  colorPaper: {
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff'
  },
  header: {
    height: '40px',
    lineHeight: '40px',
  },
  footer: {
    height: '40px',
    lineHeight: '40px'
  },
  evenPaper: {
    backgroundColor: theme.palette.primary.light,
  },
  divider: {
    marginTop: '20px',
    marginBottom: '20px',
  },
  popularPaper: {
    backgroundColor: theme.palette.secondary.main,
    height: '40px',
    color: '#ffffff'
  },
  nonPopularPaper: {
    height: '40px',
  },
  button: {
    marginTop: '10px'
  },
  enterpriseTypography: {
    width: '80%',
    margin:'auto',
    marginTop: '100px',
  }
}));

function Card({
  plan,
  index,
  isPopular,
  isLast,
  clickHandler
}) {
  const classes = useStyles()
  const rootPaperClasses = classNames(classes.rootPaper,
    {
      [classes.evenPaper]: ((index + 1) % 2 === 0)
    });
  const popularPaperClasses = classNames({
    [classes.popularPaper]: isPopular,
    [classes.nonPopularPaper]: !isPopular,
  })

  let cardContent = null;
  if (isLast) {
    cardContent = (
      <React.Fragment>
        <Paper
          elevation={0}
          square
          className={classes.colorPaper}
          style={{ marginBottom: '20px' }}
        >
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.header}
          >
            Enterprise
          </Typography>
        </Paper>
        <Typography
          variant="subtitle1"
          align="center"
          color="primary"
          className={classes.enterpriseTypography}
        >
          Want more than 80 qualified leads each month? 
        </Typography>
      </React.Fragment>
    )
  } else {
    cardContent = (
      <React.Fragment>
        <Paper
          elevation={0}
          square
          className={classes.colorPaper}
          style={{ marginBottom: '20px' }}
        >
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.header}
          >
            {plan.plan_name}
          </Typography>
        </Paper>
        <Typography
          align="center"
          variant="h4"
          color="primary"
        >
          ${plan.price}
        </Typography>
        <Typography
          variant="body2"
          align="center"
        >
          Per Qualified Lead
        </Typography>
        <Divider variant="middle" className={classes.divider} />
        <Typography
          variant="body2"
          align="center"
        >
          Qualified Leads Per Month
        </Typography>
        <Typography
          variant="body2"
          align="center"
        >
          {plan.q_leads_per_month}
        </Typography>
        <Divider variant="middle" className={classes.divider} />
        <Typography
          variant="body2"
          align="center"
        >
          Platform Fee Per Month
        </Typography>
        <Typography
          variant="body2"
          align="center"
        >
          ${plan.total_platform_price}
        </Typography>
        <Paper
          elevation={0}
          square
          className={classes.colorPaper}
          style={{ marginTop: '20px' }}
        >
          <Typography
            align="center"
            className={classes.footer}
            variant="h6"
          >
            ${plan.q_leads_per_month * plan.price + plan.total_platform_price}/mo
          </Typography>
        </Paper>
      </React.Fragment>
    )
  }
  return (
    <div>
      <Paper
        elevation={0}
        square
        className={rootPaperClasses}
      >
        <Paper
          elevation={0}
          square
          className={popularPaperClasses}
        >
          {isPopular && (
            <Typography
              variant="subtitle1"
              align="center"
              className={classes.header}
            >
              Most Popular!
            </Typography>
          )}
        </Paper>
        {cardContent}
      </Paper>
      <Button
        variant={isPopular ? 'contained' : 'outlined'}
        color="secondary"
        fullWidth
        className={classes.button}
        onClick={clickHandler}
      >
        {isLast ? "Get In Touch " : "Start Your Trail"}
      </Button>
    </div>
  );
}

Card.propTypes = {
  plan: PropTypes.object.isRequired,
  index: PropTypes.number,
  isPopular: PropTypes.bool,
  isLast: PropTypes.bool,
  clickHandler: PropTypes.func,
};

Card.defaultProps= {
  index: 0,
  isPopular: false,
  isLast: true,
  clickHandler: () => {},
};

export default Card;