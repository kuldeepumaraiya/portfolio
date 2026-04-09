import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';
import './AboutPage.css';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <div className="about-page-container">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <About />
        <Experience />
        <Education />
      </div>
    </div>
  );
};

export default AboutPage;
