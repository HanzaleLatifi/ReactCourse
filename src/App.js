import React, { Component } from 'react';
import ClassRef from './Components/Ref/ClassRef';
import FunctionalRef from './Components/Ref/FunctionalRef';




class App extends Component {



    render() {

        return (

            <div>
                class--- <ClassRef />
                {/* Func -----<FunctionalRef /> */}


            </div>


        );
    }
}

export default App;