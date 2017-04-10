import React, {Component} from 'react';

import './App.css';
import Play from 'react-icons/lib/fa/play';
import Stop from 'react-icons/lib/fa/stop';
import logo from './pepe.png';


import apokalajps from './../sounds/apokalajps.wav';
import cheats_on from './../sounds/cheatson.wav';
import come_to_my_home from './../sounds/come_to_my_home.wav';
import dafuq from './../sounds/dafuq_smeh.wav';
import dont_tajkin_me from './../sounds/dont_tejkin_me.wav';
import get_fack_ap from './../sounds/get_fack_ap.wav';
import guys from './../sounds/Guys.wav';
import hows_ya_goin from './../sounds/hows_ya_goin.wav';
import im_cheating from './../sounds/im_cheating.wav';
import kel_of_duti from './../sounds/kel_of_duti.wav';
import nezi_zombis from './../sounds/nezi_zombis.wav';
import ooo_sheet from './../sounds/ooo_sheeeeet.wav';
import ouu from './../sounds/ouu.wav';
import pevli_fast from './../sounds/pevli_fast.wav';
import pevli_smeh from './../sounds/pevli_smeh.wav';
import pevlipe from './../sounds/pevlipe.wav';
import pipe from './../sounds/pipe.wav';
import shatap from './../sounds/shatap.wav';
import sheetap from './../sounds/shatap.wav';
import sheeet from './../sounds/sheeet.wav';
import videos from './../sounds/videos.wav';
import what_hec from './../sounds/what_hec.wav';




var Sound = require('react-sound');

var tracks = [
    {"title": "apokalajps", "path": apokalajps},
    {"title": "cheats on", "path": cheats_on},
    {"title": "come to my..", "path": come_to_my_home},
    {"title": "dafuq", "path": dafuq},
    {"title": "get_fack_ap", "path": get_fack_ap},
    {"title": "guys", "path": guys},
    {"title": "dont_tajkin_me", "path": dont_tajkin_me},
    {"title": "hows_ya_goin", "path": hows_ya_goin},
    {"title": "im_cheating", "path": im_cheating},
    {"title": "kel_of_duti", "path": kel_of_duti},
    {"title": "nezi_zombis", "path": nezi_zombis},
    {"title": "ooo_sheet", "path": ooo_sheet},
    {"title": "ouu", "path": ouu},
    {"title": "pevli_fast", "path": pevli_fast},
    {"title": "pevli_smeh", "path": pevli_smeh},
    {"title": "pevlipe", "path": pevlipe},
    {"title": "pipe", "path": pipe},
    {"title": "shatap", "path": shatap},
    {"title": "sheetap", "path": sheetap},
    {"title": "sheeet", "path": sheeet},
    {"title": "videos", "path": videos},
    {"title": "what_hec", "path": what_hec},

];


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
                    {tracks.map(function(obj,i){
                        return <Button key={i} index={i} title={obj.title} path={obj.path}/>
                    })}
                </div>
            </div>
        );
    }
}


class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            playStatus: Sound.status.STOPPED
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);

    }


    handleClick(id) {

        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
            playStatus: prevState.playStatus === Sound.status.STOPPED ? Sound.status.PLAYING:Sound.status.STOPPED
        }));

    }

    render() {
        return (
            <div className="button-block">
                <Sound
                    url={this.props.path}
                    playStatus={this.state.playStatus}
                    onFinishedPlaying={() => this.setState({playStatus: Sound.status.STOPPED, isToggleOn: true})}
                />

                <div className="button-title"></div>
                <button id={"button-"+this.props.index} className="button"
                        onClick={() => this.handleClick(this.props.index)}>
                    {this.props.title}
                    <br/>
                    {this.state.isToggleOn ? (<Play/>) : (<Stop/>)}
                </button>
            </div>

        );
    }
}

/*<audio onEnded={this.handleEnd} id={"audio-"+this.props.index} className="audio" ended>
 <source src={this.props.path} />
 </audio>*/