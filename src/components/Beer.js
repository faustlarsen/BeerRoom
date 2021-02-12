import React from 'react';
import Beer from './Beer';
import PropTypes from "prop-types";

function Beer(props) {
    return (
        <React.Fragment>
           <div onClick = {() => props.whenBeerClicked(props.id)}> 
             <h3>Name: {beer.name}</h3>
             <h3>Brand: {beer.brand}</h3>
             <h3>Flavor: {beer.flavor}</h3>
             <h3>Price: {beer.price}</h3>
             <h3>Quantity: {beer.quantity}</h3>
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