import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../actions/Actions';

function ProtectedRoute({ loggedInStatus, component: Component, ...rest }) {
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={props => {
        if (loggedInStatus[0]) {
          // eslint-disable-next-line react/jsx-props-no-spreading
          return <Component {...props} />;
        }
        return (
          <Redirect
            to={{
              pathname: '/checkIn',
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
}

function mapStateToProps(state) {
  return {
    loggedInStatus: state.cliente,
  };
}

ProtectedRoute.propTypes = {
  loggedInStatus: PropTypes.instanceOf(Array).isRequired,
  checkLogin: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  component: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(ProtectedRoute);
