import { Switch, withRouter } from 'react-router-dom';
import ProtectedRoute from './route/ProtectedRoute';
import routes from './route';
import style from './assets/style/variables.module.scss';
function App() {
  return (
    <div className={style.App}>
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
    </div>
  );
}
const AppWithRouter = withRouter(App);
export default AppWithRouter;
