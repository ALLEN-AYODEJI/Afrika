import React from 'react'
import './Gallery.css'
import image1 from '../../assets/img1.jpg'
import image2 from '../../assets/img2.jpg'
import image3 from '../../assets/img3.jpg'
import image4 from '../../assets/img4.jpg'
import image5 from '../../assets/img5.jpg'
import image6 from '../../assets/img6.jpg'
import image7 from '../../assets/img7.jpg'
import image8 from '../../assets/img8.jpg'
import image9 from '../../assets/img9.jpg'
import image10 from '../../assets/img10.jpg'
import image11 from '../../assets/img11.jpg'
import image12 from '../../assets/img12.jpg'
import image13 from '../../assets/img13.jpg'
import image14 from '../../assets/img14.jpg'
import image15 from '../../assets/img15.jpg'
import image16 from '../../assets/img16.jpg'
import image17 from '../../assets/img17.jpg'
import image18 from '../../assets/img18.jpg'
import image19 from '../../assets/img19.jpg'
import image20 from '../../assets/img20.jpg'
import image21 from '../../assets/img21.jpg'
import image22 from '../../assets/img22.jpg'
import image23 from '../../assets/img23.jpg'
import image24 from '../../assets/img24.jpg'



const images = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
  image11, image12, image13, image14, image15, image16, image17, image18, image19, image20,
  image21, image22, image23, image24
];

function Gallery() {
  return (
    <div className="gallery-section">
      <h1 className="gallery-title">GALERIE</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>

  )
}

export default Gallery