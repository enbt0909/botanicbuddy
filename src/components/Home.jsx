import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="test4">
      <div className="test">
        <nav className='nav'>
        <ul>
          <li><Link to="/home">HOME</Link></li>
          <li><Link to="/">PFLANZENSUCHE</Link></li>
          <li><Link to="/guide">GUIDE</Link></li>
          <li><Link to="/calender">CALENDER</Link></li>
        </ul>
      </nav>
      </div> // Add closing tag for the div element
    </div>
  );
}

export default Home;