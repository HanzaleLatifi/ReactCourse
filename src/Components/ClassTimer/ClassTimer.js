import React, { Component } from 'react';
class ClassTimer extends Component {
    state = {
        count: 0,
    }
    componentDidMount() {
        this.Timer = setInterval(() => {
            console.log(this.state.count);
            this.setState({ count: this.state.count + 1 });

        }, 1000);

    }
    componentWillUnmount() {
        clearInterval(this.Timer)
    }
    render() {
        return (
            <div>
                ClassTime:{this.state.count}
            </div>
        );
    }
}

export default ClassTimer
