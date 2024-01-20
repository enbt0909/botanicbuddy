import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <nav className='nav'>
        <ul>
          <li><Link to="/home">HOME</Link></li>
          <li><Link to="/">FLANTZESUCHE</Link></li>
          <li><Link to="/guide">GUIDE</Link></li>
          <li><Link to="/calender">CALENDER</Link></li>
        </ul>
      </nav>
    )
}
 
export default Home;