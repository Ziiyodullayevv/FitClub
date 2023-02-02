import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div 
      className="header"
    >
        <img className='logo' src={Logo} alt="logo" />
        {menuOpened === false && mobile === true ? 
            (<div 
              style={{
                background: '#333',
                borderRadius: '5px',
                padding: '8px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onClick={() => setMenuOpened(true)}
            >
              <img 
                src={Bars} 
                alt="jpg" 
                style={{
                  width: '1.5rem',
                  height: '1rem'
                }} 
              />
             </div>)

          : (<ul className='header-menu'>
                <li>
                  <Link 
                    onClick={() => setMenuOpened(false)}
                    to={'home'} 
                    span={'true'} 
                    smooth={'true'}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link 
                    onClick={() => setMenuOpened(false)}
                    to={'programs'} 
                    span={'true'} 
                    smooth={'true'}
                  >
                    Programs
                    </Link>
                </li>

                <li>
                  <Link 
                    onClick={() => setMenuOpened(false)}
                    to={'reasons'} 
                    span={'true'} 
                    smooth={'true'}
                  >
                    Why Us
                  </Link>
                </li>

                <li>
                  <Link 
                    onClick={() => setMenuOpened(false)}
                    to={'plans'}
                    span={'true'} 
                    smooth={'true'}
                  >
                    Plans
                  </Link>
                </li>

                <li>
                  <Link 
                    onClick={() => setMenuOpened(false)}
                    to={'testimonials'} 
                    span={'true'} 
                    smooth={'true'}
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>) 
          }
    </div>
  )
}

export default Header