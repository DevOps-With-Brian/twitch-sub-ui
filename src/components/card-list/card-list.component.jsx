import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ subscribers }) => (
    <div className="card-list">
      {subscribers.map((subscriber) => {
        return <Card key={subscriber.id} subscriber={subscriber} />
      })}
    </div>
  )

export default CardList;
