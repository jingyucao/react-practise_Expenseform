import "./Card.css"

function Card(props) {

  const classes="card "+props.className;
  // in this way, the Card Component will have both css definition

return(
  <div className={classes}>
    {props.children}
    {/*here is what i put in between the opening and closing tag of Component Card*/}
  </div>
)
}

export default Card;
