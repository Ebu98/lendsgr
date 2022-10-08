import Card from "./Card";
import './cardList.scss'
// import Icon from '../../assests/image/Group-icon.jpg'


function CardList() {
    return(
        <div className="card-list">
            <Card text="Users" number="2,453" />
            <Card text="Users" number="2,453" />
            <Card text="Users" number="2,453" />
            <Card text="Users" number="2,453" />
        </div>
    )
}

export default CardList