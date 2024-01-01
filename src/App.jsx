import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, About, Projects, Extras, Contact} from './pages';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const element =document.documentElement;

// TODO: à mettre dans constants 
// TODO: faire un composant pour le changement et ne l'afficher que sur la page Home
  const options = [
    {
      icon:"sunny", 
      text:'light'
    },
    {
      icon:"moon", 
      text:'dark'
    },
    // {
    //   icon:"desktop-outline", 
    //   text:'system'
    // }
  ];

  useEffect(() => {

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      // localStorage.setItem("theme","dark");
    } else {
      document.documentElement.classList.remove("dark");
      // localStorage.setItem("theme","light");
    }
  }, [theme])




 
  return (
    <main className='bg-slate-200/50 dark:bg-black-500 h-full duration-1000'> 

      <div className='fixed z-50 top-20 right-20 rounded-2xl dark:bg-slate-700 bg-slate-300 duration-1000'> 
     { options?.map((option) => (
          <button 
          key = {option.text}
          onClick={()=> setTheme(option.text)}
          className={`w-8 h-8 leading-9 rounded-full text-xl m-1 
          ${theme === option.text ?  'text-sky-600' : 'text-black-500 dark:text-white'}`}
          >
            <ion-icon name={option.icon}></ion-icon>
          </button> 
          ))
        }
     
     
     
      {/* <button
      className={`w-8 h-8 leading-9 rounded-full text-xl m-1 
      ${theme === 'light' ?  'text-sky-600' : 'text-black-500 dark:text-white'}`}
      onClick={()=> setTheme('light')}
      >
      <ion-icon name="sunny"></ion-icon>
      </button>
      
      <button
      className={`w-8 h-8 leading-9 rounded-full text-xl m-1 
      ${theme === 'dark' ?  'text-sky-600' : 'text-black-500 dark:text-white'}`}
      onClick={()=> setTheme('dark')}
      >
      <ion-icon name="moon"></ion-icon>

      </button>
         */}
      </div>
    
  
      <div className='absolute left-20 top-20 text-blue-700 dark:text-white duration-100'>
        Test
      </div>



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