import Cavas from "../../components/management/Canvas/Canvas";
import Management from "../../components/management/Management";
import Screen from "../../components/management/Screen/Screen";
import Presentation from "../../components/presentation/Presentation";
import RouteConfig from "../entities/RouteConfig";


const routerConfig: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/management'
  },
  {
    path: '/management',
    component: Management,
    children: [
      {
        path: '/management',
        redirect: '/management/screen'
      },
      {
        path: '/management/screen',
        component: Screen
      },
      {
        path: '/management/canvas',
        component: Cavas
      }
    ]
  },
  {
    path: '/presentation',
    component: Presentation
  }
]

export default routerConfig;