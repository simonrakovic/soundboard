import React, {Component} from 'react';
import logo from './pepe.png';
import sound from './../sounds/random.mp3'
import './App.css';
import Play from 'react-icons/lib/fa/play';
import Stop from 'react-icons/lib/fa/stop';

/*
var sounds = [
    {"title": "bomb refused!", "path": "./../sounds/random.mp3"},
    {"title": "sniper rifled", "path": "./../sounds/random.mp3"},
    {"title": "i have cheats on", "path": "./../sounds/random.mp3"},
    {"title": "iiioouuu", "path": "./../sounds/random.mp3"},
    {"title": "dont taking me", "path": "./../sounds/random.mp3"}
];

*/
class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">

                    <h2>PIPE</h2><h1>SOUNDBOARD</h1>
                    <img src={logo} className="App-logo" alt="logo"/>

                </div>
                <div className="container">
                    <Row title=""/>
                </div>
            </div>
        );
    }
}

export default App;

class Row extends Component {
    render() {
        return (
            <div className="row">
                <h3 className="row-title">{this.props.title}</h3>
                <div className="row-buttons">

                    <Button index="1"/>
                </div>

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

    handleClick(id) {
        if (this.state.isToggleOn) {
            
            document.getElementById('audio-' + id).play();
        } else {
            document.getElementById('audio-' + id).pause();
        }
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <div>
                <audio id={"audio-"+this.props.index} className="audio" >
                    <source src={sound} />
                </audio>
                <button id={"button-"+this.props.index} className="button"
                        onClick={() => this.handleClick(this.props.index)}>
                    {this.state.isToggleOn ? (<Play/>) : (<Stop/>)}
                </button>
            </div>

        );
    }
}