export default function About({ about }) {
  return (
    <div className="about">
      <h4>About</h4>
      {about.map((para, i) => <p key={i}>{para}</p>)}
    </div>
  )
}