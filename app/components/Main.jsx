import Inferno from 'inferno';
import Component from 'inferno-component';
import NavigationBar from './NavigationBar';

export default class Main extends Component{
    render(){
        return(
            <div>
                <NavigationBar/>
                <div className="row">
                    <div className="medium-6 large-4 columns small-centered">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}