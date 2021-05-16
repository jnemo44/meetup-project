import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  // Get the current "state" from the favorites context
  const favoritesCtx = useContext(FavoritesContext);

  let content;
  // This will report a message when no favorites have been added"
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>No favorites yet. Try adding some...</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites}></MeetupList>;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
