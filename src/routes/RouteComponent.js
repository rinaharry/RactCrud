import React,{ Component } from 'react';
import { Route,Switch,HashRouter} from 'react-router-dom';
import login from '../component/loggin/loggin'
import PageNotFound from '../common/PageNotFound'
import user from '../component/user/user'
import addUser from '../component/user/AddUser'

 class RouteComponent extends Component {
     render () {
         return (
            <div>
                <Switch>
                     <Route path='/user' component ={user}/>
                     <Route path = '/adduser' component= {addUser}/>
                     <Route path = '/:_id' component= {addUser}/>
                     <Route path ="*/*" component={PageNotFound}/>
                     <HashRouter path='/login' component ={login}/>
                </Switch>    
            </div>
         )
     }
 }
 export default RouteComponent;