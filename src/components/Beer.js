import React from 'react';
import PropTypes from "prop-types";

function Beer(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenBeerClicked(props.id)}> 
        <h3>Name: {props.name}</h3>
        <h3>Brand: {props.brand}</h3>
        <h3>Flavor: {props.flavor}</h3>
        <h3>Price: {props.price}</h3>
        <h3>Quantity: {props.quantity}</h3>
      </div>
    </React.Fragment>
  )
}

Beer.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  flavor: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenBeerClicked: PropTypes.func
}

export default Beer;