import React from "react";
import PropTypes from "prop-types";

function BeerDetails(props) {
  const {beer, onClickingDelete } = props;
  return (
  <React.Fragment>
    <h3>Details</h3>
    <h3>Name: {beer.name}</h3>
    <h4>Brand: {beer.brand}</h4>
    <h4>Flavor: {beer.flavor}</h4>
    <h4>Price: {beer.price}</h4>
    <h4>Quantity: {beer.quantity}</h4>
    <button onClick={() => onClickingDelete(beer.id)}>Delete</button>
  </React.Fragment>
  )
}

BeerDetails.protoTypes = {
  beer: PropTypes.object,
  onClickingDelete: PropTypes.func,
}

export default BeerDetails;