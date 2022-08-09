import {MongoClient, ObjectId} from "mongodb";
import MeetupDetail from '../../components/meetups/MeetupDetail';

// props?? getStaticProps()
/* return {
      props: {meetupData: {selectedMeetup}}
  }
*/
function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

// also "reserved" - how else pre-generate paths???
export async function getStaticPaths() {
    // ^^reserved name - NextJS is programmed to call first
    const client = await MongoClient.connect('mongodb+srv://root:_______@cluster0.gdywmwe.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
  
    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();
  
    client.close();
  
  return {
    fallback: false, // false: if "m3," then 404
    paths: meetups.map(x => ({params: {meetupId: x._id.toString()}}))
  }
}


export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect('mongodb+srv://root:_____@cluster0.gdywmwe.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;