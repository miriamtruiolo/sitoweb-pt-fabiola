import {BrowserRouter, Router, Route} from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import NotFound from './pages/notFound/NotFound'
import Contact from './pages/contact/Contact'
import TestimonialGallery from './pages/testimonialGallery/TestimonialGallery'
import Plans from './pages/plans/Plans'
import Nutrition from './pages/nutrition/Nutrition'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Home/>
      <About/>
      <Plans/>
      <Nutrition/>
      <TestimonialGallery/>
      <Contact/>
      <NotFound/>
    </BrowserRouter>
  )
}

export default App