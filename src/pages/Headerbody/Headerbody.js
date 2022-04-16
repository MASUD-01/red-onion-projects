import React from 'react';
import bg from '../../images/bannerbackground1.png'
import './Headerbody.css'
import Data from '../../Data';

const Headerbody = () => {
    return (
        <div>
            <div className='bg-header' style={{
                backgroundImage: `url(${bg})`, height: '80vh', backgroundRepeat: 'no-repeat',
            }}>
                <div className='text-box'>
                    <h1>Best food waiting for your belly</h1>
                    <input type="text" width='500px' placeholder='search food items' className='input-field' name="text" id="" />
                    <button>search</button>
                </div>

            </div>
            <Data></Data>
        </div>
    );
};

export default Headerbody;