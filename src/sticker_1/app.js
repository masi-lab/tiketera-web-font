
import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Button, Input } from 'reactstrap';

import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

import './app.css';



class Sticker_1 extends React.Component {
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
      <div>
        <InputGroup className="boton_cabecera">
          <Boton_desplegable />
          <Input placeholder="buscar" />
          <Button addonType="append">X</Button>
      </InputGroup>

          
        <div>
          <Lista_sticker/>
        </div>
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

class Tarjeta extends React.Component {
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

class Lista_sticker extends React.Component {
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
        <h1>Sticker 1</h1>
        <i>Total: {this.state.data.length}</i>
      </header>
      <div>
        {
          this.state.data.map(function (tike, i) {
            console.log(tike, i);
            return (
              <Tarjeta key={i}
                nombre={tike.codigo}
                descripcion={tike.descripcion}>
              </Tarjeta>
            )
          })
        }
      </div>
    </div>)
  }
};


export default Sticker_1;