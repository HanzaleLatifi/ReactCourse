import React, { Component } from 'react';

class NotPureComp extends Component {
    render() {
        console.log('notPure')
        return (
            <div>
                NotPure----{this.props.name}
            </div>
        )
    }
}

export default NotPureComp;
