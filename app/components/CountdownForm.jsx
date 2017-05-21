import Inferno from 'inferno';
import Component from 'inferno-component';

export default class CountdownForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            seconds : ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            seconds:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        if(this.state.seconds.match(/^[0-9]*$/)){
            this.props.onSetCountdown(this.state.seconds);
            this.setState({
                seconds: ''
            });
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit} className="countdown-form">
                    <input type="text" onInput={this.handleChange} value={this.state.seconds} placeholder="Digite o tempo em segundos!"/>
                    <button className="button expanded button-hollow">Começar!</button>
                </form>
            </div>
        );
    }
}