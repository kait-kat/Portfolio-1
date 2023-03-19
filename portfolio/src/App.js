import Navbar from './components/navbar';
import Footer from './components/footer';
import About from './components/about';
import './App.css';

function App() {

  return (
    <div className="px-6 lg:px-20 xl:px-36 bg-dark-500">
      <Navbar />
      <About />
      <Projects />
      <Links />
      <Footer />

 </div>
  );
}

export default App;
