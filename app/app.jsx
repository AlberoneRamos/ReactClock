import Inferno from 'inferno';
import { Router, Route, IndexRoute } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';
import Main from './components/Main';
import Timer from './components/Timer';
import Countdown from './components/Countdown';
import 'style-loader!foundation-sites/dist/css/foundation.min.css';
import 'style-loader!css-loader!sass-loader!./styles/app.scss';
$(document).foundation();
const browserHistory = createBrowserHistory();

Inferno.render(
    <Router history={browserHistory}>
        <Route exact path="/" component={Main}>
            <IndexRoute exact  path='/' component={Timer}/>
            <Route exact path='/countdown' component={Countdown}/>
        </Route>
    </Router>,
    document.getElementById('app')
);