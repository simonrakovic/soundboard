import React, {Component} from 'react';
import logo from './pepe.png';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">

                    <h2>PIPE</h2><h1>SOUNDBOARD</h1>
                    <img src={logo}  className="App-logo" alt="logo"/>

                </div>
                <div className="container">
                <Row title="My favorite"/>
                </div>
            </div>
        );
    }
}

export default App;


class Row extends Component {
    render(){
        return (
            <div className="row">
                <h3 className="row-title">{this.props.title}</h3>
                <Button/>
            </div>
        );
    }
}


class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}