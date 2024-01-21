import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <nav className='nav'>
        <ul>
          <li><Link to="/home">STARTSEITE</Link></li>
          <li><Link to="/pflanzensuche">PFLANZENSUCHE</Link></li>
          <li><Link to="/guide">RATGEBER</Link></li>
          <li><Link to="/calendar">KALENDER</Link></li>
        </ul>
      </nav>
    
    )
}
 
export default Home;