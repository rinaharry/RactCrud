import React ,{ Component} from 'react';
import  Axios from 'axios';

class AddHome extends Component {

  state= {name:null, age: null, adress: null, num: null}

    onchange = (e) =>{
      this.setState({
            [e.target.id]: e.target.value,    
      })}

    onclick = (e) => {
        e.preventDefault()
        this.addcontact()
    }

    addcontact() {
        Axios.post('http://localhost:3002',this.state)
            .then(
                res => { console.log(res)})
            .catch(
                error =>console.error(error)    
    )}

    render () {
        return (
       <div className=" card">
        <form className="form-horizontal text-justify">
            <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="name">name</label>
                <div className="col-sm-4">
                    <input type="text" className="form-control" id="name" onChange={this.onchange} placeholder="Enter email"/>
                </div>
            </div>

            <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="age">age</label>
                <div className="col-sm-4"> 
                    <input type="text" className="form-control" id="age" onChange={this.onchange} placeholder="Enter text"/>
                </div>
            </div>

            <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="adress">adress</label>
                <div className="col-sm-4"> 
                    <input type="text" className="form-control" id="adress" onChange={this.onchange} placeholder="Enter text"/>
                </div>
            </div>
            
            <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="num">num</label>
                <div className="col-sm-4"> 
                    <input type="text" className="form-control" id="num" onChange={this.onchange} placeholder="Enter text"/>
                </div>
            </div>
  

            <div className="form-group"> 
                <div className="col-sm-offset-2 col-sm-4">
                    <button type="submit" className="btn btn-default" onClick ={this.onclick}>Submit</button>
                </div>
            </div>
      </form>
      </div>  
 
     )
    }
     
}

export default  AddHome