import React from 'react';

const UpdatedComponent = (OriginalComponent, increment) => {
    class NewComponent extends React.Component {
        state = {
            count: 0,

        }
        countHandler = () => {
            this.setState(prevState => {
                return { count: prevState.count + increment }
            })
        }
        render() {
            return (
                <OriginalComponent count={this.state.count} incrementCount={this.countHandler} {...this.props} />
            );
        }

    }
    return NewComponent

}
export default UpdatedComponent;