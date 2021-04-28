import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.scss";
import AuthModal from "../authorization/authModal";
import PrivateRoute from "../common/elements/privateRoute"
import {
  CreatePage,
  SettingsPage,
  PanelPage,
  AddClientPage,
  MessagesPage,
  ActivationsPage,
  CoursesPage,
  AddCoursesPage,
  ClientInfoPage,
} from "../page/index";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={AuthModal} />
          <Route path="/create" component={CreatePage} />
          <PrivateRoute path="/settings" component={SettingsPage} />
          <PrivateRoute path="/panel" component={PanelPage} />
          <PrivateRoute path="/add_client" component={AddClientPage} />
          <PrivateRoute path="/messages" component={MessagesPage} />
          <PrivateRoute path="/activation" component={ActivationsPage} />
          <PrivateRoute
            path="/child/:id/correction-course"
            exact
            component={CoursesPage}
          />
          <PrivateRoute path="/child/:id/courses" component={AddCoursesPage} />
          <PrivateRoute path="/child/:id/info" component={ClientInfoPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
