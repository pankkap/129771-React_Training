import React from "react";
import { connect } from "react-redux";
import { buyCake, buildCake } from "./cake/cakeActions";

function CakeStore_1(props) {
  return (
    <div>
      <h1>Cake Store Counter-1</h1>
      <h2>Number of Cakes Available: {props.cakes}</h2>
      <button className="btn btn-primary m-3" onClick={props.buyCake}>
        Buy Cake
      </button>
      <button className="btn btn-success m-3" onClick={props.buildCake}>
        Create Cake
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cakes: state.cake.numberOfCakes,
  };
};

const mapDisptachToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    buildCake: () => dispatch(buildCake()),
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(CakeStore_1);
