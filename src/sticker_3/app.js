
import React from 'react';


import { withStyles } from '@material-ui/core/styles';

//app bar
import App_bar from './app_bar.js'
import { withTheme } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

import {Card, CardHeader, CardContent, CardActions} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {IconButton} from '@material-ui/core';

import Grid from '@material-ui/core/Grid';

import './app.css';

import Dialogo from './dialogo.js';


//Dialog
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import Print from '@material-ui/icons/Print';


const styles = theme => ({
  absolute: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  },
  root_styles: {
    display: 'flex',
    flexWrap: 'wrap',
    //justifyContent: 'space-around',
    overflow: 'hidden',
    
  },
  gridList: {
    width: 500,
    height: 450,
  },
  div_principal:{
    //position: 'relative',
  },
  div_app_bar:{
    height: 80,
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
    
    this.state = {
      open: false,
    };
  }

  

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }


  buscar = async (event, text_value) => {
    //console.log(event);
    //console.log(text_value);
    //console.log(this.lista_sticker);
    this.lista_sticker.fetchAsync(text_value);
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  referencia_form= React.createRef();
  agregar_nuevo_elemnto = (event) =>{
    event.preventDefault();
    this.handleClose();
    this.fetchAsync_print_save(this.referencia_form);
  }

   searchParams = (params) => { return Object.keys(params).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
   }).join('&')};

  fetchAsync_print_save = async (form) => {
    let data_procesada = {'descripcion': form.descripcion.value, 'quantity':form.quantity.value}
    data_procesada = this.searchParams(data_procesada);
    
    //console.log(data_procesada);
    
    let response = await fetch(`http://localhost:8080/api/sticker3/save_print`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: data_procesada || null,
    });
    
    //console.log(response);

    
    let status = response.status;
    let data = await response.json();

    if(status === 200 && data.data.descripcion){
      this.dialogo.titulo = 'Imprimir';
      this.dialogo.mensaje = 'Se imprimio y guardo un nuevo elemento con exito';
      this.dialogo.handleClickOpen();
      this.lista_sticker.fetchAsync();
    }else{
      this.dialogo.titulo = 'Error';
      this.dialogo.mensaje = 'Error al agregar un nuevo elemento';
      this.dialogo.handleClickOpen();
      this.lista_sticker.fetchAsync();
    }
    //console.log(status);
    //console.log(data);
  }

  
  render() {
    return (
      <div className={this.props.classes.div_principal}>
        <div className={this.props.classes.div_app_bar}>
          <App_bar 
            buscar = {this.buscar} >
          </App_bar>
        </div> 
        <div className="" >
          <div className={this.props.classes.root_styles}>
              <Lista_sticker onRef={ref => (this.lista_sticker = ref)} />
          </div>
        </div>

        <Tooltip title="Print" aria-label="Print" onClick={this.handleClickOpen} className={this.props.classes.absolute}>
          <Fab /* color="secondary" */ >
            <Print />
          </Fab>
        </Tooltip>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth
        >
          <DialogTitle id="form-dialog-title">Imprimir sticker 3</DialogTitle>
          <DialogContent>
            <DialogContentText >
              Complete los campos e imprima formato de sticker 3
            </DialogContentText>
            <form method="post" ref={e => this.referencia_form = e} onSubmit={this.agregar_nuevo_elemnto}>
              <List >
                <ListItem>
                  <TextField
                    margin="normal"
                    id="descripcion"
                    label="descripcion"
                    type="text"
                    fullWidth
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    margin="normal"
                    id="quantity"
                    //label="cantidad"
                    value="1"
                    type="text"
                    fullWidth
                  />
                </ListItem>
              </List>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancelar
                </Button>
                <Button type="submit" color="primary">
                  Imprimir y guardar
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>

        <Dialogo ref={e => this.dialogo = e} />
      </div>
    );
  }
}));


