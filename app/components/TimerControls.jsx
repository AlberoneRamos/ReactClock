import Inferno from 'inferno';
import Component from 'inferno-component';

export default class TimerControls extends Component{

    constructor(props){
        super(props)
        this.onStatusChange = this.onStatusChange.bind(this);
    }

    onStatusChange(status){
        return ()=>{
            this.props.onStatusChange(status);
        }
    }

    render(){
        var {timerStatus} = this.props;
        var renderStartPauseButton = () =>{
            if(timerStatus === 'started'){
                return <button className="button alert" onClick={this.onStatusChange('paused')}>Pausar</button>
            } else{
                return <button className="button primary" onClick={this.onStatusChange('started')}>Iniciar</button>
            }
        }
        return(
            <div className="controls">
                {renderStartPauseButton()}
                <button className="button secondary hollow"  onClick={this.onStatusChange('stopped')}>Limpar</button>
            </div>
        );
    }
}