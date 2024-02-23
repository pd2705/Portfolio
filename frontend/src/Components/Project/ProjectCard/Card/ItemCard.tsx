import "./ItemCard.css"

interface ItemCardProps {
    imageURL: string;
    title: string;
    text: string;
}

export function ItemCard(props: ItemCardProps) {
    const {imageURL, title, text} = props;
    return (
        <div className="card p-0 w-100">
            <img className="card-img-top" src={imageURL} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title text-start">{title}</h5>
                <p className="card-text  text-start">{text}</p>
            </div>
        </div>
    )
}

export default ItemCard;