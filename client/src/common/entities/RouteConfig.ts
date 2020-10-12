export default interface RouteConfig {
  path: string;
  component?: any;
  redirect?: string;
  children?: Array<RouteConfig>;
}
