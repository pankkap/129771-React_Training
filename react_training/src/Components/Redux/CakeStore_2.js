import React from "react";
import { connect } from "react-redux";
import {buyCake} from "./cake/cakeActions";

function CakeStore_2(props) {
  return (
    <div>
      <h1 className="text-danger">Cake Store Counter-2</h1>
      <h2>Number of Cakes Available: {props.cakes}</h2>
      <button className="btn btn-primary m-3" onClick={props.buyCake}>
        Buy Cake
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
    buyCake: () => {
      dispatch(buyCake());
    },
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(CakeStore_2);
