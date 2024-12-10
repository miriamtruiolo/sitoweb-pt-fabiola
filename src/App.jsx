import {BrowserRouter, Routes, Route} from 'react-router-dom'

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
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='plans' element={<Plans/>}/>
      <Route path='testimonialGallery' element={<TestimonialGallery/>}/>
      <Route path='nutrition' element={<Nutrition/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='not found' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App