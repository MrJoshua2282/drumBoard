import React, { Component } from 'react';
import './Frame.css';

import sound1 from '../assets/audio/piano-1.mp3';
import sound2 from '../assets/audio/piano-2.mp3';
import sound3 from '../assets/audio/piano-3.mp3';
import sound4 from '../assets/audio/piano-4.mp3';
import sound5 from '../assets/audio/piano-5.mp3';
import sound6 from '../assets/audio/three.mp3';
import sound7 from '../assets/audio/bell-1.mp3';
import sound8 from '../assets/audio/bell-2.mp3';
import sound9 from '../assets/audio/bell-3.mp3';
import soundA from '../assets/audio/soundA.wav';
import soundB from '../assets/audio/soundB.wav';
import soundC from '../assets/audio/soundC.wav';
import soundD from '../assets/audio/soundD.wav';
import soundE from '../assets/audio/soundE.wav';
import soundF from '../assets/audio/soundF.flac';
import soundG from '../assets/audio/soundG.wav';
import soundH from '../assets/audio/soundH.wav';
import soundI from '../assets/audio/soundI.wav';

import { Howl, Howler } from 'howler';

const audioClip = [
    { sound: sound1, label: 'Q' },
    { sound: sound2, label: 'W' },
    { sound: sound3, label: 'E' },
    { sound: sound4, label: 'A' },
    { sound: sound5, label: 'S' },
    { sound: sound6, label: 'D' },
    { sound: sound7, label: 'Z' },
    { sound: sound8, label: 'X' },
    { sound: sound9, label: 'C' },
    { sound: soundA, label: 'Q' },
    { sound: soundB, label: 'W' },
    { sound: soundC, label: 'E' },
    { sound: soundD, label: 'A' },
    { sound: soundE, label: 'S' },
    { sound: soundF, label: 'D' },
    { sound: soundG, label: 'Z' },
    { sound: soundH, label: 'X' },
    { sound: soundI, label: 'C' }
]
class Frame extends Component {
    state = {
        setOfSounds: [],
        firstBoard: true
    }

    soundPlay = (src) => {
        const sound = new Howl({
            src
        })
        sound.play();
    }

    keyPressHandler = (event) => {
        if (event.key === 'j') { this.toggleBoard() }
        if (this.state.firstBoard) {
            switch (event.key) {
                case 'q':
                    this.soundPlay(audioClip[0].sound);
                    break;
                case 'w':
                    this.soundPlay(audioClip[1].sound);
                    break;
                case 'e':
                    this.soundPlay(audioClip[2].sound);
                    break;
                case 'a':
                    this.soundPlay(audioClip[3].sound);
                    break;
                case 's':
                    this.soundPlay(audioClip[4].sound);
                    break;
                case 'd':
                    this.soundPlay(audioClip[5].sound);
                    break;
                case 'z':
                    this.soundPlay(audioClip[6].sound);
                    break;
                case 'x':
                    this.soundPlay(audioClip[7].sound);
                    break;
                case 'c':
                    this.soundPlay(audioClip[8].sound);
                    break;
                default:
                    return;
            }

        } else if (!this.state.firstBoard) {
            switch (event.key) {
                case 'q':
                    this.soundPlay(audioClip[9].sound);
                    break;
                case 'w':
                    this.soundPlay(audioClip[10].sound);
                    break;
                case 'e':
                    this.soundPlay(audioClip[11].sound);
                    break;
                case 'a':
                    this.soundPlay(audioClip[12].sound);
                    break;
                case 's':
                    this.soundPlay(audioClip[13].sound);
                    break;
                case 'd':
                    this.soundPlay(audioClip[14].sound);
                    break;
                case 'z':
                    this.soundPlay(audioClip[15].sound);
                    break;
                case 'x':
                    this.soundPlay(audioClip[16].sound);
                    break;
                case 'c':
                    this.soundPlay(audioClip[17].sound);
                    break;
                default:
                    return;
            }
        }
    }

    Btns1 = () => {
        return audioClip.map((cur, i) => {
            if (i <= 8) {
                return (<button key={i} className='btn' id={`sound${i}`} onClick={() => this.soundPlay(cur.sound)} > {cur.label} </button>
                )
            }
        })
    }

    Btns2 = () => {
        return audioClip.map((cur, i) => {
            if (i > 8) {
                return (<button key={i} className='btn' id={`sound${i}`} onClick={() => this.soundPlay(cur.sound)} > {cur.label} </button>
                )
            }
        })
    }

    componentDidMount() {
        this.setState({ setOfSounds: this.Btns1() });
        document.body.addEventListener('keydown', this.keyPressHandler);
    }

    toggleBoard = () => {
        if (this.state.firstBoard) {
            this.setState({ firstBoard: false, setOfSounds: this.Btns2() });
        } else {
            this.setState({ firstBoard: true, setOfSounds: this.Btns1() });
        }
    }

    render() {
        Howler.volume(1.0)
        return (
            <div className='background'>
                <div id="stage">
                    {this.state.setOfSounds}
                </div>
                <div className='options'><span>{this.state.firstBoard ? 'Board 1' : 'Board 2'}</span> <br></br> <span>press 'J'</span></div>
            </div>
        );
    };
};

export default Frame;