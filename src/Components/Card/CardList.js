import First from "../../assests/image/first.png";
import Group from "../../assests/image/Group-icon.jpg";
import Paper from "../../assests/image/paper-card.png";
import Stack from "../../assests/image/stack-card.png";
import "./cardList.scss";

function CardList() {
  return (
    <div className="card-list">
      <card className="cards">
          <div className="card-icon-first">
          <img src={First} alt="" />
          </div>
        
        <h4>users</h4>
        <p>2,453</p>
      </card>
      <card className="cards">
      <div className="card-icon-group">
        <img src={Group} alt="" />
        </div>
        <h4>users</h4>
        <p>2,453</p>
      </card>
      <card className="cards">
      <div className="card-icon-paper">
        <img src={Paper} alt="" />
        </div>
        <h4>users</h4>
        <p>2,453</p>
      </card>
      <card className="cards">
      <div className="card-icon-stack">
        <img src={Stack} alt="" />
        </div>
        <h4>users</h4>
        <p>2,453</p>
      </card>
    </div>
  );
}

export default CardList;
