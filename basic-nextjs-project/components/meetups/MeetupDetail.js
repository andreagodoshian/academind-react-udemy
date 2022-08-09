import classes from './MeetupDetail.module.css';

function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <img
        src={props.image}
        alt={props.title}
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetail;

//////////////////////////////////////
/*
    return(
        <React.Fragment>
            <img src="https://preview.redd.it/n83ls4eu3ud41.png?auto=webp&s=c0e8e24696871c22d8424419e5b7bd4e2fb8018f"
                alt="This photo of Cheems (meme dog) is just a placeholder"/>
            <h1>Demtails Aboumt The Meemtup</h1>
            <address>Locatiomn: Cheemsburbger Worlmd</address>
            <p>Descrimption: hamburger, cheemsburger, big mac, whonper</p>
        </React.Fragment>
    )
*/