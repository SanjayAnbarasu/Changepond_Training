import React, { useState } from 'react';
import samosa from '../shared/images/samosa.png';
import kachori from '../shared/images/kachori.jpg';
import dosa from '../shared/images/dosa.png';


const MyImagesComp = () => {
    const [currentImage, setCurrentImage] = useState(samosa);

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h6>This is My Images component</h6>
            
            <div style={{ marginBottom: '20px' }}>
                <img 
                    src={currentImage} 
                    alt='Selected Item' 
                    style={{ height: '200px', width: '200px', borderRadius: '10px', objectFit: 'cover' }} 
                />
            </div>
           
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <button type='button' onClick={() => setCurrentImage(samosa)}>
                    Samosa
                </button>

                <button type='button' onClick={() => setCurrentImage(dosa)}>
                    dosa
                </button>

                <button type='button' onClick={() => setCurrentImage(kachori)}>
                    Kachori
                </button>
            </div>
        </div>
    );
};

export default MyImagesComp;
