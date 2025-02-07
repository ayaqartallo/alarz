import './App.css';
import Navbar from './components/Navbar';
import IceImage from './components/IceImage';
import Impluse from './components/impluse';
import TakeHome from './components/takehome';
import Cateringpack from './components/cateringpack';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <IceImage />
      <Impluse />
      <TakeHome />
      <Cateringpack />
      <Footer />
    </div>
  );
}

export default App;
