import React from "react";
import RouteWithSubRoutes from "../../common/components/RouteWithSubRoutes";
import RouteConfig from "../../common/entities/RouteConfig";

interface ManagementProps {
  children: Array<RouteConfig>
}
class Management extends React.Component<ManagementProps> {
  render() {
    var children = this.props.children;
    debugger
    return (
      <div className='management'>
        {
          children.map(route => {
            return <RouteWithSubRoutes key={route.path} route={route}></RouteWithSubRoutes>
          })
        }
      </div>
    )
  }
}

export default Management;