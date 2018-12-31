//https://coreui.io/react/demo/#/base/navs

import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './App.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Sticker_1 from './sticker_1/app';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Example/>
        </div>
      </div>
    );
  }
}


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Sticker Comun
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Sticker solo
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Sticker doble
            </NavLink>
          </NavItem>

        </Nav>
        <TabContent activeTab={this.state.activeTab}>

          <TabPane tabId="1">
              <div>
                <Sticker_1/>
              </div> 
          </TabPane>

          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <h4>Tab 2 Contents</h4>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <h4>Tab 3 Contents</h4>
              </Col>
            </Row>
          </TabPane>

        </TabContent>
      </div>
    );
  }
}


//--------------------------------------------------------------------------------------------------



export { App }