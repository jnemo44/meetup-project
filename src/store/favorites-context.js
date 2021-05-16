import { createContext, useState } from "react";

// Create context returns an object that actually contains a react component so Favorites is capatilized.
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  //Adding blank functions is not required but will allow for auto completion
  //in the IDE when working with these functions.
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
});

// This will update the context vaules. The context object comes built in with provider that needs to wrap all components that
// want to interact with the context.
export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    // This will work but may not be instantaneuosly but is scheduled. So it will work but you could have a scenario where it doesn't
    //setUserFavorites(userFavorites.concat(favoriteMeetup));
    // This will work instantaneously
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      //Filter is a method that returns any value in an array that is true of the filter condition
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    //Some returns a boolean for if something is contained inside an array
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
