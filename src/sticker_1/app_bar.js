import React from 'react';

import './app.css';

import Grid from '@material-ui/core/Grid';

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
  inputEl = React.createRef();

  state = {
    
  };

  handleClick_cancel = event => {
    this.inputEl.value = '';
  };

  handleClick_search = event => {
    this.props.buscar(event, this.inputEl.value);
  };

  render() {

    return (
      <div style={{height:'50px'}}>
        <Grid container spacing={8} alignItems={'center'}>

          <Grid item>
            <Tooltip title="Search" aria-label="Search" className={''}>
              <Fab size="small" onClick={this.handleClick_search}>
                <Search  className={this.props.classes.icon_search}/>
              </Fab>
            </Tooltip>
          </Grid>

          <Grid item xs>
            <TextField
              id=""
              className={this.props.classes.textField}
              defaultValue=""
              margin="normal"
              placeholder="buscar"
              inputRef={e => this.inputEl = e}
            />
          </Grid>

          <Grid item>
            <Tooltip title="Cancel" aria-label="Cancel" >
                <Fab size="small" onClick={this.handleClick_cancel} >
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