const styles_Tarjeta = theme => ({
  card: {
    //maxWidth: 350,
    //background: theme.palette.primary.main,//'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  CardActions:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    //paddingLeft: theme.spacing.unit,
    width:'100%',
  },
  descripcion:{
    height: '70px',
    overflow: 'auto',
  },
  boton_imprimir:{
    width:'50px',
  },
});


const Tarjeta = withTheme()(withStyles(styles_Tarjeta)( class  extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      open_borrar: false,
      open_print: false,
    };
  };

  handleClick_Delete = (event) => {
  }
  handleClickOpenDelete = () => {
    this.setState({ open_borrar: true });
  };
  handleCloseDelete = () => {
    this.setState({ open_borrar: false });
  };
  handleClick_Delete = (event) => {
    this.handleClickOpenDelete();
  }
  delete_elemnto = (event) =>{
    event.preventDefault()
    this.fetchAsync_delet(this.referencia_form_borrar);
    this.handleCloseDelete();
  }
  fetchAsync_delet = async (form) => {
    let response = await fetch(`http://localhost:8080/api/sticker3/delete?_id=${this.props.id}`);
    let status = response.status;
    //let data = await response.json();

    //console.log(status);
    //console.log(data);
    if(status === 200){
      this.dialogo.titulo = 'Eliminar';
      this.dialogo.mensaje = 'Se elimino un elemento con exito';
      this.dialogo.handleClickOpen();
      this.props.lista_sticker.fetchAsync();
    }else{
      this.dialogo.titulo = 'Error';
      this.dialogo.mensaje = 'Error al eliminar un elemento';
      this.dialogo.handleClickOpen();
      this.props.lista_sticker.fetchAsync();
    }
  }

  handleClickOpenPrint = () => {
    this.setState({ open_print: true });
  };
  handleClosePrint = () => {
    this.setState({ open_print: false });
  };
  handleClick_Print = (event) => {
    this.handleClickOpenPrint();
  }
  print_elemnto = (event) =>{
    event.preventDefault()
    this.fetchAsync_print(this.referencia_form_print);
    this.handleClosePrint();
  }
  fetchAsync_print = async (form) => {
    //console.log(form.cantidad.value);
    
    let response = await fetch(`http://localhost:8080/api/sticker3/print?quantity=${form.cantidad.value}&descripcion=${form.descripcion.value}`);
    let status = response.status;
    let data = await response.json();

    //console.log(data.success);
    if(status === 200 && data.success){
      this.dialogo.titulo = 'Imprimir';
      this.dialogo.mensaje = 'Se imprimio un elemento con exito';
      this.dialogo.handleClickOpen();
      this.props.lista_sticker.fetchAsync();
    }else{
      this.dialogo.titulo = 'Error';
      this.dialogo.mensaje = 'Error al imprimir un elemento';
      this.dialogo.handleClickOpen();
      this.props.lista_sticker.fetchAsync();
    }
  }

  render() {
    return (
      <div>  
        <Card className={this.props.classes.card} >
          <CardContent>
            <Typography component="p" className={this.props.classes.descripcion}> 
              {this.props.descripcion}
            </Typography>
          </CardContent>
          
          <CardActions  >
            <div className={this.props.classes.CardActions}>
              <Tooltip title="Eliminar" >
                <IconButton aria-label="Borrar" onClick={this.handleClick_Delete}>
                  <Delete />
                </IconButton>
              </Tooltip>
              <Tooltip title="Imprimir">
                <IconButton aria-label="Imprimir" onClick={this.handleClick_Print}>
                  <Print />
                </IconButton>
              </Tooltip>
            </div>
          </CardActions>
        </Card>

        <Dialog
          open={this.state.open_borrar}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth
          >
          <DialogTitle id="">Eliminar</DialogTitle>
          <DialogContent>
            <DialogContentText >
              Eliminar un elemento
            </DialogContentText>
            <form method="post" ref={e => this.referencia_form_borrar = e} onSubmit={this.delete_elemnto}>
              <List >
                <ListItem>
                  <label>
                    {this.props.descripcion}
                  </label>
                </ListItem>
              </List>
              <DialogActions>
                <Button onClick={this.handleCloseDelete} color="primary">
                  Cancelar
                </Button>
                <Button type="submit" color="primary">
                  Eliminar
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>

        <Dialog
          open={this.state.open_print}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth
          >
          <DialogTitle id="">Print</DialogTitle>
          <DialogContent>
            <DialogContentText >
              Desea imprimir ?
            </DialogContentText>
            <form method="post" ref={e => this.referencia_form_print = e} onSubmit={this.print_elemnto}>
              <List >
                <ListItem>
                  <TextField
                    margin="normal"
                    id="descripcion"
                    label="descripcion"
                    type="text"
                    fullWidth
                    defaultValue={this.props.descripcion}
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    autoFocus
                    margin="normal"
                    id="cantidad"
                    label="Cantidad"
                    type="text"
                    fullWidth
                    defaultValue={1}
                    className={this.props.classes.boton_imprimir}
                  />
                </ListItem>
              </List>
              <DialogActions>
                <Button onClick={this.handleClosePrint} color="primary">
                  Cancelar
                </Button>
                <Button type="submit" color="primary">
                  Imprimir
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>

        <Dialogo ref={e => this.dialogo = e} />
      </div>
    )
  }
}));

