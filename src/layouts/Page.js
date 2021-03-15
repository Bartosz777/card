import React from 'react';
import '../styles/Page.css'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Info from '../pages/Info'
import Contact from '../pages/Contact'
import Portfolio from '../pages/Portfolio'
import ErrorPage from '../pages/ErrorPage'


const Page = () => {

    return ( 
        <Switch>
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/info" component={Info}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/portfolio" component={Portfolio}></Route>
            <Route component={ErrorPage}></Route>
        </Switch>
     );
}
 
export default Page;