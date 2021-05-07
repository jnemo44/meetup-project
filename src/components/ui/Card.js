import classes from "./Card.module.css";

// Children simply holds whatever content is between the opening and
// closing tag for this component
function Card(props) {
    return <div className={classes.card}>
        {props.children}
    </div>

}

export default Card;