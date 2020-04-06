import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect, Router} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute} from "../../constants.js";
import {AuthorizationStatus} from "../../reducer/reducer.js";
import history from "../../history.js";

const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Router history={history}>
      <Route
        path={path}
        exact={exact}
        render={() => {
          return (
            authorizationStatus === AuthorizationStatus.AUTH
              ? render()
              : <Redirect to={AppRoute.SIGN_IN} />
          );
        }}
      />
    </Router>
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});


export {PrivateRoute};
export default connect(mapToProps)(PrivateRoute);
