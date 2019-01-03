
import React from 'react';


import { withStyles } from '@material-ui/core/styles';

//app bar
import App_bar from './app_bar.js'
import { withTheme } from '@material-ui/core/styles';


import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

import './app.css';

const styles = theme => ({
  absolute: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  },
});


const Sticker_1 = withTheme()(withStyles(styles)( class  extends React.Component {
  constructor(props) {
    super(props);
 
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
    //console.log( props.theme);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    //console.log(this.props.theme);
    return (
      <div>
        <div className="div_1">
          <CustomizedInputBase/>
        </div>
        <div className="">
          <Lista_sticker/>
        </div>

        <Tooltip title="Add" aria-label="Add" className={''}>
          <Fab /* color="secondary" */ className={this.props.classes.absolute}>
            <AddIcon />
          </Fab>
        </Tooltip>
      </div>

    );
  }
}));



class CustomizedInputBase extends React.Component {

  render() {
    return(
      <App_bar/>
  )};
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
    //this.fetchAsync();
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