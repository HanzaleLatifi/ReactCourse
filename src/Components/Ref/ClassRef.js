import React, { Component } from 'react';
class ClassRef extends Component {
    state = {}
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    componentDidMount() {
        this.inputRef.current.focus();
    }
    render() {
        return (
            <input type="text" ref={this.inputRef} />
        );
    }
}

export default ClassRef;