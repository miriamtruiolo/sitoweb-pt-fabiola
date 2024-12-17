import {Link} from 'react-router-dom'
import Image from '../images/main_header.png'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className='container main__header-container'>
        <div className='main__header-left'>
        <h4>Personal Coach</h4>
          <h1>Zia Beri: Il calcio nel culo che non sapevi di volere!</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit? 
            </p>
            <Link to='/plans' className='btn lg'>Get Started</Link>
        </div> 
            <div className='main__header-right'>
              <div className='main__header-image'>
                <img src={Image} alt='Main Header Image'/>
              </div>
            </div>
        </div>
    </header>
  )
}

export default MainHeader