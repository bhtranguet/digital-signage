import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import RouteConfig from "../entities/RouteConfig";

interface RouteWithSubRoutesProp {
  route: RouteConfig
}

class RouteWithSubRoutes extends Component<RouteWithSubRoutesProp> {

  render() { 
    const route = this.props.route;
    const isRedirect = route.redirect ? true : false;
    const redirectLink = route.redirect ?? '';
    return (
      <div>
        {isRedirect ?
          <Route exact path={route.path}>
            <Redirect to={redirectLink}/>
          </Route>:
          <Route path={this.props.route.path} render={(props) => <route.component {...props} children={route.children}></route.component>}/>
        }
      </div>
      
    );
  }
}

export default RouteWithSubRoutes;