import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './component/Navbar';
import Header from './component/Header';
import Content from './component/Content';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
