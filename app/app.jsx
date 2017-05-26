import Inferno from 'inferno';
import { Router, Route, IndexRoute } from 'inferno-router';
import createHashHistory from 'history/createHashHistory';
import Main from './components/Main';
import Timer from './components/Timer';
import Countdown from './components/Countdown';
import 'style-loader!foundation-sites/dist/css/foundation.min.css';
import 'style-loader!css-loader!sass-loader!./styles/app.scss';
$(document).foundation();
const hashHistory = createHashHistory();

Inferno.render(
    <Router history={hashHistory}>
        <Route exact path='/' component={Main}>
            <IndexRoute path='/' component={Timer}/>
            <Route path='/countdown' component={Countdown}/>
        </Route>
    </Router>,
    document.getElementById('app')
)