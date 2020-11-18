import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import store from './store';


class Main extends React.Component {
  render() {
    return (
      <Provider store={store} >
      <BrowserRouter>
        <App />;
      </BrowserRouter>
      </Provider>

    );

  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);