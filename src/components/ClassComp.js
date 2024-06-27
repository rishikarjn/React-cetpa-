
import React,{Component} from "react";
export default class ClassComp extends
Component{
   constructor(){
      super();
      this.state={pincode:"123456"};
   }
   render(){

   
    return(
    <div>This is Class Component 
      <br/>
      The props are:{this.props.age}{this.props.school}
      <br/>
      <button onClick={()=>this.setState({pincode:"43234"})}>
         Change Pin
         </button>
      The pincode are- {this.state.pincode}
    </div>
    );
   }
}

// export function A(){
    
// }