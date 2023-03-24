import "./card.styles.css";

const Card = ({ subscriber }) => {
  const { id, user_name, is_gifted, profile_photo } = subscriber;
  return (
    <div key={id} className="card-container">
      <img
        alt={`subscriber ${user_name}`}
        src={profile_photo}
      />
      <h2 className="card-header">{user_name}</h2>
      Gifted: {is_gifted + ''}
    </div>
  );
};

export default Card;
