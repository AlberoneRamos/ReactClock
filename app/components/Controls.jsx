import Inferno from 'inferno';
import Component from 'inferno-component';

export default class Controls extends Component{
    constructor(props){
        super(props);
        this.onStatusChange = this.onStatusChange.bind(this);
    }

    onStatusChange(newStatus){
        return()=>{
            this.props.onStatusChange(newStatus);
        }
    }

    render(){
        var {countdownStatus} = this.props;
        var renderStartStopButton = ()=>{
            if(countdownStatus === 'started'){
                return <button className="button secondary"   onClick={this.onStatusChange('paused')}>Pausar</button>
            } else if(countdownStatus === 'paused'){
                return <button className="button primary"  onClick={this.onStatusChange('started')}>Iniciar</button>
            }
        }
        return(
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Limpar</button>
            </div>
        );
    }

}