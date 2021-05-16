import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";


// Map allows you to execute a function on every element in an array
// then acts on a promise returned by fetch
function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect Places restrictions on when something is run. Without it fetch in this component
  // would cause an infinite loop. [] specify when to execute the code. In this case (default) it will only run once
  // when component is loaded.
  useEffect(() => {
    setIsLoading(true);
    fetch("https://meetup-project-4c034-default-rtdb.firebaseio.com/meetups.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };
        meetups.push(meetup);
      }
      setLoadedMeetups(meetups);
      setIsLoading(false);
    });
  }, [/*No dependancies so nothing needed*/]);

  

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups}></MeetupList>
    </section>
  );
}

export default AllMeetupsPage;
