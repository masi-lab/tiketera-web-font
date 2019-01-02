
import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

//app bar
import SearchAppBar from './app_bar.js'

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
        <div className="div_1">
          <CustomizedInputBase/>
        </div>
        <div className="">
          <Lista_sticker/>
        </div>
      </div>

    );
  }
}

class CustomizedInputBase extends React.Component {

  render() {
    return(
    <Paper className={"root"} elevation={1}>
      <IconButton className={"iconButton"} aria-label="Menu">
        <MenuIcon width="100" />
      </IconButton>
      <InputBase className={"input"} style={{width:'80%'}} placeholder="Buscar ..." />
      <IconButton className={"iconButton"} aria-label="Search">
        <SearchIcon />
      </IconButton>
      <SearchAppBar/>
      
      <IconButton color="primary" className={"iconButton"} aria-label="Directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
  )};
}//<Divider className={"divider"} />


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