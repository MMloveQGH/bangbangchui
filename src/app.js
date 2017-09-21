
require("./styles/app.scss")

import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'

import RootComponent from './scripts/components/Rootcomponent'


import FreshNewsComponent from './scripts/components/FreshNewsComponent'
import MineComponent from './scripts/components/MineComponent'
import IndexComponent from './scripts/components/IndexComponent'
import ShopCarComponent from './scripts/components/ShopCarComponent'
import WelfareComponent from './scripts/components/WelfareComponent'

import PositionComponent from './scripts/components/PositionComponent'



ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={RootComponent}>
            <IndexRoute component={IndexComponent}/>
            <Route path="/index" component={IndexComponent}></Route>
            <Route path="/fresh" component={FreshNewsComponent}></Route>
            <Route path="/shopcar" component={ShopCarComponent}></Route>
            <Route path="/mine" component={MineComponent}></Route>
            <Route path="/welfare" component={WelfareComponent}></Route>
            <Route path="/position" component={PositionComponent}></Route>
            <Route path="*" component={IndexComponent}></Route>

        </Route>
    </Router>
    ,document.getElementById("app"))