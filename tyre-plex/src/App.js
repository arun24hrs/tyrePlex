import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Reviews from './Components/Reviews';
import Brands from './Components/Brands';
import Services from './Components/Services';
import Payment from './Components/Payment';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Product from './Components/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons';

function App() {
 

  return (
    <>
    <div className='fixed bottom-0 z-10 w-full'><div className='flex justify-evenly border bg-slate-50'>
      <div className='py-4 hover:cursor-pointer'> {<FontAwesomeIcon icon={faFilter} className="text-gray-600"/> } Filter</div>
      <div className='py-4 hover:cursor-pointer'>{<FontAwesomeIcon icon={faArrowUpWideShort} className="text-gray-600"/> } Sort by</div>
      <div className='py-4 hover:cursor-pointer'><a href='#'>Advanced</a></div>
    </div></div>
      <Navbar/>
      <Header/>
      <Reviews/>
      <Brands/>
      <Services/>
      <Product/>
      <Payment/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
