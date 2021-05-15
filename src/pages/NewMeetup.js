import { useHistory } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
    const history = useHistory();


    function addMeetupHandler(meetupPuppies) {
        fetch(
            'https://meetup-project-4c034-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupPuppies),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            //Good for after a form is submitted as it prevents back button from being used,
            //routes to the home page after form submission
            history.replace('/');
        });
    }

    return (
        <section>
            <h1>New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
        </section>

    )
}

export default NewMeetupPage;