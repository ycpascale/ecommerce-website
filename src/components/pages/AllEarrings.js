import React from 'react';
import EarringItem from './EarringItem'

function AllEarrings ({ initialItems }) {

    return (
        <div>
            <div className="container">
                <div className="row">
                    {initialItems.map(item => (
                        <EarringItem key={item.id} {...item} />
                        //<img src={process.env.PUBLIC_URL + initialItems.imgsource} alt="earring item"/>
                        // // <img src={earImage} alt="earring item"/>
                        // <p>HI {item.imgsource} </p>
                        // <img src={process.env.PUBLIC_URL + "/photos/earrings/"+ item.id +".jpg"} alt="earring item"/>
                        // <img src={process.env.PUBLIC_URL + item.imgsource} alt="earring item"/>
                    ))}
                </div>
            </div>
            {/* <img src={process.env.PUBLIC_URL + "/photos/earrings/1.jpg"} alt="earring item"/> */}
        </div>
    );
}

// // adding dynamic paths
// let dynamicImage = images(`./${someVariable}.png`);

// // static image
// let staticImage = images('./image.png');

export default AllEarrings;