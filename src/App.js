import React, { Component } from 'react';
import ClassCounter from './Components/ClassCounter/ClassCounter';
import ClassTimer from './Components/ClassTimer/ClassTimer';
import FunctionalCounter from './Components/FunctionalCounter/FunctionalCouner';
import FunctionalTimer from './Components/FunctionalTimer/FunctionalTimer';


class App extends Component {
    //forTimer
    state = {
        isShow: false,
    }

    render() {

        return (
            <>
                {/* forTimer */}
                <button onClick={() => this.setState({ isShow: !this.state.isShow })} >{this.state.isShow ? 'hide' : 'show'}</button>
                {this.state.isShow && <ClassTimer />}
                {this.state.isShow && <FunctionalTimer />}
                {/* <ClassCounter /> */}
                {/* <FunctionalCounter /> */}
            </>

        );
    }
}

export default App;