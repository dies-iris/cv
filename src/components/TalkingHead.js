import React, {Component} from 'react';
import Me from '../assets/avatar.png';
import Wink from '../assets/avatar-wink.png';
import Bubble from './Bubble';
import TEXTS from '../const/phrases';

export default class TalkingHead extends Component {
    constructor(props){
        super(props);
        this.state = {
            language : 0,
            info : null,
            wink : false,
            firstScreen : true,
            talking : false,
            textNumber : 0
        }
        this.talk = this.talk.bind(this);
        this.nextText = this.nextText.bind(this);
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    wink(){
        console.log('click');
        this.setState(prevState => ({
            wink : !prevState.wink
        }))
    }

    talk(key){
        this.setState({
            talking: true,
            info : key
        });

    }

    changeLanguage(lang, firstScreen = false){
        this.setState({
            language : lang
        });
        if (firstScreen){
            this.setState({
                firstScreen : false
            })
        };
    }

    nextText(){
        this.setState(prevState => ({
            textNumber : prevState.textNumber +1
        }))
    }

    render(){
        console.log(TEXTS[this.state.language]);
        return(
            <div>
                <img src={this.state.wink ? Wink : Me} alt='this-is-me' onMouseDown={this.wink.bind(this)} onMouseUp={this.wink.bind(this)}/>

                {
                    this.state.firstScreen ?
                    <Bubble language={this.state.language} key="first" changeLanguage={this.changeLanguage()}/>
                    :
                    <div className="menu">
                        {
                        TEXTS[this.state.language]['menu'].map(item => 
                            <button onClick={() => this.talk(item[1])}>{item[0]}</button>
                        )                       
                        }
                        {
                            this.state.talking &&
                            <Bubble language={this.state.language} key={this.state.info} textNumber={this.state.textNumber} nextText={this.nextText()}/>
                        }
                    </div>
                    
                    
                }
            </div>
        )
    }
}