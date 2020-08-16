import React from 'react';
import PropTypes from 'prop-types';

import style from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button
          key={option}
          className={style.btn}
          type="button"
          onClick={() => onLeaveFeedback(option)}
          name={option}
        >
          {option}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
