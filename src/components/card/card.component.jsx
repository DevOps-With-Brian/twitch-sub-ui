import "./card.styles.css";

const Card = ({ subscriber }) => {
  const { id, user_name, founder, profile_photo } = subscriber;
  const isFounder = founder === "yes";
  const founderClass = isFounder ? "founder" : "";

  return (
    <div key={id} className={`card-container ${founderClass}`}>
      <img alt={`subscriber ${user_name}`} src={profile_photo} />
      <h2 className="card-header">{user_name}</h2>
      {isFounder && <p className="founder-text">Founder</p>}
    </div>
  );
};

export default Card;