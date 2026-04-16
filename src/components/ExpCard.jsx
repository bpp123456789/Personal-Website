import '../styles/ExpCard.css'

export default function ExpCard({ item }) {
  return (
    <div className="expCard">
      <img src={item.Image} alt={item.Title} />
      <div className="desc">
        <h5>{item.Type}</h5>
        <h3>{item.Title}</h3>
        <h4>{item.Date}</h4>
        <p>{item.Description}</p>
      </div>
    </div>
  )
}