import React from 'react';
import PropTypes from "prop-types";

function Beer(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenBeerClicked(props.id)}> 
        <h3>Brand: {props.brand}</h3>
        <h3>Alcohol Content: {props.alcoholContent}</h3>
        <h3>Price: {props.price}</h3>
        <h3>Pints left in a keg: {props.keg}</h3>
      </div>
    </React.Fragment>
  )
}

Beer.propTypes = {
  brand: PropTypes.string,
  alcoholContent: PropTypes.number,
  price: PropTypes.number,
  keg: PropTypes.number,
  id: PropTypes.string,
  whenBeerClicked: PropTypes.func
}

export default Beer;