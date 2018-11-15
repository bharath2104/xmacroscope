import PropTypes from 'prop-types';
import React from 'react';
import { Col } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Timer from './Timer';

const UPDATE_RUN_LOCAL = gql`
  mutation updateRun(
  $status: String!
  ) {
    updateRun(
      runId: null,
      status: $status,
      name: null,
      color: null,
      icon: null,
      ageGroup: null,
      favoriteActivity: null,
      height: null,
      zipCode: null,
      latitude: null,
      longitude: null,
      state: null,
    ) @client
  }
`;

function RunningTimerTimeout(props) {
  const { runTimeout } = props;
  return (
    <Mutation
      mutation={UPDATE_RUN_LOCAL}
      variables={{
        status: 'postRunTimer',
      }}
    >
      {updateRun => (
        <Col
          xs={12}
          className="p-5 text-center"
        >
          <Timer
            completion={() => {
              updateRun();
            }}
            direction="down"
            start={runTimeout}
            end={0}
            displayTimer={false}
          />
        </Col>
      )}
    </Mutation>
  );
}

RunningTimerTimeout.propTypes = {
  runTimeout: PropTypes.number.isRequired,
};

export default RunningTimerTimeout;

