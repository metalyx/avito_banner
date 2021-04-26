import './App.css';
import Banner from './components/BannerComponent';
import CreateForm from './components/CreateFormComponent';
import { Provider } from 'react-redux';
// import { ConfigureStore } from './redux/configureStore';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import rootReducer from './redux/reducer';
import CreateFormContainer from './components/CreateFormContainer';
import BannerContainer from './components/BannerContainer';

import ExportJsonContainer from './components/ExportJsonContainer';

const store = createStore(rootReducer);



class App extends React.Component {

  constructor(props) {
    super(props);

    
  }

  

    render () {
      return (
      <Provider store={store}>
          <div className="container">
            <BannerContainer/>
            <CreateFormContainer/> 
            <ExportJsonContainer />
          </div>
          
      </Provider>
    );
  }
}

export default App;
