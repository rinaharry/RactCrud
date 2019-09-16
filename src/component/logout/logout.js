import React , {Component} from 'react';
import {connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import {authlogout} from '../../store/action/Actionlogin'


class logout extends Component{
componentDidMount(){
    this.props.logout();
}
render(){
    return(
        
        <Redirect to="/login"/>
        
    )
}

}
const mapdispachToProps = dispatch=> {
    return {
        logout : () => dispatch(authlogout())
    }
}
export default connect(null, mapdispachToProps) ( logout)