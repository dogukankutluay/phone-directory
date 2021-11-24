import { Switch, withRouter } from 'react-router-dom';
import ProtectedRoute from './route/ProtectedRoute';
import routes from './route';
function App() {
  return (
    <Switch>
      {routes.map((route, key) => (
        <ProtectedRoute
          key={key}
          component={() => <route.component section={route.name} />}
          exact={route.exact}
          path={route.path}
        />
      ))}
    </Switch>
  );
}
const AppWithRouter = withRouter(App);
export default AppWithRouter;
