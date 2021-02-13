import React from "react";
import PropTypes from "prop-types";

function BeerDetails(props) {
  const {beer, onClickingDelete } = props;
  return (
  <React.Fragment>
    <h3>Details</h3>
    <h4>Brand: {beer.brand}</h4>
    <h4>Alcohol Content: {beer.alcoholContent}</h4>
    <h4>Price: {beer.price}</h4>

    {beer.keg === 0 ?
      <h3>Out of Stock</h3> : <h3>Pints left: {beer.keg}</h3>
    }
    {beer.keg > 0 ? <button onClick={props.onClickingBuy}>Buy</button> : null}
    <button onClick={() => onClickingDelete(beer.id)}>Delete</button>
    <button onClick={props.onClickingUpdate}>Update</button>
  </React.Fragment>
  );
}

BeerDetails.protoTypes = {
  beer: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingUpdate: PropTypes.func,
  onClickingBuy: PropTypes.func,
}

export default BeerDetails;