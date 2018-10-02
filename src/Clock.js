import React, {Component} from 'react';

class Clock extends Component {
    state = {
        date: new Date()
    }

    tick = () => {
        this.setState({
            date: new Date()
        });
    }

    // Chama após renderizar no DOM
    componentDidMount = () => {
        this.timerID = setInterval( this.tick, 1000 );
    }

    componentWillUnmount = () => {
        clearInterval( this.timerID );
    }

    render() {
        return (
            <div>
                <h1>{this.props.message} {this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default Clock;