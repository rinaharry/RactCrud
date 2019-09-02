
import React, {Component} from 'react';

class AddNinja extends Component {
    state = {name:null, adress: null, age: null}

    onChange= (e)=>{
        this.setState({
            [e.target.id]: e.target.value, 
        })
    }
    
    showState=(e)=>{
        e.preventDefault()
        this.props.addNinja(this.state)
    }

    render(){
    return( 
      <form>
        <label>name</label>
            <input type="text" id="name" onChange = {this.onChange} /><br/>
        <label>adress</label>
            <input type="text" id="adress" onChange= {this.onChange} /><br/>
        <label>age</label>
            <input type="text" id="age" onChange= {this.onChange} /><br/>
            <button type="button" onClick= {this.showState} className="btn btn-outline-primary">submit</button>
      </form>
     )
   }
}
export default AddNinja;