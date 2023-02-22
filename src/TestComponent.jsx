import React,{Component} from "react";

export default class TestComponent extends Component {
constructor(){
super();
this.state={
    counter:0
}
console.log("Hello from constructor")
}
//constructer ->renderer ->didmount
componentDidMount(){
    console.log("hello from mounting")
}

    handleclick(){
        this.setState((prevState)=>{
            return {
              ...prevState,
              counter:prevState.counter+1
            }
    })}
    
    render(){
    return (
    <div>
        <h1> {this.state.counter}</h1>
                <button onClick={()=>this.handleclick()}> ++ !</button>
    </div>
    )
    }
}