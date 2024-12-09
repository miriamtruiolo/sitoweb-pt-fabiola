import Home from './pages/home/Home'
import About from './pages/about/About'
import NotFound from './pages/notFound/NotFound'
import Contact from './pages/contact/Contact'
import TestimonialGallery from './pages/testimonialGallery/TestimonialGallery'
import Plans from './pages/plans/Plans'
import Nutrition from './pages/nutrition/Nutrition'


const App = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Plans/>
      <Nutrition/>
      <TestimonialGallery/>
      <Contact/>
      <NotFound/>
    </div>
  )
}

export default App