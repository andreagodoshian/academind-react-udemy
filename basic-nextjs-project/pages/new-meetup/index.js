import React from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return (
    <React.Fragment>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </React.Fragment>
  )
}

export default NewMeetupPage;