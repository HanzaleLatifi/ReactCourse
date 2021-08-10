import React, { Component } from 'react'
class ClassCounter extends Component {
    state = {
        count: 0,
        name: ""
    }
    clickHandler = () => {
        this.setState((prevState) => {
            return { count: prevState.count + 1 }
        });
    };
    changeHandler = (e) => {
        this.setState({ name: e.target.value });


    }
    componentDidMount() {
        document.title = `CLICKED:${this.state.count}`
        console.log('didMount')
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            document.title = `CLICKED:${this.state.count}`
            console.log('didupdate count')

        }

    }
    render() {
        return (
            <div>
                <input onChange={(e) => this.changeHandler(e)} />
                <button onClick={this.clickHandler} >count:{this.state.count}</button>
            </div>
        );
    }
}

export default ClassCounter;