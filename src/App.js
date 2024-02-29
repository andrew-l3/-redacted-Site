import Hero from './components/Hero.jsx';
import Nav from './components/Nav.jsx';
import Work from './components/Work.jsx';
import Resources from './components/Resources.jsx';
import Footer from './components/Footer.jsx';
import Sponsor from './components/Sponsor.jsx';

function App() {
  return (
    <div className='global_container'>
      <div className='global_nav'>
        <Nav/>
        <Hero/>
        <Work/>
        <div className='global_resource'>
          <Resources/>
          <Sponsor/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
