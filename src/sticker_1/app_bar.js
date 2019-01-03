import React from 'react';

import './app.css';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { withTheme, withStyles } from '@material-ui/core/styles';
import {Cancel, Search} from '@material-ui/icons';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

const styles_App_bar = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
    height: 30,
  },
  icon_cancel:{
    fontSize: '20px',
  },
  icon_search:{
    fontSize: '20px',
  }
});


const App_bar = withTheme()(withStyles(styles_App_bar) (class extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

/* MENU
            <Button
              aria-owns={anchorEl ? 'simple-menu' : undefined}
              aria-haspopup="true"
              onClick={this.handleClick} >
              Menu
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}>
              <MenuItem onClick={this.handleClose}>Agregar</MenuItem>
              <MenuItem onClick={this.handleClose}>My account</MenuItem>
              <MenuItem onClick={this.handleClose}>Logout</MenuItem>
            </Menu>
*/

  render() {
    const { anchorEl } = this.state;

    return (
      <div style={{height:'50px'}}>
        <Grid container spacing={8} alignItems={'center'}>

          <Grid item>
            <Tooltip title="Search" aria-label="Search" className={''}>
              <Fab size="small">
                <Search  className={this.props.classes.icon_search}/>
              </Fab>
            </Tooltip>
            
          </Grid>

            <Grid item xs>
              <TextField
                id="standard-bare"
                className={this.props.classes.textField}
                defaultValue=""
                margin="normal"
                placeholder="buscar"
              />
            </Grid>

          <Grid item>
            <Tooltip title="Cancel" aria-label="Cancel" >
                <Fab size="small">
                  <Cancel className={this.props.classes.icon_cancel} />
                </Fab>
            </Tooltip>
          </Grid>

        </Grid>
      </div>
    );
  }
}));

export default App_bar;




