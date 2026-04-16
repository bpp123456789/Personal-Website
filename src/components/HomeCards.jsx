import { Link } from 'react-router-dom'

const linkMap = {
  'experience.html': '/experience',
  'projects.html': '/projects',
  'leadership.html': '/leadership',
}

export default function HomeCards({ cards }) {
  return (
    <section className="cards">
      {cards.map((card, i) => (
        <Link key={i} className="card" to={linkMap[card.link] ?? card.link}>
          <img src={card.image} alt={card.alt} />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </Link>
      ))}
    </section>
  )
}