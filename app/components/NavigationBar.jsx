import Inferno from 'inferno';
import Component from 'inferno-component';
import {Link} from 'inferno-router';

export default class NavigationBar extends Component{
    render(){
        return(
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">ReactClock</li>
                        <li>
                            <Link exact to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Timer</Link>
                        </li>
                        <li>
                            <Link exact to="/Countdown" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Cronômetro</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">Criado por <a href="https://github.com/AlberoneRamos">Henrique</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}