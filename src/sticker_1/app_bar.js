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

  inputEl = React.createRef();

  state = {
    hola: React.createElement(TextField, {id:"standard-bare",
                                          className:this.props.classes.textField,
                                          defaultValue:"",
                                          margin:"normal",
                                          inputRef: e => this.algo = e,
                                          placeholder:"buscar"  }),
    valor:'',
  };

  handleClick_cancel = event => {
    //console.log(this.state.hola);
    //console.log(this.inputEl);
    //console.log(this.algo.value);
    //console.log(this.state.hola.ref.current);
    this.inputEl.value = '';
  };
  render() {

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
              defaultValue="hola mundo"
              margin="normal"
              placeholder="buscar"
              inputRef={e => this.inputEl = e}
            />
            {/*this.state.hola*/}
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




