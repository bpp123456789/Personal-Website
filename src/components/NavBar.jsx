import { Link, useNavigate } from 'react-router-dom'

export default function NavBar() {
  const navigate = useNavigate()

  return (
    <header>
      <div id="home">
        <Link to="/"><i className="fa-regular fa-house"></i></Link>
        <Link to="/">William Petrik</Link>
      </div>
      <div>
        <button onClick={() => navigate('/experience')}>Experience</button>
        <button onClick={() => navigate('/projects')}>Projects</button>
        <button onClick={() => navigate('/leadership')}>Leadership</button>
      </div>
    </header>
  )
}