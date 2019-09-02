import React , {Component } from 'react';
import Axios from 'axios';

 class detailHome extends Component {

     state={
         "id":null,
         "contactDetails" : {}
           }
     componentDidMount () {
         const id = this.props.match.params.id;
         Axios.get('http://localhost:3002/'+ id)
         .then(resp => {
            this.setState({
            contactDetails: resp.data.data
        })
       })}
     render () {

         return (
             this.state.contactDetails ?
             <div>
                 <ul>
                     <li>
                         {this.state.contactDetails.name}
                     </li>
                 </ul>
             </div>
             : null
         )
     }
 }
 export default detailHome;