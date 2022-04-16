import React from 'react';

const Dinner = ({ service }) => {
    return (
        <div className='col-md-4'>
            <img width={200} src={service.images} alt="" />
            <p>{service.name}</p>
        </div>
    );
};

export default Dinner;