import React, { useState } from 'react';
<<<<<<< HEAD
import Burger from '../shared/images/Burger.jpg';
import Icecream from '../shared/images/Icecream.jpg';
import kachori from '../shared/images/kachori.jpg';

const MyImagesComp = () => {
    const [currentImage, setCurrentImage] = useState(Burger);
=======
import samosa from '../shared/images/samosa.png';
import kachori from '../shared/images/kachori.jpg';
import dosa from '../shared/images/dosa.png';


const MyImagesComp = () => {
    const [currentImage, setCurrentImage] = useState(samosa);
>>>>>>> 28adfcf0eefb598d1d0feb25212d8cfa152f5d3d

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h6>This is My Images component</h6>
            
            <div style={{ marginBottom: '20px' }}>
                <img 
                    src={currentImage} 
                    alt='Selected Item' 
<<<<<<< HEAD
                    style={{ height: '250px', width: '250px', borderRadius: '10px', objectFit: 'cover' }} 
=======
                    style={{ height: '200px', width: '200px', borderRadius: '10px', objectFit: 'cover' }} 
>>>>>>> 28adfcf0eefb598d1d0feb25212d8cfa152f5d3d
                />
            </div>
           
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
<<<<<<< HEAD
                <button type='button' onClick={() => setCurrentImage(Burger)}>
                    Burger
                </button>

                <button type='button' onClick={() => setCurrentImage(Icecream)}>
                    Icecream        
=======
                <button type='button' onClick={() => setCurrentImage(samosa)}>
                    Samosa
                </button>

                <button type='button' onClick={() => setCurrentImage(dosa)}>
                    dosa
>>>>>>> 28adfcf0eefb598d1d0feb25212d8cfa152f5d3d
                </button>

                <button type='button' onClick={() => setCurrentImage(kachori)}>
                    Kachori
                </button>
            </div>
        </div>
    );
};

export default MyImagesComp;
