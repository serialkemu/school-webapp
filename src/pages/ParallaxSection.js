// In your React component
import parallaxImage from '../assets/laphome.jpg';
import parallaxImage2 from '../assets/img/laphome6.jpg';

const ParallaxSection = ({ ... }) => (
  <div
    className="parallax-section"
    style={{ backgroundImage: `url(${parallaxImage})` }}
  >
    {/* Content */}
  </div>
);


const ParallaxSection2 = ({ ... }) => (
    <div
      className="parallax-section-2"
      style={{ backgroundImage: `url(${parallaxImage2})` }}
    >
      {/* Content */}
    </div>
  );
  
// Similarly for .parallax-section-2
