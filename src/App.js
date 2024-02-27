import HelloWorld from './components/HelloWorld.jsx';
import Nav from './components/Nav.jsx';
import Work from './components/Work.jsx';
import Resources from './components/Resources.jsx';
import Footer from './components/Footer.jsx';
import Sponsor from './components/Sponsor.jsx';

function App() {
  return (
    <div className='hero'>
      <div className='navHeader'>
        <Nav/>
        <HelloWorld/>
        <Work/>
        <div className='resourceContent'>
          <Resources/>
          <Sponsor/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
