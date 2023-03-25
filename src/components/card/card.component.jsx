import "./card.styles.css";

const Card = ({ subscriber }) => {
  const { id, user_name, founder, profile_photo } = subscriber;
  const isFounder = founder === "yes";

  
  if (isFounder) {
    return (
      <div key={id} className={`card-container rgb founder`}>
        <img alt={`subscriber ${user_name}`} src={profile_photo} />
        <div className="card-text">
          <h2 className="card-header">{user_name}</h2>
          <div className="founder-text">
            <p>Founder</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div key={id} className={`card-container`}>
        <img alt={`subscriber ${user_name}`} src={profile_photo} />
        <div className="card-text">
          <h2 className="card-header">{user_name}</h2>
        </div>
      </div>
    );
  }
};

export default Card;