import { Nav, Button } from 'reactstrap';
import React from 'react';

function AppNav(props) {
  const appNavProps = props;

  return (
    <Nav className="justify-content-center">
      <Button className="nav-button" onClick={appNavProps.passedFunction('cns')}>All</Button>
      <Button className="nav-button">CNS</Button>
      <Button className="nav-button">UCI</Button>
      <Button className="nav-button">COSI</Button>
      <Button className="nav-button">SMM</Button>
    </Nav>
  );
}

export default AppNav;