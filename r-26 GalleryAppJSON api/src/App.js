import React from "react";
import "./App.css";
import Photo from "./components/photoFolder/Photo";
import {store} from './redux/store'
import {Provider} from 'react-redux'








const App = () => {
  return (  
    
  <Provider store={store}>
      <React.Fragment> 
        <Photo/>      
      </React.Fragment>
  </Provider>
    
     
    

  );
};

export default App;
