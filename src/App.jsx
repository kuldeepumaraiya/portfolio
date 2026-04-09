import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import { projectsList } from './data/projectsList';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main style={{ minHeight: '80vh', paddingBottom: '4rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          
          {/* Dynamically generate routes covering all projects imported in the list */}
          {projectsList.map((project) => (
            <Route 
              key={project.id} 
              path={`/project/${project.id}`} 
              element={<project.component />} 
            />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
