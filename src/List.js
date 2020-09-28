import Card from './card'
import './List.css'
function List(header, cards){
    const list = cards.forEach(item =>{
        <Card key={item.id} title={item.title} content={item.content}/>
    });
        return (
        <section class="List">
            <header class="List-cards">
                {header}
            </header>
            <div class="List-cards">
                {list}
            </div>
        </section>
    )
}

export default{
    List
}