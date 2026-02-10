import React, { useState } from 'react';
import Burger from '../shared/images/Burger.jpg';
import Icecream from '../shared/images/Icecream.jpg';
import kachori from '../shared/images/kachori.jpg';

const MyImagesComp = () => {
    const [currentImage, setCurrentImage] = useState(Burger);

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h6>This is My Images component</h6>
            
            <div style={{ marginBottom: '20px' }}>
                <img 
                    src={currentImage} 
                    alt='Selected Item' 
                    style={{ height: '250px', width: '250px', borderRadius: '10px', objectFit: 'cover' }} 
                />
            </div>
           
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <button type='button' onClick={() => setCurrentImage(Burger)}>
                    Burger
                </button>

                <button type='button' onClick={() => setCurrentImage(Icecream)}>
                    Icecream        
                </button>

                <button type='button' onClick={() => setCurrentImage(kachori)}>
                    Kachori
                </button>
            </div>
        </div>
    );
};

export default MyImagesComp;