const styles_Lista_sticker = theme => ({
  root: {
    //flexGrow: 1,
    overflow: 'hidden',
  },
  grid:{
    minWidth: 190,
    maxWidth: 200,
    //width: 350,
  },
  centerBlockList:{
    width: '100%',
  },
  grid_container:{
    padding: '10px',
    //height: '400px',
    display: 'flex',
    flexWrap: 'wrap',
    //overflow: 'auto',
  },

});

let Lista_sticker = withTheme()(withStyles(styles_Lista_sticker)( class  extends React.Component {
  constructor(props) {
    super(props)
    this.fetchAsync();
  };

  componentDidMount() {
    this.props.onRef(this);
    //console.log(this.props);
  }
  componentWillUnmount() {
    this.props.onRef(undefined)
  }

  state = {
    data: [],
  };

  fetchAsync = async (text_value='') => {
    let descripcion = '';
    let final = [];
    
    if(text_value===''){
      let response = await fetch(`http://localhost:8080/api/sticker3/find?`);
      let data = await response.json();
      final = data.data;
      
    }else{

      descripcion = text_value;
      let response2 = await fetch(`http://localhost:8080/api/sticker3/find?descripcion=${descripcion}`);
      let data2 = await response2.json();
      let var_control = false;

      data2.data.map(function (tike, i) {
        var_control = false;
        final.map(function(item,x){
          if(tike._id === item._id){var_control=true;}
          return ''; // Esto lo pongo para no me tire un warning
        })
        if(!var_control){final.push(tike);}
        return ''; // Esto lo pongo para no me tire un warning
      });
    }

    //console.log(final);

    this.setState({ data: final })
  }

  //editar = (algo)=>{console.log(algo)}

  render() {
    return (<div className= {this.props.classes.centerBlockList}>
      <header>
        <h1>Sticker 3</h1>
        <i>Total: {this.state.data.length}</i>
      </header>
      <div className={this.props.classes.root}>
        <Grid  container spacing={16}  alignContent="center" className={this.props.classes.grid_container}>  
          {
            this.state.data.map((tike, i) => {
              //console.log(tike, i);
              return (
                <Grid item xs={2} key={i} className={this.props.classes.grid}> 
                  <Tarjeta 
                    //editar={this.editar('probando')}
                    descripcion={tike.descripcion}
                    id={tike._id}
                    lista_sticker={this}
                  >
                  </Tarjeta>
                </Grid>
              )
            })
          }
        </Grid>
      </div>
    </div>)
  }
}));


export default Sticker_1;