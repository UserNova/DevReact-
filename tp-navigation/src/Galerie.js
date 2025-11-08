import img1 from './image1.jpg';
import img2 from './image2.jpg';
import img3 from './image3.jpg';

function Galerie() {
  return (
    <div>
      <h2>Ma Galerie d’images</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        <img src={img1} alt="Image 1" width="200" />
        <img src={img2} alt="Image 2" width="200" />
        <img src={img3} alt="Image 3" width="200" />
      </div>
    </div>
  );
}

export default Galerie;
