import "./card.styles.css";

const Card = ({ subscriber }) => {
  const { id, name, email } = subscriber;
  return (
    <div key={id} className="card-container">
      <img
        alt={`subscriber ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2 className="card-header">{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
