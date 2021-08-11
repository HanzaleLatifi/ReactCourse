import React, { Component } from 'react'
import MemoComp from './MemoComp';
import NotPureComp from './NotPureComp';
import PureComp from './PureComp';

class ParentComp extends Component {
    state = {
        name: "hanzale"
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ name: "hanzale" })

        }, 1000);
    }
    render() {
        console.log('parent');
        return (
            <div>
                {/* <PureComp name={this.state.name} /> */}
                <MemoComp name={this.state.name} />
                <NotPureComp name={this.state.name} />


            </div>
        )
    }
}

export default ParentComp
