//https://coreui.io/react/demo/#/base/navs

import React from 'react';
import './App.css';
import Sticker_1 from './sticker_1/app';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {blue, red, teal} from '@material-ui/core/colors';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: teal,
    error: red,
  },
  typography: { useNextVariants: true },
});


class App extends React.Component {
  render() {
    return (
      <div className="App" style={{background:theme.palette.grey[100]}}>
         <MuiThemeProvider theme={theme}>
          <Example/>
        </MuiThemeProvider>
      </div>
    );
  }
}


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      value: 0,
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  handleChangeTab = (event, value) => {
    this.setState({ value });
  };


  render() {
    const { value } = this.state;
    return (
      <div style={{padding:'10px'}}>
          <AppBar position="static">
            <Tabs value={value} onChange={this.handleChangeTab}>
              <Tab label="Sticker 1"></Tab>
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </AppBar>
          {value === 0 && <Sticker_1/>}
          {value === 1 && <div>Item2<Sticker_1/></div>}
          {value === 2 && <div>Item 3</div>}

          
      </div>
    );
  }
}

export { App }
