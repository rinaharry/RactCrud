import React,{ Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import Activite from '../component/Activite';
import Contact from '../component/Contact';
import Project from '../component/Project';
import Home from '../component/Home';
import AddHome from '../component/AddHome'
import detailHome from '../component/DetailHome'
import PageNotFound from '../common/PageNotFound'

 class RouteComponent extends Component {
     render () {
         return (
            <div>
                <Switch>
                    <Route exact path ='/' component={Home}/>
                    <Route path ='/activite' component={Activite}/>
                    <Route path ='/contact' component={Contact}/>
                    <Route path ='/project' component={Project}/>
                    <Route path ='/addcomponent' component={AddHome}/>
                    <Route path ="/:id" component={detailHome}/>
                    <Route component={PageNotFound}/>
                </Switch>    
            </div>
         )
     }
 }
 export default RouteComponent;