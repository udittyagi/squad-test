import React from 'react';
import PropTypes from 'prop-types';
import classes from './backdrop.module.css';

const Backdrop = ({ open, click, zIndex }) => {
  const escKeyDownHandler = (event) => {
    if (event.keyCode === 27) {
      click();
    }
  };

  return (
    <div
      className={open ? classes.backdrop : classes.noBackdrop}
      onClick={click}
      role="presentation"
      onKeyDown={escKeyDownHandler}
      style={zIndex ? { zIndex: +zIndex - 50 } : null}
    >
    </div>
  );
};

Backdrop.propTypes = {
  open: PropTypes.bool.isRequired,
  click: PropTypes.func,
  zIndex: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Backdrop.defaultProps = {
  zIndex: 0,
  click: () => {},
};
export default Backdrop;
