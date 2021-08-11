import React, { Component } from 'react';
import ClassRef from './Components/Ref/ClassRef';
import FunctionalRef from './Components/Ref/FunctionalRef';
import StorePreState from './Components/Ref/StorePreState';




class App extends Component {



    render() {

        return (

            <div>
                {/* class--- <ClassRef /> */}
                {/* Func -----<FunctionalRef /> */}
                <StorePreState />


            </div>


        );
    }
}

export default App;