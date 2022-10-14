import Card from ".";
import { ReactComponent as First } from "../../assests/icon/users-card.svg";
import Group from "../../assests/image/Group-icon.jpg";
import Paper from "../../assests/image/paper-card.png";
import Stack from "../../assests/image/stack-card.png";
import "./cardList.scss";

function CardList() {
  return (
    <div className="card-list">
      <Card icon={First} title="Users" amount="2,453" />
      <Card icon={First} title="Active Users" amount="2,453" />
      <Card icon={First} title="Users with Loans" amount="12,453" />
      <Card icon={First} title="Users with Savings" amount="102,453" />
    </div>
  );
}

export default CardList;
