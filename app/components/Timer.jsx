import Inferno from 'inferno';
import Component from 'inferno-component';
import Clock from './Clock';
import TimerControls from './TimerControls';

export default class Timer extends Component{
    constructor(props){
        super(props);
        this.state = {
            seconds: 0,
            timerStatus: 'stopped'
        };
        this.onStatusChange = this.onStatusChange.bind(this);
    }

    onStatusChange(newStatus){
        this.setState({timerStatus:newStatus});
    }

    componentDidUpdate(previousProps,previousState){
        if(this.state.timerStatus !== previousState.timerStatus){
            switch(this.state.timerStatus){
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({seconds:0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        this.timer = undefined;
    }

    startTimer(){
        this.timer = setInterval(()=>{
            var newSeconds = this.state.seconds+1;
            this.setState({seconds: newSeconds});
        },1000)
    }

    render(){
        return(
            <div>
                <h1 class="text-center">Timer</h1>
                <Clock totalSeconds={this.state.seconds}/>
                <TimerControls timerStatus={this.state.timerStatus} onStatusChange={this.onStatusChange}/>
            </div>
        );
    }
}

