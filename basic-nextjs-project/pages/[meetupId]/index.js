import { useRouter } from 'next/router';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail
      image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
      title='First Meetup'
      address='Some Street 5, Some City'
      description='This is a first meetup'
    />
  );
}

// also "reserved" - how else pre-generate?
export async function getStaticPaths() {
  return {
    fallback: false, // false: if "m3," then 404
    paths: [
      { params: {meetupId: "m1"} },
      { params: {meetupId: "m2"} },
    ]
  }
}

// can't useRouter() in getStaticProps() - CONTEXT
export async function getStaticProps(context) {
  // GET data for single meetup

  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        id: meetupId,
        title: 'First Meetup',
        address: 'Hell, Michigan',
        description: 'It\'s a real place.'
      }
    }
  }
}

export default MeetupDetails;