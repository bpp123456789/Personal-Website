import Profile from '../components/Profile'
import About from '../components/About'
import News from '../components/News'
import HomeCards from '../components/HomeCards'

export default function Home({ data }) {
  return (
    <main>
      <Profile profile={data.profile} />
      <About about={data.about} />
      <News news={data.news} />
      <HomeCards cards={data.cards} />
    </main>
  )
}