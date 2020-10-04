import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { reducerA } from './ReducerA';
import { reducerB } from './ReducerB';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux'
function App() {
 let combine =  combineReducers({
  A:reducerA,
  B:reducerB
  })
  console.log(typeof combine)
  const store = createStore(combine);
  return (
    <div className="App">
      <Provider store={store}>
     <Counter/>
     </Provider>
    </div>
  );
}

export default App;
