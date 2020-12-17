import React from 'react';
import EarringItem from './EarringItem'

function AllEarrings ({ initialItems }) {

    return (
        <div>
            <div className="container">
                <div className="row">
                    {initialItems.map(item => (
                        <EarringItem key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AllEarrings;