import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
    <form onSubmit={props.formSubmissionHandler}>
        <input class="form-control"
          type='text'
          name='name'
          placeholder='Name' 
        />
        <input class="form-control"
          type='text'
          name='brand'
          placeholder='Brand' 
        />
        <input class="form-control"
          type='text'
          name='flavor'
          placeholder='Flavor' 
        />
        <input class="form-control"
          type='number'
          min='0'
          name='price'
          placeholder='Price' 
        />
        <input class="form-control" 
          type='number'
          min='0'
          name='quantity'
          placeholder='Quantity' 
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