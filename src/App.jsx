import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { Home, About, Projects, Extras, Contact} from './pages';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeMode from './components/ThemeMode';

const App = () => { 
  return (
    <main className='bg-slate-200/50 dark:bg-black-500 h-full duration-1000'> 
      <ThemeMode/>  

      <Router>
        <Navbar/>





        
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/projects' element={<Projects/>}/>
         <Route path='/extras' element={<Extras/>}/>
         <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>


      {/* <Footer/> */}
    </main>
  
  )
}

export default App    