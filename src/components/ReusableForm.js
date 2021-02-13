import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
    <form onSubmit={props.formSubmissionHandler}>
        <input class="form-control"
          type='text'
          name='brand'
          placeholder='Brand' 
        />
        <input class="form-control"
          type='number'
          name='alcoholContent'
          placeholder='Alcohol Content' 
        />
        <input class="form-control"
          type='number'
          min='0'
          name='price'
          placeholder='Price' 
        />
        <button type='submit'>{props.buttonText}</button>
      </form> 
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;