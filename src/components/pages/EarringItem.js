import React from 'react';
import Card from 'react-bootstrap/Card'
import './css/EarringItem.css';
import { Link } from "react-router-dom";

function EarringItem (props) {
    return (
        <div className="EarringItem">
            <Card style={{ width: '22rem'}}>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + props.imgsource} />
                {/* <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                </Card.Body> */}
            </Card>
            <Link to= {'/earrings/' + props.id}>{props.descript}</Link>
            {/* <Link to=`/user/' ${index + 1}`}> {user.name}'s Page</Link> */}
            <p>{props.id}</p>
        </div>
    );
}

export default EarringItem;