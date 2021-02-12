import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from "prop-types";

function EditBeerForm (props) {
  const { beer } = props;

  function handleEditBeerFormSubmission(event) {
    event.preventDefault();
    props.onEditBeer({
      name: event.target.name.value,
      brand: event.target.brand.value,
      flavor: event.target.flavor.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      id: beer.id});
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditBeerFormSubmission}
        buttonText="UPDATE" />
    </React.Fragment>
  );
}

EditBeerForm.propTypes = {
  beer: PropTypes.object,
  onEditBeer: PropTypes.func
};

export default EditBeerForm;