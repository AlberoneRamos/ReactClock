import Inferno from 'inferno';
import Component from 'inferno-component';
import CountdownForm from './CountdownForm';
import Clock from './Clock';
import Controls from './Controls';

export default class Countdown extends Component{

        constructor(props){
            super(props)
            this.state = {
                count: 0,
                countdownStatus: 'stopped'
            }
            this.handleSetCountdown = this.handleSetCountdown.bind(this);
            this.handleStatusChange = this.handleStatusChange.bind(this);
        }
        
        componentDidUpdate(previousProps,previousState){
            if(this.state.countdownStatus !== previousState.countdownStatus){
                switch(this.state.countdownStatus){
                    case 'started':
                        this.startTimer();
                        break;
                    case 'stopped':
                        this.setState({count: 0});
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
            this.timer = setInterval(() => {
                var newCount = this.state.count - 1;
                this.setState({count: newCount >= 0 ? newCount : 0 });
                if(newCount === 0){
                    this.setState({countdownStatus: 'stopped'});
                }
            },1000);
        }

        handleSetCountdown(seconds){
            this.setState({
                count: seconds,
                countdownStatus: 'started'
            });
        }

        handleStatusChange(newStatus){
            this.setState({
                countdownStatus: newStatus
            });
        }

        render(){
            var {count,countdownStatus} = this.state;
            var renderControlArea= ()=>{
                if(countdownStatus !== 'stopped'){
                    return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
                }
                else{
                    return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
                } 
                    
            }
            return(
                <div class="text-center">
                    <h1>Countdown</h1>
                    <Clock totalSeconds={count}/>
                    {renderControlArea()}
                </div>
            );
        }

}