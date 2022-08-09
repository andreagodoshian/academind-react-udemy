import { MongoClient } from 'mongodb'; // depending on where you use it, won't be visible (security)
import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// better for loading and SEO - speed due to cache
export async function getStaticProps() {
  // ^^reserved name - NextJS is programmed to call first
  const client = await MongoClient.connect('mongodb+srv://root:_____@cluster0.gdywmwe.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;

/*
// another pre-load & SEO - but can be bulky
export async function getServerSideProps(context) {
  //^^also a reserved name that NextJS looks for
  const req = context.req; // REQuest
  const res = context.res; // RESponse

  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  } // no "revalidate" - runs for EVERY request
}
*/