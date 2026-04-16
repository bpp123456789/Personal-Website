import { useState } from 'react'
import '../styles/News.css'

export default function News({ news }) {
  const [query, setQuery] = useState('')

  const filtered = news.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.date.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="news">
      <h4>News</h4>
      <div className="search">
        <input
          type="search"
          placeholder="Search News..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>
      <ul className="newsList">
        {filtered.map((item, i) => (
          <li key={i}>{item.date} - {item.title}</li>
        ))}
      </ul>
    </div>
  )
}