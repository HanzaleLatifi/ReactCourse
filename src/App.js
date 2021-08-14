import React, { Component } from 'react';
import CounterOne from './Components/Context/CounterOne';
import CounterProvider from './Components/Context/CounterProvider';
import Counter from './Components/ContextVsReduser/Counter';
import CounterProviderr from './Components/ContextVsReduser/CounterProviderr';
import ReducerCounter from './Components/Reducer/ReduserCounter';
import ClassRef from './Components/Ref/ClassRef';
import FunctionalRef from './Components/Ref/FunctionalRef';
import StorePreState from './Components/Ref/StorePreState';




class App extends Component {



    render() {

        return (

            <div>
                {/* class--- <ClassRef /> */}
                {/* Func -----<FunctionalRef /> */}
                {/* <StorePreState /> */}
                {/* <CounterProvider>
                    <p>wellcome to context</p>
                    <CounterOne />
                </CounterProvider> */}
                {/* <ReducerCounter /> */}
                <CounterProviderr>
                    <Counter />
                </CounterProviderr>


            </div>


        );
    }
}

export default App;