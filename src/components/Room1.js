import React from"react";

export default class Room1 extends Component{
    constructor(){
        super();
        this.state={color:"red"};
    }
    
    render(){
        return<div>Go to Room1
            <br></br>
             The props are-{this.props.animal}
            <button onClick={()=>this.setState({color:"green"})}>
                Change Color
            </button>
            <br />
            The color is-{this.state.color}
        </div>
    }
}