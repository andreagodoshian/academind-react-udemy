import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup!',
  },
];

// remember: hooks need to be inside (unless custom)
function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// better for loading and SEO - speed due to cache
export async function getStaticProps() {
  // ^^reserved name - NextJS is programmed to call first
  return {
    props: { // props - reserved/required
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10 // seconds 
    // ^^after npm build/deploy, how regenerate?
  }; 
}

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

export default HomePage;