//
// Start kiosk page
//
import React from 'react';
import { Query } from 'react-apollo';
import { Row, Col, Card } from 'reactstrap';
import gql from 'graphql-tag';
import OpponentSelect from './OpponentSelect';
import RunningTimerPre from './RunningTimerPre';
import Running from './Running';
import RunningTimerPost from './RunningTimerPost';
import AppState from '../App/AppState';

const GET_RACE_STATE_LOCAL = gql`
  query {
    activeRun @client {
      opponent
      opponentName
      opponentTime
      runId
      status
      name
      color
      icon
      gender
      ageGroup
      favoriteActivity
      handedness
      height
      state
      zipCode
      latitude
      longitude
      siblings
    }
  }
`;

class StartPageDev extends React.Component {
  render() {
    return (
      <Query query={GET_RACE_STATE_LOCAL}>
        {({ loading, error, data: { activeRun } }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          const persona = {
            name: activeRun.name,
            color: activeRun.color,
            icon: activeRun.icon,
            gender: activeRun.gender,
            ageGroup: activeRun.ageGroup,
            favoriteActivity: activeRun.favoriteActivity,
            handedness: activeRun.handedness,
            siblings: activeRun.siblings,
            height: activeRun.height,
            state: activeRun.state,
            zipCode: activeRun.zipCode,
            latitude: activeRun.latitude,
            longitude: activeRun.longitude,
          };

          return (
            <Row>

              <Col xs={12} sm={6} lg={4}>
                <Card body>
                  <Row>
                    <Col>
                      <h1>Mocked signup data</h1>
                      <p>Simulate sign-ups with generated random data</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <dl className="row">
                        <dt className="col-sm-4">Name</dt>
                        <dd className="col-sm-8">{persona.name}</dd>
                        <dt className="col-sm-4">Color</dt>
                        <dd className="col-sm-8">{persona.color}</dd>
                        <dt className="col-sm-4">Icon</dt>
                        <dd className="col-sm-8">{persona.icon}</dd>
                        <dt className="col-sm-4">Gender</dt>
                        <dd className="col-sm-8">{persona.gender}</dd>
                        <dt className="col-sm-4">Age group</dt>
                        <dd className="col-sm-8">{persona.ageGroup}</dd>
                        <dt className="col-sm-4">Favorite activity</dt>
                        <dd className="col-sm-8">{persona.favoriteActivity}</dd>
                        <dt className="col-sm-4">Handedness</dt>
                        <dd className="col-sm-8">{persona.handedness}</dd>
                        <dt className="col-sm-4">Siblings</dt>
                        <dd className="col-sm-8">{persona.siblings}</dd>
                        <dt className="col-sm-4">Height</dt>
                        <dd className="col-sm-8">{persona.height}</dd>
                        <dt className="col-sm-4">State</dt>
                        <dd className="col-sm-8">{persona.state}</dd>
                        <dt className="col-sm-4">Zip Code</dt>
                        <dd className="col-sm-8">{persona.zipCode}</dd>
                        <dt className="col-sm-4">Latitude</dt>
                        <dd className="col-sm-8">{persona.latitude}</dd>
                        <dt className="col-sm-4">Longitude</dt>
                        <dd className="col-sm-8">{persona.longitude}</dd>
                      </dl>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col xs={12} sm={6} lg={4}>
                <AppState activeRun={activeRun} />
              </Col>
              <Col xs={12} sm={6} lg={4}>
                {{
                  opponentSelect: <OpponentSelect />,
                  runTimerPre: <RunningTimerPre
                    persona={persona}
                    opponent={activeRun.opponent}
                    opponentName={activeRun.opponentName}
                    opponentTime={activeRun.opponentTime}
                  />,
                  running: <Running />,
                  postRunTimer: <RunningTimerPost />,
                  falseStart: <div>False start</div>,
                }[activeRun.status]}
              </Col>

            </Row>
          );
        }}
      </Query>
    );
  }
}

export default StartPageDev;
