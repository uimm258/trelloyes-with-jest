import CardList from "../../cardList.js"
import './Card.css'
function Card(title, content){
    return(
        <div className="Card">
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
    );
}

export default {
    Card
}