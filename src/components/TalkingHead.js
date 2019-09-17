import React, {Component} from 'react';
import Me from '../assets/avatar.png';
import Wink from '../assets/avatar-wink.png';
import Bubble from './Bubble';
import TEXTS from '../const/phrases';
import './TalkingHead.css';

export default class TalkingHead extends Component {
    constructor(props){
        super(props);
        this.state = {
            language : 0,
            info : null,
            wink : false,
            firstScreen : true,
            talking : false,
            textNumber : 0,
        }
        this.talk = this.talk.bind(this);
        this.nextText = this.nextText.bind(this);
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    wink(){
        this.setState(prevState => ({
            wink : !prevState.wink
        }))
    }

    talk(key){
        this.setState({
            talking: true,
            info : key,
            textNumber: 0
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

    closeBubble(){
        this.setState({
            talking : false
        })
    }

    render(){
        return(
            <div className="site">
                
                <img className="avatar" src={this.state.wink ? Wink : Me} alt='this-is-me' onMouseDown={this.wink.bind(this)} onMouseUp={this.wink.bind(this)}/>

                {
                    this.state.firstScreen ?
                    <Bubble language={this.state.language} index="first" changeLanguage={this.changeLanguage}/>
                    :
                    <div className="menu">
                        <div className="langButtons">
                            <a className={this.state.language===0 ? "active lang" : "lang"} onClick={() => this.changeLanguage(0, true)}>FR</a>
                            <a className={this.state.language===1 ? "active lang" : "lang"} onClick={() => this.changeLanguage(1, true)}>ENG</a>
                            <a className={this.state.language===2 ? "active lang" : "lang"} onClick={() => this.changeLanguage(2, true)}>RUS</a>
                        </div>
                        {
                        TEXTS[this.state.language]['menu'].map((item,i) => 
                            <button className={(this.state.info === item[1] && this.state.talking)? "active menuButton" : "menuButton"} 
                            key={i} onClick={() => this.talk(item[1])}>{item[0]}</button>
                        )                       
                        }
                        {
                            this.state.talking &&
                            <Bubble language={this.state.language} 
                            index={this.state.info} 
                            textNumber={this.state.textNumber} 
                            nextText={this.nextText} 
                            closeBubble={this.closeBubble.bind(this)}/>
                        }
                    </div>
                    
                    
                }
            </div>
        )
    }
}