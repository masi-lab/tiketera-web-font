import React from 'react';

//import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}



/*

class Comida extends React.Component {
    
    state = { like:  Boolean(this.props.like) };

    handleLike(){
        this.setState({like: !this.state.like})
    }
    render() {
        return (
            <div className="comida">
                <h1 className="bg-success">{this.props.nombre}</h1>
                <p className="bg-info">
                    Posición: <i>{this.props.children}</i>
                </p>
                <div>
                    <input type="checkbox" className=""  //glyphicon glyphicon-heart heart
                    onChange={this.handleLike} 
                    defaultChecked={this.state.like}/>
                    <br />
                    Like: {String(this.state.like)}
                </div>
            </div>
            )
    }
};
*/



class Comida extends React.Component {
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

class ListaComida extends React.Component {
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
        <h1>Ticket</h1>
        <i>Total: {this.state.data.length}</i>
      </header>
      <div>
        {
          this.state.data.map(function (tike, i) {
            console.log(tike, i);
            return (
              <Comida key={i}
                nombre={tike.codigo}
                descripcion={tike.descripcion}>
              </Comida>
            )
          })
        }
      </div>
    </div>)
  }
};

export default ListaComida;
//export default App;
//module.export = ListaComida;

//ReactDOM.render(<ListaComida />, document.getElementById('root'));
//ReactDOM.render(<ListaComida/>, document.getElementById('container'));