import React, {Component} from 'react';
import TEXTS from '../const/phrases';
import './Bubble.css';

export default class Bubble extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: "",
            fin : false
        }
    }

    componentDidMount(){
        let text;
        if(this.props.index === "first"){
            text = TEXTS[this.props.language][this.props.index]
        } else {
            text = TEXTS[this.props.language][this.props.index][this.props.textNumber];  
        }
        this.typewriter(text);
    }

    typewriter(arr) {
        var delayCallback = 0;
        for (var i = 0; i < arr.length; i++) {
            var delay;
            delayCallback += arr[i].length * 50;
            if (i !== 0) {
                delay = (arr[(i - 1)].length * 50);
            } else {
                delay = 0;
    
            }
            var text = arr[i];
    
            this.lineTypeWriter(text, delay);
    
        }
        setTimeout(() => {
            this.setState({
                fin : true
            })
        }, delayCallback);
    }
    
    lineTypeWriter(text, delay) {
        if(this.state.message.length > 0){
            this.setState({
                message: ''
            })
        }
        setTimeout(() => {
            for (var i = 0; i < text.length; i++) {
                this.printLetter(text[i], i);
            }
        }, delay);
    }
    
    printLetter(lettre, i) {
        setTimeout(() => {
                this.setState(prevState => ({
                   message : prevState.message + lettre
                })) ;  
        }, 50 * i);
    
    }

    nextText(){
        this.setState({
            message: '',
            fin : false
        })
        this.props.nextText();
        this.typewriter(TEXTS[this.props.language][this.props.index][this.props.textNumber])
    }

    render(){
        console.log(this.state.fin);
        return(
            <div className='bubble'>
                
                {
                (this.props.index === "first") ?                
                // {/* <p>{typewriter(TEXTS[this.props.language][this.props.index])}</p> */}
                
                <div>
                    <p>{this.state.message}</p>
                    {
                        this.state.fin &&
                        <div>
                           <button onClick={() => this.props.changeLanguage(0, true)}>En français</button>
                            <button onClick={() => this.props.changeLanguage(1, true)}>In English</button>
                            <button onClick={() => this.props.changeLanguage(2, true)}>По-русски</button> 
                        </div>
                    }
                    
                </div>
                :
                <div>
                    <p>{this.state.message}</p>
                    {
                        this.state.fin &&
                        this.props.textNumber === (TEXTS[this.props.language][this.props.index].length - 1) ?
                            <button onClick={this.props.closeBubble}>OK</button>
                            :
                            <button onClick={this.nextText.bind(this)}>{TEXTS[this.props.language].button}</button>
                    }
                    
                </div>
                }
            </div>
        )
    }
}