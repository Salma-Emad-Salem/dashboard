import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
          <img src="logo.svg" alt="" />
          <span>DASHBOARD</span>
        </div>
        <div className="icons">
          <img src="/search.svg" className='icon' alt="search" />
          <img src="/app.svg" className='icon' alt="app" />
          <img src="/expand.svg" className='icon' alt="expand" />
          <div className="notification">
            <img src="/notifications.svg" alt="notifications" />
            <span>1</span>
          </div>
          <div className="user">
          <img src="/salmaa.png" alt="user" />
            <span>Salma</span>
          </div>
          <img src="/setting.svg" className='icon' alt="setting" />
        </div>
    </div>
  )
}

export default Navbar
