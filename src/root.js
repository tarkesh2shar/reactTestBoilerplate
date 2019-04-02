import React from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './components/reducers';
import reduxPromise from 'redux-promise'



export default({children,x={}})=>{
  //  console.log(x);
  const store=createStore(reducers,x,applyMiddleware(reduxPromise))
    return(
        <Provider store={store}>

           {children}

        </Provider>
    );
}