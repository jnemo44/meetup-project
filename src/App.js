import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  // localhost:3000/
  return (
    <div>
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
    </div>
  );
}

export default App;
