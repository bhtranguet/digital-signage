import React from 'react';
import { BrowserRouter as  Router} from 'react-router-dom';
import './App.css';
import RouteWithSubRoutes from './common/components/RouteWithSubRoutes';
import routerConfig from './common/configs/routerConfig';

function App() {
  return (
    <div className="App">
      <Router>
          {
            routerConfig.map(route => {
              return <RouteWithSubRoutes key={route.path} route={route}/>
            })
          }
      </Router>
    </div>
  );
}

export default App;
