
import React from 'react';


import { withStyles } from '@material-ui/core/styles';

//app bar
import App_bar from './app_bar.js'
import { withTheme } from '@material-ui/core/styles';


import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

import {Card, CardHeader, CardMedia, CardContent, CardActions} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {IconButton} from '@material-ui/core';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import './app.css';

const styles = theme => ({
  absolute: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  },
  root_styles: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: 500,
    height: 450,
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

    this.lista_sticker = React.createRef();
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }


  buscar = async (event, text_value) =>{
    //console.log(event);
    //console.log(text_value);
    //console.log(this.lista_sticker.current.fetchAsync);
    this.lista_sticker.current.fetchAsync(text_value);
  }

  
  render() {
    //console.log(this.props.theme);
    return (
      <div>
        <div className="div_1">
          <App_bar 
            buscar = {this.buscar} >
          </App_bar>
        </div> 
        <div className="" >
          <div className={this.props.classes.root_styles}>
            <GridList cellHeight={200} spacing={1} >
              <Lista_sticker ref={this.lista_sticker} />
            </GridList>
          </div>
        </div>

        <Tooltip title="Add" aria-label="Add" className={''} >
          <Fab /* color="secondary" */ className={this.props.classes.absolute}>
            <AddIcon />
          </Fab>
        </Tooltip>
      </div>

    );
  }
}));


const styles_Tarjeta = theme => ({
  card: {
    maxWidth: 200,
  },
});

const Tarjeta = withTheme()(withStyles(styles_Tarjeta)( class  extends React.Component {
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
        <Card className={this.props.classes.card}>
          <CardHeader
            title={this.props.nombre}
          />
          <CardContent>
            <Typography component="p">
             {this.props.descripcion}
            </Typography>
          </CardContent>
          
          <CardActions disableActionSpacing>
            <IconButton aria-label="Editar">
              
            </IconButton>
            <IconButton aria-label="Borrar">
              
            </IconButton>
          </CardActions>

        </Card>
    )
  }
}));

const styles_Lista_sticker = theme => ({
 

});

const Lista_sticker = withTheme()(withStyles(styles_Lista_sticker)( class  extends React.Component {
  constructor(props) {
    super(props)
    this.fetchAsync();
  };

  state = {
    data: []
  };

  async fetchAsync(text_value='') {
    let codigo = '';
    let descripcion = '';
    let final = [];
    
    if(text_value===''){
      let response = await fetch(`http://localhost:8080/api/sticker/find?`);
      let data = await response.json();
      final = data.data;
      //console.log(final);
    }else{

      codigo = text_value;
      descripcion = '';
      // await response of fetch call
      let response = await fetch(`http://localhost:8080/api/sticker/find?codigo=${codigo}&descripcion=${descripcion}`);
      // only proceed once promise is resolved
      //console.log(response);
      let data = await response.json();
      final = data.data;

      codigo = '';
      descripcion = text_value;
      let response2 = await fetch(`http://localhost:8080/api/sticker/find?codigo=${codigo}&descripcion=${descripcion}`);
      let data2 = await response2.json();
      let var_control = false;

      data2.data.map(function (tike, i) {
        var_control = false;
        final.map(function(item,x){
          if(tike._id === item._id){var_control=true;}
        })
        if(!var_control){final.push(tike);}
      });
    }

    this.setState({ data: final })
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
            //console.log(tike, i);
            return (
              <GridListTile  key={i} > 
                <Tarjeta 
                  nombre={tike.codigo}
                  descripcion={tike.descripcion}>
                </Tarjeta>
              </GridListTile>
            )
          })
        }
      </div>
    </div>)
  }
}));


export default Sticker_1;