import React from 'react';
import { BrowserRouter as Router,Route , Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import About from './components/pages/About';
import Alert from './components/layout/Alert';
import User from './components/pages/User';
import { GithubProvider } from './Context/github/GithubContext';
import { AlertProvider } from './Context/alert/AlertContext';



function App() {
  return (
    <GithubProvider>
      <AlertProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className='container mx-auto px-3 pb-12'>
        <Alert/>
          <Routes>
          <Route path ='/' element={<Home/>} />
          <Route path ='/about' element={<About/>} />
          <Route path ='/User/:login' element={<User/>} />
          <Route path ='/notfound' element={<NotFound/>} />
          <Route path ='/*' element={<NotFound/>} />
         </Routes>
       
         </main>
       <Footer/>
      </div>
    </Router>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;