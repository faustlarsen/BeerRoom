import React from 'react';
import Beer from './Beer';
import PropTypes from "prop-types";

function BeerList(props) {
  return (
    <React.Fragment>
      {/* <h1 style={{color: "#ffa645"}}>Beer List</h1> */}

        <div class="container">
          <div className="p-4 w-50 mx-auto" >
          {props.beerList.map((beer) =>
            <div class="col mb-4">
            <div className = "card shadow-lg text-canter" style={{backgroundColor: "#ffa645" }}>
            <Beer 
              whenBeerClicked = {props.onBeerSelection} 
              brand={beer.brand}
              alcoholContent={beer.alcoholContent}
              price={beer.price}
              keg={parseInt(beer.keg)}
              id={beer.id} />
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

BeerList.propTypes = {
  beerList: PropTypes.array,
  onBeerSelection: PropTypes.func
}

export default BeerList;


