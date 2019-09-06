import React, {Component} from 'react';
import TEXTS from '../const/phrases';
import typewriter from '../tools/typewriter';
import './Bubble.css';

export default class Bubble extends Component {
    
    render(){

        
        return(
            <div className='bubble'>
                
                {
                (this.props.key === "first") ?                
                // {/* <p>{typewriter(TEXTS[this.props.language][this.props.key])}</p> */}
                
                <div>
                    <p>{TEXTS[this.props.language][this.props.key][1]}</p>
                    <button onClick={() => this.props.changeLanguage(0, true)}>En français</button>
                    <button onClick={() => this.props.changeLanguage(1, true)}>In English</button>
                    <button onClick={() => this.props.changeLanguage(2, true)}>По-русски</button>
                </div>
                :
                <div>
                    {/* <p>{TEXTS[this.props.language][this.props.key][this.props.textNumber]}</p> */}
                    <button onClick={this.props.nextText}>{TEXTS[this.props.language].button}</button>
                </div>
                }
            </div>
        )
    }
}