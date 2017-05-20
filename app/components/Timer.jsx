import Inferno from 'inferno';
import Component from 'inferno-component';
import Clock from './Clock';

export default class Timer extends Component{
    render(){
        return(
            <div>
                <h1>Timer</h1>
                <Clock totalSeconds={102}/>
            </div>
        );
    }
}