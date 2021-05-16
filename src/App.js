import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";


function App() {
  // localhost:3000/
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetupsPage></AllMeetupsPage>
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage></NewMeetupPage>
        </Route>
        <Route path="/favorite">
          <FavoritesPage></FavoritesPage>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
