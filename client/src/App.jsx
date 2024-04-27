import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './login';

const App = () => {
  return (
    <Router>
      <div>
        
        
          <Route exact path="/" component={LoginPage} />
          
      
      </div>
    </Router>
  );
};

export default App;
