import React from 'react';
import Card from 'react-bootstrap/Card'

function EarringItem (props) {
    return (
        <div className="EarringItem">
            <Card style={{ width: '18rem', height: '25rem'}}>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + props.imgsource} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default EarringItem;