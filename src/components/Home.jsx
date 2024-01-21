import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="test4">
      <div className="test">
        <nav className='nav'>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/guide">GUIDE</Link></li>
            <li><Link to="/tips">PFLEGETIPS</Link></li>
            <li><Link to="/calender">CALENDER</Link></li>
          </ul>
        </nav>
      </div>,
      <div className="test2">
        <h1>HHHHAAALLLOO</h1>
      </div>
    </div>
  )
}

export default Home;