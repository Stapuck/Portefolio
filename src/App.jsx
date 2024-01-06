import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import { Home, About, Projects, Extras, Contact, Sport, School,VideoTest} from './pages'


import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeMode from './components/ThemeMode';
import NotFound from './components/NotFound';
import BacktoTopBtn from './components/BacktoTopBtn';
// import LanguagesBtn from './components/LanguagesBtn';




const App = () => { 
  return (
    <main className='bg-slate-300 dark:bg-black-500 h-full'> 
      
       {/*TODO: decider si acces sur tous le site ou juste sur home  */}
       {/*TODO: savoir pourquoi le changement de sens que sur home  */}
            
      {/* <div className='fixed z-40 top-20 right-20 rounded-2xl dark:bg-slate-700 bg-slate-300 flex flex-col justify-center items-center border-2 border-slate-700 dark:border-slate-300'>
        <ThemeMode className=''/> 
        <LanguagesBtn className=''/>
      </div>  */}

      {/* pas mal comme ça pour thmode et lgbtn mais incohérence quand on passe sur certaine page // à revoir */}
     
    

      <Router>        
        <Navbar/>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>  {/*  transformer en school   */}
         <Route path='/sport' element={<Sport/>}/>  
         <Route path='/school' element={<School/>}/>  
         <Route path='/projects' element={<Projects/>}/> {/* util ?  */}
         <Route path='/extras' element={<Extras/>}/> {/* pas besoin  */}
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/video' element={<VideoTest/>}/>
         <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </Router>

      <BacktoTopBtn/>


      {/* <noscript>
        revoir ce que je met dedans !!!
        <a href="https://www.mozilla.org/">Lien externe</a>
      </noscript> */}
      {/* <Footer/> */}
    </main>
  )
}

export default App    