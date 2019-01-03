import React from 'react';

import './app.css';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


class App_bar extends React.Component {
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

  render() {
    const { anchorEl } = this.state;

    return (
      <div style={{height:'40px'}}>
        <Grid container spacing={8} alignItems={'center'}>

          <Grid item>
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
          </Grid>

            <Grid item xs>
              <Paper>xs=4</Paper>
            </Grid>

          <Grid item>
            <Paper>xs=4</Paper>
          </Grid>

        </Grid>
      </div>
    );
  }
}

export default App_bar;




