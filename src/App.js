import React, { Component } from 'react';
import ClickCounter from './Components/ClickCounter/ClickCounter';
import HoverCounter from './Components/HoverCounter/HoverCounter';



class App extends Component {



    render() {

        return (
            <>
                click:<ClickCounter name="name" />
                hover<HoverCounter />

            </>

        );
    }
}

export default App;