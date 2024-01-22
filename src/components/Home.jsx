import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="test4">
      <div className="test">
        <nav className='nav'>
          <ul>
            <li><Link to="/home">Startseite</Link></li>
            <li><Link to="/pflanzensuche">Pflanzensuche</Link></li>
            <li><Link to="/guide">Ratgeber</Link></li>
            <li><Link to="/calendar">Kalender</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Home;