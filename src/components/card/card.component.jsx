import "./card.styles.css";

const Card = ({ subscriber }) => {
  const { id, user_name, is_gifted } = subscriber;
  return (
    <div key={id} className="card-container">
      <img
        alt={`subscriber ${user_name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2 className="card-header">{user_name}</h2>
      Is Gift: {is_gifted + ''}
    </div>
  );
};

export default Card;
