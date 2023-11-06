import React, { useState } from 'react';

// Style CSS interne pour le carousel
const carouselStyle = {
  width: '300px',
  margin: '0 auto',
  overflow: 'hidden',
};

const imageContainerStyle = {
  display: 'flex',
  transition: 'transform 0.3s ease',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
};

const Carousel = () => {
  // Liste des liens d'images en ligne
  const imageUrls = [
    'https://www.garrisoneverest.com/wp-content/uploads/2015/01/helpful-selling-outdoor-500x500.jpg',
    'https://www.wifo.ac.at/jart/prj3/wifo/images/cache/83a81b84ef54eb90a57efe367c47f695/0x21824C14C27A01FF79AA90DAF7200846.jpeg',
    'https://images.pexels.com/photos/1743366/pexels-photo-1743366.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://www.wifo.ac.at/jart/prj3/wifo/images/cache/83a81b84ef54eb90a57efe367c47f695/0x21824C14C27A01FF79AA90DAF7200846.jpeg',
    'https://www.lebonguide.com/bundles/website/images/category/large/nature.jpg',
  ];

  // État pour suivre l'index de l'image actuellement affichée
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour afficher l'image suivante dans le carousel
  const showNextImage = () => {
    if (currentIndex < imageUrls.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  // Fonction pour afficher l'image précédente dans le carousel
  const showPreviousImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(imageUrls.length - 1);
    }
  };

  return (
    <div>
      <h2>Image Carousel Example</h2>
      {/* Carousel */}
      <div style={carouselStyle}>
        <div style={{ ...imageContainerStyle, transform: `translateX(-${currentIndex * 300}px)` }}>
          {imageUrls.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Image ${index}`}
              style={imageStyle}
            />
          ))}
        </div>
      </div><br /><br /><br />
      <button className='btn btn-warning' onClick={showPreviousImage}>Previous</button>&nbsp;&nbsp;
      <button className='btn btn-warning' onClick={showNextImage}>Next</button>
    </div>
  );
};

export default Carousel;
