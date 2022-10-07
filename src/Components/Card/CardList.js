import Card from "./Card";
import './cardList.scss'


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