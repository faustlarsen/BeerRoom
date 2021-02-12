import React from "react";
import PropTypes from "prop-types";

function BeerDetails(props) {
  const {beer, onClickingDelete } = props;
  return (
  <React.Fragment>
    <h3>{beer.name} Details</h3>
    <h4>{beer.brand}</h4>
    <h4>{beer.flavor}</h4>
    <h4>{beer.price}</h4>
    <h4>{beer.quantity}</h4>
    <button onClick={() => onClickingDelete(beer.id)}>Delete</button>
  </React.Fragment>
  )
}

BeerDetails.protoTypes = {
  beer: PropTypes.object,
  onClickingDelete: PropTypes.func,
}

export default BeerDetails;