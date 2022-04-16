import React, { useEffect, useState } from 'react';
import Breakfast from './Breakfast';
import Dinner from './Dinner';



const Data = () => {
    const [load, setload] = useState([]);
    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setload(data))
    }, [])
    return (

        <div className='row m-0'>
            {
                load.slice(0, 3).map(service => <Breakfast key={service.id} service={service}></Breakfast>)
            }
            {
                load.slice(3, 6).map(service => <Dinner key={service.id} service={service}></Dinner>)
            }
        </div>
    );
};

export default Data;