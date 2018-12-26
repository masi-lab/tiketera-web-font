//https://coreui.io/react/demo/#/base/navs

import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './App.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Boton_desplegable/>
        </div> 
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
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row>
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



class Boton_desplegable extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Opciones</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          
        </DropdownMenu>
      </Dropdown>
    );
  }
  /*
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
  */
}

//--------------------------------------------------------------------------------------------------

class Comida extends React.Component {
  constructor(props) {
    super(props)
    this.state = { like: Boolean(this.props.like) };
    this.handleLike = this.handleLike.bind(this);
  };

  handleLike(event) {
    this.setState({ like: !this.state.like })
    //console.log(event)
    //console.log(this.state)
  }
  render() {
    return (
      <div className="comida">
        <h1 className="bg-success">{this.props.nombre}</h1>
        <p className="bg-info">
         <i>{this.props.descripcion}</i>
        </p>
        <div>
          <br />
        </div>
      </div>
    )
  }
};

class ListaComida extends React.Component {
  state = {
    comidas: [
      'Tacos',
      'Paella',
      'Ceviche'
    ],
    data: []
  };

  constructor(props) {
    super(props)
    this.fetchAsync();
  };

  async fetchAsync() {
    // await response of fetch call
    let response = await fetch('http://localhost:8080/api/sticker/find?');
    // only proceed once promise is resolved
    //console.log(response);
    let data = await response.json();

    this.setState({ data: data.data })
  }

  render() {
    return (<div className="centerBlock">
      <header>
        <h1>Ticket</h1>
        <i>Total: {this.state.data.length}</i>
      </header>
      <div>
        {
          this.state.data.map(function (tike, i) {
            console.log(tike, i);
            return (
              <Comida key={i}
                nombre={tike.codigo}
                descripcion={tike.descripcion}>
              </Comida>
            )
          })
        }
      </div>
    </div>)
  }
};

export { ListaComida, App }
