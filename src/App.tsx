import Hero from './components/Hero';
import Nav from './components/Nav';
import Work from './components/Work';
import Resources from './components/Resources';
import Footer from './components/Footer';
import Sponsor from './components/Sponsor';

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
