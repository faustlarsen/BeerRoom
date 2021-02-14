import React from 'react';
import PropTypes from "prop-types";

function Beer(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenBeerClicked(props.id)}> 
        <div className="text-center text-white" style={{fontSize: 24, color: "#C16E70"}}>
          <h5 style={{color: '#010104'}}>Brand: {props.brand}</h5>
          <h5 style={{color: '#010104'}}>Alcohol Content: {props.alcoholContent}</h5>
          <h5 style={{color: '#010104'}}>Price: {props.price}</h5>
          <h5 style={{color: '#010104'}}>Pints left: {props.keg}</h5>
        </div>
      </div>
    </React.Fragment>
  )
}

Beer.propTypes = {
  brand: PropTypes.string.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  keg: PropTypes.number,
  id: PropTypes.string,
  whenBeerClicked: PropTypes.func
}

export default Beer;