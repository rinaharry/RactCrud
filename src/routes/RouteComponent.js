import React,{ Component } from 'react';
import { Route,Switch, Redirect} from 'react-router-dom';
import login from '../component/loggin/loggin'
import PageNotFound from '../common/PageNotFound'
import user from '../component/user/user'
import addUser from '../component/user/AddUser'

 class RouteComponent extends Component {
     render () {
         return (
            <div>
                <Switch>
                     <Redirect to= "login"exact/>
                     <Route path='/user'  component ={user} exact/>
                     <Route path = '/adduser' component= {addUser}/>
                     <Route path='/login'  exact component ={login}/>
                     <Route path = '/:_id' component= {addUser}/>
                     <Redirect from="/login" to ="/user"/>
                   
                     <Route path ="*/*" component={PageNotFound}/>
                </Switch>    
            </div>
         )
     }
 }
 export default RouteComponent;