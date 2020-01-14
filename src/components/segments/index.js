import React, { useState } from 'react';
import {
  makeStyles,
  Tabs,
  Tab,
  Paper,
  useMediaQuery
} from '@material-ui/core';
import classNames from 'classnames';
import { data } from '../../utils';
import SegmentPanel from '../segmentPanel';

const useStyles = makeStyles(theme => ({
  tabSelected: {
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff !important',
  },
  tabRoot: {
    color: theme.palette.primary.main,
    fontSize: '12px',
    fontWeight: 'bold',
  },
  tabsRoot: {
    backgroundColor: theme.palette.primary.light,
    width: '100%',
  },
  sideTab: {
    // borderRadius: '10px'
  },
  centerTab: {
    borderLeft: '0.5px solid #a6a6a6',
    borderRight: '0.5px solid #a6a6a6'
  },
  paperTab: {
    margin: 'auto',
    marginTop: '20px',
    marginBottom: '30px',
  },
  paperBig: {
    width: '80%'
  },
  paperSmall: {
    width: '100%'
  },
  paperSegment: {
    margin: 'auto'
  }
}))

function Segments() {
  const [value, setValue] = useState(() => data.length ? 2 : 0);

  const classes = useStyles();

  const matches = useMediaQuery('(max-width:850px)');
  const matchesBg = useMediaQuery('(max-width:950px)');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperTabClasses = classNames(classes.paperTab, {
    [classes.paperSmall]: matchesBg,
    [classes.paperBig]: !matchesBg,
  })

  const paperSegmentClasses = classNames(classes.paperSegment, {
    [classes.paperSmall]: matchesBg,
    [classes.paperBig]: !matchesBg,
  })

  return (
    <div className={classes.root}>
      <Paper
        elevation={1}
        className={paperTabClasses}
      >
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          centered
          variant={matches ? "scrollable" : "fullWidth"}
          scrollButtons="on"
          classes={{
            root: classes.tabsRoot,
          }}
        >
          {
            data.map((item, index) => (
              <Tab
                key={item.id}
                classes={{
                  selected: classes.tabSelected,
                  root: classes.tabRoot,
                }}
                className={(index === 0 || index === data.length - 1) ?
                  classes.sideTab : classes.centerTab}
                label={item.avg_home_price} />
            ))
          }
        </Tabs>
      </Paper>
      {
        data.map((item, index) => (
          <Paper
            key={item.id}
            className={paperSegmentClasses}
          >
            <SegmentPanel
              key={item.id}
              value={value}
              index={index}
              plans={item.plans}
            />
          </Paper>
        ))
      }
    </div>
  );
}

export default Segments;
