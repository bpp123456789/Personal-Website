import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import DetailPage from './pages/DetailPage'
import data from './data.json'

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/experience" element={<DetailPage page={data.pages.find(p => p.id === 1)} />} />
        <Route path="/projects" element={<DetailPage page={data.pages.find(p => p.id === 2)} />} />
        <Route path="/leadership" element={<DetailPage page={data.pages.find(p => p.id === 3)} />} />
      </Routes>
    </BrowserRouter>
  )
}