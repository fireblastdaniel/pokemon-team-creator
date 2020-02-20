import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { pokemonReducer as reducer } from './reducers/pokemonReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './App.css';

import Title from './components/Title';
import Form from './components/Form';
import Team from './components/Team';

const store = createStore(reducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Title/>
        <Form/>
        <Team/>
      </div>
    </Provider>
  );
}

export default App;
