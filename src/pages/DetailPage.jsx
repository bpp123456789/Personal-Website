import { useState } from 'react'
import ExpCard from '../components/ExpCard'

export default function DetailPage({ page }) {
  const [query, setQuery] = useState('')

  const filtered = page.things.filter(item =>
    item.Title.toLowerCase().includes(query.toLowerCase()) ||
    item.Organization.toLowerCase().includes(query.toLowerCase()) ||
    item.Description.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <main>
      <div className="search">
        <input
          type="search"
          placeholder={`Search ${page.title}...`}
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>
      <div className="results">
        {filtered.map((item, i) => <ExpCard key={i} item={item} />)}
      </div>
    </main>
  )
}