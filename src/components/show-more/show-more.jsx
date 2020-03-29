import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {changeFilmsCount} from "../../reducer.js";

const ShowMore = ({dispatch}) => {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => dispatch(changeFilmsCount(8))}>Show more</button>
    </div>
  );
};

ShowMore.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(ShowMore);
